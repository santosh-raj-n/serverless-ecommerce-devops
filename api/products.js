// --- api/products.js: Code with Image URLs ---

module.exports = (req, res) => {
    const allProducts = [
        { 
            id: 1, 
            name: 'DevOps T-Shirt', 
            price: 25.00, 
            tags: ['clothing', 'devops'],
            imageUrl: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=DevOps+Tee' // Placeholder
        },
        { 
            id: 2, 
            name: 'Terraform Mug', 
            price: 15.00, 
            tags: ['accessory', 'iac'],
            imageUrl: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Terraform+Mug' // Placeholder
        },
        { 
            id: 3, 
            name: 'Serverless Sticker Pack', 
            price: 10.00, 
            tags: ['accessory', 'devops'],
            imageUrl: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Serverless+Sticker' // Placeholder
        },
        { 
            id: 4, 
            name: 'Cloud Computing Hoodie', 
            price: 45.00, 
            tags: ['clothing', 'cloud'],
            imageUrl: 'https://via.placeholder.com/150/FF33CC/FFFFFF?text=Cloud+Hoodie' // Placeholder
        }
    ];

    const filterTag = req.query.tag;
    let filteredProducts = allProducts;
    let message = "Successfully retrieved E-commerce products!";

    if (filterTag) {
        filteredProducts = allProducts.filter(product => 
            product.tags.includes(filterTag.toLowerCase())
        );
        message = `Successfully retrieved products filtered by tag: ${filterTag}!`;
    }

    return res.status(200).json({
        message: message,
        count: filteredProducts.length,
        data: filteredProducts
    });
};