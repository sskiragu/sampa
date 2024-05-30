// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductRegistry {
    struct Product {
        uint id;
        string name;
        string description;
        address owner;
    }

    uint public productCount = 0;
    mapping(uint => Product) public products;

    event ProductCreated(uint id, string name, string description, address owner);
    event ProductUpdated(uint id, string name, string description, address owner);

    function createProduct(string memory _name, string memory _description) public {
        productCount++;
        products[productCount] = Product(productCount, _name, _description, msg.sender);
        emit ProductCreated(productCount, _name, _description, msg.sender);
    }

    function updateProduct(uint _id, string memory _name, string memory _description) public {
        require(products[_id].owner == msg.sender, "You are not the owner of this product");
        products[_id].name = _name;
        products[_id].description = _description;
        emit ProductUpdated(_id, _name, _description, msg.sender);
    }

    function getProduct(uint _id) public view returns (Product memory) {
        return products[_id];
    }

    function getProductCount() public view returns (uint) {
        return productCount;
    }

    function getAllProducts() public view returns (Product[] memory) {
        Product[] memory allProducts = new Product[](productCount);
        for (uint i = 1; i <= productCount; i++) {
            allProducts[i - 1] = products[i];
        }
        return allProducts;
    }
}
