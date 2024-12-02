import MEDIAS_BASE_URL from "./mediasBaseUrl";

const BASE_URL_PROJECTS = `${MEDIAS_BASE_URL}/projects`

export interface Project {
  title: string;
  descriptionKey: string;
  medias: string[];
  repoFrontend?: string;
  repoBackend?: string;
  githubLink?: string;
  liveLink?: string;
}

const projectsData: Project[] = [
  {
    title: "reports-registry",
    descriptionKey: "projects.reports-registry.description",
    medias: [
      `${BASE_URL_PROJECTS}/reports-registry/1-frontend-react-home-page.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-public-tracking.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-login.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-admin-page.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-equipment-table.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-equipment-details-1.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-equipment-details-2.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-equipment-form-1.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-equipment-form-2.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-approving-equipment.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-batches-table.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-batch-details.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-batch-form.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-contractors-table.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-contractors-details.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-contractors-form-1.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-contractors-form-2.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-printing-pdf-reports.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-printing-pdf-reports-with-digital-signature.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-pagination.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-users-table.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-users-details.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-users-form.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-system-dropdown-lists-1.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-system-dropdown-lists-2.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-system-dropdown-lists-3.png`,
      `${BASE_URL_PROJECTS}/reports-registry/frontend-react-modal-form-for-dropdown-list.png`,
      `${BASE_URL_PROJECTS}/reports-registry/backend-postman-login-request.png`,
      `${BASE_URL_PROJECTS}/reports-registry/backend-postman-retrieving-data.png`,
      `${BASE_URL_PROJECTS}/reports-registry/backend-springboot-running.png`,
    ],
    liveLink: "https://laudos.ssfortes.com/"
  },
  {
    title: "audience-counter",
    descriptionKey: "projects.audience-counter.description",
      medias: [
        `${BASE_URL_PROJECTS}/audience-counter/1-direct-count-view.jpg`,
        `${BASE_URL_PROJECTS}/audience-counter/counting-by-rows-view.jpg`,
        `${BASE_URL_PROJECTS}/audience-counter/direct-count-landscape-view-1.png`,
        `${BASE_URL_PROJECTS}/audience-counter/direct-count-landscape-view-2.png`,
        `${BASE_URL_PROJECTS}/audience-counter/counting-by-rows-landscape-view-1.png`,
        `${BASE_URL_PROJECTS}/audience-counter/counting-by-rows-landscape-view-2.png`,
        `${BASE_URL_PROJECTS}/audience-counter/audience-counter-app-video.mp4`,
        `${BASE_URL_PROJECTS}/audience-counter/direct-count-landscape-video.mp4`,
        `${BASE_URL_PROJECTS}/audience-counter/counting-by-rows-landscape-video.mp4`,
      ],
      githubLink: "https://github.com/CleristonMP/audience-counter"
  },
  {
    title: "spring-ionic",
    descriptionKey: "projects.spring-ionic.description",
    medias: [
      `${BASE_URL_PROJECTS}/spring-ionic/1-frontend-ionic-android-emulator.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-android-home-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-android-categories-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-android-products-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-android-products-details.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-android-cart-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-android-select-address-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-android-payment-method-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-android-order-confirmation-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-android-order-confirmation-message.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-android-offcanvas-navbar.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-android-profile-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-android-selecting-profile-photo.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-android-profile-photo-changed.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-web-home-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-web-categories-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-web-products-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-web-products-details.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-web-cart-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-web-select-address-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-web-payment-method-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-web-order-confirmation-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-web-order-confirmation-message-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-web-profile-page.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-web-taking-picture.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/frontend-ionic-web-selecting-profile-photo.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/backend-postman-login-request.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/backend-postman-retrieving-data.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/backend-springboot-running.png`,
      `${BASE_URL_PROJECTS}/spring-ionic/spring-ionic-app-main-video.mp4`,
      `${BASE_URL_PROJECTS}/spring-ionic/spring-ionic-app-profile-video.mp4`
    ],
    repoFrontend: "https://github.com/CleristonMP/springionic-frontend",
    repoBackend: "https://github.com/CleristonMP/springionic"
  },

  {
    title: "webmatriculas",
    descriptionKey: "projects.webmatriculas.description",
    medias: [
      `${BASE_URL_PROJECTS}/webmatriculas/1-frontend-react-login.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/frontend-react-admin-page.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/frontend-react-classes.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/frontend-react-class-details.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/frontend-react-class-form.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/frontend-react-classes-pdf-printing.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/frontend-react-students.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/frontend-react-student-details.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/frontend-react-student-form-1.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/frontend-react-student-form-2.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/frontend-react-students-pagination.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/frontend-react-users.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/frontend-react-user-details.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/frontend-react-user-form.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/backend-postman-login-request.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/backend-postman-retrieving-data.png`,
      `${BASE_URL_PROJECTS}/webmatriculas/backend-springboot-running.png`,
    ],
    githubLink: "https://github.com/CleristonMP/web-matriculas-api"
  },
  {
    title: "catalog",
    descriptionKey: "projects.catalog.description",
    medias: [
      `${BASE_URL_PROJECTS}/catalog/1-frontend-react-home-page.png`,
      `${BASE_URL_PROJECTS}/catalog/frontend-react-catalog.png`,
      `${BASE_URL_PROJECTS}/catalog/frontend-react-login.png`,
      `${BASE_URL_PROJECTS}/catalog/frontend-react-admin-products-listing.png`,
      `${BASE_URL_PROJECTS}/catalog/frontend-react-admin-products-filter-by-category.png`,
      `${BASE_URL_PROJECTS}/catalog/frontend-react-admin-products-filter-by-name.png`,
      `${BASE_URL_PROJECTS}/catalog/frontend-react-product-details.png`,
      `${BASE_URL_PROJECTS}/catalog/frontend-react-admin-products-pagination.png`,
      `${BASE_URL_PROJECTS}/catalog/frontend-react-admin-product-form.png`,
      `${BASE_URL_PROJECTS}/catalog/frontend-react-admin-editing-product.png`,
      `${BASE_URL_PROJECTS}/catalog/frontend-react-admin-categories-listing.png`,
      `${BASE_URL_PROJECTS}/catalog/frontend-react-admin-category-form.png`,
      `${BASE_URL_PROJECTS}/catalog/frontend-react-admin-users-listing.png`,
      `${BASE_URL_PROJECTS}/catalog/frontend-react-admin-user-form.png`,
      `${BASE_URL_PROJECTS}/catalog/backend-postman-login-request.png`,
      `${BASE_URL_PROJECTS}/catalog/backend-postman-retrieving-data.png`,
      `${BASE_URL_PROJECTS}/catalog/backend-springboot-running.png`,
    ],
    githubLink: "https://github.com/CleristonMP/catalog-project"
  },
  {
    title: "dscommerce",
    descriptionKey: "projects.dscommerce.description",
    medias: [
      `${BASE_URL_PROJECTS}/dscommerce/1-frontend-react-home-page.png`,
      `${BASE_URL_PROJECTS}/dscommerce/frontend-react-login.png`,
      `${BASE_URL_PROJECTS}/dscommerce/frontend-react-product-details.png`,
      `${BASE_URL_PROJECTS}/dscommerce/frontend-react-cart-page.png`,
      `${BASE_URL_PROJECTS}/dscommerce/frontend-react-admin-page.png`,
      `${BASE_URL_PROJECTS}/dscommerce/frontend-react-admin-product-listing.png`,
      `${BASE_URL_PROJECTS}/dscommerce/frontend-react-admin-product-form.png`,
      `${BASE_URL_PROJECTS}/dscommerce/frontend-react-admin-product-load-more.png`,
      `${BASE_URL_PROJECTS}/dscommerce/frontend-react-admin-editing-product.png`,
      `${BASE_URL_PROJECTS}/dscommerce/backend-postman-login-request.png`,
      `${BASE_URL_PROJECTS}/dscommerce/backend-postman-retrieving-data.png`,
      `${BASE_URL_PROJECTS}/dscommerce/backend-springboot-running.png`,
    ],
    repoBackend: "https://github.com/CleristonMP/dscommerce",
    repoFrontend: "https://github.com/CleristonMP/dscommerce-frontend"
  },
];

export default projectsData;
