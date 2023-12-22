import springBoot from '../images/spring-boot.svg';
import springFramework from '../images/spring-framework.svg';
import springData from '../images/spring-data.svg';
import springCloud from '../images/spring-cloud.svg';
import springDataFlow from '../images/spring-data-flow.svg';
import springSecurity from '../images/spring-security.svg';
import springGraphql from '../images/spring-graphql.svg';
import logoSession from '../images/logo-session.png';
import springShell from '../images/spring-shell.svg';
import springKafka from '../images/spring-kafka.svg';
import springFlo from '../images/spring-flo.svg';
import springApache from '../images/spring.svg';
import springAmqp from '../images/spring-amqp.svg';
import springBatch from '../images/spring-batch.svg';
import springModulith from '../images/spring-modulith.svg';
import springHateos from '../images/spring-hateoas.svg';
import springIntegration from '../images/spring-integration.svg';
import springAutoServer from '../images/spring-authorization-server.svg';

const projects = [
  {
    img: springBoot,
    name: 'Spring Boot',
    info: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible',
  },
  {
    img: springFramework,
    name: 'Spring Framework',
    info: 'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.',
  },
  {
    img: springData,
    name: 'Spring Data',
    info: 'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.',
  },
  {
    img: springCloud,
    name: 'Spring Cloud',
    info: 'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
  },
  {
    img: springDataFlow,
    name: 'Spring Cloud Data',
    info: 'Provides an orchestration service for composable data microservice applications on modern runtimes.',
  },
  {
    img: springSecurity,
    name: 'Spring Security',
    info: 'Protects your application with comprehensive and extensible authentication and authorization support.',
  },
  {
    img: springGraphql,
    name: 'Spring for GraphQL',
    info: 'Spring for GraphQL provides support for Spring applications built on GraphQL Java.',
  },
  {
    img: logoSession,
    name: 'Spring Session',
    info: 'Provides an API and implementations for managing a user’s session information.',
  },
  {
    img: springAutoServer,
    name: 'Spring Authorization Server',
    info: 'Provides a secure, light-weight, and customizable foundation for building OpenID Connect 1.0 Identity Providers and OAuth2 Authorization Server products.',
  },
  {
    img: springIntegration,
    name: 'Spring Integration',
    info: 'Supports the well-known Enterprise Integration Patterns through lightweight messaging and declarative adapters.',
  },
  {
    img: springHateos,
    name: 'Spring HATEOAS',
    info: 'Simplifies creating REST representations that follow the HATEOAS principle.',
  },
  {
    img: springModulith,
    name: 'Spring Modulith',
    info: 'Spring Modulith allows developers to build well-structured Spring Boot applications and guides developers in finding and working with application modules driven by the domain.',
  },
  {
    img: springBatch,
    name: 'Spring Batch',
    info: 'Simplifies and optimizes the work of processing high-volume batch operations.',
  },
  {
    img: springAmqp,
    name: 'Spring AMQP',
    info: 'Applies core Spring concepts to the development of AMQP-based messaging solutions.',
  },
  {
    img: springApache,
    name: 'Spring for Apache Pulsar',
    info: 'Provides Familiar Spring Abstractions for Apache Pulsar.',
  },
  {
    img: springFlo,
    name: 'Spring Flo',
    info: 'Provides a JavaScript library that offers a basic embeddable HTML5 visual builder for pipelines and simple graphs.',
  },
  {
    img: springKafka,
    name: 'Spring for Apache Kafka',
    info: 'Provides Familiar Spring Abstractions for Apache Kafka.',
  },
  {
    img: springShell,
    name: 'Spring Shell',
    info: 'Makes writing and testing RESTful applications easier with CLI-based resource discovery and interaction.',
  },
];

const MenuTitles = [
  {
    number: 1,
    desc: 'Why Spring',
    items: [
      { name: 'Overview' },
      { name: 'Microservices' },
      { name: 'Reactive' },
      { name: 'Event Driven' },
      { name: 'Cloud' },
      { name: 'Web Applications' },
      { name: 'Serverless' },
      { name: 'Batch' },
    ],
  },
  {
    number: 2,
    desc: 'Learn',
    items: [
      { name: 'Overview' },
      { name: 'Quickstart' },
      { name: 'Guides' },
      { name: 'Blog' },
    ],
  },
  {
    number: 3,
    desc: 'Projects',
    items: [
      { name: 'Overview' },
      { name: 'Spring Boot' },
      { name: 'Spring Framework' },
      { name: 'Spring Cloud' },
      { name: 'Spring Cloud Data Flow' },
      { name: 'Spring Data' },
      { name: 'Spring Integration' },
      { name: 'Spring Batch' },
      { name: 'Spring Security' },
    ],
  },
  {
    number: 4,
    desc: 'Training',
    items: [{ name: 'Courses' }, { name: 'Get Certified' }],
  },
  {
    number: 5,
    desc: 'Support',
    items: [
      { name: 'Overview' },
      { name: 'Spring Runtime' },
      { name: 'Spring Consulting' },
      { name: 'Spring Academy For Teams' },
      { name: 'Security Advisories' },
    ],
  },
  {
    number: 6,
    desc: 'Community',
    items: [{ name: 'Overview' }, { name: 'Events' }, { name: 'Team' }],
  },
];

export { projects, MenuTitles };
