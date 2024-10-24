import React from "react";

const About: React.FC = () => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="text-center">Sobre Mim</h2>
          <p className="lead">
            Olá! Meu nome é Cleriston e sou um desenvolvedor web e mobile com
            mais de 5 anos de experiência. Durante minha carreira, desenvolvi
            vários projetos que vão desde aplicativos móveis até plataformas web
            complexas.
          </p>
          <p>
            Minha paixão pela programação começou muito cedo, e desde então
            tenho me dedicado a criar soluções que não apenas resolvem problemas
            técnicos, mas também oferecem uma ótima experiência ao usuário. Amo
            trabalhar com tecnologias modernas, como{" "}
            <strong>React, TypeScript</strong> e <strong>Spring Boot</strong>, e
            estou sempre aprendendo e aprimorando minhas habilidades.
          </p>
          <p>
            Ao longo dos anos, tive a oportunidade de trabalhar como freelancer,
            o que me permitiu colaborar com uma variedade de clientes e
            empresas. Gosto do desafio de entender as necessidades de cada
            cliente e transformar essas necessidades em um produto funcional e
            bem apresentável.
          </p>
          <p>
            Se você está procurando alguém para ajudar no desenvolvimento do seu
            próximo projeto, ficarei feliz em colaborar. Entre em contato e
            vamos conversar!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
