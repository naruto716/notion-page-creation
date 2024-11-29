// Import required libraries
const { Client } = require('@notionhq/client');
const { markdownToBlocks } = require('@tryfabric/martian');
require('dotenv').config(); // Load environment variables from .env file

// Initialize Notion client with your integration token from environment variables
const notion = new Client({ auth: process.env.NOTION_TOKEN });

// Sample Markdown content with LaTeX math blocks
const markdownContent = `**Implementing the Gradient Descent Algorithm**

The lecture focuses on how to **implement the gradient descent algorithm** for linear regression with two parameters, \\( w \\) and \\( b \\). Gradient descent is an optimization algorithm used to minimize the cost function \\( J(w, b) \\) by iteratively adjusting the parameters.

---

### **Gradient Descent Update Rules**

On each iteration (or step), the parameters are updated using the following equations:

1. **For \\( w \\):**
    
    \\[
    w := w - \\alpha \\left( \\frac{\\partial}{\\partial w} J(w, b) \\right)
    \\]
    
2. **For \\( b \\):**
    
    \\[
    b := b - \\alpha \\left( \\frac{\\partial}{\\partial b} J(w, b) \\right)
    \\]
    

**Explanation:**

- **\\( w \\) and \\( b \\)**: These are the parameters of the model that we aim to optimize.
- **\\( \\alpha \\) (Learning Rate)**:
    - A small positive number (e.g., 0.01).
    - Controls the **size of the steps** we take towards the minimum.
    - A larger \\( \\alpha \\) means larger steps (could overshoot the minimum).
    - A smaller \\( \\alpha \\) means smaller steps (could take longer to converge).
- **\\( \\frac{\\partial}{\\partial w} J(w, b) \\) and \\( \\frac{\\partial}{\\partial b} J(w, b) \\)**:
    - These are the **partial derivatives** (gradients) of the cost function with respect to \\( w \\) and \\( b \\).
    - They indicate the **direction** in which the cost function increases the most.
    - By subtracting the gradient, we move in the direction where the cost decreases.

---

### **Understanding the Notation**

- **Assignment Operator (\\( := \\) or \\( = \\))**:
    - In programming and in this context, the equal sign (\\( = \\)) is used as an **assignment operator**.
    - Example: \\( a = a + 1 \\) means **update** the value of \\( a \\) to \\( a + 1 \\).
- **Truth Assertion**:
    - In mathematics, \\( = \\) is used to assert that two expressions are equal.
    - Example: \\( a = c \\) asserts that \\( a \\) and \\( c \\) are equal.
- **Note**: Be cautious about the context in which the equal sign is used to avoid confusion between assignment and assertion.

---

### **Simultaneous Update of Parameters**

**Importance of Simultaneous Updates:**

- **Correct Implementation**:
    - Both \\( w \\) and \\( b \\) should be updated **simultaneously** using their values **before** the updates.
    - This ensures that the calculation of the gradients for both parameters is based on the same set of parameter values.
- **Incorrect Implementation**:
    - Updating one parameter before computing the update for the other leads to using the **updated** value of one parameter when updating the other.
    - This can result in incorrect convergence behavior because the updates are not truly simultaneous.

**Correct Implementation Steps:**

1. **Compute the Gradients**:
    - Calculate the partial derivatives using the current values of \\( w \\) and \\( b \\).
2. **Temporary Variables**:
    - Store the updates in temporary variables \\( \\text{temp\\_w} \\) and \\( \\text{temp\\_b} \\):
        - \\( \\text{temp\\_w} = w - \\alpha \\left( \\frac{\\partial}{\\partial w} J(w, b) \\right) \\)
        - \\( \\text{temp\\_b} = b - \\alpha \\left( \\frac{\\partial}{\\partial b} J(w, b) \\right) \\)
3. **Update Parameters Simultaneously**:
    - Assign the new values from the temporary variables back to \\( w \\) and \\( b \\):
        - \\( w = \\text{temp\\_w} \\)
        - \\( b = \\text{temp\\_b} \\)

---

### **Explanation of the Gradient Descent Process**

1. **Initialization**:
    - Start with initial guesses for \\( w \\) and \\( b \\) (e.g., zeros or small random values).
2. **Iteration**:
    - **Repeat** the update steps until convergence:
        - Compute the cost \\( J(w, b) \\) using the current parameters.
        - Calculate the gradients \\( \\frac{\\partial}{\\partial w} J(w, b) \\) and \\( \\frac{\\partial}{\\partial b} J(w, b) \\).
        - Update the parameters using the simultaneous update rules.
3. **Convergence**:
    - The algorithm **converges** when the changes in \\( w \\) and \\( b \\) become negligible (i.e., they no longer change significantly with each iteration).

---

### **Intuition Behind the Derivatives**

- **Role of Derivatives**:
    - Derivatives indicate the **slope** of the cost function with respect to each parameter.
    - They show how much the cost would change if we made a small change in a parameter.
- **Direction of Descent**:
    - By moving in the **opposite direction** of the gradient (hence the negative sign), we move towards the minimum of the cost function.
- **Scaling the Step Size**:
    - The learning rate \\( \\alpha \\) scales the magnitude of the update step.
    - It balances the speed of convergence and the risk of overshooting the minimum.

---

### **Understanding Convergence**

- **Local Minimum**:
    - Gradient descent seeks a **local minimum** of the cost function.
    - In convex functions (like the quadratic cost function in linear regression), the local minimum is also the global minimum.
- **Criteria for Convergence**:
    - Parameters \\( w \\) and \\( b \\) change very little between iterations.
    - The cost \\( J(w, b) \\) decreases and approaches a stable value.

---

### **Key Points to Remember**

- **Update Both Parameters Simultaneously**:
    - Always ensure that both \\( w \\) and \\( b \\) are updated using their values **before** the current iteration's updates.
- **Learning Rate Selection**:
    - Choosing an appropriate \\( \\alpha \\) is crucial.
    - Too large can cause divergence; too small can lead to slow convergence.
- **Derivatives Are Essential**:
    - Understanding how to compute the gradients is critical for implementing gradient descent.
    - Even without deep calculus knowledge, one can compute derivatives for common cost functions.
- **Repeat Until Convergence**:
    - Gradient descent is an iterative process.
    - It requires multiple iterations to reach the minimum.

---

### **Next Steps**

- **Deriving the Derivatives**:
    - The next topic will cover how to compute the partial derivatives \\( \\frac{\\partial}{\\partial w} J(w, b) \\) and \\( \\frac{\\partial}{\\partial b} J(w, b) \\).
- **Understanding Calculus Concepts**:
    - Basic calculus concepts like derivatives are used, but a deep understanding is not required.
    - The course will provide the necessary intuition and knowledge.

---

### **Conclusion**

Implementing gradient descent involves:

- Initializing parameters.
- Repeatedly updating parameters using the simultaneous update rules.
- Utilizing the learning rate to control step size.
- Computing gradients to find the direction of the steepest descent.
- Iterating until convergence is achieved.

By following these steps and understanding the underlying concepts, you can effectively implement and apply the gradient descent algorithm to optimize linear regression models.

---

**Note**: Always ensure that your implementation aligns with the standard practices of gradient descent to achieve the best results and to facilitate debugging and collaboration with others familiar with the algorithm.`
// Function to perform the replacements
function replaceContent(content) {
    return content
        // Replace block math delimiters
        .replace(/\\\[/g, '$$')
        .replace(/\\\]/g, '$$')
        // Replace inline math delimiters
        .replace(/\\\(/g, '$')
        .replace(/\\\)/g, '$');
}

// Convert Markdown to Notion blocks
async function convertMarkdownToNotionBlocks(markdown) {
    try {
        // Perform the replacements before conversion
        const processedMarkdown = replaceContent(markdown);
        const notionBlocks = markdownToBlocks(processedMarkdown);
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
                title: {
                    title: [
                        {
                            type: 'text',
                            text: {
                                content: 'Sample Document',
                            },
                        },
                    ],
                },
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