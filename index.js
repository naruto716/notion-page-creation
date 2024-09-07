// Import required libraries
const { Client } = require('@notionhq/client');
const { markdownToBlocks } = require('@tryfabric/martian');
require('dotenv').config(); // Load environment variables from .env file

// Initialize Notion client with your integration token from environment variables
const notion = new Client({ auth: process.env.NOTION_TOKEN });

// Sample Markdown content with LaTeX math blocks
const markdownContent = `
# Sample Document

This is a sample document with an equation.

Inline equation: $E = mc^2$

Block equation:
$$
a^2 + b^2 = c^2
$$

`;

// Convert Markdown to Notion blocks
async function convertMarkdownToNotionBlocks(markdown) {
    try {
        const notionBlocks = markdownToBlocks(markdown);
        return notionBlocks;
    } catch (error) {
        console.error('Error converting Markdown to Notion blocks:', error);
        return [];
    }
}

// Create a Notion page with the converted blocks
async function createNotionPage() {
    const notionBlocks = await convertMarkdownToNotionBlocks(markdownContent);

    // Define the parent page or database ID from environment variables
    const parentId = process.env.PARENT_ID;

    try {
        const response = await notion.pages.create({
            parent: { page_id: parentId },
            properties: {
                title: [
                    {
                        type: 'text',
                        text: {
                            content: 'Sample Document',
                        },
                    },
                ],
            },
            children: notionBlocks,
        });

        console.log('Page created successfully:', response);
    } catch (error) {
        console.error('Error creating Notion page:', error);
    }
}

// Run the function to create the page
createNotionPage();
