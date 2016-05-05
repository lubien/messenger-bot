exports.regex = /^foo/;

exports.callback = function fooCallback(payload, reply) {
  reply({ text: 'Você ativou foo!' }, (err) => {
    if (err) throw err;

    console.log('Echoed back');
  });
};
