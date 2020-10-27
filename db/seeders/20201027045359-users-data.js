'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { email: 'abrams@ghgh.orb', password: '4e8cb088d3ccf23ba0e0', username: 'abrams', profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jervo/128.jpg', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'jess123@oogie.orb', password: 'ddacd54ec97574b962bc25', username: 'jess12', profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/chrisslowik/128.jpg', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'a456@boogie.orb', password: 'fb62ccb42fb2869f1b52', username: 'al567', profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jerrybai1907/128.jpg', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'alli789@gool.orb', password: '6d6b1d3b47132f6fa11df', username: 'alyJones', profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/anasnakawa/128.jpg', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'ollie432@ahoo.orb', password: '54cfcb299162aa2bcdc9ed', username: 'pickles', profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/borges_marcos/128.jpg', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'catcat@yooha.orb', password: 'f9dcf8fd6ae7644689', username: 'catladee', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: '123456@yooha.orb', password: '5e33f1aeb03e846552e7c0', username: '1874874', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'oogiwoo@yooha.orb', password: 'cb3b6731bace307f11653a', username: 'gosts', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'wawa@yooha.orb', password: 'fdf097fc2b7f31cb52fc22', username: 'birdbob', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'nelni1212@yooha.orb', password: 'c44b48398b3da56cc3b3f', username: 'lochienes', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'catsofcats@yooha.orb', password: 'd5fe64112f2594f8b5d812', username: 'catmaster', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'latsofcats@yooha.orb', password: 'efdba87dfe84d8b4a77670', username: 'hmmmmm', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'jkjk@yooha.orb', password: 'e7f98b7131ac3a3243148e', username: 'jabras', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'ovovlov@yooha.orb', password: '8a43ca7bd1e24bba1b4841', username: 'ovlov', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'fenri@yooha.orb', password: '4d9ff44594a998836bab7', username: 'fenree', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'jessicaat@yooha.orb', password: 'd765b099898b8fa0e41f22', username: 'orangjuc', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'vet453@yooha.orb', password: '203856e9f1863c194fbfd3', username: 'vals77', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'jujubea@yooha.orb', password: '2eb933f26619d0df4b3ac0', username: 'jujubean', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'beepboo@yooha.orb', password: 'cb27e3e05262406228fac', username: 'beep', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'boop@yooha.orb', password: 'e94f282ce9283729689', username: 'boops', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'fetfer@yooha.orb', password: 'f28bd152a8f8a444c2b0f1', username: 'fionak43', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'lolop@yooha.orb', password: 'c64c53db326daabc43b3f3', username: 'lolip', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'peterp@yooha.orb', password: 'eb9d7dfafa6462109b3557', username: 'peter445', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
      { email: 'jonk@yooha.orb', password: 'd4a6fe688174fea7ed492', username: 'jjjjj', profilePic: '', banner: 'http://placeimg.com/640/480/abstract', aboutTitle: 'About Me', aboutContent: 'My name is Abram. Abram is the name. Abram Abrams', updatedAt: new Date(), createdAt: new Date() },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
