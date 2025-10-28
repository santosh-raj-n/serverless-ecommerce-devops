// --- api/products.js: Final Enhanced Backend Code with Real Images ---

module.exports = (req, res) => {
    const allProducts = [
        {
            id: 1,
            name: 'DevOps T-Shirt',
            price: 25.00,
            tags: ['clothing', 'devops', 'merch'],
            imageUrl: 'https://images.unsplash.com/photo-1622435552308-412bf5b15b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'Comfortable cotton T-shirt for the dedicated DevOps engineer. Show your passion for automation.'
        },
        {
            id: 2,
            name: 'Terraform Mug',
            price: 15.00,
            tags: ['accessory', 'iac', 'tool'],
            imageUrl: 'https://images.unsplash.com/photo-1579298245158-37dfde15571f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'Start your day with some Infrastructure as Code motivation. Perfect for coffee or tea.'
        },
        {
            id: 3,
            name: 'Serverless Sticker Pack',
            price: 10.00,
            tags: ['accessory', 'devops', 'sticker'],
            imageUrl: 'https://images.unsplash.com/photo-1611224885913-911e860ca8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'Pack of 10 high-quality vinyl stickers for your laptop, water bottle, or server rack.'
        },
        {
            id: 4,
            name: 'Cloud Computing Hoodie',
            price: 45.00,
            tags: ['clothing', 'cloud', 'warm'],
            imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcd7dce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'Stay warm while deploying to the cloud. Unisex design.'
        },
        {
            id: 5,
            name: 'Kubernetes Guidebook',
            price: 35.00,
            tags: ['book', 'kubernetes', 'devops', 'tool'],
            imageUrl: 'https://images.unsplash.com/photo-1549672049-74d7df63013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'The definitive guide to container orchestration. From beginner to advanced.'
        },
        {
            id: 6,
            name: 'Monitor Lizard Figure',
            price: 50.00,
            tags: ['collectible', 'monitoring', 'fun'],
            imageUrl: 'https://images.unsplash.com/photo-1587825590916-2d6a5d4d3f3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'A fun desk figure to remind you to check your dashboards. Limited edition.'
        },
        {
            id: 7,
            name: 'Git Cheat Sheet Poster',
            price: 12.00,
            tags: ['accessory', 'devops', 'learning', 'tool'],
            imageUrl: 'https://images.unsplash.com/photo-1607798733276-8805f87b8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'Large format poster with essential Git commands for quick reference.'
        },
        {
            id: 8,
            name: 'Docker Whale Plushie',
            price: 20.00,
            tags: ['collectible', 'devops', 'fun'],
            imageUrl: 'https://images.unsplash.com/photo-1627917220261-229f3d511f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'Cuddly Docker whale plushie. Perfect for your desk.'
        }
    ];

    const filterTag = req.query.tag ? req.query.tag.toLowerCase() : null;
    const searchTerm = req.query.search ? req.query.search.toLowerCase() : null;

    let filteredProducts = allProducts;
    let message = "Successfully retrieved E-commerce products!";

    if (filterTag) {
        filteredProducts = filteredProducts.filter(product => 
            product.tags.includes(filterTag)
        );
        message = `Products filtered by tag: ${filterTag}`;
    }

    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) // Search by description too!
        );
        message = `Products matching search term: "${searchTerm}"`;
    }
    
    if (filterTag && searchTerm) {
        message = `Products matching tag "${filterTag}" and search "${searchTerm}"`;
    }

    return res.status(200).json({
        message: message,
        count: filteredProducts.length,
        data: filteredProducts
    });
};