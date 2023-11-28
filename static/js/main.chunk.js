(this['webpackJsonpmilim.cf'] = this['webpackJsonpmilim.cf'] || []).push([
	[0],
	{
		13: function (e, t, a) {
			'use strict';
			a.r(t);
			var l = a(0),
				n = a.n(l),
				c = a(6),
				s = a.n(c),
				r = a(4),
				m = a(3);
			function o() {
				return n.a.createElement(
					n.a.Fragment,
					null,
					n.a.createElement(
						'footer',
						{ className: 'footer bg-dark' },
						n.a.createElement(
							'p',
							{ className: 'p mb-0' },
							' Made with',
							n.a.createElement('span', { className: 'red' }, ' \u2764'),
							'by ',
							n.a.createElement(
								'a',
								{ className: 'badge badge-info', href: 'https://github.com/gurelbs' },
								'Gurel Ben Shabat'
							)
						)
					)
				);
			}
			var i = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
			function u() {
				var e = Object(l.useState)(!1),
					t = Object(m.a)(e, 2),
					a = t[0],
					c = t[1],
					s = Object(l.useState)(null),
					u = Object(m.a)(s, 2),
					E = u[0],
					p = u[1],
					b = Object(l.useState)([]),
					d = Object(m.a)(b, 2),
					g = d[0],
					h = d[1];
				try {
					var f = function () {
						try {
							a
								? (i.start(),
								  (i.onend = function () {
										console.log('\u05de\u05de\u05e9\u05d9\u05da...'),
											setTimeout(function () {
												i.start();
											}, 1);
								  }))
								: (i.stop(),
								  (i.onend = function () {
										console.log('\u05de\u05e4\u05e1\u05d9\u05e7');
								  })),
								(i.onstart = function () {
									console.log('\u05de\u05d9\u05e7\u05e8\u05d5\u05e4\u05d5\u05df \u05e4\u05d5\u05e2\u05dc');
								}),
								(i.onresult = function (e) {
									var t = e.resultIndex,
										a = e.results[t][0].transcript;
									(1 === t && a === e.results[0][0].transcript) ||
										(p(a),
										console.log(a),
										(i.onerror = function (e) {
											return console.log(e.error);
										}),
										('\u05de\u05d7\u05e7' !== a && ' \u05de\u05d7\u05e7' !== a) || h(Object(r.a)(g)));
								});
						} catch (e) {
							console.log(e);
						}
					};
					Object(l.useEffect)(
						function () {
							f();
						},
						[f, a]
					);
				} catch (N) {
					console.log(N);
				}
				return n.a.createElement(
					n.a.Fragment,
					null,
					n.a.createElement(
						'div',
						{ className: 'container-fluid px-0 height-100 text-light text-center pt-3 offset-photo' },
						n.a.createElement(
							'h1',
							{ className: 'h1' },
							n.a.createElement(
								'a',
								{ href: 'https://milim.cf', className: 'hp-title' },
								'\u05d5\u05b7\u05d9\u05b0\u05d3\u05b7\u05d1\u05bc\u05b5\u05e8'
							)
						),
						n.a.createElement(
							'div',
							{ className: 'text-light px-5 pt-5' },
							n.a.createElement(
								'h4',
								{ className: 'm-5 font-weight-light mb-2 ' },
								'\u05ea\u05de\u05dc\u05d5\u05dc \u05d1\u05d6\u05de\u05df \u05d0\u05de\u05ea'
							),
							a
								? n.a.createElement(
										'div',
										null,
										' ',
										n.a.createElement(
											'span',
											{ 'aria-label': 'img', role: 'img', className: 'text-success h1' },
											n.a.createElement('i', { className: 'fas fa-microphone scale-btn' }),
											n.a.createElement('br', null)
										),
										n.a.createElement(
											'span',
											{ className: 'p' },
											'\u05e0\u05d9\u05ea\u05df \u05dc\u05d3\u05d1\u05e8 \u05db\u05e2\u05ea...'
										)
								  )
								: n.a.createElement(
										'span',
										{ 'aria-label': 'img', role: 'img', className: ' text-danger h1' },
										n.a.createElement('i', { className: 'fas fa-microphone-slash' })
								  ),
							n.a.createElement(
								'div',
								{ className: 'row p-5 mx-2 ' },
								n.a.createElement(
									'button',
									{
										onClick: function () {
											return c(function (e) {
												return !e;
											});
										},
										className: 'col-xl-5 mb-1 btn btn-outline-danger py-5',
									},
									n.a.createElement(
										'span',
										{ className: 'badge badge-pill badge-secondary badge-danger px-3 ' },
										'\u05d4\u05e7\u05dc\u05d8\u05d4 / \u05e2\u05e6\u05d9\u05e8\u05d4'
									)
								),
								n.a.createElement('span', { className: 'col-2' }),
								n.a.createElement(
									'button',
									{
										onClick: function () {
											h([].concat(Object(r.a)(g), [E])), p(E);
										},
										disabled: !E,
										className: 'col-xl-5 mb-1 btn btn-outline-success py-5',
									},
									n.a.createElement(
										'span',
										{ className: 'badge badge-secondary badge-success px-5 py-2' },
										'\u05e9\u05de\u05d9\u05e8\u05d4'
									)
								)
							),
							n.a.createElement('h2', { className: 'h2' }, E)
						),
						n.a.createElement(
							'div',
							{ className: 'text-dark bg-light mx-auto ouput-size p-3' },
							n.a.createElement(
								'h1',
								{ className: 'h1' },
								n.a.createElement(
									'span',
									{ className: 'mt-2 px-5 text-light badge text-secondary bg-dark' },
									'\u05d4\u05ea\u05de\u05dc\u05d9\u05dc \u05e9\u05dc\u05da: '
								)
							),
							n.a.createElement(
								'div',
								{ className: 'form-row' },
								g.map(function (e) {
									return n.a.createElement(
										'h4',
										{ contentEditable: !0, className: 'px-0 h4 my-0 py-0 text-dark', key: e },
										e,
										n.a.createElement('span', null, '\xa0')
									);
								}),
								n.a.createElement(
									'p',
									{ class: 'col-12 text-muted  pt-5 mt-5 mb-0 pb-0 align-items-end' },
									"\u05d4\u05e2\u05d6\u05e8\u05d5 \u05d1\u05e4\u05e7\u05d5\u05d3\u05d4 \u05d4\u05e7\u05d5\u05dc\u05d9\u05ea '\u05de\u05d7\u05e7', \u05db\u05d3\u05d9 \u05dc\u05de\u05d7\u05d5\u05e7 \u05d0\u05ea \u05d4\u05ea\u05de\u05dc\u05d9\u05dc \u05d4\u05e9\u05de\u05d5\u05e8"
								)
							)
						),
						n.a.createElement('div', { className: 'mt-5' }, n.a.createElement(o, null))
					)
				);
			}
			(i.continuous = !0), (i.interimResults = !0), (i.lang = 'he-IL');
			a(12);
			s.a.render(
				n.a.createElement(
					n.a.StrictMode,
					null,
					n.a.createElement(
						'div',
						{ className: 'area' },
						n.a.createElement(u, null),
						n.a.createElement(
							'ul',
							{ className: 'circles' },
							n.a.createElement('li', null),
							n.a.createElement('li', null),
							n.a.createElement('li', null),
							n.a.createElement('li', null),
							n.a.createElement('li', null),
							n.a.createElement('li', null),
							n.a.createElement('li', null),
							n.a.createElement('li', null),
							n.a.createElement('li', null),
							n.a.createElement('li', null)
						)
					)
				),
				document.getElementById('root')
			);
		},
		7: function (e, t, a) {
			e.exports = a(13);
		},
	},
	[[7, 1, 2]],
]);
//# sourceMappingURL=main.604a6b10.chunk.js.map
