export interface Project {
  title: string;
  description: string;
  media: string[];
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
    media: [
      "/assets/imgs/projects/reports-registry/1-frontend-react-home-page.png",
      "/assets/imgs/projects/reports-registry/frontend-react-public-tracking.png",
      "/assets/imgs/projects/reports-registry/frontend-react-login.png",
      "/assets/imgs/projects/reports-registry/frontend-react-admin-page.png",
      "/assets/imgs/projects/reports-registry/frontend-react-equipment-table.png",
      "/assets/imgs/projects/reports-registry/frontend-react-equipment-details-1.png",
      "/assets/imgs/projects/reports-registry/frontend-react-equipment-details-2.png",
      "/assets/imgs/projects/reports-registry/frontend-react-equipment-form-1.png",
      "/assets/imgs/projects/reports-registry/frontend-react-equipment-form-2.png",
      "/assets/imgs/projects/reports-registry/frontend-react-approving-equipment.png",
      "/assets/imgs/projects/reports-registry/frontend-react-batches-table.png",
      "/assets/imgs/projects/reports-registry/frontend-react-batch-details.png",
      "/assets/imgs/projects/reports-registry/frontend-react-batch-form.png",
      "/assets/imgs/projects/reports-registry/frontend-react-contractors-table.png",
      "/assets/imgs/projects/reports-registry/frontend-react-contractors-details.png",
      "/assets/imgs/projects/reports-registry/frontend-react-contractors-form-1.png",
      "/assets/imgs/projects/reports-registry/frontend-react-contractors-form-2.png",
      "/assets/imgs/projects/reports-registry/frontend-react-printing-pdf-reports.png",
      "/assets/imgs/projects/reports-registry/frontend-react-printing-pdf-reports-with-digital-signature.png",
      "/assets/imgs/projects/reports-registry/frontend-react-pagination.png",
      "/assets/imgs/projects/reports-registry/frontend-react-users-table.png",
      "/assets/imgs/projects/reports-registry/frontend-react-users-details.png",
      "/assets/imgs/projects/reports-registry/frontend-react-users-form.png",
      "/assets/imgs/projects/reports-registry/frontend-react-system-dropdown-lists-1.png",
      "/assets/imgs/projects/reports-registry/frontend-react-system-dropdown-lists-2.png",
      "/assets/imgs/projects/reports-registry/frontend-react-system-dropdown-lists-3.png",
      "/assets/imgs/projects/reports-registry/frontend-react-modal-form-for-dropdown-list.png",
      "/assets/imgs/projects/reports-registry/backend-postman-login-request.png",
      "/assets/imgs/projects/reports-registry/backend-postman-retrieving-data.png",
      "/assets/imgs/projects/reports-registry/backend-springboot-running.png",
    ],
    liveLink: "https://laudos.ssfortes.com/"
  },
  {
    title: "audience-counter",
    description:
      "O Audience Counter é um aplicativo desenvolvido para contar o público em eventos, oferecendo dois tipos de contagem: contagem direta e contagem por fileiras. Ele foi projetado para facilitar a contagem e registro da assistência de forma eficiente e precisa, com opções para salvar, visualizar e gerenciar as contagens salvas.",
      media: [
        "/assets/imgs/projects/audience-counter/1-direct-count-view.jpg",
        "/assets/imgs/projects/audience-counter/counting-by-rows-view.jpg",
        "/assets/imgs/projects/audience-counter/direct-count-landscape-view-1.png",
        "/assets/imgs/projects/audience-counter/direct-count-landscape-view-2.png",
        "/assets/imgs/projects/audience-counter/counting-by-rows-landscape-view-1.png",
        "/assets/imgs/projects/audience-counter/counting-by-rows-landscape-view-2.png",
        "/assets/imgs/projects/audience-counter/audience-counter-app-video.mp4",
        "/assets/imgs/projects/audience-counter/direct-count-landscape-video.mp4",
        "/assets/imgs/projects/audience-counter/counting-by-rows-landscape-video.mp4",
      ],
      githubLink: "https://github.com/CleristonMP/audience-counter"
  },
  {
    title: "sprong-ionic",
    description: "O SpringIonic é uma aplicação desenvolvida com Spring Boot e Ionic que oferece uma plataforma completa para a criação de lojas virtuais. A aplicação permite o cadastro de produtos, categorias, clientes e pedidos, além de oferecer funcionalidades como busca de produtos, gerenciamento de carrinho de compras e pagamento.",
    media: [
      "/assets/imgs/projects/sprong-ionic/1-frontend-ionic-android-emulator.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-android-home-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-android-categories-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-android-products-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-android-products-details.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-android-cart-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-android-select-address-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-android-payment-method-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-android-order-confirmation-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-android-order-confirmation-message.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-android-offcanvas-navbar.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-android-profile-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-android-selecting-profile-photo.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-android-profile-photo-changed.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-web-home-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-web-categories-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-web-products-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-web-products-details.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-web-cart-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-web-select-address-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-web-payment-method-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-web-order-confirmation-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-web-order-confirmation-message-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-web-profile-page.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-web-taking-picture.png",
      "/assets/imgs/projects/sprong-ionic/frontend-ionic-web-selecting-profile-photo.png",
      "/assets/imgs/projects/sprong-ionic/backend-postman-login-request.png",
      "/assets/imgs/projects/sprong-ionic/backend-postman-retrieving-data.png",
      "/assets/imgs/projects/sprong-ionic/backend-springboot-running.png",
      "/assets/imgs/projects/sprong-ionic/spring-ionic-app-main-video.mp4",
      "/assets/imgs/projects/sprong-ionic/spring-ionic-app-profile-video.mp4"
    ],
    repoFrontend: "https://github.com/CleristonMP/springionic-frontend",
    repoBackend: "https://github.com/CleristonMP/springionic"
  },

  {
    title: "webmatriculas",
    description:
      "O WebMatriculas é um sistema para gestão de matrículas em instituições de ensino, composto por duas partes: um frontend em React e um backend em Spring Boot. Ambos se comunicam por meio de uma API RESTful.",
    media: [
      "/assets/imgs/projects/webmatriculas/1-frontend-react-login.png",
      "/assets/imgs/projects/webmatriculas/frontend-react-admin-page.png",
      "/assets/imgs/projects/webmatriculas/frontend-react-classes.png",
      "/assets/imgs/projects/webmatriculas/frontend-react-class-details.png",
      "/assets/imgs/projects/webmatriculas/frontend-react-class-form.png",
      "/assets/imgs/projects/webmatriculas/frontend-react-classes-pdf-printing.png",
      "/assets/imgs/projects/webmatriculas/frontend-react-students.png",
      "/assets/imgs/projects/webmatriculas/frontend-react-student-details.png",
      "/assets/imgs/projects/webmatriculas/frontend-react-student-form-1.png",
      "/assets/imgs/projects/webmatriculas/frontend-react-student-form-2.png",
      "/assets/imgs/projects/webmatriculas/frontend-react-students-pagination.png",
      "/assets/imgs/projects/webmatriculas/frontend-react-users.png",
      "/assets/imgs/projects/webmatriculas/frontend-react-user-details.png",
      "/assets/imgs/projects/webmatriculas/frontend-react-user-form.png",
      "/assets/imgs/projects/webmatriculas/backend-postman-login-request.png",
      "/assets/imgs/projects/webmatriculas/backend-postman-retrieving-data.png",
      "/assets/imgs/projects/webmatriculas/backend-springboot-running.png",
    ],
    githubLink: "https://github.com/CleristonMP/web-matriculas-api"
  },
  {
    title: "catalog",
    description:
      "O projeto Catalog é uma aplicação web desenvolvida usando o framework Spring para o backend e React para o frontend. Ele foi projetado para fornecer uma plataforma centralizada onde usuários podem gerenciar e visualizar informações sobre diversos catálogos de produtos.",
    media: [
      "/assets/imgs/projects/catalog/1-frontend-react-home-page.png",
      "/assets/imgs/projects/catalog/frontend-react-catalog.png",
      "/assets/imgs/projects/catalog/frontend-react-login.png",
      "/assets/imgs/projects/catalog/frontend-react-admin-products-listing.png",
      "/assets/imgs/projects/catalog/frontend-react-admin-products-filter-by-category.png",
      "/assets/imgs/projects/catalog/frontend-react-admin-products-filter-by-name.png",
      "/assets/imgs/projects/catalog/frontend-react-product-details.png",
      "/assets/imgs/projects/catalog/frontend-react-admin-products-pagination.png",
      "/assets/imgs/projects/catalog/frontend-react-admin-product-form.png",
      "/assets/imgs/projects/catalog/frontend-react-admin-editing-product.png",
      "/assets/imgs/projects/catalog/frontend-react-admin-categories-listing.png",
      "/assets/imgs/projects/catalog/frontend-react-admin-category-form.png",
      "/assets/imgs/projects/catalog/frontend-react-admin-users-listing.png",
      "/assets/imgs/projects/catalog/frontend-react-admin-user-form.png",
      "/assets/imgs/projects/catalog/backend-postman-login-request.png",
      "/assets/imgs/projects/catalog/backend-postman-retrieving-data.png",
      "/assets/imgs/projects/catalog/backend-springboot-running.png",
    ],
    githubLink: "https://github.com/CleristonMP/catalog-project"
  },
  {
    title: "dscommerce",
    description:
      "O DSCommerce é uma aplicação web completa desenvolvida com Spring Boot no backend e React no frontend. Ele permite a gestão de produtos, categorias, pedidos e clientes.",
    media: [
      "/assets/imgs/projects/dscommerce/1-frontend-react-home-page.png",
      "/assets/imgs/projects/dscommerce/frontend-react-login.png",
      "/assets/imgs/projects/dscommerce/frontend-react-product-details.png",
      "/assets/imgs/projects/dscommerce/frontend-react-cart-page.png",
      "/assets/imgs/projects/dscommerce/frontend-react-admin-page.png",
      "/assets/imgs/projects/dscommerce/frontend-react-admin-product-listing.png",
      "/assets/imgs/projects/dscommerce/frontend-react-admin-product-form.png",
      "/assets/imgs/projects/dscommerce/frontend-react-admin-product-load-more.png",
      "/assets/imgs/projects/dscommerce/frontend-react-admin-editing-product.png",
      "/assets/imgs/projects/dscommerce/backend-postman-login-request.png",
      "/assets/imgs/projects/dscommerce/backend-postman-retrieving-data.png",
      "/assets/imgs/projects/dscommerce/backend-springboot-running.png",
    ],
    repoBackend: "https://github.com/CleristonMP/dscommerce",
    repoFrontend: "https://github.com/CleristonMP/dscommerce-frontend"
  },
];

export default projectsData;
