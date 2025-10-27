// --- api/products.js: Final Corrected Code ---

// The key to fixing the "No exports found" error is ensuring 
// the serverless function is exported directly using module.exports.
module.exports = (req, res) => {
    // Simulate a product catalog retrieval
    const products = [
        { id: 1, name: 'DevOps T-Shirt', price: 25.00 },
        { id: 2, name: 'Terraform Mug', price: 15.00 },
        { id: 3, name: 'Serverless Sticker Pack', price: 10.00 }
    ];

    // Send the response using the res.status().json() method.
    // This correctly handles the API response.
    res.status(200).json({
        message: "Successfully retrieved E-commerce products!",
        count: products.length,
        data: products
    });
};