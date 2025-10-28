// --- api/products.js: Final Enhanced Backend Code ---

module.exports = (req, res) => {
    // Expanded list of products with more data and unique tags
    const allProducts = [
        { 
            id: 1, 
            name: 'DevOps T-Shirt', 
            price: 25.00, 
            tags: ['clothing', 'devops', 'merch'],
            imageUrl: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=DevOps+Tee', 
            description: 'Comfortable cotton T-shirt for the dedicated DevOps engineer.'
        },
        { 
            id: 2, 
            name: 'Terraform Mug', 
            price: 15.00, 
            tags: ['accessory', 'iac', 'tool'],
            imageUrl: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Terraform+Mug', 
            description: 'Start your day with some Infrastructure as Code motivation.'
        },
        { 
            id: 3, 
            name: 'Serverless Sticker Pack', 
            price: 10.00, 
            tags: ['accessory', 'devops', 'sticker'],
            imageUrl: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Serverless+Sticker', 
            description: 'Pack of 10 vinyl stickers for your laptop or water bottle.'
        },
        { 
            id: 4, 
            name: 'Cloud Computing Hoodie', 
            price: 45.00, 
            tags: ['clothing', 'cloud', 'warm'],
            imageUrl: 'https://via.placeholder.com/150/FF33CC/FFFFFF?text=Cloud+Hoodie', 
            description: 'Stay warm while deploying to the cloud.'
        },
        { 
            id: 5, 
            name: 'Kubernetes Guidebook', 
            price: 35.00, 
            tags: ['book', 'kubernetes', 'devops', 'tool'],
            imageUrl: 'https://via.placeholder.com/150/A3E4D7/000000?text=K8s+Book', 
            description: 'The definitive guide to container orchestration.'
        },
        { 
            id: 6, 
            name: 'Monitor Lizard Figure', 
            price: 50.00, 
            tags: ['collectible', 'monitoring', 'fun'],
            imageUrl: 'https://via.placeholder.com/150/FAD7A0/000000?text=Monitor+Fig', 
            description: 'A fun figure to remind you to check your dashboards.'
        }
    ];

    // Get filter and search parameters from the request
    const filterTag = req.query.tag ? req.query.tag.toLowerCase() : null;
    const searchTerm = req.query.search ? req.query.search.toLowerCase() : null;

    let filteredProducts = allProducts;
    let message = "Successfully retrieved E-commerce products!";

    // --- LOGIC 1: Apply Filtering by Tag ---
    if (filterTag) {
        filteredProducts = filteredProducts.filter(product => 
            product.tags.includes(filterTag)
        );
        message = `Products filtered by tag: ${filterTag}`;
    }

    // --- LOGIC 2: Apply Search by Name (after filtering, if any) ---
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            // Check if the product name includes the search term
            product.name.toLowerCase().includes(searchTerm)
        );
        // The message reflects both filters if needed, but we simplify it here
        message = `Products matching search term: "${searchTerm}"`;
    }
    
    // If both are applied, we combine the messages
    if (filterTag && searchTerm) {
        message = `Products matching tag "${filterTag}" and search "${searchTerm}"`;
    }


    return res.status(200).json({
        message: message,
        count: filteredProducts.length,
        data: filteredProducts
    });
};