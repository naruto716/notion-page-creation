# Notion Markdown to Page Converter

This project converts Markdown content, including LaTeX math blocks, into Notion pages using the Notion API.

## Features

- Converts Markdown content to Notion blocks
- Supports inline and block LaTeX equations
- Creates a Notion page with the converted blocks

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Notion integration token and parent page ID:
    ```dotenv
    NOTION_TOKEN=your_notion_token
    PARENT_ID=your_parent_page_id
    ```

## Usage

Run the script to convert the Markdown content and create a Notion page:
```sh
node index.js
```

## Environment Variables

- `NOTION_TOKEN`: Your Notion integration token.
- `PARENT_ID`: The ID of the parent page or database where the new page will be created.

## Project Structure

- `index.js`: Main script to convert Markdown to Notion blocks and create a Notion page.
- `.env`: Environment variables file (ignored by Git).
- `.gitignore`: Specifies files and directories to be ignored by Git.

## Dependencies

- `@notionhq/client`: Notion API client.
- `@tryfabric/martian`: Library to convert Markdown to Notion blocks.
- `dotenv`: Loads environment variables from a `.env` file.

## License

This project is licensed under the MIT License.
