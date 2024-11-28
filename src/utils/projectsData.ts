export interface Project {
  title: string;
  description: string;
  medias: string[];
  repoFrontend?: string;
  repoBackend?: string;
  githubLink?: string;
  liveLink?: string;
}

const projectsData: Project[] = [
  {
    title: "reports-registry",
    description:
      "O Reports Registry é uma aplicação web completa, desenvolvida para gerenciar de forma eficiente testes e relatórios de equipamentos. Essa solução integrada permite aos usuários cadastrar, consultar, atualizar e excluir informações sobre equipamentos, lotes, testes e muito mais, garantindo a conformidade com as normas técnicas e facilitando a gestão de ativos.",
    medias: [
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/1-frontend-react-home-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-public-tracking.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-login.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-admin-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-equipment-table.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-equipment-details-1.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-equipment-details-2.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-equipment-form-1.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-equipment-form-2.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-approving-equipment.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-batches-table.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-batch-details.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-batch-form.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-contractors-table.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-contractors-details.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-contractors-form-1.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-contractors-form-2.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-printing-pdf-reports.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-printing-pdf-reports-with-digital-signature.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-pagination.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-users-table.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-users-details.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-users-form.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-system-dropdown-lists-1.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-system-dropdown-lists-2.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-system-dropdown-lists-3.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/frontend-react-modal-form-for-dropdown-list.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/backend-postman-login-request.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/backend-postman-retrieving-data.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/reports-registry/backend-springboot-running.png",
    ],
    liveLink: "https://laudos.ssfortes.com/"
  },
  {
    title: "audience-counter",
    description:
      "O Audience Counter é um aplicativo desenvolvido para contar o público em eventos, oferecendo dois tipos de contagem: contagem direta e contagem por fileiras. Ele foi projetado para facilitar a contagem e registro da assistência de forma eficiente e precisa, com opções para salvar, visualizar e gerenciar as contagens salvas.",
      medias: [
        "https://cleristonmp.github.io/portfolio/assets/medias/projects/audience-counter/1-direct-count-view.jpg",
        "https://cleristonmp.github.io/portfolio/assets/medias/projects/audience-counter/counting-by-rows-view.jpg",
        "https://cleristonmp.github.io/portfolio/assets/medias/projects/audience-counter/direct-count-landscape-view-1.png",
        "https://cleristonmp.github.io/portfolio/assets/medias/projects/audience-counter/direct-count-landscape-view-2.png",
        "https://cleristonmp.github.io/portfolio/assets/medias/projects/audience-counter/counting-by-rows-landscape-view-1.png",
        "https://cleristonmp.github.io/portfolio/assets/medias/projects/audience-counter/counting-by-rows-landscape-view-2.png",
        "https://cleristonmp.github.io/portfolio/assets/medias/projects/audience-counter/audience-counter-app-video.mp4",
        "https://cleristonmp.github.io/portfolio/assets/medias/projects/audience-counter/direct-count-landscape-video.mp4",
        "https://cleristonmp.github.io/portfolio/assets/medias/projects/audience-counter/counting-by-rows-landscape-video.mp4",
      ],
      githubLink: "https://github.com/CleristonMP/audience-counter"
  },
  {
    title: "spring-ionic",
    description: "O SpringIonic é uma aplicação desenvolvida com Spring Boot e Ionic que oferece uma plataforma completa para a criação de lojas virtuais. A aplicação permite o cadastro de produtos, categorias, clientes e pedidos, além de oferecer funcionalidades como busca de produtos, gerenciamento de carrinho de compras e pagamento.",
    medias: [
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/1-frontend-ionic-android-emulator.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-android-home-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-android-categories-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-android-products-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-android-products-details.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-android-cart-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-android-select-address-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-android-payment-method-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-android-order-confirmation-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-android-order-confirmation-message.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-android-offcanvas-navbar.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-android-profile-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-android-selecting-profile-photo.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-android-profile-photo-changed.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-web-home-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-web-categories-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-web-products-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-web-products-details.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-web-cart-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-web-select-address-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-web-payment-method-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-web-order-confirmation-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-web-order-confirmation-message-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-web-profile-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-web-taking-picture.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/frontend-ionic-web-selecting-profile-photo.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/backend-postman-login-request.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/backend-postman-retrieving-data.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/backend-springboot-running.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/spring-ionic-app-main-video.mp4",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/spring-ionic/spring-ionic-app-profile-video.mp4"
    ],
    repoFrontend: "https://github.com/CleristonMP/springionic-frontend",
    repoBackend: "https://github.com/CleristonMP/springionic"
  },

  {
    title: "webmatriculas",
    description:
      "O WebMatriculas é um sistema para gestão de matrículas em instituições de ensino, composto por duas partes: um frontend em React e um backend em Spring Boot. Ambos se comunicam por meio de uma API RESTful.",
    medias: [
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/1-frontend-react-login.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/frontend-react-admin-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/frontend-react-classes.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/frontend-react-class-details.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/frontend-react-class-form.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/frontend-react-classes-pdf-printing.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/frontend-react-students.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/frontend-react-student-details.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/frontend-react-student-form-1.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/frontend-react-student-form-2.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/frontend-react-students-pagination.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/frontend-react-users.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/frontend-react-user-details.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/frontend-react-user-form.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/backend-postman-login-request.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/backend-postman-retrieving-data.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/webmatriculas/backend-springboot-running.png",
    ],
    githubLink: "https://github.com/CleristonMP/web-matriculas-api"
  },
  {
    title: "catalog",
    description:
      "O projeto Catalog é uma aplicação web desenvolvida usando o framework Spring para o backend e React para o frontend. Ele foi projetado para fornecer uma plataforma centralizada onde usuários podem gerenciar e visualizar informações sobre diversos catálogos de produtos.",
    medias: [
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/1-frontend-react-home-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/frontend-react-catalog.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/frontend-react-login.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/frontend-react-admin-products-listing.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/frontend-react-admin-products-filter-by-category.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/frontend-react-admin-products-filter-by-name.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/frontend-react-product-details.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/frontend-react-admin-products-pagination.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/frontend-react-admin-product-form.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/frontend-react-admin-editing-product.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/frontend-react-admin-categories-listing.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/frontend-react-admin-category-form.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/frontend-react-admin-users-listing.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/frontend-react-admin-user-form.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/backend-postman-login-request.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/backend-postman-retrieving-data.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/catalog/backend-springboot-running.png",
    ],
    githubLink: "https://github.com/CleristonMP/catalog-project"
  },
  {
    title: "dscommerce",
    description:
      "O DSCommerce é uma aplicação web completa desenvolvida com Spring Boot no backend e React no frontend. Ele permite a gestão de produtos, categorias, pedidos e clientes.",
    medias: [
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/dscommerce/1-frontend-react-home-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/dscommerce/frontend-react-login.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/dscommerce/frontend-react-product-details.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/dscommerce/frontend-react-cart-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/dscommerce/frontend-react-admin-page.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/dscommerce/frontend-react-admin-product-listing.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/dscommerce/frontend-react-admin-product-form.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/dscommerce/frontend-react-admin-product-load-more.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/dscommerce/frontend-react-admin-editing-product.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/dscommerce/backend-postman-login-request.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/dscommerce/backend-postman-retrieving-data.png",
      "https://cleristonmp.github.io/portfolio/assets/medias/projects/dscommerce/backend-springboot-running.png",
    ],
    repoBackend: "https://github.com/CleristonMP/dscommerce",
    repoFrontend: "https://github.com/CleristonMP/dscommerce-frontend"
  },
];

export default projectsData;
