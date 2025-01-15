Overview

This repository contains the codebase for an AWS-based car rental application, leveraging Amplify, React, and GraphQL to create a fully functional platform for managing car rentals. The repository is structured to ensure modularity, scalability, and ease of use.

Project Structure
```
Root Level
	•	README.md: Documentation for understanding the project, setup, and usage.
	•	package.json: Node.js package metadata, dependencies, and scripts.
	•	.eslintignore: List of files/directories ignored by ESLint.

Amplify Directory (amplify/)

Contains AWS Amplify configurations and resources for backend services.
	•	cli.json: CLI configuration for the Amplify project.
	•	team-provider-info.json: Environment-specific configuration for Amplify.
	•	backend/:
	•	backend-config.json: Backend service configuration.
	•	tags.json: Tags for AWS resources.
	•	api/carrentalapp/:
	•	cli-inputs.json: CLI inputs for the GraphQL API.
	•	parameters.json: Configuration parameters for the API.
	•	schema.graphql: Defines the data model for the GraphQL API.
	•	transform.conf.json: Amplify transformation settings.
	•	resolvers/: Custom resolvers for API endpoints.
	•	stacks/CustomResources.json: Custom resources for the API stack.
	•	auth/carrentalapp/:
	•	cli-inputs.json: Configuration for the authentication service.
	•	types/:
	•	amplify-dependent-resources-ref.d.ts: TypeScript definitions for dependent resources.
	•	.config/project-config.json: General configuration for the Amplify project.

Public Directory (public/)

Contains static assets and metadata for the application.
	•	index.html: Main HTML file for the React application.
	•	manifest.json: Metadata for Progressive Web App (PWA) functionality.
	•	robots.txt: Directives for search engine crawlers.

Source Directory (src/)

Contains the React application source code.

Main Files
	•	App.css: Styles for the main app component.
	•	App.js: Entry point for the React application.
	•	App.test.js: Test cases for the main app component.
	•	index.css: Global styles.
	•	index.js: Entry point for rendering the React app.
	•	reportWebVitals.js: Web vitals measurement for performance tracking.
	•	setupTests.js: Test setup for the React application.

Models Directory (models/)

Handles application data models.
	•	index.d.ts / index.js: TypeScript and JavaScript index for models.
	•	schema.d.ts / schema.js: TypeScript and JavaScript schema for data models.

UI Components Directory (ui-components/)

Pre-designed React components for the application UI.

Each component has a .jsx implementation and an accompanying .d.ts TypeScript definition.
	•	ActionCard: Displays actions users can take.
	•	AddCar: UI for adding a new car to the system.
	•	Ampligram: Social post-style component.
	•	CarRentalCard: Displays details of a car rental.
	•	CommentCard: Card for user comments.
	•	ContactUs: Contact form component.
	•	FAQItem: Displays FAQ items.
	•	Features2x2, Features2x3, Features4x1, FeaturesText2x2: Layout components for features.
	•	FormCheckout: Form for checkout functionality.
	•	HeroLayout1, HeroLayout2, HeroLayout3, HeroLayout4: Hero section layouts.
	•	ItemCard: General-purpose card for items.
	•	MarketingFooter: Footer with marketing information.
	•	MarketingPricing: Component for displaying pricing.
	•	MyIcon: Custom icon component.
	•	NavBar: Navigation bar for the application.
	•	NewCarsCollection: Component displaying new cars collection.
	•	ProductCard: Displays product information.
	•	ProductDetail: Displays detailed product information.
	•	ProfileCard: User profile card.
	•	ReviewCard: Review display card.
	•	SideBar: Sidebar for navigation or options.
	•	SocialPost: Social media-style post component.
	•	TallCard: Vertical card component.
	•	index.js: Entry point for the UI components.
	•	studioTheme.js / studioTheme.js.d.ts: Theme configuration for styling.
```
How to Use
1.	Clone the Repository:
```
git clone https://github.com/siddharth-upadhyayula/aws-car-rental.git
cd siddharth-upadhyayula-aws-car-rental
```

2.	Install Dependencies:

```
npm install
```

3.	Run the Application:
```
npm start
```

4.	Amplify Setup:
•	Install Amplify CLI:
```
npm install -g @aws-amplify/cli
```

•	Configure Amplify:
```
amplify configure
```

•	Deploy Backend:
```
amplify push
```

5.	Build for Production:
```
npm run build
```
Contributing

Contributions are welcome! Please follow these steps:
	1.	Fork the repository.
	2.	Create a new branch.
	3.	Commit your changes.
	4.	Submit a pull request.

License

This project is licensed under MIT License.

This documentation provides an overview, structure, and setup instructions for the repository, ensuring ease of understanding and usability for contributors and users.
