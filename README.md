# Mobile IT Shop on the Blockchain

## Project Description
This project aims to create an innovative mobile-first e-commerce platform that specializes in IT products and services. Leveraging Celo's blockchain technology, this platform offers a secure, transparent, and efficient shopping experience specifically designed for mobile users. This initiative is part of the Build with Celo Hackathons, focusing on enriching the ecosystem with creative and impactful mobile dApps.

## Key Features
- **Mobile-First Design**: Intuitive and responsive design optimized for mobile devices, ensuring smooth navigation and a seamless user experience on smartphones.
- **Product Listings**: Comprehensive catalog of IT products, including hardware and software, with detailed product pages, specifications, reviews, and ratings.
- **Shopping Cart and Checkout**: User-friendly shopping cart allowing customers to add, remove, and modify items effortlessly, with a seamless checkout process integrated with MiniPay for secure transactions using Celo currency (cUSD).
- **User Authentication**: Secure user registration and login system using blockchain for identity verification, along with user profiles for managing orders and viewing purchase history.
- **Order Management**: Real-time order tracking and management for users and administrators, with smart contracts automating order processing to ensure transparency and reduce fraud risks.
- **Payment System**: Integration with MiniPay to handle secure and instant payments, supporting multiple Celo-based payment options.
- **Customer Communication**: Messaging dApps built with XMTP for direct communication between customers and support, automated and manual messaging using Olas for order updates, and customer feedback with proof of purchase using EAS.
- **Customer Incentives**: Gift cards and subscription models to encourage repeat business, along with a rewards program to incentivize purchases and customer loyalty.

## Technology Stack
### Frontend
- **Next.js**: For building a dynamic and responsive user interface.
- **Wagmi or Viem**: For integrating MiniPay and interacting with the Celo blockchain.

### Backend
- **Node.js and Express.js**: For creating a scalable and efficient backend.
- **Solidity**: For writing smart contracts deployed on the Celo network.

### Blockchain
- **Celo**: For the underlying blockchain infrastructure, providing a decentralized platform for the dApp.
- **MiniPay**: For the payment gateway, enabling quick and secure transactions.

## Development Process
1. **Set Up Development Environment**: Use Celo-Composer to bootstrap the project with Next.js, Hardhat, and Vercel. Set up the necessary tools and frameworks (Node.js, Celo CLI, Wagmi/Viem).
2. **Develop Smart Contracts**: Write and deploy smart contracts for product management, user authentication, and order processing on the Celo network. Test contracts thoroughly on the Celo testnet.
3. **Build the Frontend**: Develop a mobile-first interface using Next.js, ensuring a seamless user experience on smartphones. Integrate MiniPay for secure payment processing using Wagmi or Viem.
4. **Implement Backend Functionality**: Create API endpoints using Node.js and Express.js for handling data interactions. Ensure secure and efficient communication between the frontend and the blockchain.
5. **Testing and Deployment**: Perform extensive testing of both frontend and backend components. Deploy the smart contracts to the Celo mainnet and the frontend to Vercel. Use Celo’s testnet tokens for testing transactions.
6. **Documentation and Presentation**: Prepare comprehensive documentation detailing the usage, technology stack, and architecture of the project. Create a demo video showcasing the functionality and user experience of the mobile dApp. Publish the source code in a public GitHub repository.

## Technical Solution
![Architecture Diagram](path_to_your_architecture_diagram.png)

## Challenges
- **Integration Issues**: Ensuring seamless integration of MiniPay with the frontend and handling blockchain transactions efficiently.
- **User Experience**: Optimizing the mobile-first design for a wide range of devices and ensuring a smooth user experience.
- **Security**: Implementing robust security measures for user authentication and transaction processing.

## Roadmap
- **Phase 1**: Complete the development of core features, including product listings, shopping cart, checkout, and user authentication.
- **Phase 2**: Enhance customer communication and order management functionalities.
- **Phase 3**: Introduce customer incentives, expand the product range, and implement community features.
- **Phase 4**: Launch the platform, gather user feedback, and iterate based on user insights.

## Feedback on Partner Technology
- **Celo**: The Celo blockchain's fast transactions and low-cost multi-currency gas fees have been instrumental in building an efficient e-commerce platform.
- **MiniPay**: While MiniPay integration required careful handling, its secure and instant payment processing greatly enhances the user experience.

## Installation and Usage
1. **Clone the Repository**: 
    ```sh
    git clone https://github.com/your-repo/mobile-it-shop.git
    cd mobile-it-shop
    ```

2. **Install Dependencies**:
    ```sh
    npm install or yarn
    ```

3. **Compile Smart Contracts**:
    ```sh
    npx hardhat compile
    ```

4. **Deploy Smart Contracts**:
    ```sh
    npx hardhat run scripts/deploy.js --network celo
    ```

5. **Start the Development Server**:
    ```sh
    npm run dev
    ```

## Contributing
We welcome contributions from the community. Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact
For any questions or inquiries, please contact us at skiragu18@gmail.com.
