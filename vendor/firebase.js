/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/

---

typedarray.js
Copyright (c) 2010, Linden Research, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

var firebase = (function() {
  var e = void 0 === e ? self : e;
  return (function(t) {
    function n(e) {
      if (o[e]) return o[e].exports;
      var r = (o[e] = { i: e, l: !1, exports: {} });
      return t[e].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    var r = e.webpackJsonpFirebase;
    e.webpackJsonpFirebase = function(e, o, c) {
      for (var s, a, u, f = 0, l = []; f < e.length; f++)
        (a = e[f]), i[a] && l.push(i[a][0]), (i[a] = 0);
      for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
      for (r && r(e, o, c); l.length; ) l.shift()();
      if (c) for (f = 0; f < c.length; f++) u = n((n.s = c[f]));
      return u;
    };
    var o = {},
      i = { 4: 0 };
    return (
      (n.e = function(e) {
        function t() {
          (s.onerror = s.onload = null), clearTimeout(a);
          var t = i[e];
          0 !== t &&
            (t && t[1](Error('Loading chunk ' + e + ' failed.')),
            (i[e] = void 0));
        }
        var r = i[e];
        if (0 === r)
          return new Promise(function(e) {
            e();
          });
        if (r) return r[2];
        var o = new Promise(function(t, n) {
          r = i[e] = [t, n];
        });
        r[2] = o;
        var c = document.getElementsByTagName('head')[0],
          s = document.createElement('script');
        (s.type = 'text/javascript'),
          (s.charset = 'utf-8'),
          (s.async = !0),
          (s.timeout = 12e4),
          n.nc && s.setAttribute('nonce', n.nc),
          (s.src = n.p + '' + e + '.js');
        var a = setTimeout(t, 12e4);
        return (s.onerror = s.onload = t), c.appendChild(s), o;
      }),
      (n.m = t),
      (n.c = o),
      (n.d = function(e, t, r) {
        n.o(e, t) ||
          Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
          });
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      (n.oe = function(e) {
        throw (console.error(e), e);
      }),
      n((n.s = 9))
    );
  })({
    24: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return c;
      });
      var r = 'FirebaseError',
        o = Error.captureStackTrace,
        i = (function() {
          function e(e, t) {
            if (((this.code = e), (this.message = t), o))
              o(this, c.prototype.create);
            else {
              var n = Error.apply(this, arguments);
              (this.name = r),
                Object.defineProperty(this, 'stack', {
                  get: function() {
                    return n.stack;
                  }
                });
            }
          }
          return e;
        })();
      (i.prototype = Object.create(Error.prototype)),
        (i.prototype.constructor = i),
        (i.prototype.name = r);
      var c = (function() {
        function e(e, t, n) {
          (this.service = e),
            (this.serviceName = t),
            (this.errors = n),
            (this.pattern = /\{\$([^}]+)}/g);
        }
        return (
          (e.prototype.create = function(e, t) {
            void 0 === t && (t = {});
            var n,
              r = this.errors[e],
              o = this.service + '/' + e;
            (n =
              void 0 === r
                ? 'Error'
                : r.replace(this.pattern, function(e, n) {
                    var r = t[n];
                    return void 0 !== r ? '' + r : '<' + n + '?>';
                  })),
              (n = this.serviceName + ': ' + n + ' (' + o + ').');
            var c = new i(o, n);
            for (var s in t)
              t.hasOwnProperty(s) && '_' !== s.slice(-1) && (c[s] = t[s]);
            return c;
          }),
          e
        );
      })();
    },
    3: function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return o;
      }),
        n.d(t, 'a', function() {
          return i;
        }),
        n.d(t, 'c', function() {
          return c;
        });
      var r = n(32),
        o = r.a.Promise || n(57),
        i = (function() {
          function e() {
            var e = this;
            (this.resolve = null),
              (this.reject = null),
              (this.promise = new o(function(t, n) {
                (e.resolve = t), (e.reject = n);
              }));
          }
          return (
            (e.prototype.wrapCallback = function(e) {
              function t(t, r) {
                t ? n.reject(t) : n.resolve(r),
                  'function' == typeof e &&
                    (c(n.promise), 1 === e.length ? e(t) : e(t, r));
              }
              var n = this;
              return t;
            }),
            e
          );
        })(),
        c = function(e) {
          e.catch(function() {});
        };
    },
    31: function(e, t, n) {
      'use strict';
      function r(e, t) {
        var n = new a(e, t);
        return n.subscribe.bind(n);
      }
      function o(e, t) {
        if ('object' !== (void 0 === e ? 'undefined' : s(e)) || null === e)
          return !1;
        for (var n = 0, r = t; n < r.length; n++) {
          var o = r[n];
          if (o in e && 'function' == typeof e[o]) return !0;
        }
        return !1;
      }
      function i() {}
      t.a = r;
      var c = n(3),
        s =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              },
        a = (function() {
          function e(e, t) {
            var n = this;
            (this.observers = []),
              (this.unsubscribes = []),
              (this.observerCount = 0),
              (this.task = c.b.resolve()),
              (this.finalized = !1),
              (this.onNoObservers = t),
              this.task
                .then(function() {
                  e(n);
                })
                .catch(function(e) {
                  n.error(e);
                });
          }
          return (
            (e.prototype.next = function(e) {
              this.forEachObserver(function(t) {
                t.next(e);
              });
            }),
            (e.prototype.error = function(e) {
              this.forEachObserver(function(t) {
                t.error(e);
              }),
                this.close(e);
            }),
            (e.prototype.complete = function() {
              this.forEachObserver(function(e) {
                e.complete();
              }),
                this.close();
            }),
            (e.prototype.subscribe = function(e, t, n) {
              var r,
                c = this;
              if (void 0 === e && void 0 === t && void 0 === n)
                throw Error('Missing Observer.');
              (r = o(e, ['next', 'error', 'complete'])
                ? e
                : { next: e, error: t, complete: n }),
                void 0 === r.next && (r.next = i),
                void 0 === r.error && (r.error = i),
                void 0 === r.complete && (r.complete = i);
              var s = this.unsubscribeOne.bind(this, this.observers.length);
              return (
                this.finalized &&
                  this.task.then(function() {
                    try {
                      c.finalError ? r.error(c.finalError) : r.complete();
                    } catch (e) {}
                  }),
                this.observers.push(r),
                s
              );
            }),
            (e.prototype.unsubscribeOne = function(e) {
              void 0 !== this.observers &&
                void 0 !== this.observers[e] &&
                (delete this.observers[e],
                (this.observerCount -= 1),
                0 === this.observerCount &&
                  void 0 !== this.onNoObservers &&
                  this.onNoObservers(this));
            }),
            (e.prototype.forEachObserver = function(e) {
              if (!this.finalized)
                for (var t = 0; t < this.observers.length; t++)
                  this.sendOne(t, e);
            }),
            (e.prototype.sendOne = function(e, t) {
              var n = this;
              this.task.then(function() {
                if (void 0 !== n.observers && void 0 !== n.observers[e])
                  try {
                    t(n.observers[e]);
                  } catch (e) {
                    'undefined' != typeof console &&
                      console.error &&
                      console.error(e);
                  }
              });
            }),
            (e.prototype.close = function(e) {
              var t = this;
              this.finalized ||
                ((this.finalized = !0),
                void 0 !== e && (this.finalError = e),
                this.task.then(function() {
                  (t.observers = void 0), (t.onNoObservers = void 0);
                }));
            }),
            e
          );
        })();
    },
    32: function(e, t, n) {
      'use strict';
      (function(e) {
        n.d(t, 'a', function() {
          return o;
        });
        var r;
        if (void 0 !== e) r = e;
        else if ('undefined' != typeof self) r = self;
        else
          try {
            r = Function('return this')();
          } catch (e) {
            throw Error(
              'polyfill failed because global object is unavailable in this environment'
            );
          }
        var o = r;
      }.call(t, n(33)));
    },
    33: function(t, n) {
      var r;
      r = (function() {
        return this;
      })();
      try {
        r = r || Function('return this')() || (0, eval)('this');
      } catch (t) {
        'object' == typeof e && (r = e);
      }
      t.exports = r;
    },
    34: function(e, t) {
      function n() {
        throw Error('setTimeout has not been defined');
      }
      function r() {
        throw Error('clearTimeout has not been defined');
      }
      function o(e) {
        if (f === setTimeout) return setTimeout(e, 0);
        if ((f === n || !f) && setTimeout)
          return (f = setTimeout), setTimeout(e, 0);
        try {
          return f(e, 0);
        } catch (t) {
          try {
            return f.call(null, e, 0);
          } catch (t) {
            return f.call(this, e, 0);
          }
        }
      }
      function i(e) {
        if (l === clearTimeout) return clearTimeout(e);
        if ((l === r || !l) && clearTimeout)
          return (l = clearTimeout), clearTimeout(e);
        try {
          return l(e);
        } catch (t) {
          try {
            return l.call(null, e);
          } catch (t) {
            return l.call(this, e);
          }
        }
      }
      function c() {
        v &&
          h &&
          ((v = !1), h.length ? (d = h.concat(d)) : (m = -1), d.length && s());
      }
      function s() {
        if (!v) {
          var e = o(c);
          v = !0;
          for (var t = d.length; t; ) {
            for (h = d, d = []; ++m < t; ) h && h[m].run();
            (m = -1), (t = d.length);
          }
          (h = null), (v = !1), i(e);
        }
      }
      function a(e, t) {
        (this.fun = e), (this.array = t);
      }
      function u() {}
      var f,
        l,
        p = (e.exports = {});
      !(function() {
        try {
          f = 'function' == typeof setTimeout ? setTimeout : n;
        } catch (e) {
          f = n;
        }
        try {
          l = 'function' == typeof clearTimeout ? clearTimeout : r;
        } catch (e) {
          l = r;
        }
      })();
      var h,
        d = [],
        v = !1,
        m = -1;
      (p.nextTick = function(e) {
        var t = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        d.push(new a(e, t)), 1 !== d.length || v || o(s);
      }),
        (a.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (p.title = 'browser'),
        (p.browser = !0),
        (p.env = {}),
        (p.argv = []),
        (p.version = ''),
        (p.versions = {}),
        (p.on = u),
        (p.addListener = u),
        (p.once = u),
        (p.off = u),
        (p.removeListener = u),
        (p.removeAllListeners = u),
        (p.emit = u),
        (p.prependListener = u),
        (p.prependOnceListener = u),
        (p.listeners = function(e) {
          return [];
        }),
        (p.binding = function(e) {
          throw Error('process.binding is not supported');
        }),
        (p.cwd = function() {
          return '/';
        }),
        (p.chdir = function(e) {
          throw Error('process.chdir is not supported');
        }),
        (p.umask = function() {
          return 0;
        });
    },
    35: function(e, t, n) {
      'use strict';
      function r(e) {
        return o(void 0, e);
      }
      function o(e, t) {
        if (!(t instanceof Object)) return t;
        switch (t.constructor) {
          case Date:
            var n = t;
            return new Date(n.getTime());
          case Object:
            void 0 === e && (e = {});
            break;
          case Array:
            e = [];
            break;
          default:
            return t;
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = o(e[r], t[r]));
        return e;
      }
      function i(e, t, n) {
        e[t] = n;
      }
      (t.a = r), (t.b = o), (t.c = i);
    },
    56: function(e, t) {
      Array.prototype.findIndex ||
        Object.defineProperty(Array.prototype, 'findIndex', {
          value: function(e) {
            if (null == this)
              throw new TypeError('"this" is null or not defined');
            var t = Object(this),
              n = t.length >>> 0;
            if ('function' != typeof e)
              throw new TypeError('predicate must be a function');
            for (var r = arguments[1], o = 0; o < n; ) {
              var i = t[o];
              if (e.call(r, i, o, t)) return o;
              o++;
            }
            return -1;
          }
        }),
        Array.prototype.find ||
          Object.defineProperty(Array.prototype, 'find', {
            value: function(e) {
              if (null == this)
                throw new TypeError('"this" is null or not defined');
              var t = Object(this),
                n = t.length >>> 0;
              if ('function' != typeof e)
                throw new TypeError('predicate must be a function');
              for (var r = arguments[1], o = 0; o < n; ) {
                var i = t[o];
                if (e.call(r, i, o, t)) return i;
                o++;
              }
            }
          });
    },
    57: function(e, t, n) {
      (function(t) {
        !(function(n) {
          function r() {}
          function o(e, t) {
            return function() {
              e.apply(t, arguments);
            };
          }
          function i(e) {
            if ('object' != typeof this)
              throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof e) throw new TypeError('not a function');
            (this.t = 0),
              (this.r = !1),
              (this.u = void 0),
              (this.f = []),
              l(e, this);
          }
          function c(e, t) {
            for (; 3 === e.t; ) e = e.u;
            if (0 === e.t) return void e.f.push(t);
            (e.r = !0),
              i.h(function() {
                var n = 1 === e.t ? t.onFulfilled : t.onRejected;
                if (null === n) return void (1 === e.t ? s : a)(t.promise, e.u);
                var r;
                try {
                  r = n(e.u);
                } catch (e) {
                  return void a(t.promise, e);
                }
                s(t.promise, r);
              });
          }
          function s(e, t) {
            try {
              if (t === e)
                throw new TypeError(
                  'A promise cannot be resolved with itself.'
                );
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var n = t.then;
                if (t instanceof i) return (e.t = 3), (e.u = t), void u(e);
                if ('function' == typeof n) return void l(o(n, t), e);
              }
              (e.t = 1), (e.u = t), u(e);
            } catch (t) {
              a(e, t);
            }
          }
          function a(e, t) {
            (e.t = 2), (e.u = t), u(e);
          }
          function u(e) {
            2 === e.t &&
              0 === e.f.length &&
              i.h(function() {
                e.r || i.v(e.u);
              });
            for (var t = 0, n = e.f.length; t < n; t++) c(e, e.f[t]);
            e.f = null;
          }
          function f(e, t, n) {
            (this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof t ? t : null),
              (this.promise = n);
          }
          function l(e, t) {
            var n = !1;
            try {
              e(
                function(e) {
                  n || ((n = !0), s(t, e));
                },
                function(e) {
                  n || ((n = !0), a(t, e));
                }
              );
            } catch (e) {
              if (n) return;
              (n = !0), a(t, e);
            }
          }
          var p = setTimeout;
          (i.prototype.catch = function(e) {
            return this.then(null, e);
          }),
            (i.prototype.then = function(e, t) {
              var n = new this.constructor(r);
              return c(this, new f(e, t, n)), n;
            }),
            (i.all = function(e) {
              var t = Array.prototype.slice.call(e);
              return new i(function(e, n) {
                function r(i, c) {
                  try {
                    if (c && ('object' == typeof c || 'function' == typeof c)) {
                      var s = c.then;
                      if ('function' == typeof s)
                        return void s.call(
                          c,
                          function(e) {
                            r(i, e);
                          },
                          n
                        );
                    }
                    (t[i] = c), 0 == --o && e(t);
                  } catch (e) {
                    n(e);
                  }
                }
                if (0 === t.length) return e([]);
                for (var o = t.length, i = 0; i < t.length; i++) r(i, t[i]);
              });
            }),
            (i.resolve = function(e) {
              return e && 'object' == typeof e && e.constructor === i
                ? e
                : new i(function(t) {
                    t(e);
                  });
            }),
            (i.reject = function(e) {
              return new i(function(t, n) {
                n(e);
              });
            }),
            (i.race = function(e) {
              return new i(function(t, n) {
                for (var r = 0, o = e.length; r < o; r++) e[r].then(t, n);
              });
            }),
            (i.h =
              ('function' == typeof t &&
                function(e) {
                  t(e);
                }) ||
              function(e) {
                p(e, 0);
              }),
            (i.v = function(e) {
              'undefined' != typeof console &&
                console &&
                console.warn('Possible Unhandled Promise Rejection:', e);
            }),
            (i.y = function(e) {
              i.h = e;
            }),
            (i._ = function(e) {
              i.v = e;
            }),
            void 0 !== e && e.exports
              ? (e.exports = i)
              : n.Promise || (n.Promise = i);
        })(this);
      }.call(t, n(58).setImmediate));
    },
    58: function(t, n, r) {
      function o(e, t) {
        (this.g = e), (this.T = t);
      }
      var i = Function.prototype.apply;
      (n.setTimeout = function() {
        return new o(i.call(setTimeout, e, arguments), clearTimeout);
      }),
        (n.setInterval = function() {
          return new o(i.call(setInterval, e, arguments), clearInterval);
        }),
        (n.clearTimeout = n.clearInterval = function(e) {
          e && e.close();
        }),
        (o.prototype.unref = o.prototype.ref = function() {}),
        (o.prototype.close = function() {
          this.T.call(e, this.g);
        }),
        (n.enroll = function(e, t) {
          clearTimeout(e.w), (e.O = t);
        }),
        (n.unenroll = function(e) {
          clearTimeout(e.w), (e.O = -1);
        }),
        (n.j = n.active = function(e) {
          clearTimeout(e.w);
          var t = e.O;
          t >= 0 &&
            (e.w = setTimeout(function() {
              e.A && e.A();
            }, t));
        }),
        r(59),
        (n.setImmediate = setImmediate),
        (n.clearImmediate = clearImmediate);
    },
    59: function(e, t, n) {
      (function(e, t) {
        !(function(e, n) {
          'use strict';
          function r(e) {
            'function' != typeof e && (e = Function('' + e));
            for (var t = Array(arguments.length - 1), n = 0; n < t.length; n++)
              t[n] = arguments[n + 1];
            var r = { callback: e, args: t };
            return (u[a] = r), s(a), a++;
          }
          function o(e) {
            delete u[e];
          }
          function i(e) {
            var t = e.callback,
              r = e.args;
            switch (r.length) {
              case 0:
                t();
                break;
              case 1:
                t(r[0]);
                break;
              case 2:
                t(r[0], r[1]);
                break;
              case 3:
                t(r[0], r[1], r[2]);
                break;
              default:
                t.apply(n, r);
            }
          }
          function c(e) {
            if (f) setTimeout(c, 0, e);
            else {
              var t = u[e];
              if (t) {
                f = !0;
                try {
                  i(t);
                } finally {
                  o(e), (f = !1);
                }
              }
            }
          }
          if (!e.setImmediate) {
            var s,
              a = 1,
              u = {},
              f = !1,
              l = e.document,
              p = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (p = p && p.setTimeout ? p : e),
              '[object process]' === {}.toString.call(e.process)
                ? (function() {
                    s = function(e) {
                      t.nextTick(function() {
                        c(e);
                      });
                    };
                  })()
                : (function() {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        n = e.onmessage;
                      return (
                        (e.onmessage = function() {
                          t = !1;
                        }),
                        e.postMessage('', '*'),
                        (e.onmessage = n),
                        t
                      );
                    }
                  })()
                  ? (function() {
                      var t = 'setImmediate$' + Math.random() + '$',
                        n = function(n) {
                          n.source === e &&
                            'string' == typeof n.data &&
                            0 === n.data.indexOf(t) &&
                            c(+n.data.slice(t.length));
                        };
                      e.addEventListener
                        ? e.addEventListener('message', n, !1)
                        : e.attachEvent('onmessage', n),
                        (s = function(n) {
                          e.postMessage(t + n, '*');
                        });
                    })()
                  : e.MessageChannel
                    ? (function() {
                        var e = new MessageChannel();
                        (e.port1.onmessage = function(e) {
                          c(e.data);
                        }),
                          (s = function(t) {
                            e.port2.postMessage(t);
                          });
                      })()
                    : l && 'onreadystatechange' in l.createElement('script')
                      ? (function() {
                          var e = l.documentElement;
                          s = function(t) {
                            var n = l.createElement('script');
                            (n.onreadystatechange = function() {
                              c(t),
                                (n.onreadystatechange = null),
                                e.removeChild(n),
                                (n = null);
                            }),
                              e.appendChild(n);
                          };
                        })()
                      : (function() {
                          s = function(e) {
                            setTimeout(c, 0, e);
                          };
                        })(),
              (p.setImmediate = r),
              (p.clearImmediate = o);
          }
        })('undefined' == typeof self ? (void 0 === e ? this : e) : self);
      }.call(t, n(33), n(34)));
    },
    9: function(e, t, n) {
      'use strict';
      function r() {
        function e(e) {
          v(y[e], 'delete'), delete y[e];
        }
        function t(e) {
          return (e = e || f), u(y, e) || o('no-app', { name: e }), y[e];
        }
        function n(e, t) {
          void 0 === t
            ? (t = f)
            : ('string' == typeof t && '' !== t) ||
              o('bad-app-name', { name: t + '' }),
            u(y, t) && o('duplicate-app', { name: t });
          var n = new p(e, t, g);
          return (y[t] = n), v(n, 'create'), n;
        }
        function l() {
          return Object.keys(y).map(function(e) {
            return y[e];
          });
        }
        function h(e, n, r, i, c) {
          b[e] && o('duplicate-service', { name: e }),
            (b[e] = n),
            i &&
              ((_[e] = i),
              l().forEach(function(e) {
                i('create', e);
              }));
          var s = function(n) {
            return (
              void 0 === n && (n = t()),
              'function' != typeof n[e] &&
                o('invalid-app-argument', { name: e }),
              n[e]()
            );
          };
          return (
            void 0 !== r && Object(a.b)(s, r),
            (g[e] = s),
            (p.prototype[e] = function() {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return this.k.bind(this, e).apply(this, c ? t : []);
            }),
            s
          );
        }
        function d(e) {
          Object(a.b)(g, e);
        }
        function v(e, t) {
          Object.keys(b).forEach(function(n) {
            var r = m(e, n);
            null !== r && _[r] && _[r](t, e);
          });
        }
        function m(e, t) {
          if ('serverAuth' === t) return null;
          var n = t;
          return e.options, n;
        }
        var y = {},
          b = {},
          _ = {},
          g = {
            __esModule: !0,
            initializeApp: n,
            app: t,
            apps: null,
            Promise: s.b,
            SDK_VERSION: '4.5.0',
            INTERNAL: {
              registerService: h,
              createFirebaseNamespace: r,
              extendNamespace: d,
              createSubscribe: i.a,
              ErrorFactory: c.a,
              removeApp: e,
              factories: b,
              useAsService: m,
              Promise: s.b,
              deepExtend: a.b
            }
          };
        return (
          Object(a.c)(g, 'default', g),
          Object.defineProperty(g, 'apps', { get: l }),
          Object(a.c)(t, 'App', p),
          g
        );
      }
      function o(e, t) {
        throw d.create(e, t);
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (n(56), n(31)),
        c = n(24),
        s = n(3),
        a = n(35),
        u = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        },
        f = '[DEFAULT]',
        l = [],
        p = (function() {
          function e(e, t, n) {
            (this.I = n),
              (this.F = !1),
              (this.N = {}),
              (this.x = t),
              (this.P = Object(a.a)(e)),
              (this.INTERNAL = {
                getUid: function() {
                  return null;
                },
                getToken: function() {
                  return s.b.resolve(null);
                },
                addAuthTokenListener: function(e) {
                  l.push(e),
                    setTimeout(function() {
                      return e(null);
                    }, 0);
                },
                removeAuthTokenListener: function(e) {
                  l = l.filter(function(t) {
                    return t !== e;
                  });
                }
              });
          }
          return (
            Object.defineProperty(e.prototype, 'name', {
              get: function() {
                return this.L(), this.x;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'options', {
              get: function() {
                return this.L(), this.P;
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.delete = function() {
              var e = this;
              return new s.b(function(t) {
                e.L(), t();
              })
                .then(function() {
                  e.I.INTERNAL.removeApp(e.x);
                  var t = [];
                  return (
                    Object.keys(e.N).forEach(function(n) {
                      Object.keys(e.N[n]).forEach(function(r) {
                        t.push(e.N[n][r]);
                      });
                    }),
                    s.b.all(
                      t.map(function(e) {
                        return e.INTERNAL.delete();
                      })
                    )
                  );
                })
                .then(function() {
                  (e.F = !0), (e.N = {});
                });
            }),
            (e.prototype.k = function(e, t) {
              if (
                (void 0 === t && (t = f),
                this.L(),
                this.N[e] || (this.N[e] = {}),
                !this.N[e][t])
              ) {
                var n = t !== f ? t : void 0,
                  r = this.I.INTERNAL.factories[e](
                    this,
                    this.extendApp.bind(this),
                    n
                  );
                this.N[e][t] = r;
              }
              return this.N[e][t];
            }),
            (e.prototype.extendApp = function(e) {
              var t = this;
              Object(a.b)(this, e),
                e.INTERNAL &&
                  e.INTERNAL.addAuthTokenListener &&
                  (l.forEach(function(e) {
                    t.INTERNAL.addAuthTokenListener(e);
                  }),
                  (l = []));
            }),
            (e.prototype.L = function() {
              this.F && o('app-deleted', { name: this.x });
            }),
            e
          );
        })();
      (p.prototype.name && p.prototype.options) ||
        p.prototype.delete ||
        console.log('dc');
      var h = {
          'no-app':
            "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
          'bad-app-name': "Illegal App name: '{$name}",
          'duplicate-app': "Firebase App named '{$name}' already exists",
          'app-deleted': "Firebase App named '{$name}' already deleted",
          'duplicate-service':
            "Firebase service named '{$name}' already registered",
          'sa-not-supported':
            'Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain',
          'invalid-app-argument':
            'firebase.{$name}() takes either no argument or a Firebase App instance.'
        },
        d = new c.a('app', 'Firebase', h),
        v = r();
      t.default = v;
    }
  });
})().default;

(function() {
  var h,
    aa = aa || {},
    k = this,
    ba = function(a) {
      return void 0 !== a;
    },
    m = function(a) {
      return 'string' == typeof a;
    },
    ca = function(a) {
      return 'boolean' == typeof a;
    },
    da = function() {},
    ea = function(a) {
      var b = typeof a;
      if ('object' == b)
        if (a) {
          if (a instanceof Array) return 'array';
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ('[object Window]' == c) return 'object';
          if (
            '[object Array]' == c ||
            ('number' == typeof a.length &&
              'undefined' != typeof a.splice &&
              'undefined' != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable('splice'))
          )
            return 'array';
          if (
            '[object Function]' == c ||
            ('undefined' != typeof a.call &&
              'undefined' != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable('call'))
          )
            return 'function';
        } else return 'null';
      else if ('function' == b && 'undefined' == typeof a.call) return 'object';
      return b;
    },
    fa = function(a) {
      return null === a;
    },
    ha = function(a) {
      return 'array' == ea(a);
    },
    ia = function(a) {
      var b = ea(a);
      return 'array' == b || ('object' == b && 'number' == typeof a.length);
    },
    p = function(a) {
      return 'function' == ea(a);
    },
    q = function(a) {
      var b = typeof a;
      return ('object' == b && null != a) || 'function' == b;
    },
    ja = function(a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    ka = function(a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c);
        };
      }
      return function() {
        return a.apply(b, arguments);
      };
    },
    r = function(a, b, c) {
      r =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf('native code')
          ? ja
          : ka;
      return r.apply(null, arguments);
    },
    la = function(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b);
      };
    },
    ma =
      Date.now ||
      function() {
        return +new Date();
      },
    t = function(a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.Vc = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.Ng = function(a, c, f) {
        for (
          var d = Array(arguments.length - 2), e = 2;
          e < arguments.length;
          e++
        )
          d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d);
      };
    };
  var u = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, u);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  };
  t(u, Error);
  u.prototype.name = 'CustomError';
  var na = function(a, b) {
      for (
        var c = a.split('%s'),
          d = '',
          e = Array.prototype.slice.call(arguments, 1);
        e.length && 1 < c.length;

      )
        d += c.shift() + e.shift();
      return d + c.join('%s');
    },
    oa = String.prototype.trim
      ? function(a) {
          return a.trim();
        }
      : function(a) {
          return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
        },
    wa = function(a) {
      if (!pa.test(a)) return a;
      -1 != a.indexOf('&') && (a = a.replace(qa, '&amp;'));
      -1 != a.indexOf('<') && (a = a.replace(ra, '&lt;'));
      -1 != a.indexOf('>') && (a = a.replace(sa, '&gt;'));
      -1 != a.indexOf('"') && (a = a.replace(ta, '&quot;'));
      -1 != a.indexOf("'") && (a = a.replace(ua, '&#39;'));
      -1 != a.indexOf('\x00') && (a = a.replace(va, '&#0;'));
      return a;
    },
    qa = /&/g,
    ra = /</g,
    sa = />/g,
    ta = /"/g,
    ua = /'/g,
    va = /\x00/g,
    pa = /[\x00&<>"']/,
    v = function(a, b) {
      return -1 != a.indexOf(b);
    },
    xa = function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var ya = function(a, b) {
    b.unshift(a);
    u.call(this, na.apply(null, b));
    b.shift();
  };
  t(ya, u);
  ya.prototype.name = 'AssertionError';
  var za = function(a, b, c, d) {
      var e = 'Assertion failed';
      if (c) {
        e += ': ' + c;
        var f = d;
      } else a && ((e += ': ' + a), (f = b));
      throw new ya('' + e, f || []);
    },
    w = function(a, b, c) {
      a || za('', null, b, Array.prototype.slice.call(arguments, 2));
      return a;
    },
    Aa = function(a, b) {
      throw new ya(
        'Failure' + (a ? ': ' + a : ''),
        Array.prototype.slice.call(arguments, 1)
      );
    },
    Ba = function(a, b, c) {
      'number' == typeof a ||
        za(
          'Expected number but got %s: %s.',
          [ea(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        );
      return a;
    },
    Ca = function(a, b, c) {
      m(a) ||
        za(
          'Expected string but got %s: %s.',
          [ea(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        );
    },
    Da = function(a, b, c) {
      p(a) ||
        za(
          'Expected function but got %s: %s.',
          [ea(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        );
    };
  var Fa = function() {
    this.Uc = '';
    this.gf = Ea;
  };
  Fa.prototype.qb = !0;
  Fa.prototype.ob = function() {
    return this.Uc;
  };
  Fa.prototype.toString = function() {
    return 'Const{' + this.Uc + '}';
  };
  var Ga = function(a) {
      if (a instanceof Fa && a.constructor === Fa && a.gf === Ea) return a.Uc;
      Aa("expected object of type Const, got '" + a + "'");
      return 'type_error:Const';
    },
    Ea = {},
    Ha = function(a) {
      var b = new Fa();
      b.Uc = a;
      return b;
    };
  Ha('');
  var Ja = function() {
    this.Mc = '';
    this.hf = Ia;
  };
  Ja.prototype.qb = !0;
  Ja.prototype.ob = function() {
    return this.Mc;
  };
  Ja.prototype.toString = function() {
    return 'TrustedResourceUrl{' + this.Mc + '}';
  };
  var Ka = function(a) {
      if (a instanceof Ja && a.constructor === Ja && a.hf === Ia) return a.Mc;
      Aa(
        "expected object of type TrustedResourceUrl, got '" +
          a +
          "' of type " +
          ea(a)
      );
      return 'type_error:TrustedResourceUrl';
    },
    Ma = function(a, b) {
      a = La(a, b);
      b = new Ja();
      b.Mc = a;
      return b;
    },
    La = function(a, b) {
      var c = Ga(a);
      if (!Na.test(c)) throw Error('Invalid TrustedResourceUrl format: ' + c);
      return c.replace(Oa, function(a, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e))
          throw Error(
            'Found marker, "' +
              e +
              '", in format string, "' +
              c +
              '", but no valid label mapping found in args: ' +
              JSON.stringify(b)
          );
        a = b[e];
        return a instanceof Fa ? Ga(a) : encodeURIComponent(String(a));
      });
    },
    Oa = /%{(\w+)}/g,
    Na = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i,
    Ia = {};
  var Pa = Array.prototype.indexOf
      ? function(a, b, c) {
          w(null != a.length);
          return Array.prototype.indexOf.call(a, b, c);
        }
      : function(a, b, c) {
          c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
          if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;
          for (; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    x = Array.prototype.forEach
      ? function(a, b, c) {
          w(null != a.length);
          Array.prototype.forEach.call(a, b, c);
        }
      : function(a, b, c) {
          for (var d = a.length, e = m(a) ? a.split('') : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a);
        },
    Qa = function(a, b) {
      for (var c = m(a) ? a.split('') : a, d = a.length - 1; 0 <= d; --d)
        d in c && b.call(void 0, c[d], d, a);
    },
    Ra = Array.prototype.map
      ? function(a, b, c) {
          w(null != a.length);
          return Array.prototype.map.call(a, b, c);
        }
      : function(a, b, c) {
          for (
            var d = a.length, e = Array(d), f = m(a) ? a.split('') : a, g = 0;
            g < d;
            g++
          )
            g in f && (e[g] = b.call(c, f[g], g, a));
          return e;
        },
    Sa = Array.prototype.some
      ? function(a, b, c) {
          w(null != a.length);
          return Array.prototype.some.call(a, b, c);
        }
      : function(a, b, c) {
          for (var d = a.length, e = m(a) ? a.split('') : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
          return !1;
        },
    Ua = function(a) {
      a: {
        var b = Ta;
        for (var c = a.length, d = m(a) ? a.split('') : a, e = 0; e < c; e++)
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
          }
        b = -1;
      }
      return 0 > b ? null : m(a) ? a.charAt(b) : a[b];
    },
    Va = function(a, b) {
      return 0 <= Pa(a, b);
    },
    Xa = function(a, b) {
      b = Pa(a, b);
      var c;
      (c = 0 <= b) && Wa(a, b);
      return c;
    },
    Wa = function(a, b) {
      w(null != a.length);
      return 1 == Array.prototype.splice.call(a, b, 1).length;
    },
    Ya = function(a, b) {
      var c = 0;
      Qa(a, function(d, e) {
        b.call(void 0, d, e, a) && Wa(a, e) && c++;
      });
    },
    Za = function(a) {
      return Array.prototype.concat.apply([], arguments);
    },
    $a = function(a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c;
      }
      return [];
    };
  var ab = function(a) {
    return Ra(a, function(a) {
      a = a.toString(16);
      return 1 < a.length ? a : '0' + a;
    }).join('');
  };
  var bb;
  a: {
    var cb = k.navigator;
    if (cb) {
      var db = cb.userAgent;
      if (db) {
        bb = db;
        break a;
      }
    }
    bb = '';
  }
  var y = function(a) {
    return v(bb, a);
  };
  var eb = function(a, b) {
      for (var c in a) b.call(void 0, a[c], c, a);
    },
    fb = function(a, b) {
      for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
      return !1;
    },
    gb = function(a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = a[d];
      return b;
    },
    hb = function(a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = d;
      return b;
    },
    ib = function(a) {
      for (var b in a) return !1;
      return !0;
    },
    jb = function(a, b) {
      for (var c in a) if (!(c in b) || a[c] !== b[c]) return !1;
      for (c in b) if (!(c in a)) return !1;
      return !0;
    },
    kb = function(a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    },
    lb = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' '
    ),
    mb = function(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < lb.length; f++)
          (c = lb[f]),
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    };
  var nb = function(a) {
    nb[' '](a);
    return a;
  };
  nb[' '] = da;
  var pb = function(a, b) {
    var c = ob;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
  };
  var qb = y('Opera'),
    z = y('Trident') || y('MSIE'),
    rb = y('Edge'),
    sb = rb || z,
    tb =
      y('Gecko') &&
      !(v(bb.toLowerCase(), 'webkit') && !y('Edge')) &&
      !(y('Trident') || y('MSIE')) &&
      !y('Edge'),
    ub = v(bb.toLowerCase(), 'webkit') && !y('Edge'),
    vb = function() {
      var a = k.document;
      return a ? a.documentMode : void 0;
    },
    wb;
  a: {
    var xb = '',
      yb = (function() {
        var a = bb;
        if (tb) return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (rb) return /Edge\/([\d\.]+)/.exec(a);
        if (z) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (ub) return /WebKit\/(\S+)/.exec(a);
        if (qb) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    yb && (xb = yb ? yb[1] : '');
    if (z) {
      var Ab = vb();
      if (null != Ab && Ab > parseFloat(xb)) {
        wb = String(Ab);
        break a;
      }
    }
    wb = xb;
  }
  var Bb = wb,
    ob = {},
    A = function(a) {
      return pb(a, function() {
        for (
          var b = 0,
            c = oa(String(Bb)).split('.'),
            d = oa(String(a)).split('.'),
            e = Math.max(c.length, d.length),
            f = 0;
          0 == b && f < e;
          f++
        ) {
          var g = c[f] || '',
            l = d[f] || '';
          do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
            l = /(\d*)(\D*)(.*)/.exec(l) || ['', '', '', ''];
            if (0 == g[0].length && 0 == l[0].length) break;
            b =
              xa(
                0 == g[1].length ? 0 : parseInt(g[1], 10),
                0 == l[1].length ? 0 : parseInt(l[1], 10)
              ) ||
              xa(0 == g[2].length, 0 == l[2].length) ||
              xa(g[2], l[2]);
            g = g[3];
            l = l[3];
          } while (0 == b);
        }
        return 0 <= b;
      });
    },
    Cb;
  var Db = k.document;
  Cb =
    Db && z
      ? vb() || ('CSS1Compat' == Db.compatMode ? parseInt(Bb, 10) : 5)
      : void 0;
  var Eb = null,
    Fb = null,
    Hb = function(a) {
      var b = '';
      Gb(a, function(a) {
        b += String.fromCharCode(a);
      });
      return b;
    },
    Gb = function(a, b) {
      function c(b) {
        for (; d < a.length; ) {
          var c = a.charAt(d++),
            e = Fb[c];
          if (null != e) return e;
          if (!/^[\s\xa0]*$/.test(c))
            throw Error('Unknown base64 encoding at char: ' + c);
        }
        return b;
      }
      Ib();
      for (var d = 0; ; ) {
        var e = c(-1),
          f = c(0),
          g = c(64),
          l = c(64);
        if (64 === l && -1 === e) break;
        b((e << 2) | (f >> 4));
        64 != g &&
          (b(((f << 4) & 240) | (g >> 2)), 64 != l && b(((g << 6) & 192) | l));
      }
    },
    Ib = function() {
      if (!Eb) {
        Eb = {};
        Fb = {};
        for (var a = 0; 65 > a; a++)
          (Eb[
            a
          ] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(
            a
          )),
            (Fb[Eb[a]] = a),
            62 <= a &&
              (Fb[
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.'.charAt(
                  a
                )
              ] = a);
      }
    };
  var Jb = function() {
    this.Da = -1;
  };
  var Mb = function(a, b) {
      this.Da = -1;
      this.Da = 64;
      this.rc = k.Uint8Array ? new Uint8Array(this.Da) : Array(this.Da);
      this.Yc = this.rb = 0;
      this.l = [];
      this.$f = a;
      this.Ee = b;
      this.Bg = k.Int32Array ? new Int32Array(64) : Array(64);
      ba(Kb) || (Kb = k.Int32Array ? new Int32Array(Lb) : Lb);
      this.reset();
    },
    Kb;
  t(Mb, Jb);
  for (var Nb = [], Ob = 0; 63 > Ob; Ob++) Nb[Ob] = 0;
  var Pb = Za(128, Nb);
  Mb.prototype.reset = function() {
    this.Yc = this.rb = 0;
    this.l = k.Int32Array ? new Int32Array(this.Ee) : $a(this.Ee);
  };
  var Qb = function(a) {
    var b = a.rc;
    w(b.length == a.Da);
    for (var c = a.Bg, d = 0, e = 0; e < b.length; )
      (c[d++] = (b[e] << 24) | (b[e + 1] << 16) | (b[e + 2] << 8) | b[e + 3]),
        (e = 4 * d);
    for (b = 16; 64 > b; b++) {
      e = c[b - 15] | 0;
      d = c[b - 2] | 0;
      var f =
          ((c[b - 16] | 0) +
            (((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3))) |
          0,
        g =
          ((c[b - 7] | 0) +
            (((d >>> 17) | (d << 15)) ^
              ((d >>> 19) | (d << 13)) ^
              (d >>> 10))) |
          0;
      c[b] = (f + g) | 0;
    }
    d = a.l[0] | 0;
    e = a.l[1] | 0;
    var l = a.l[2] | 0,
      n = a.l[3] | 0,
      F = a.l[4] | 0,
      zb = a.l[5] | 0,
      hc = a.l[6] | 0;
    f = a.l[7] | 0;
    for (b = 0; 64 > b; b++) {
      var vi =
        ((((d >>> 2) | (d << 30)) ^
          ((d >>> 13) | (d << 19)) ^
          ((d >>> 22) | (d << 10))) +
          ((d & e) ^ (d & l) ^ (e & l))) |
        0;
      g = (F & zb) ^ (~F & hc);
      f =
        (f +
          (((F >>> 6) | (F << 26)) ^
            ((F >>> 11) | (F << 21)) ^
            ((F >>> 25) | (F << 7)))) |
        0;
      g = (g + (Kb[b] | 0)) | 0;
      g = (f + ((g + (c[b] | 0)) | 0)) | 0;
      f = hc;
      hc = zb;
      zb = F;
      F = (n + g) | 0;
      n = l;
      l = e;
      e = d;
      d = (g + vi) | 0;
    }
    a.l[0] = (a.l[0] + d) | 0;
    a.l[1] = (a.l[1] + e) | 0;
    a.l[2] = (a.l[2] + l) | 0;
    a.l[3] = (a.l[3] + n) | 0;
    a.l[4] = (a.l[4] + F) | 0;
    a.l[5] = (a.l[5] + zb) | 0;
    a.l[6] = (a.l[6] + hc) | 0;
    a.l[7] = (a.l[7] + f) | 0;
  };
  Mb.prototype.update = function(a, b) {
    ba(b) || (b = a.length);
    var c = 0,
      d = this.rb;
    if (m(a))
      for (; c < b; )
        (this.rc[d++] = a.charCodeAt(c++)), d == this.Da && (Qb(this), (d = 0));
    else if (ia(a))
      for (; c < b; ) {
        var e = a[c++];
        if (!('number' == typeof e && 0 <= e && 255 >= e && e == (e | 0)))
          throw Error('message must be a byte array');
        this.rc[d++] = e;
        d == this.Da && (Qb(this), (d = 0));
      }
    else throw Error('message must be string or array');
    this.rb = d;
    this.Yc += b;
  };
  Mb.prototype.digest = function() {
    var a = [],
      b = 8 * this.Yc;
    56 > this.rb
      ? this.update(Pb, 56 - this.rb)
      : this.update(Pb, this.Da - (this.rb - 56));
    for (var c = 63; 56 <= c; c--) (this.rc[c] = b & 255), (b /= 256);
    Qb(this);
    for (c = b = 0; c < this.$f; c++)
      for (var d = 24; 0 <= d; d -= 8) a[b++] = (this.l[c] >> d) & 255;
    return a;
  };
  var Lb = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ];
  var Sb = function() {
    Mb.call(this, 8, Rb);
  };
  t(Sb, Mb);
  var Rb = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ];
  var Tb =
    Object.freeze ||
    function(a) {
      return a;
    };
  var Ub = function() {
    this.Ma = this.Ma;
    this.Jc = this.Jc;
  };
  Ub.prototype.Ma = !1;
  Ub.prototype.isDisposed = function() {
    return this.Ma;
  };
  Ub.prototype.lb = function() {
    if (this.Jc) for (; this.Jc.length; ) this.Jc.shift()();
  };
  var Vb = !z || 9 <= Number(Cb),
    Wb = z && !A('9');
  !ub || A('528');
  (tb && A('1.9b')) || (z && A('8')) || (qb && A('9.5')) || (ub && A('528'));
  (tb && !A('8')) || (z && A('9'));
  var Xb = (function() {
    if (!k.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, 'passive', {
        get: function() {
          a = !0;
        }
      });
    k.addEventListener('test', da, b);
    k.removeEventListener('test', da, b);
    return a;
  })();
  var B = function(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.Wa = !1;
    this.Se = !0;
  };
  B.prototype.stopPropagation = function() {
    this.Wa = !0;
  };
  B.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.Se = !1;
  };
  var Yb = function(a, b) {
    B.call(this, a ? a.type : '');
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = '';
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = '';
    this.P = null;
    a && this.init(a, b);
  };
  t(Yb, B);
  var Zb = Tb({ 2: 'touch', 3: 'pen', 4: 'mouse' });
  Yb.prototype.init = function(a, b) {
    var c = (this.type = a.type),
      d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if ((b = a.relatedTarget)) {
      if (tb) {
        a: {
          try {
            nb(b.nodeName);
            var e = !0;
            break a;
          } catch (f) {}
          e = !1;
        }
        e || (b = null);
      }
    } else
      'mouseover' == c
        ? (b = a.fromElement)
        : 'mouseout' == c && (b = a.toElement);
    this.relatedTarget = b;
    null === d
      ? ((this.offsetX = ub || void 0 !== a.offsetX ? a.offsetX : a.layerX),
        (this.offsetY = ub || void 0 !== a.offsetY ? a.offsetY : a.layerY),
        (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0))
      : ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0));
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || '';
    this.charCode = a.charCode || ('keypress' == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = m(a.pointerType)
      ? a.pointerType
      : Zb[a.pointerType] || '';
    this.state = a.state;
    this.P = a;
    a.defaultPrevented && this.preventDefault();
  };
  Yb.prototype.stopPropagation = function() {
    Yb.Vc.stopPropagation.call(this);
    this.P.stopPropagation
      ? this.P.stopPropagation()
      : (this.P.cancelBubble = !0);
  };
  Yb.prototype.preventDefault = function() {
    Yb.Vc.preventDefault.call(this);
    var a = this.P;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), Wb))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
      } catch (b) {}
  };
  Yb.prototype.Ef = function() {
    return this.P;
  };
  var $b = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
    ac = 0;
  var bc = function(a, b, c, d, e) {
      this.listener = a;
      this.Nc = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.wc = e;
      this.key = ++ac;
      this.Bb = this.qc = !1;
    },
    cc = function(a) {
      a.Bb = !0;
      a.listener = null;
      a.Nc = null;
      a.src = null;
      a.wc = null;
    };
  var dc = function(a) {
    this.src = a;
    this.I = {};
    this.kc = 0;
  };
  dc.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.I[f];
    a || ((a = this.I[f] = []), this.kc++);
    var g = ec(a, b, d, e);
    -1 < g
      ? ((b = a[g]), c || (b.qc = !1))
      : ((b = new bc(b, this.src, f, !!d, e)), (b.qc = c), a.push(b));
    return b;
  };
  dc.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.I)) return !1;
    var e = this.I[a];
    b = ec(e, b, c, d);
    return -1 < b
      ? (cc(e[b]), Wa(e, b), 0 == e.length && (delete this.I[a], this.kc--), !0)
      : !1;
  };
  var fc = function(a, b) {
    var c = b.type;
    c in a.I &&
      Xa(a.I[c], b) &&
      (cc(b), 0 == a.I[c].length && (delete a.I[c], a.kc--));
  };
  dc.prototype.td = function(a, b, c, d) {
    a = this.I[a.toString()];
    var e = -1;
    a && (e = ec(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  dc.prototype.hasListener = function(a, b) {
    var c = ba(a),
      d = c ? a.toString() : '',
      e = ba(b);
    return fb(this.I, function(a) {
      for (var f = 0; f < a.length; ++f)
        if (!((c && a[f].type != d) || (e && a[f].capture != b))) return !0;
      return !1;
    });
  };
  var ec = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Bb && f.listener == b && f.capture == !!c && f.wc == d) return e;
    }
    return -1;
  };
  var gc = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    ic = {},
    jc = 0,
    lc = function(a, b, c, d, e) {
      if (d && d.once) kc(a, b, c, d, e);
      else if (ha(b)) for (var f = 0; f < b.length; f++) lc(a, b[f], c, d, e);
      else
        (c = mc(c)),
          a && a[$b]
            ? a.listen(b, c, q(d) ? !!d.capture : !!d, e)
            : nc(a, b, c, !1, d, e);
    },
    nc = function(a, b, c, d, e, f) {
      if (!b) throw Error('Invalid event type');
      var g = q(e) ? !!e.capture : !!e,
        l = oc(a);
      l || (a[gc] = l = new dc(a));
      c = l.add(b, c, d, g, f);
      if (!c.Nc) {
        d = pc();
        c.Nc = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
          Xb || (e = g),
            void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(qc(b.toString()), d);
        else throw Error('addEventListener and attachEvent are unavailable.');
        jc++;
      }
    },
    pc = function() {
      var a = rc,
        b = Vb
          ? function(c) {
              return a.call(b.src, b.listener, c);
            }
          : function(c) {
              c = a.call(b.src, b.listener, c);
              if (!c) return c;
            };
      return b;
    },
    kc = function(a, b, c, d, e) {
      if (ha(b)) for (var f = 0; f < b.length; f++) kc(a, b[f], c, d, e);
      else
        (c = mc(c)),
          a && a[$b]
            ? sc(a, b, c, q(d) ? !!d.capture : !!d, e)
            : nc(a, b, c, !0, d, e);
    },
    tc = function(a, b, c, d, e) {
      if (ha(b)) for (var f = 0; f < b.length; f++) tc(a, b[f], c, d, e);
      else
        (d = q(d) ? !!d.capture : !!d),
          (c = mc(c)),
          a && a[$b]
            ? a.ga.remove(String(b), c, d, e)
            : a && (a = oc(a)) && (b = a.td(b, c, d, e)) && uc(b);
    },
    uc = function(a) {
      if ('number' != typeof a && a && !a.Bb) {
        var b = a.src;
        if (b && b[$b]) fc(b.ga, a);
        else {
          var c = a.type,
            d = a.Nc;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent && b.detachEvent(qc(c), d);
          jc--;
          (c = oc(b))
            ? (fc(c, a), 0 == c.kc && ((c.src = null), (b[gc] = null)))
            : cc(a);
        }
      }
    },
    qc = function(a) {
      return a in ic ? ic[a] : (ic[a] = 'on' + a);
    },
    wc = function(a, b, c, d) {
      var e = !0;
      if ((a = oc(a)))
        if ((b = a.I[b.toString()]))
          for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f &&
              f.capture == c &&
              !f.Bb &&
              ((f = vc(f, d)), (e = e && !1 !== f));
          }
      return e;
    },
    vc = function(a, b) {
      var c = a.listener,
        d = a.wc || a.src;
      a.qc && uc(a);
      return c.call(d, b);
    },
    rc = function(a, b) {
      if (a.Bb) return !0;
      if (!Vb) {
        if (!b)
          a: {
            b = ['window', 'event'];
            for (var c = k, d = 0; d < b.length; d++)
              if (((c = c[b[d]]), null == c)) {
                b = null;
                break a;
              }
            b = c;
          }
        d = b;
        b = new Yb(d, this);
        c = !0;
        if (!(0 > d.keyCode || void 0 != d.returnValue)) {
          a: {
            var e = !1;
            if (0 == d.keyCode)
              try {
                d.keyCode = -1;
                break a;
              } catch (g) {
                e = !0;
              }
            if (e || void 0 == d.returnValue) d.returnValue = !0;
          }
          d = [];
          for (e = b.currentTarget; e; e = e.parentNode) d.push(e);
          a = a.type;
          for (e = d.length - 1; !b.Wa && 0 <= e; e--) {
            b.currentTarget = d[e];
            var f = wc(d[e], a, !0, b);
            c = c && f;
          }
          for (e = 0; !b.Wa && e < d.length; e++)
            (b.currentTarget = d[e]), (f = wc(d[e], a, !1, b)), (c = c && f);
        }
        return c;
      }
      return vc(a, new Yb(b, this));
    },
    oc = function(a) {
      a = a[gc];
      return a instanceof dc ? a : null;
    },
    xc = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0),
    mc = function(a) {
      w(a, 'Listener can not be null.');
      if (p(a)) return a;
      w(a.handleEvent, 'An object listener must have handleEvent method.');
      a[xc] ||
        (a[xc] = function(b) {
          return a.handleEvent(b);
        });
      return a[xc];
    };
  var yc = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
  var Ac = function() {
    this.xa = '';
    this.ff = zc;
  };
  Ac.prototype.qb = !0;
  Ac.prototype.ob = function() {
    return this.xa;
  };
  Ac.prototype.toString = function() {
    return 'SafeUrl{' + this.xa + '}';
  };
  var Bc = function(a) {
      if (a instanceof Ac && a.constructor === Ac && a.ff === zc) return a.xa;
      Aa("expected object of type SafeUrl, got '" + a + "' of type " + ea(a));
      return 'type_error:SafeUrl';
    },
    Cc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Ec = function(a) {
      if (a instanceof Ac) return a;
      a = a.qb ? a.ob() : String(a);
      Cc.test(a) || (a = 'about:invalid#zClosurez');
      return Dc(a);
    },
    zc = {},
    Dc = function(a) {
      var b = new Ac();
      b.xa = a;
      return b;
    };
  Dc('about:blank');
  var Hc = function(a) {
      var b = [];
      Fc(new Gc(), a, b);
      return b.join('');
    },
    Gc = function() {
      this.Oc = void 0;
    },
    Fc = function(a, b, c) {
      if (null == b) c.push('null');
      else {
        if ('object' == typeof b) {
          if (ha(b)) {
            var d = b;
            b = d.length;
            c.push('[');
            for (var e = '', f = 0; f < b; f++)
              c.push(e),
                (e = d[f]),
                Fc(a, a.Oc ? a.Oc.call(d, String(f), e) : e, c),
                (e = ',');
            c.push(']');
            return;
          }
          if (
            b instanceof String ||
            b instanceof Number ||
            b instanceof Boolean
          )
            b = b.valueOf();
          else {
            c.push('{');
            f = '';
            for (d in b)
              Object.prototype.hasOwnProperty.call(b, d) &&
                ((e = b[d]),
                'function' != typeof e &&
                  (c.push(f),
                  Ic(d, c),
                  c.push(':'),
                  Fc(a, a.Oc ? a.Oc.call(b, d, e) : e, c),
                  (f = ',')));
            c.push('}');
            return;
          }
        }
        switch (typeof b) {
          case 'string':
            Ic(b, c);
            break;
          case 'number':
            c.push(isFinite(b) && !isNaN(b) ? String(b) : 'null');
            break;
          case 'boolean':
            c.push(String(b));
            break;
          case 'function':
            c.push('null');
            break;
          default:
            throw Error('Unknown type: ' + typeof b);
        }
      }
    },
    Jc = {
      '"': '\\"',
      '\\': '\\\\',
      '/': '\\/',
      '\b': '\\b',
      '\f': '\\f',
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '\x0B': '\\u000b'
    },
    Kc = /\uffff/.test('\uffff')
      ? /[\\\"\x00-\x1f\x7f-\uffff]/g
      : /[\\\"\x00-\x1f\x7f-\xff]/g,
    Ic = function(a, b) {
      b.push(
        '"',
        a.replace(Kc, function(a) {
          var b = Jc[a];
          b ||
            ((b = '\\u' + (a.charCodeAt(0) | 65536).toString(16).substr(1)),
            (Jc[a] = b));
          return b;
        }),
        '"'
      );
    };
  var Lc = function() {};
  Lc.prototype.ie = null;
  var Mc = function(a) {
    return a.ie || (a.ie = a.Cd());
  };
  var Nc,
    Oc = function() {};
  t(Oc, Lc);
  Oc.prototype.sc = function() {
    var a = Pc(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest();
  };
  Oc.prototype.Cd = function() {
    var a = {};
    Pc(this) && ((a[0] = !0), (a[1] = !0));
    return a;
  };
  var Pc = function(a) {
    if (
      !a.De &&
      'undefined' == typeof XMLHttpRequest &&
      'undefined' != typeof ActiveXObject
    ) {
      for (
        var b = [
            'MSXML2.XMLHTTP.6.0',
            'MSXML2.XMLHTTP.3.0',
            'MSXML2.XMLHTTP',
            'Microsoft.XMLHTTP'
          ],
          c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c];
        try {
          return new ActiveXObject(d), (a.De = d);
        } catch (e) {}
      }
      throw Error(
        'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed'
      );
    }
    return a.De;
  };
  Nc = new Oc();
  var Qc = function() {};
  t(Qc, Lc);
  Qc.prototype.sc = function() {
    var a = new XMLHttpRequest();
    if ('withCredentials' in a) return a;
    if ('undefined' != typeof XDomainRequest) return new Rc();
    throw Error('Unsupported browser');
  };
  Qc.prototype.Cd = function() {
    return {};
  };
  var Rc = function() {
    this.oa = new XDomainRequest();
    this.readyState = 0;
    this.onreadystatechange = null;
    this.responseText = '';
    this.status = -1;
    this.statusText = this.responseXML = null;
    this.oa.onload = r(this.If, this);
    this.oa.onerror = r(this.ye, this);
    this.oa.onprogress = r(this.Jf, this);
    this.oa.ontimeout = r(this.Kf, this);
  };
  h = Rc.prototype;
  h.open = function(a, b, c) {
    if (null != c && !c) throw Error('Only async requests are supported.');
    this.oa.open(a, b);
  };
  h.send = function(a) {
    if (a)
      if ('string' == typeof a) this.oa.send(a);
      else throw Error('Only string data is supported');
    else this.oa.send();
  };
  h.abort = function() {
    this.oa.abort();
  };
  h.setRequestHeader = function() {};
  h.getResponseHeader = function(a) {
    return 'content-type' == a.toLowerCase() ? this.oa.contentType : '';
  };
  h.If = function() {
    this.status = 200;
    this.responseText = this.oa.responseText;
    Sc(this, 4);
  };
  h.ye = function() {
    this.status = 500;
    this.responseText = '';
    Sc(this, 4);
  };
  h.Kf = function() {
    this.ye();
  };
  h.Jf = function() {
    this.status = 200;
    Sc(this, 1);
  };
  var Sc = function(a, b) {
    a.readyState = b;
    if (a.onreadystatechange) a.onreadystatechange();
  };
  Rc.prototype.getAllResponseHeaders = function() {
    return 'content-type: ' + this.oa.contentType;
  };
  var Tc = function(a, b, c) {
    this.Vf = c;
    this.tf = a;
    this.kg = b;
    this.Ic = 0;
    this.xc = null;
  };
  Tc.prototype.get = function() {
    if (0 < this.Ic) {
      this.Ic--;
      var a = this.xc;
      this.xc = a.next;
      a.next = null;
    } else a = this.tf();
    return a;
  };
  Tc.prototype.put = function(a) {
    this.kg(a);
    this.Ic < this.Vf && (this.Ic++, (a.next = this.xc), (this.xc = a));
  };
  var Uc = function(a) {
      k.setTimeout(function() {
        throw a;
      }, 0);
    },
    Vc,
    Wc = function() {
      var a = k.MessageChannel;
      'undefined' === typeof a &&
        'undefined' !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !y('Presto') &&
        (a = function() {
          var a = document.createElement('IFRAME');
          a.style.display = 'none';
          a.src = '';
          document.documentElement.appendChild(a);
          var b = a.contentWindow;
          a = b.document;
          a.open();
          a.write('');
          a.close();
          var c = 'callImmediate' + Math.random(),
            d =
              'file:' == b.location.protocol
                ? '*'
                : b.location.protocol + '//' + b.location.host;
          a = r(function(a) {
            if (('*' == d || a.origin == d) && a.data == c)
              this.port1.onmessage();
          }, this);
          b.addEventListener('message', a, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function() {
              b.postMessage(c, d);
            }
          };
        });
      if ('undefined' !== typeof a && !y('Trident') && !y('MSIE')) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function() {
          if (ba(c.next)) {
            c = c.next;
            var a = c.me;
            c.me = null;
            a();
          }
        };
        return function(a) {
          d.next = { me: a };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return 'undefined' !== typeof document &&
        'onreadystatechange' in document.createElement('SCRIPT')
        ? function(a) {
            var b = document.createElement('SCRIPT');
            b.onreadystatechange = function() {
              b.onreadystatechange = null;
              b.parentNode.removeChild(b);
              b = null;
              a();
              a = null;
            };
            document.documentElement.appendChild(b);
          }
        : function(a) {
            k.setTimeout(a, 0);
          };
    };
  var Xc = function() {
      this.cd = this.hb = null;
    },
    Zc = new Tc(
      function() {
        return new Yc();
      },
      function(a) {
        a.reset();
      },
      100
    );
  Xc.prototype.add = function(a, b) {
    var c = Zc.get();
    c.set(a, b);
    this.cd ? (this.cd.next = c) : (w(!this.hb), (this.hb = c));
    this.cd = c;
  };
  Xc.prototype.remove = function() {
    var a = null;
    this.hb &&
      ((a = this.hb),
      (this.hb = this.hb.next),
      this.hb || (this.cd = null),
      (a.next = null));
    return a;
  };
  var Yc = function() {
    this.next = this.scope = this.rd = null;
  };
  Yc.prototype.set = function(a, b) {
    this.rd = a;
    this.scope = b;
    this.next = null;
  };
  Yc.prototype.reset = function() {
    this.next = this.scope = this.rd = null;
  };
  var dd = function(a, b) {
      $c || ad();
      bd || ($c(), (bd = !0));
      cd.add(a, b);
    },
    $c,
    ad = function() {
      if (-1 != String(k.Promise).indexOf('[native code]')) {
        var a = k.Promise.resolve(void 0);
        $c = function() {
          a.then(ed);
        };
      } else
        $c = function() {
          var a = ed;
          !p(k.setImmediate) ||
          (k.Window &&
            k.Window.prototype &&
            !y('Edge') &&
            k.Window.prototype.setImmediate == k.setImmediate)
            ? (Vc || (Vc = Wc()), Vc(a))
            : k.setImmediate(a);
        };
    },
    bd = !1,
    cd = new Xc(),
    ed = function() {
      for (var a; (a = cd.remove()); ) {
        try {
          a.rd.call(a.scope);
        } catch (b) {
          Uc(b);
        }
        Zc.put(a);
      }
      bd = !1;
    };
  var fd = function(a) {
      return q(a)
        ? a.constructor.displayName ||
            a.constructor.name ||
            Object.prototype.toString.call(a)
        : void 0 === a
          ? 'undefined'
          : null === a
            ? 'null'
            : typeof a;
    },
    gd = function(a) {
      return (
        ((a = a && a.ownerDocument) && (a.defaultView || a.parentWindow)) || k
      );
    };
  var hd = !z || 9 <= Number(Cb);
  (!tb && !z) || (z && 9 <= Number(Cb)) || (tb && A('1.9.1'));
  z && A('9');
  var jd = function() {
    this.xa = '';
    this.ef = id;
  };
  jd.prototype.qb = !0;
  jd.prototype.ob = function() {
    return this.xa;
  };
  jd.prototype.toString = function() {
    return 'SafeHtml{' + this.xa + '}';
  };
  var kd = function(a) {
      if (a instanceof jd && a.constructor === jd && a.ef === id) return a.xa;
      Aa("expected object of type SafeHtml, got '" + a + "' of type " + ea(a));
      return 'type_error:SafeHtml';
    },
    id = {};
  jd.prototype.Qf = function(a) {
    this.xa = a;
    return this;
  };
  var ld = function(a, b) {
    var c = gd(a);
    'undefined' != typeof c.HTMLScriptElement &&
      'undefined' != typeof c.Element &&
      w(
        a && (a instanceof c.HTMLScriptElement || !(a instanceof c.Element)),
        'Argument is not a HTMLScriptElement (or a non-Element mock); got: %s',
        fd(a)
      );
    a.src = Ka(b);
  };
  var md = function(a) {
      var b = document;
      return m(a) ? b.getElementById(a) : a;
    },
    od = function(a, b) {
      eb(b, function(b, d) {
        b && b.qb && (b = b.ob());
        'style' == d
          ? (a.style.cssText = b)
          : 'class' == d
            ? (a.className = b)
            : 'for' == d
              ? (a.htmlFor = b)
              : nd.hasOwnProperty(d)
                ? a.setAttribute(nd[d], b)
                : 0 == d.lastIndexOf('aria-', 0) ||
                  0 == d.lastIndexOf('data-', 0)
                  ? a.setAttribute(d, b)
                  : (a[d] = b);
      });
    },
    nd = {
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing',
      colspan: 'colSpan',
      frameborder: 'frameBorder',
      height: 'height',
      maxlength: 'maxLength',
      nonce: 'nonce',
      role: 'role',
      rowspan: 'rowSpan',
      type: 'type',
      usemap: 'useMap',
      valign: 'vAlign',
      width: 'width'
    },
    qd = function(a, b, c) {
      var d = arguments,
        e = document,
        f = String(d[0]),
        g = d[1];
      if (!hd && g && (g.name || g.type)) {
        f = ['<', f];
        g.name && f.push(' name="', wa(g.name), '"');
        if (g.type) {
          f.push(' type="', wa(g.type), '"');
          var l = {};
          mb(l, g);
          delete l.type;
          g = l;
        }
        f.push('>');
        f = f.join('');
      }
      f = e.createElement(f);
      g &&
        (m(g)
          ? (f.className = g)
          : ha(g)
            ? (f.className = g.join(' '))
            : od(f, g));
      2 < d.length && pd(e, f, d);
      return f;
    },
    pd = function(a, b, c) {
      function d(c) {
        c && b.appendChild(m(c) ? a.createTextNode(c) : c);
      }
      for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !ia(f) || (q(f) && 0 < f.nodeType) ? d(f) : x(rd(f) ? $a(f) : f, d);
      }
    },
    rd = function(a) {
      if (a && 'number' == typeof a.length) {
        if (q(a))
          return 'function' == typeof a.item || 'string' == typeof a.item;
        if (p(a)) return 'function' == typeof a.item;
      }
      return !1;
    };
  var sd = function(a) {
      a.prototype.then = a.prototype.then;
      a.prototype.$goog_Thenable = !0;
    },
    td = function(a) {
      if (!a) return !1;
      try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    };
  var C = function(a, b) {
      this.aa = 0;
      this.za = void 0;
      this.kb = this.ua = this.w = null;
      this.vc = this.pd = !1;
      if (a != da)
        try {
          var c = this;
          a.call(
            b,
            function(a) {
              ud(c, 2, a);
            },
            function(a) {
              if (!(a instanceof vd))
                try {
                  if (a instanceof Error) throw a;
                  throw Error('Promise rejected.');
                } catch (e) {}
              ud(c, 3, a);
            }
          );
        } catch (d) {
          ud(this, 3, d);
        }
    },
    wd = function() {
      this.next = this.context = this.tb = this.Ua = this.child = null;
      this.Hb = !1;
    };
  wd.prototype.reset = function() {
    this.context = this.tb = this.Ua = this.child = null;
    this.Hb = !1;
  };
  var xd = new Tc(
      function() {
        return new wd();
      },
      function(a) {
        a.reset();
      },
      100
    ),
    yd = function(a, b, c) {
      var d = xd.get();
      d.Ua = a;
      d.tb = b;
      d.context = c;
      return d;
    },
    D = function(a) {
      if (a instanceof C) return a;
      var b = new C(da);
      ud(b, 2, a);
      return b;
    },
    E = function(a) {
      return new C(function(b, c) {
        c(a);
      });
    },
    Ad = function(a, b, c) {
      zd(a, b, c, null) || dd(la(b, a));
    },
    Bd = function(a) {
      return new C(function(b, c) {
        var d = a.length,
          e = [];
        if (d)
          for (
            var f = function(a, c) {
                d--;
                e[a] = c;
                0 == d && b(e);
              },
              g = function(a) {
                c(a);
              },
              l = 0,
              n;
            l < a.length;
            l++
          )
            (n = a[l]), Ad(n, la(f, l), g);
        else b(e);
      });
    },
    Cd = function(a) {
      return new C(function(b) {
        var c = a.length,
          d = [];
        if (c)
          for (
            var e = function(a, e, f) {
                c--;
                d[a] = e ? { Df: !0, value: f } : { Df: !1, reason: f };
                0 == c && b(d);
              },
              f = 0,
              g;
            f < a.length;
            f++
          )
            (g = a[f]), Ad(g, la(e, f, !0), la(e, f, !1));
        else b(d);
      });
    };
  C.prototype.then = function(a, b, c) {
    null != a && Da(a, 'opt_onFulfilled should be a function.');
    null != b &&
      Da(
        b,
        'opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?'
      );
    return Dd(this, p(a) ? a : null, p(b) ? b : null, c);
  };
  sd(C);
  var Fd = function(a, b) {
    b = yd(b, b, void 0);
    b.Hb = !0;
    Ed(a, b);
    return a;
  };
  C.prototype.g = function(a, b) {
    return Dd(this, null, a, b);
  };
  C.prototype.cancel = function(a) {
    0 == this.aa &&
      dd(function() {
        var b = new vd(a);
        Gd(this, b);
      }, this);
  };
  var Gd = function(a, b) {
      if (0 == a.aa)
        if (a.w) {
          var c = a.w;
          if (c.ua) {
            for (
              var d = 0, e = null, f = null, g = c.ua;
              g && (g.Hb || (d++, g.child == a && (e = g), !(e && 1 < d)));
              g = g.next
            )
              e || (f = g);
            e &&
              (0 == c.aa && 1 == d
                ? Gd(c, b)
                : (f
                    ? ((d = f),
                      w(c.ua),
                      w(null != d),
                      d.next == c.kb && (c.kb = d),
                      (d.next = d.next.next))
                    : Hd(c),
                  Id(c, e, 3, b)));
          }
          a.w = null;
        } else ud(a, 3, b);
    },
    Ed = function(a, b) {
      a.ua || (2 != a.aa && 3 != a.aa) || Jd(a);
      w(null != b.Ua);
      a.kb ? (a.kb.next = b) : (a.ua = b);
      a.kb = b;
    },
    Dd = function(a, b, c, d) {
      var e = yd(null, null, null);
      e.child = new C(function(a, g) {
        e.Ua = b
          ? function(c) {
              try {
                var e = b.call(d, c);
                a(e);
              } catch (F) {
                g(F);
              }
            }
          : a;
        e.tb = c
          ? function(b) {
              try {
                var e = c.call(d, b);
                !ba(e) && b instanceof vd ? g(b) : a(e);
              } catch (F) {
                g(F);
              }
            }
          : g;
      });
      e.child.w = a;
      Ed(a, e);
      return e.child;
    };
  C.prototype.yg = function(a) {
    w(1 == this.aa);
    this.aa = 0;
    ud(this, 2, a);
  };
  C.prototype.zg = function(a) {
    w(1 == this.aa);
    this.aa = 0;
    ud(this, 3, a);
  };
  var ud = function(a, b, c) {
      0 == a.aa &&
        (a === c &&
          ((b = 3), (c = new TypeError('Promise cannot resolve to itself'))),
        (a.aa = 1),
        zd(c, a.yg, a.zg, a) ||
          ((a.za = c),
          (a.aa = b),
          (a.w = null),
          Jd(a),
          3 != b || c instanceof vd || Kd(a, c)));
    },
    zd = function(a, b, c, d) {
      if (a instanceof C)
        return (
          null != b && Da(b, 'opt_onFulfilled should be a function.'),
          null != c &&
            Da(
              c,
              'opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?'
            ),
          Ed(a, yd(b || da, c || null, d)),
          !0
        );
      if (td(a)) return a.then(b, c, d), !0;
      if (q(a))
        try {
          var e = a.then;
          if (p(e)) return Ld(a, e, b, c, d), !0;
        } catch (f) {
          return c.call(d, f), !0;
        }
      return !1;
    },
    Ld = function(a, b, c, d, e) {
      var f = !1,
        g = function(a) {
          f || ((f = !0), c.call(e, a));
        },
        l = function(a) {
          f || ((f = !0), d.call(e, a));
        };
      try {
        b.call(a, g, l);
      } catch (n) {
        l(n);
      }
    },
    Jd = function(a) {
      a.pd || ((a.pd = !0), dd(a.yf, a));
    },
    Hd = function(a) {
      var b = null;
      a.ua && ((b = a.ua), (a.ua = b.next), (b.next = null));
      a.ua || (a.kb = null);
      null != b && w(null != b.Ua);
      return b;
    };
  C.prototype.yf = function() {
    for (var a; (a = Hd(this)); ) Id(this, a, this.aa, this.za);
    this.pd = !1;
  };
  var Id = function(a, b, c, d) {
      if (3 == c && b.tb && !b.Hb) for (; a && a.vc; a = a.w) a.vc = !1;
      if (b.child) (b.child.w = null), Md(b, c, d);
      else
        try {
          b.Hb ? b.Ua.call(b.context) : Md(b, c, d);
        } catch (e) {
          Nd.call(null, e);
        }
      xd.put(b);
    },
    Md = function(a, b, c) {
      2 == b ? a.Ua.call(a.context, c) : a.tb && a.tb.call(a.context, c);
    },
    Kd = function(a, b) {
      a.vc = !0;
      dd(function() {
        a.vc && Nd.call(null, b);
      });
    },
    Nd = Uc,
    vd = function(a) {
      u.call(this, a);
    };
  t(vd, u);
  vd.prototype.name = 'cancel';
  var Od = function(a, b) {
    this.Rc = [];
    this.Le = a;
    this.qe = b || null;
    this.Pb = this.nb = !1;
    this.za = void 0;
    this.ae = this.ge = this.gd = !1;
    this.Zc = 0;
    this.w = null;
    this.hd = 0;
  };
  Od.prototype.cancel = function(a) {
    if (this.nb) this.za instanceof Od && this.za.cancel();
    else {
      if (this.w) {
        var b = this.w;
        delete this.w;
        a ? b.cancel(a) : (b.hd--, 0 >= b.hd && b.cancel());
      }
      this.Le ? this.Le.call(this.qe, this) : (this.ae = !0);
      this.nb || Pd(this, new Qd());
    }
  };
  Od.prototype.oe = function(a, b) {
    this.gd = !1;
    Rd(this, a, b);
  };
  var Rd = function(a, b, c) {
      a.nb = !0;
      a.za = c;
      a.Pb = !b;
      Sd(a);
    },
    Ud = function(a) {
      if (a.nb) {
        if (!a.ae) throw new Td();
        a.ae = !1;
      }
    };
  Od.prototype.callback = function(a) {
    Ud(this);
    Vd(a);
    Rd(this, !0, a);
  };
  var Pd = function(a, b) {
      Ud(a);
      Vd(b);
      Rd(a, !1, b);
    },
    Vd = function(a) {
      w(
        !(a instanceof Od),
        'An execution sequence may not be initiated with a blocking Deferred.'
      );
    },
    Xd = function(a, b) {
      Wd(a, null, b, void 0);
    },
    Wd = function(a, b, c, d) {
      w(!a.ge, 'Blocking Deferreds can not be re-used');
      a.Rc.push([b, c, d]);
      a.nb && Sd(a);
    };
  Od.prototype.then = function(a, b, c) {
    var d,
      e,
      f = new C(function(a, b) {
        d = a;
        e = b;
      });
    Wd(this, d, function(a) {
      a instanceof Qd ? f.cancel() : e(a);
    });
    return f.then(a, b, c);
  };
  sd(Od);
  var Yd = function(a) {
      return Sa(a.Rc, function(a) {
        return p(a[1]);
      });
    },
    Sd = function(a) {
      if (a.Zc && a.nb && Yd(a)) {
        var b = a.Zc,
          c = Zd[b];
        c && (k.clearTimeout(c.Qb), delete Zd[b]);
        a.Zc = 0;
      }
      a.w && (a.w.hd--, delete a.w);
      b = a.za;
      for (var d = (c = !1); a.Rc.length && !a.gd; ) {
        var e = a.Rc.shift(),
          f = e[0],
          g = e[1];
        e = e[2];
        if ((f = a.Pb ? g : f))
          try {
            var l = f.call(e || a.qe, b);
            ba(l) &&
              ((a.Pb = a.Pb && (l == b || l instanceof Error)), (a.za = b = l));
            if (
              td(b) ||
              ('function' === typeof k.Promise && b instanceof k.Promise)
            )
              (d = !0), (a.gd = !0);
          } catch (n) {
            (b = n), (a.Pb = !0), Yd(a) || (c = !0);
          }
      }
      a.za = b;
      d &&
        ((l = r(a.oe, a, !0)),
        (d = r(a.oe, a, !1)),
        b instanceof Od ? (Wd(b, l, d), (b.ge = !0)) : b.then(l, d));
      c && ((b = new $d(b)), (Zd[b.Qb] = b), (a.Zc = b.Qb));
    },
    Td = function() {
      u.call(this);
    };
  t(Td, u);
  Td.prototype.message = 'Deferred has already fired';
  Td.prototype.name = 'AlreadyCalledError';
  var Qd = function() {
    u.call(this);
  };
  t(Qd, u);
  Qd.prototype.message = 'Deferred was canceled';
  Qd.prototype.name = 'CanceledError';
  var $d = function(a) {
    this.Qb = k.setTimeout(r(this.xg, this), 0);
    this.ba = a;
  };
  $d.prototype.xg = function() {
    w(Zd[this.Qb], 'Cannot throw an error that is not scheduled.');
    delete Zd[this.Qb];
    throw this.ba;
  };
  var Zd = {};
  var ee = function(a) {
      var b = {},
        c = b.document || document,
        d = Ka(a),
        e = document.createElement('SCRIPT'),
        f = { Te: e, jc: void 0 },
        g = new Od(ae, f),
        l = null,
        n = null != b.timeout ? b.timeout : 5e3;
      0 < n &&
        ((l = window.setTimeout(function() {
          be(e, !0);
          Pd(g, new ce(1, 'Timeout reached for loading script ' + d));
        }, n)),
        (f.jc = l));
      e.onload = e.onreadystatechange = function() {
        (e.readyState &&
          'loaded' != e.readyState &&
          'complete' != e.readyState) ||
          (be(e, b.Og || !1, l), g.callback(null));
      };
      e.onerror = function() {
        be(e, !0, l);
        Pd(g, new ce(0, 'Error while loading script ' + d));
      };
      f = b.attributes || {};
      mb(f, { type: 'text/javascript', charset: 'UTF-8' });
      od(e, f);
      ld(e, a);
      de(c).appendChild(e);
      return g;
    },
    de = function(a) {
      var b;
      return (b = (a || document).getElementsByTagName('HEAD')) && 0 != b.length
        ? b[0]
        : a.documentElement;
    },
    ae = function() {
      if (this && this.Te) {
        var a = this.Te;
        a && 'SCRIPT' == a.tagName && be(a, !0, this.jc);
      }
    },
    be = function(a, b, c) {
      null != c && k.clearTimeout(c);
      a.onload = da;
      a.onerror = da;
      a.onreadystatechange = da;
      b &&
        window.setTimeout(function() {
          a && a.parentNode && a.parentNode.removeChild(a);
        }, 0);
    },
    ce = function(a, b) {
      var c = 'Jsloader error (code #' + a + ')';
      b && (c += ': ' + b);
      u.call(this, c);
      this.code = a;
    };
  t(ce, u);
  var fe = function(a, b, c, d, e) {
    this.reset(a, b, c, d, e);
  };
  fe.prototype.se = null;
  var ge = 0;
  fe.prototype.reset = function(a, b, c, d, e) {
    'number' == typeof e || ge++;
    d || ma();
    this.Vb = a;
    this.Zf = b;
    delete this.se;
  };
  fe.prototype.Ue = function(a) {
    this.Vb = a;
  };
  var he = function(a) {
      this.Je = a;
      this.ze = this.kd = this.Vb = this.w = null;
    },
    ie = function(a, b) {
      this.name = a;
      this.value = b;
    };
  ie.prototype.toString = function() {
    return this.name;
  };
  var je = new ie('SEVERE', 1e3),
    ke = new ie('INFO', 800),
    le = new ie('CONFIG', 700),
    me = new ie('FINE', 500);
  he.prototype.getName = function() {
    return this.Je;
  };
  he.prototype.getParent = function() {
    return this.w;
  };
  he.prototype.Ue = function(a) {
    this.Vb = a;
  };
  var ne = function(a) {
    if (a.Vb) return a.Vb;
    if (a.w) return ne(a.w);
    Aa('Root logger has no level set.');
    return null;
  };
  he.prototype.log = function(a, b, c) {
    if (a.value >= ne(this).value)
      for (
        p(b) && (b = b()),
          a = new fe(a, String(b), this.Je),
          c && (a.se = c),
          c = 'log:' + a.Zf,
          (b = k.console) && b.timeStamp && b.timeStamp(c),
          (b = k.msWriteProfilerMark) && b(c),
          c = this;
        c;

      ) {
        var d = c,
          e = a;
        if (d.ze) for (var f = 0; (b = d.ze[f]); f++) b(e);
        c = c.getParent();
      }
  };
  he.prototype.info = function(a, b) {
    this.log(ke, a, b);
  };
  he.prototype.config = function(a, b) {
    this.log(le, a, b);
  };
  var oe = {},
    pe = null,
    qe = function(a) {
      pe || ((pe = new he('')), (oe[''] = pe), pe.Ue(le));
      var b;
      if (!(b = oe[a])) {
        b = new he(a);
        var c = a.lastIndexOf('.'),
          d = a.substr(c + 1);
        c = qe(a.substr(0, c));
        c.kd || (c.kd = {});
        c.kd[d] = b;
        b.w = c;
        oe[a] = b;
      }
      return b;
    };
  var G = function() {
    Ub.call(this);
    this.ga = new dc(this);
    this.kf = this;
    this.Kd = null;
  };
  t(G, Ub);
  G.prototype[$b] = !0;
  h = G.prototype;
  h.addEventListener = function(a, b, c, d) {
    lc(this, a, b, c, d);
  };
  h.removeEventListener = function(a, b, c, d) {
    tc(this, a, b, c, d);
  };
  h.dispatchEvent = function(a) {
    re(this);
    var b = this.Kd;
    if (b) {
      var c = [];
      for (var d = 1; b; b = b.Kd) c.push(b), w(1e3 > ++d, 'infinite loop');
    }
    b = this.kf;
    d = a.type || a;
    if (m(a)) a = new B(a, b);
    else if (a instanceof B) a.target = a.target || b;
    else {
      var e = a;
      a = new B(d, b);
      mb(a, e);
    }
    e = !0;
    if (c)
      for (var f = c.length - 1; !a.Wa && 0 <= f; f--) {
        var g = (a.currentTarget = c[f]);
        e = se(g, d, !0, a) && e;
      }
    a.Wa ||
      ((g = a.currentTarget = b),
      (e = se(g, d, !0, a) && e),
      a.Wa || (e = se(g, d, !1, a) && e));
    if (c)
      for (f = 0; !a.Wa && f < c.length; f++)
        (g = a.currentTarget = c[f]), (e = se(g, d, !1, a) && e);
    return e;
  };
  h.lb = function() {
    G.Vc.lb.call(this);
    if (this.ga) {
      var a = this.ga,
        b = 0,
        c;
      for (c in a.I) {
        for (var d = a.I[c], e = 0; e < d.length; e++) ++b, cc(d[e]);
        delete a.I[c];
        a.kc--;
      }
    }
    this.Kd = null;
  };
  h.listen = function(a, b, c, d) {
    re(this);
    return this.ga.add(String(a), b, !1, c, d);
  };
  var sc = function(a, b, c, d, e) {
      a.ga.add(String(b), c, !0, d, e);
    },
    se = function(a, b, c, d) {
      b = a.ga.I[String(b)];
      if (!b) return !0;
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.Bb && g.capture == c) {
          var l = g.listener,
            n = g.wc || g.src;
          g.qc && fc(a.ga, g);
          e = !1 !== l.call(n, d) && e;
        }
      }
      return e && 0 != d.Se;
    };
  G.prototype.td = function(a, b, c, d) {
    return this.ga.td(String(a), b, c, d);
  };
  G.prototype.hasListener = function(a, b) {
    return this.ga.hasListener(ba(a) ? String(a) : void 0, b);
  };
  var re = function(a) {
    w(
      a.ga,
      'Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?'
    );
  };
  var te =
      'StopIteration' in k
        ? k.StopIteration
        : { message: 'StopIteration', stack: '' },
    ue = function() {};
  ue.prototype.next = function() {
    throw te;
  };
  ue.prototype.jf = function() {
    return this;
  };
  var H = function(a, b) {
    a && a.log(me, b, void 0);
  };
  var ve = function(a, b) {
    this.ja = {};
    this.B = [];
    this.gb = this.u = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error('Uneven number of arguments');
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else a && this.addAll(a);
  };
  h = ve.prototype;
  h.ha = function() {
    we(this);
    for (var a = [], b = 0; b < this.B.length; b++) a.push(this.ja[this.B[b]]);
    return a;
  };
  h.va = function() {
    we(this);
    return this.B.concat();
  };
  h.Jb = function(a) {
    return xe(this.ja, a);
  };
  h.clear = function() {
    this.ja = {};
    this.gb = this.u = this.B.length = 0;
  };
  h.remove = function(a) {
    return xe(this.ja, a)
      ? (delete this.ja[a],
        this.u--,
        this.gb++,
        this.B.length > 2 * this.u && we(this),
        !0)
      : !1;
  };
  var we = function(a) {
    if (a.u != a.B.length) {
      for (var b = 0, c = 0; b < a.B.length; ) {
        var d = a.B[b];
        xe(a.ja, d) && (a.B[c++] = d);
        b++;
      }
      a.B.length = c;
    }
    if (a.u != a.B.length) {
      var e = {};
      for (c = b = 0; b < a.B.length; )
        (d = a.B[b]), xe(e, d) || ((a.B[c++] = d), (e[d] = 1)), b++;
      a.B.length = c;
    }
  };
  h = ve.prototype;
  h.get = function(a, b) {
    return xe(this.ja, a) ? this.ja[a] : b;
  };
  h.set = function(a, b) {
    xe(this.ja, a) || (this.u++, this.B.push(a), this.gb++);
    this.ja[a] = b;
  };
  h.addAll = function(a) {
    if (a instanceof ve) {
      var b = a.va();
      a = a.ha();
    } else (b = hb(a)), (a = gb(a));
    for (var c = 0; c < b.length; c++) this.set(b[c], a[c]);
  };
  h.forEach = function(a, b) {
    for (var c = this.va(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  h.clone = function() {
    return new ve(this);
  };
  h.jf = function(a) {
    we(this);
    var b = 0,
      c = this.gb,
      d = this,
      e = new ue();
    e.next = function() {
      if (c != d.gb)
        throw Error('The map has changed since the iterator was created');
      if (b >= d.B.length) throw te;
      var e = d.B[b++];
      return a ? e : d.ja[e];
    };
    return e;
  };
  var xe = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var ye = function(a) {
      if (a.ha && 'function' == typeof a.ha) return a.ha();
      if (m(a)) return a.split('');
      if (ia(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return gb(a);
    },
    ze = function(a) {
      if (a.va && 'function' == typeof a.va) return a.va();
      if (!a.ha || 'function' != typeof a.ha) {
        if (ia(a) || m(a)) {
          var b = [];
          a = a.length;
          for (var c = 0; c < a; c++) b.push(c);
          return b;
        }
        return hb(a);
      }
    },
    Ae = function(a, b, c) {
      if (a.forEach && 'function' == typeof a.forEach) a.forEach(b, c);
      else if (ia(a) || m(a)) x(a, b, c);
      else
        for (var d = ze(a), e = ye(a), f = e.length, g = 0; g < f; g++)
          b.call(c, e[g], d && d[g], a);
    };
  var Be = function(a, b, c) {
      if (p(a)) c && (a = r(a, c));
      else if (a && 'function' == typeof a.handleEvent) a = r(a.handleEvent, a);
      else throw Error('Invalid listener argument');
      return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0);
    },
    Ce = function(a) {
      var b = null;
      return new C(function(c, d) {
        b = Be(function() {
          c(void 0);
        }, a);
        -1 == b && d(Error('Failed to schedule timer.'));
      }).g(function(a) {
        k.clearTimeout(b);
        throw a;
      });
    };
  var De = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    Ee = function(a, b) {
      if (a) {
        a = a.split('&');
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf('='),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? decodeURIComponent(e.replace(/\+/g, ' ')) : '');
        }
      }
    };
  var I = function(a) {
    G.call(this);
    this.headers = new ve();
    this.ed = a || null;
    this.Ca = !1;
    this.dd = this.b = null;
    this.Ub = this.Ie = this.Fc = '';
    this.Qa = this.zd = this.Ac = this.od = !1;
    this.Db = 0;
    this.Wc = null;
    this.Pc = '';
    this.$c = this.fg = this.df = !1;
  };
  t(I, G);
  var Fe = I.prototype,
    Ge = qe('goog.net.XhrIo');
  Fe.R = Ge;
  var He = /^https?$/i,
    Ie = ['POST', 'PUT'];
  I.prototype.send = function(a, b, c, d) {
    if (this.b)
      throw Error(
        '[goog.net.XhrIo] Object is active with another request=' +
          this.Fc +
          '; newUri=' +
          a
      );
    b = b ? b.toUpperCase() : 'GET';
    this.Fc = a;
    this.Ub = '';
    this.Ie = b;
    this.od = !1;
    this.Ca = !0;
    this.b = this.ed ? this.ed.sc() : Nc.sc();
    this.dd = this.ed ? Mc(this.ed) : Mc(Nc);
    this.b.onreadystatechange = r(this.Pe, this);
    this.fg &&
      'onprogress' in this.b &&
      ((this.b.onprogress = r(function(a) {
        this.Oe(a, !0);
      }, this)),
      this.b.upload && (this.b.upload.onprogress = r(this.Oe, this)));
    try {
      H(this.R, Je(this, 'Opening Xhr')),
        (this.zd = !0),
        this.b.open(b, String(a), !0),
        (this.zd = !1);
    } catch (f) {
      H(this.R, Je(this, 'Error opening Xhr: ' + f.message));
      this.ba(5, f);
      return;
    }
    a = c || '';
    var e = this.headers.clone();
    d &&
      Ae(d, function(a, b) {
        e.set(b, a);
      });
    d = Ua(e.va());
    c = k.FormData && a instanceof k.FormData;
    !Va(Ie, b) ||
      d ||
      c ||
      e.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    e.forEach(function(a, b) {
      this.b.setRequestHeader(b, a);
    }, this);
    this.Pc && (this.b.responseType = this.Pc);
    'withCredentials' in this.b &&
      this.b.withCredentials !== this.df &&
      (this.b.withCredentials = this.df);
    try {
      Ke(this),
        0 < this.Db &&
          ((this.$c = Le(this.b)),
          H(
            this.R,
            Je(
              this,
              'Will abort after ' +
                this.Db +
                'ms if incomplete, xhr2 ' +
                this.$c
            )
          ),
          this.$c
            ? ((this.b.timeout = this.Db),
              (this.b.ontimeout = r(this.jc, this)))
            : (this.Wc = Be(this.jc, this.Db, this))),
        H(this.R, Je(this, 'Sending request')),
        (this.Ac = !0),
        this.b.send(a),
        (this.Ac = !1);
    } catch (f) {
      H(this.R, Je(this, 'Send error: ' + f.message)), this.ba(5, f);
    }
  };
  var Le = function(a) {
      return z && A(9) && 'number' == typeof a.timeout && ba(a.ontimeout);
    },
    Ta = function(a) {
      return 'content-type' == a.toLowerCase();
    };
  I.prototype.jc = function() {
    'undefined' != typeof aa &&
      this.b &&
      ((this.Ub = 'Timed out after ' + this.Db + 'ms, aborting'),
      H(this.R, Je(this, this.Ub)),
      this.dispatchEvent('timeout'),
      this.abort(8));
  };
  I.prototype.ba = function(a, b) {
    this.Ca = !1;
    this.b && ((this.Qa = !0), this.b.abort(), (this.Qa = !1));
    this.Ub = b;
    Me(this);
    Ne(this);
  };
  var Me = function(a) {
    a.od ||
      ((a.od = !0), a.dispatchEvent('complete'), a.dispatchEvent('error'));
  };
  I.prototype.abort = function() {
    this.b &&
      this.Ca &&
      (H(this.R, Je(this, 'Aborting')),
      (this.Ca = !1),
      (this.Qa = !0),
      this.b.abort(),
      (this.Qa = !1),
      this.dispatchEvent('complete'),
      this.dispatchEvent('abort'),
      Ne(this));
  };
  I.prototype.lb = function() {
    this.b &&
      (this.Ca &&
        ((this.Ca = !1), (this.Qa = !0), this.b.abort(), (this.Qa = !1)),
      Ne(this, !0));
    I.Vc.lb.call(this);
  };
  I.prototype.Pe = function() {
    this.isDisposed() || (this.zd || this.Ac || this.Qa ? Oe(this) : this.bg());
  };
  I.prototype.bg = function() {
    Oe(this);
  };
  var Oe = function(a) {
    if (a.Ca && 'undefined' != typeof aa)
      if (a.dd[1] && 4 == Pe(a) && 2 == Qe(a))
        H(a.R, Je(a, 'Local request error detected and ignored'));
      else if (a.Ac && 4 == Pe(a)) Be(a.Pe, 0, a);
      else if ((a.dispatchEvent('readystatechange'), 4 == Pe(a))) {
        H(a.R, Je(a, 'Request complete'));
        a.Ca = !1;
        try {
          var b = Qe(a);
          a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0;
              break a;
            default:
              c = !1;
          }
          var d;
          if (!(d = c)) {
            var e;
            if ((e = 0 === b)) {
              var f = String(a.Fc).match(De)[1] || null;
              if (!f && k.self && k.self.location) {
                var g = k.self.location.protocol;
                f = g.substr(0, g.length - 1);
              }
              e = !He.test(f ? f.toLowerCase() : '');
            }
            d = e;
          }
          if (d) a.dispatchEvent('complete'), a.dispatchEvent('success');
          else {
            try {
              var l = 2 < Pe(a) ? a.b.statusText : '';
            } catch (n) {
              H(a.R, 'Can not get status: ' + n.message), (l = '');
            }
            a.Ub = l + ' [' + Qe(a) + ']';
            Me(a);
          }
        } finally {
          Ne(a);
        }
      }
  };
  I.prototype.Oe = function(a, b) {
    w(
      'progress' === a.type,
      'goog.net.EventType.PROGRESS is of the same type as raw XHR progress.'
    );
    this.dispatchEvent(Re(a, 'progress'));
    this.dispatchEvent(Re(a, b ? 'downloadprogress' : 'uploadprogress'));
  };
  var Re = function(a, b) {
      return {
        type: b,
        lengthComputable: a.lengthComputable,
        loaded: a.loaded,
        total: a.total
      };
    },
    Ne = function(a, b) {
      if (a.b) {
        Ke(a);
        var c = a.b,
          d = a.dd[0] ? da : null;
        a.b = null;
        a.dd = null;
        b || a.dispatchEvent('ready');
        try {
          c.onreadystatechange = d;
        } catch (e) {
          (a = a.R) &&
            a.log(
              je,
              'Problem encountered resetting onreadystatechange: ' + e.message,
              void 0
            );
        }
      }
    },
    Ke = function(a) {
      a.b && a.$c && (a.b.ontimeout = null);
      a.Wc && (k.clearTimeout(a.Wc), (a.Wc = null));
    },
    Pe = function(a) {
      return a.b ? a.b.readyState : 0;
    },
    Qe = function(a) {
      try {
        return 2 < Pe(a) ? a.b.status : -1;
      } catch (b) {
        return -1;
      }
    },
    Se = function(a) {
      try {
        return a.b ? a.b.responseText : '';
      } catch (b) {
        return H(a.R, 'Can not get responseText: ' + b.message), '';
      }
    };
  I.prototype.getResponse = function() {
    try {
      if (!this.b) return null;
      if ('response' in this.b) return this.b.response;
      switch (this.Pc) {
        case '':
        case 'text':
          return this.b.responseText;
        case 'arraybuffer':
          if ('mozResponseArrayBuffer' in this.b)
            return this.b.mozResponseArrayBuffer;
      }
      var a = this.R;
      a &&
        a.log(
          je,
          'Response type ' + this.Pc + ' is not supported on this browser',
          void 0
        );
      return null;
    } catch (b) {
      return H(this.R, 'Can not get response: ' + b.message), null;
    }
  };
  I.prototype.getResponseHeader = function(a) {
    if (this.b && 4 == Pe(this))
      return (a = this.b.getResponseHeader(a)), null === a ? void 0 : a;
  };
  I.prototype.getAllResponseHeaders = function() {
    return this.b && 4 == Pe(this) ? this.b.getAllResponseHeaders() : '';
  };
  var Je = function(a, b) {
    return b + ' [' + a.Ie + ' ' + a.Fc + ' ' + Qe(a) + ']';
  };
  var Te = function(a, b) {
    this.pa = this.eb = this.qa = '';
    this.vb = null;
    this.Pa = this.Ga = '';
    this.da = this.Uf = !1;
    if (a instanceof Te) {
      this.da = ba(b) ? b : a.da;
      Ue(this, a.qa);
      var c = a.eb;
      J(this);
      this.eb = c;
      Ve(this, a.pa);
      We(this, a.vb);
      Xe(this, a.Ga);
      Ye(this, a.ea.clone());
      a = a.Pa;
      J(this);
      this.Pa = a;
    } else
      a && (c = String(a).match(De))
        ? ((this.da = !!b),
          Ue(this, c[1] || '', !0),
          (a = c[2] || ''),
          J(this),
          (this.eb = Ze(a)),
          Ve(this, c[3] || '', !0),
          We(this, c[4]),
          Xe(this, c[5] || '', !0),
          Ye(this, c[6] || '', !0),
          (a = c[7] || ''),
          J(this),
          (this.Pa = Ze(a)))
        : ((this.da = !!b), (this.ea = new $e(null, 0, this.da)));
  };
  Te.prototype.toString = function() {
    var a = [],
      b = this.qa;
    b && a.push(af(b, bf, !0), ':');
    var c = this.pa;
    if (c || 'file' == b)
      a.push('//'),
        (b = this.eb) && a.push(af(b, bf, !0), '@'),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
        ),
        (c = this.vb),
        null != c && a.push(':', String(c));
    if ((c = this.Ga))
      this.pa && '/' != c.charAt(0) && a.push('/'),
        a.push(af(c, '/' == c.charAt(0) ? cf : df, !0));
    (c = this.ea.toString()) && a.push('?', c);
    (c = this.Pa) && a.push('#', af(c, ef));
    return a.join('');
  };
  Te.prototype.resolve = function(a) {
    var b = this.clone(),
      c = !!a.qa;
    c ? Ue(b, a.qa) : (c = !!a.eb);
    if (c) {
      var d = a.eb;
      J(b);
      b.eb = d;
    } else c = !!a.pa;
    c ? Ve(b, a.pa) : (c = null != a.vb);
    d = a.Ga;
    if (c) We(b, a.vb);
    else if ((c = !!a.Ga)) {
      if ('/' != d.charAt(0))
        if (this.pa && !this.Ga) d = '/' + d;
        else {
          var e = b.Ga.lastIndexOf('/');
          -1 != e && (d = b.Ga.substr(0, e + 1) + d);
        }
      e = d;
      if ('..' == e || '.' == e) d = '';
      else if (v(e, './') || v(e, '/.')) {
        d = 0 == e.lastIndexOf('/', 0);
        e = e.split('/');
        for (var f = [], g = 0; g < e.length; ) {
          var l = e[g++];
          '.' == l
            ? d && g == e.length && f.push('')
            : '..' == l
              ? ((1 < f.length || (1 == f.length && '' != f[0])) && f.pop(),
                d && g == e.length && f.push(''))
              : (f.push(l), (d = !0));
        }
        d = f.join('/');
      } else d = e;
    }
    c ? Xe(b, d) : (c = '' !== a.ea.toString());
    c ? Ye(b, a.ea.clone()) : (c = !!a.Pa);
    c && ((a = a.Pa), J(b), (b.Pa = a));
    return b;
  };
  Te.prototype.clone = function() {
    return new Te(this);
  };
  var Ue = function(a, b, c) {
      J(a);
      a.qa = c ? Ze(b, !0) : b;
      a.qa && (a.qa = a.qa.replace(/:$/, ''));
    },
    Ve = function(a, b, c) {
      J(a);
      a.pa = c ? Ze(b, !0) : b;
    },
    We = function(a, b) {
      J(a);
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error('Bad port number ' + b);
        a.vb = b;
      } else a.vb = null;
    },
    Xe = function(a, b, c) {
      J(a);
      a.Ga = c ? Ze(b, !0) : b;
    },
    Ye = function(a, b, c) {
      J(a);
      b instanceof $e
        ? ((a.ea = b), a.ea.Zd(a.da))
        : (c || (b = af(b, ff)), (a.ea = new $e(b, 0, a.da)));
    },
    K = function(a, b, c) {
      J(a);
      a.ea.set(b, c);
    },
    gf = function(a, b) {
      return a.ea.get(b);
    };
  Te.prototype.removeParameter = function(a) {
    J(this);
    this.ea.remove(a);
    return this;
  };
  var J = function(a) {
    if (a.Uf) throw Error('Tried to modify a read-only Uri');
  };
  Te.prototype.Zd = function(a) {
    this.da = a;
    this.ea && this.ea.Zd(a);
    return this;
  };
  var hf = function(a) {
      return a instanceof Te ? a.clone() : new Te(a, void 0);
    },
    jf = function(a, b) {
      var c = new Te(null, void 0);
      Ue(c, 'https');
      a && Ve(c, a);
      b && Xe(c, b);
      return c;
    },
    Ze = function(a, b) {
      return a
        ? b
          ? decodeURI(a.replace(/%25/g, '%2525'))
          : decodeURIComponent(a)
        : '';
    },
    af = function(a, b, c) {
      return m(a)
        ? ((a = encodeURI(a).replace(b, kf)),
          c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
          a)
        : null;
    },
    kf = function(a) {
      a = a.charCodeAt(0);
      return '%' + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    },
    bf = /[#\/\?@]/g,
    df = /[\#\?:]/g,
    cf = /[\#\?]/g,
    ff = /[\#\?@]/g,
    ef = /#/g,
    $e = function(a, b, c) {
      this.u = this.s = null;
      this.V = a || null;
      this.da = !!c;
    },
    lf = function(a) {
      a.s ||
        ((a.s = new ve()),
        (a.u = 0),
        a.V &&
          Ee(a.V, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, ' ')), c);
          }));
    },
    nf = function(a) {
      var b = ze(a);
      if ('undefined' == typeof b) throw Error('Keys are undefined');
      var c = new $e(null, 0, void 0);
      a = ye(a);
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = a[d];
        ha(f) ? mf(c, e, f) : c.add(e, f);
      }
      return c;
    };
  h = $e.prototype;
  h.add = function(a, b) {
    lf(this);
    this.V = null;
    a = this.ca(a);
    var c = this.s.get(a);
    c || this.s.set(a, (c = []));
    c.push(b);
    this.u = Ba(this.u) + 1;
    return this;
  };
  h.remove = function(a) {
    lf(this);
    a = this.ca(a);
    return this.s.Jb(a)
      ? ((this.V = null),
        (this.u = Ba(this.u) - this.s.get(a).length),
        this.s.remove(a))
      : !1;
  };
  h.clear = function() {
    this.s = this.V = null;
    this.u = 0;
  };
  h.Jb = function(a) {
    lf(this);
    a = this.ca(a);
    return this.s.Jb(a);
  };
  h.forEach = function(a, b) {
    lf(this);
    this.s.forEach(function(c, d) {
      x(
        c,
        function(c) {
          a.call(b, c, d, this);
        },
        this
      );
    }, this);
  };
  h.va = function() {
    lf(this);
    for (var a = this.s.ha(), b = this.s.va(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  h.ha = function(a) {
    lf(this);
    var b = [];
    if (m(a)) this.Jb(a) && (b = Za(b, this.s.get(this.ca(a))));
    else {
      a = this.s.ha();
      for (var c = 0; c < a.length; c++) b = Za(b, a[c]);
    }
    return b;
  };
  h.set = function(a, b) {
    lf(this);
    this.V = null;
    a = this.ca(a);
    this.Jb(a) && (this.u = Ba(this.u) - this.s.get(a).length);
    this.s.set(a, [b]);
    this.u = Ba(this.u) + 1;
    return this;
  };
  h.get = function(a, b) {
    a = a ? this.ha(a) : [];
    return 0 < a.length ? String(a[0]) : b;
  };
  var mf = function(a, b, c) {
    a.remove(b);
    0 < c.length &&
      ((a.V = null), a.s.set(a.ca(b), $a(c)), (a.u = Ba(a.u) + c.length));
  };
  h = $e.prototype;
  h.toString = function() {
    if (this.V) return this.V;
    if (!this.s) return '';
    for (var a = [], b = this.s.va(), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.ha(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        '' !== d[f] && (g += '=' + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return (this.V = a.join('&'));
  };
  h.clone = function() {
    var a = new $e();
    a.V = this.V;
    this.s && ((a.s = this.s.clone()), (a.u = this.u));
    return a;
  };
  h.ca = function(a) {
    a = String(a);
    this.da && (a = a.toLowerCase());
    return a;
  };
  h.Zd = function(a) {
    a &&
      !this.da &&
      (lf(this),
      (this.V = null),
      this.s.forEach(function(a, c) {
        var b = c.toLowerCase();
        c != b && (this.remove(c), mf(this, b, a));
      }, this));
    this.da = a;
  };
  h.extend = function(a) {
    for (var b = 0; b < arguments.length; b++)
      Ae(
        arguments[b],
        function(a, b) {
          this.add(b, a);
        },
        this
      );
  };
  var of = {
      Jg: {
        qd: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
        Vd: 'https://securetoken.googleapis.com/v1/token',
        id: 'p'
      },
      Kg: {
        qd:
          'https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
        Vd: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
        id: 's'
      },
      Lg: {
        qd:
          'https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/',
        Vd: 'https://test-securetoken.sandbox.googleapis.com/v1/token',
        id: 't'
      }
    },
    pf = function(a) {
      for (var b in of)
        if (of[b].id === a)
          return (
            (a = of[b]), { firebaseEndpoint: a.qd, secureTokenEndpoint: a.Vd }
          );
      return null;
    },
    qf;
  qf = pf('__EID__') ? '__EID__' : void 0;
  var rf = function() {
      var a = L();
      return (z && !!Cb && 11 == Cb) || /Edge\/\d+/.test(a);
    },
    sf = function() {
      return (k.window && k.window.location.href) || '';
    },
    tf = function(a, b) {
      b = b || k.window;
      var c = 'about:blank';
      a && (c = Bc(Ec(a)));
      b.location.href = c;
    },
    uf = function(a, b) {
      var c = [],
        d;
      for (d in a)
        d in b
          ? typeof a[d] != typeof b[d]
            ? c.push(d)
            : ha(a[d])
              ? jb(a[d], b[d]) || c.push(d)
              : 'object' == typeof a[d] && null != a[d] && null != b[d]
                ? 0 < uf(a[d], b[d]).length && c.push(d)
                : a[d] !== b[d] && c.push(d)
          : c.push(d);
      for (d in b) d in a || c.push(d);
      return c;
    },
    wf = function() {
      var a = L();
      a =
        'Chrome' != vf(a)
          ? null
          : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length
            ? parseInt(a[1], 10)
            : null;
      return a && 30 > a ? !1 : !z || !Cb || 9 < Cb;
    },
    xf = function(a) {
      a = (a || L()).toLowerCase();
      return a.match(/android/) ||
        a.match(/webos/) ||
        a.match(/iphone|ipad|ipod/) ||
        a.match(/blackberry/) ||
        a.match(/windows phone/) ||
        a.match(/iemobile/)
        ? !0
        : !1;
    },
    yf = function(a) {
      a = a || k.window;
      try {
        a.close();
      } catch (b) {}
    },
    zf = function(a, b, c) {
      var d = Math.floor(1e9 * Math.random()).toString();
      b = b || 500;
      c = c || 600;
      var e = (window.screen.availHeight - c) / 2,
        f = (window.screen.availWidth - b) / 2;
      b = {
        width: b,
        height: c,
        top: 0 < e ? e : 0,
        left: 0 < f ? f : 0,
        location: !0,
        resizable: !0,
        statusbar: !0,
        toolbar: !1
      };
      c = L().toLowerCase();
      d && ((b.target = d), v(c, 'crios/') && (b.target = '_blank'));
      'Firefox' == vf(L()) &&
        ((a = a || 'http://localhost'), (b.scrollbars = !0));
      c = a || '';
      (d = b) || (d = {});
      a = window;
      b =
        c instanceof Ac
          ? c
          : Ec('undefined' != typeof c.href ? c.href : String(c));
      c = d.target || c.target;
      e = [];
      for (g in d)
        switch (g) {
          case 'width':
          case 'height':
          case 'top':
          case 'left':
            e.push(g + '=' + d[g]);
            break;
          case 'target':
          case 'noreferrer':
            break;
          default:
            e.push(g + '=' + (d[g] ? 1 : 0));
        }
      var g = e.join(',');
      ((y('iPhone') && !y('iPod') && !y('iPad')) || y('iPad') || y('iPod')) &&
      a.navigator &&
      a.navigator.standalone &&
      c &&
      '_self' != c
        ? ((g = a.document.createElement('A')),
          (e = gd(g)),
          'undefined' != typeof e.HTMLAnchorElement &&
            'undefined' != typeof e.Location &&
            'undefined' != typeof e.Element &&
            w(
              g &&
                (g instanceof e.HTMLAnchorElement ||
                  !(g instanceof e.Location || g instanceof e.Element)),
              'Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s',
              fd(g)
            ),
          b instanceof Ac ||
            b instanceof Ac ||
            ((b = b.qb ? b.ob() : String(b)),
            w(Cc.test(b)) || (b = 'about:invalid#zClosurez'),
            (b = Dc(b))),
          (g.href = Bc(b)),
          g.setAttribute('target', c),
          d.noreferrer && g.setAttribute('rel', 'noreferrer'),
          (d = document.createEvent('MouseEvent')),
          d.initMouseEvent('click', !0, !0, a, 1),
          g.dispatchEvent(d),
          (g = {}))
        : d.noreferrer
          ? ((g = a.open('', c, g)),
            (d = Bc(b)),
            g &&
              (sb && v(d, ';') && (d = "'" + d.replace(/'/g, '%27') + "'"),
              (g.opener = null),
              (a = Ha('b/12014412, meta tag with sanitized URL')),
              (d =
                '<META HTTP-EQUIV="refresh" content="0; url=' + wa(d) + '">'),
              Ca(Ga(a), 'must provide justification'),
              w(
                !/^[\s\xa0]*$/.test(Ga(a)),
                'must provide non-empty justification'
              ),
              g.document.write(kd(new jd().Qf(d))),
              g.document.close()))
          : (g = a.open(Bc(b), c, g));
      if (g)
        try {
          g.focus();
        } catch (l) {}
      return g;
    },
    Af = function(a) {
      return new C(function(b) {
        var c = function() {
          Ce(2e3).then(function() {
            if (!a || a.closed) b();
            else return c();
          });
        };
        return c();
      });
    },
    Bf = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    Cf = function() {
      var a = null;
      return new C(function(b) {
        'complete' == k.document.readyState
          ? b()
          : ((a = function() {
              b();
            }),
            kc(window, 'load', a));
      }).g(function(b) {
        tc(window, 'load', a);
        throw b;
      });
    },
    Ef = function() {
      return Df(void 0)
        ? Cf().then(function() {
            return new C(function(a, b) {
              var c = k.document,
                d = setTimeout(function() {
                  b(Error('Cordova framework is not ready.'));
                }, 1e3);
              c.addEventListener(
                'deviceready',
                function() {
                  clearTimeout(d);
                  a();
                },
                !1
              );
            });
          })
        : E(Error('Cordova must run in an Android or iOS file scheme.'));
    },
    Df = function(a) {
      a = a || L();
      return !(
        'file:' !== Ff() || !a.toLowerCase().match(/iphone|ipad|ipod|android/)
      );
    },
    Gf = function() {
      var a = k.window;
      try {
        return !(!a || a == a.top);
      } catch (b) {
        return !1;
      }
    },
    Hf = function() {
      return firebase.INTERNAL.hasOwnProperty('reactNative')
        ? 'ReactNative'
        : firebase.INTERNAL.hasOwnProperty('node')
          ? 'Node'
          : 'Browser';
    },
    If = function() {
      var a = Hf();
      return 'ReactNative' === a || 'Node' === a;
    },
    vf = function(a) {
      var b = a.toLowerCase();
      if (v(b, 'opera/') || v(b, 'opr/') || v(b, 'opios/')) return 'Opera';
      if (v(b, 'iemobile')) return 'IEMobile';
      if (v(b, 'msie') || v(b, 'trident/')) return 'IE';
      if (v(b, 'edge/')) return 'Edge';
      if (v(b, 'firefox/')) return 'Firefox';
      if (v(b, 'silk/')) return 'Silk';
      if (v(b, 'blackberry')) return 'Blackberry';
      if (v(b, 'webos')) return 'Webos';
      if (
        !v(b, 'safari/') ||
        v(b, 'chrome/') ||
        v(b, 'crios/') ||
        v(b, 'android')
      )
        if ((!v(b, 'chrome/') && !v(b, 'crios/')) || v(b, 'edge/')) {
          if (v(b, 'android')) return 'Android';
          if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length)
            return a[1];
        } else return 'Chrome';
      else return 'Safari';
      return 'Other';
    },
    Jf = { Eg: 'FirebaseCore-web', Gg: 'FirebaseUI-web' },
    Kf = function(a, b) {
      b = b || [];
      var c = [],
        d = {},
        e;
      for (e in Jf) d[Jf[e]] = !0;
      for (e = 0; e < b.length; e++)
        'undefined' !== typeof d[b[e]] && (delete d[b[e]], c.push(b[e]));
      c.sort();
      b = c;
      b.length || (b = ['FirebaseCore-web']);
      c = Hf();
      return (
        ('Browser' === c ? vf(L()) : c) + '/JsCore/' + a + '/' + b.join(',')
      );
    },
    L = function() {
      return (k.navigator && k.navigator.userAgent) || '';
    },
    M = function(a, b) {
      a = a.split('.');
      b = b || k;
      for (var c = 0; c < a.length && 'object' == typeof b && null != b; c++)
        b = b[a[c]];
      c != a.length && (b = void 0);
      return b;
    },
    Mf = function() {
      try {
        var a = k.localStorage,
          b = Lf();
        if (a)
          return a.setItem(b, '1'), a.removeItem(b), rf() ? !!k.indexedDB : !0;
      } catch (c) {}
      return !1;
    },
    Of = function() {
      return (Nf() || 'chrome-extension:' === Ff() || Df()) && !If() && Mf();
    },
    Nf = function() {
      return 'http:' === Ff() || 'https:' === Ff();
    },
    Ff = function() {
      return (k.location && k.location.protocol) || null;
    },
    Pf = function(a) {
      a = a || L();
      return xf(a) || 'Firefox' == vf(a) ? !1 : !0;
    },
    Qf = function(a) {
      return 'undefined' === typeof a ? null : Hc(a);
    },
    Rf = function(a) {
      var b = {},
        c;
      for (c in a)
        a.hasOwnProperty(c) &&
          null !== a[c] &&
          void 0 !== a[c] &&
          (b[c] = a[c]);
      return b;
    },
    Sf = function(a) {
      if (null !== a) return JSON.parse(a);
    },
    Lf = function(a) {
      return a ? a : '' + Math.floor(1e9 * Math.random()).toString();
    },
    Tf = function(a) {
      a = a || L();
      return 'Safari' == vf(a) || a.toLowerCase().match(/iphone|ipad|ipod/)
        ? !1
        : !0;
    },
    Uf = function() {
      var a = k.___jsl;
      if (a && a.H)
        for (var b in a.H)
          if (
            ((a.H[b].r = a.H[b].r || []),
            (a.H[b].L = a.H[b].L || []),
            (a.H[b].r = a.H[b].L.concat()),
            a.CP)
          )
            for (var c = 0; c < a.CP.length; c++) a.CP[c] = null;
    },
    Vf = function() {
      var a = k.navigator;
      return a &&
        'boolean' === typeof a.onLine &&
        (Nf() ||
          'chrome-extension:' === Ff() ||
          'undefined' !== typeof a.connection)
        ? a.onLine
        : !0;
    },
    Wf = function(a, b, c, d) {
      if (a > b) throw Error('Short delay should be less than long delay!');
      this.tg = a;
      this.Yf = b;
      a = c || L();
      d = d || Hf();
      this.Tf = xf(a) || 'ReactNative' === d;
    };
  Wf.prototype.get = function() {
    return this.Tf ? this.Yf : this.tg;
  };
  var Xf = function() {
      var a = k.document;
      return a && 'undefined' !== typeof a.visibilityState
        ? 'visible' == a.visibilityState
        : !0;
    },
    Yf = function() {
      var a = k.document,
        b = null;
      return Xf() || !a
        ? D()
        : new C(function(c) {
            b = function() {
              Xf() && (a.removeEventListener('visibilitychange', b, !1), c());
            };
            a.addEventListener('visibilitychange', b, !1);
          }).g(function(c) {
            a.removeEventListener('visibilitychange', b, !1);
            throw c;
          });
    };
  var Zf = {};
  var $f;
  try {
    var ag = {};
    Object.defineProperty(ag, 'abcd', {
      configurable: !0,
      enumerable: !0,
      value: 1
    });
    Object.defineProperty(ag, 'abcd', {
      configurable: !0,
      enumerable: !0,
      value: 2
    });
    $f = 2 == ag.abcd;
  } catch (a) {
    $f = !1;
  }
  var N = function(a, b, c) {
      $f
        ? Object.defineProperty(a, b, {
            configurable: !0,
            enumerable: !0,
            value: c
          })
        : (a[b] = c);
    },
    bg = function(a, b) {
      if (b) for (var c in b) b.hasOwnProperty(c) && N(a, c, b[c]);
    },
    cg = function(a) {
      var b = {};
      bg(b, a);
      return b;
    },
    dg = function(a) {
      var b = {},
        c;
      for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
      return b;
    },
    eg = function(a, b) {
      if (!b || !b.length) return !0;
      if (!a) return !1;
      for (var c = 0; c < b.length; c++) {
        var d = a[b[c]];
        if (void 0 === d || null === d || '' === d) return !1;
      }
      return !0;
    },
    fg = function(a) {
      var b = a;
      if ('object' == typeof a && null != a) {
        b = 'length' in a ? [] : {};
        for (var c in a) N(b, c, fg(a[c]));
      }
      return b;
    };
  var gg = 'oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version'.split(
      ' '
    ),
    hg = ['client_id', 'response_type', 'scope', 'redirect_uri', 'state'],
    ig = {
      Fg: {
        Ec: 'locale',
        Zb: 500,
        Yb: 600,
        providerId: 'facebook.com',
        Td: hg
      },
      Hg: { Ec: null, Zb: 500, Yb: 620, providerId: 'github.com', Td: hg },
      Ig: { Ec: 'hl', Zb: 515, Yb: 680, providerId: 'google.com', Td: hg },
      Mg: { Ec: 'lang', Zb: 485, Yb: 705, providerId: 'twitter.com', Td: gg }
    },
    jg = function(a) {
      for (var b in ig) if (ig[b].providerId == a) return ig[b];
      return null;
    };
  var O = function(a, b) {
    this.code = 'auth/' + a;
    this.message = b || kg[a] || '';
  };
  t(O, Error);
  O.prototype.G = function() {
    return { code: this.code, message: this.message };
  };
  O.prototype.toJSON = function() {
    return this.G();
  };
  var lg = function(a) {
      var b = a && a.code;
      return b ? new O(b.substring(5), a.message) : null;
    },
    kg = {
      'argument-error': '',
      'app-not-authorized':
        "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
      'app-not-installed':
        'The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.',
      'captcha-check-failed':
        'The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.',
      'code-expired':
        'The SMS code has expired. Please re-send the verification code to try again.',
      'cordova-not-ready': 'Cordova framework is not ready.',
      'cors-unsupported': 'This browser is not supported.',
      'credential-already-in-use':
        'This credential is already associated with a different user account.',
      'custom-token-mismatch':
        'The custom token corresponds to a different audience.',
      'requires-recent-login':
        'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
      'dynamic-link-not-activated':
        'Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.',
      'email-already-in-use':
        'The email address is already in use by another account.',
      'expired-action-code': 'The action code has expired. ',
      'cancelled-popup-request':
        'This operation has been cancelled due to another conflicting popup being opened.',
      'internal-error': 'An internal error has occurred.',
      'invalid-app-credential':
        'The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.',
      'invalid-app-id':
        'The mobile app identifier is not registed for the current project.',
      'invalid-user-token':
        "The user's credential is no longer valid. The user must sign in again.",
      'invalid-auth-event': 'An internal error has occurred.',
      'invalid-verification-code':
        'The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.',
      'invalid-continue-uri':
        'The continue URL provided in the request is invalid.',
      'invalid-cordova-configuration':
        'The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.',
      'invalid-custom-token':
        'The custom token format is incorrect. Please check the documentation.',
      'invalid-email': 'The email address is badly formatted.',
      'invalid-api-key':
        'Your API key is invalid, please check you have copied it correctly.',
      'invalid-credential':
        'The supplied auth credential is malformed or has expired.',
      'invalid-persistence-type':
        'The specified persistence type is invalid. It can only be local, session or none.',
      'invalid-message-payload':
        'The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.',
      'invalid-oauth-provider':
        'EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.',
      'invalid-oauth-client-id':
        'The OAuth client ID provided is either invalid or does not match the specified API key.',
      'unauthorized-domain':
        'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.',
      'invalid-action-code':
        'The action code is invalid. This can happen if the code is malformed, expired, or has already been used.',
      'wrong-password':
        'The password is invalid or the user does not have a password.',
      'invalid-phone-number':
        'The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].',
      'invalid-recipient-email':
        'The email corresponding to this action failed to send as the provided recipient email address is invalid.',
      'invalid-sender':
        'The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.',
      'invalid-verification-id':
        'The verification ID used to create the phone auth credential is invalid.',
      'missing-android-pkg-name':
        'An Android Package Name must be provided if the Android App is required to be installed.',
      'auth-domain-config-required':
        'Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.',
      'missing-app-credential':
        'The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.',
      'missing-verification-code':
        'The phone auth credential was created with an empty SMS verification code.',
      'missing-continue-uri': 'A continue URL must be provided in the request.',
      'missing-iframe-start': 'An internal error has occurred.',
      'missing-ios-bundle-id':
        'An iOS Bundle ID must be provided if an App Store ID is provided.',
      'missing-phone-number':
        'To send verification codes, provide a phone number for the recipient.',
      'missing-verification-id':
        'The phone auth credential was created with an empty verification ID.',
      'app-deleted': 'This instance of FirebaseApp has been deleted.',
      'account-exists-with-different-credential':
        'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
      'network-request-failed':
        'A network error (such as timeout, interrupted connection or unreachable host) has occurred.',
      'no-auth-event': 'An internal error has occurred.',
      'no-such-provider':
        'User was not linked to an account with the given provider.',
      'operation-not-allowed':
        'The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.',
      'operation-not-supported-in-this-environment':
        'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
      'popup-blocked':
        'Unable to establish a connection with the popup. It may have been blocked by the browser.',
      'popup-closed-by-user':
        'The popup has been closed by the user before finalizing the operation.',
      'provider-already-linked':
        'User can only be linked to one identity for the given provider.',
      'quota-exceeded': 'The SMS quota for this project has been exceeded.',
      'redirect-cancelled-by-user':
        'The redirect operation has been cancelled by the user before finalizing.',
      'redirect-operation-pending':
        'A redirect sign-in operation is already pending.',
      timeout: 'The operation has timed out.',
      'user-token-expired':
        "The user's credential is no longer valid. The user must sign in again.",
      'too-many-requests':
        'We have blocked all requests from this device due to unusual activity. Try again later.',
      'unauthorized-continue-uri':
        'The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.',
      'unsupported-persistence-type':
        'The current environment does not support the specified persistence type.',
      'user-cancelled':
        'User did not grant your application the permissions it requested.',
      'user-not-found':
        'There is no user record corresponding to this identifier. The user may have been deleted.',
      'user-disabled':
        'The user account has been disabled by an administrator.',
      'user-mismatch':
        'The supplied credentials do not correspond to the previously signed in user.',
      'user-signed-out': '',
      'weak-password': 'The password must be 6 characters long or more.',
      'web-storage-unsupported':
        'This browser is not supported or 3rd party cookies and data may be disabled.'
    };
  var mg = function(a, b, c, d, e) {
    this.ma = a;
    this.W = b || null;
    this.Eb = c || null;
    this.Xd = d || null;
    this.ba = e || null;
    if (this.Eb || this.ba) {
      if (this.Eb && this.ba) throw new O('invalid-auth-event');
      if (this.Eb && !this.Xd) throw new O('invalid-auth-event');
    } else throw new O('invalid-auth-event');
  };
  mg.prototype.uc = function() {
    return this.Xd;
  };
  mg.prototype.getError = function() {
    return this.ba;
  };
  mg.prototype.G = function() {
    return {
      type: this.ma,
      eventId: this.W,
      urlResponse: this.Eb,
      sessionId: this.Xd,
      error: this.ba && this.ba.G()
    };
  };
  var ng = function(a) {
    a = a || {};
    return a.type
      ? new mg(
          a.type,
          a.eventId,
          a.urlResponse,
          a.sessionId,
          a.error && lg(a.error)
        )
      : null;
  };
  var og = function(a) {
    var b = 'unauthorized-domain',
      c = void 0,
      d = hf(a);
    a = d.pa;
    d = d.qa;
    'chrome-extension' == d
      ? (c = na(
          'This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
          a
        ))
      : 'http' == d || 'https' == d
        ? (c = na(
            'This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
            a
          ))
        : (b = 'operation-not-supported-in-this-environment');
    O.call(this, b, c);
  };
  t(og, O);
  var pg = function(a) {
    this.Wf = a.sub;
    ma();
    this.Mb = a.email || null;
    this.gg = a.provider_id || null;
    this.mf = !!a.is_anonymous || 'anonymous' == this.gg;
  };
  pg.prototype.getEmail = function() {
    return this.Mb;
  };
  pg.prototype.isAnonymous = function() {
    return this.mf;
  };
  var qg = function(a, b) {
      return a
        .then(function(a) {
          if (a.idToken) {
            a: {
              var c = a.idToken.split('.');
              if (3 == c.length) {
                c = c[1];
                for (var e = (4 - (c.length % 4)) % 4, f = 0; f < e; f++)
                  c += '.';
                try {
                  var g = JSON.parse(Hb(c));
                  if (g.sub && g.iss && g.aud && g.exp) {
                    var l = new pg(g);
                    break a;
                  }
                } catch (n) {}
              }
              l = null;
            }
            if (!l || b != l.Wf) throw new O('user-mismatch');
            return a;
          }
          throw new O('user-mismatch');
        })
        .g(function(a) {
          throw a && a.code && 'auth/user-not-found' == a.code
            ? new O('user-mismatch')
            : a;
        });
    },
    rg = function(a, b) {
      if (b.idToken || b.accessToken)
        b.idToken && N(this, 'idToken', b.idToken),
          b.accessToken && N(this, 'accessToken', b.accessToken);
      else if (b.oauthToken && b.oauthTokenSecret)
        N(this, 'accessToken', b.oauthToken),
          N(this, 'secret', b.oauthTokenSecret);
      else throw new O('internal-error', 'failed to construct a credential');
      N(this, 'providerId', a);
    };
  rg.prototype.Ob = function(a) {
    return sg(a, tg(this));
  };
  rg.prototype.Gc = function(a, b) {
    var c = tg(this);
    c.idToken = b;
    return ug(a, c);
  };
  rg.prototype.Gd = function(a, b) {
    var c = tg(this);
    return qg(vg(a, c), b);
  };
  var tg = function(a) {
    var b = {};
    a.idToken && (b.id_token = a.idToken);
    a.accessToken && (b.access_token = a.accessToken);
    a.secret && (b.oauth_token_secret = a.secret);
    b.providerId = a.providerId;
    return { postBody: nf(b).toString(), requestUri: 'http://localhost' };
  };
  rg.prototype.G = function() {
    var a = { providerId: this.providerId };
    this.idToken && (a.oauthIdToken = this.idToken);
    this.accessToken && (a.oauthAccessToken = this.accessToken);
    this.secret && (a.oauthTokenSecret = this.secret);
    return a;
  };
  var wg = function(a, b) {
    this.jg = b || [];
    bg(this, { providerId: a, isOAuthProvider: !0 });
    this.pe = {};
    this.Ed = (jg(a) || {}).Ec || null;
    this.nd = null;
  };
  wg.prototype.setCustomParameters = function(a) {
    this.pe = kb(a);
    return this;
  };
  var P = function(a) {
    wg.call(this, a, hg);
    this.Ud = [];
  };
  t(P, wg);
  P.prototype.addScope = function(a) {
    Va(this.Ud, a) || this.Ud.push(a);
    return this;
  };
  P.prototype.xe = function() {
    return $a(this.Ud);
  };
  P.prototype.credential = function(a, b) {
    if (!a && !b)
      throw new O(
        'argument-error',
        'credential failed: must provide the ID token and/or the access token.'
      );
    return new rg(this.providerId, {
      idToken: a || null,
      accessToken: b || null
    });
  };
  var xg = function() {
    P.call(this, 'facebook.com');
  };
  t(xg, P);
  N(xg, 'PROVIDER_ID', 'facebook.com');
  var yg = function(a) {
      if (!a)
        throw new O(
          'argument-error',
          'credential failed: expected 1 argument (the OAuth access token).'
        );
      var b = a;
      q(a) && (b = a.accessToken);
      return new xg().credential(null, b);
    },
    zg = function() {
      P.call(this, 'github.com');
    };
  t(zg, P);
  N(zg, 'PROVIDER_ID', 'github.com');
  var Ag = function(a) {
      if (!a)
        throw new O(
          'argument-error',
          'credential failed: expected 1 argument (the OAuth access token).'
        );
      var b = a;
      q(a) && (b = a.accessToken);
      return new zg().credential(null, b);
    },
    Bg = function() {
      P.call(this, 'google.com');
      this.addScope('profile');
    };
  t(Bg, P);
  N(Bg, 'PROVIDER_ID', 'google.com');
  var Cg = function(a, b) {
      var c = a;
      q(a) && ((c = a.idToken), (b = a.accessToken));
      return new Bg().credential(c, b);
    },
    Dg = function() {
      wg.call(this, 'twitter.com', gg);
    };
  t(Dg, wg);
  N(Dg, 'PROVIDER_ID', 'twitter.com');
  var Eg = function(a, b) {
      var c = a;
      q(c) || (c = { oauthToken: a, oauthTokenSecret: b });
      if (!c.oauthToken || !c.oauthTokenSecret)
        throw new O(
          'argument-error',
          'credential failed: expected 2 arguments (the OAuth access token and secret).'
        );
      return new rg('twitter.com', c);
    },
    Fg = function(a, b) {
      this.Mb = a;
      this.Ld = b;
      N(this, 'providerId', 'password');
    };
  Fg.prototype.Ob = function(a) {
    return Q(a, Gg, { email: this.Mb, password: this.Ld });
  };
  Fg.prototype.Gc = function(a, b) {
    return Q(a, Hg, { idToken: b, email: this.Mb, password: this.Ld });
  };
  Fg.prototype.Gd = function(a, b) {
    return qg(this.Ob(a), b);
  };
  Fg.prototype.G = function() {
    return { email: this.Mb, password: this.Ld };
  };
  var Ig = function() {
    bg(this, { providerId: 'password', isOAuthProvider: !1 });
  };
  bg(Ig, { PROVIDER_ID: 'password' });
  var Jg = function(a) {
    if (!((a.verificationId && a.ad) || (a.ic && a.phoneNumber)))
      throw new O('internal-error');
    this.S = a;
    N(this, 'providerId', 'phone');
  };
  Jg.prototype.Ob = function(a) {
    return a.verifyPhoneNumber(Kg(this));
  };
  Jg.prototype.Gc = function(a, b) {
    var c = Kg(this);
    c.idToken = b;
    return Q(a, Lg, c);
  };
  Jg.prototype.Gd = function(a, b) {
    var c = Kg(this);
    c.operation = 'REAUTH';
    a = Q(a, Mg, c);
    return qg(a, b);
  };
  Jg.prototype.G = function() {
    var a = { providerId: 'phone' };
    this.S.verificationId && (a.verificationId = this.S.verificationId);
    this.S.ad && (a.verificationCode = this.S.ad);
    this.S.ic && (a.temporaryProof = this.S.ic);
    this.S.phoneNumber && (a.phoneNumber = this.S.phoneNumber);
    return a;
  };
  var Kg = function(a) {
      return a.S.ic && a.S.phoneNumber
        ? { temporaryProof: a.S.ic, phoneNumber: a.S.phoneNumber }
        : { sessionInfo: a.S.verificationId, code: a.S.ad };
    },
    Ng = function(a) {
      try {
        this.qf = a || firebase.auth();
      } catch (b) {
        throw new O(
          'argument-error',
          'Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().'
        );
      }
      bg(this, { providerId: 'phone', isOAuthProvider: !1 });
    };
  Ng.prototype.verifyPhoneNumber = function(a, b) {
    var c = this.qf.f;
    return D(b.verify()).then(function(d) {
      if (!m(d))
        throw new O(
          'argument-error',
          'An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.'
        );
      switch (b.type) {
        case 'recaptcha':
          return Q(c, Og, { phoneNumber: a, recaptchaToken: d });
        default:
          throw new O(
            'argument-error',
            'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'
          );
      }
    });
  };
  var Pg = function(a, b) {
    if (!a) throw new O('missing-verification-id');
    if (!b) throw new O('missing-verification-code');
    return new Jg({ verificationId: a, ad: b });
  };
  bg(Ng, { PROVIDER_ID: 'phone' });
  var Qg = function(a) {
      if (a.temporaryProof && a.phoneNumber)
        return new Jg({ ic: a.temporaryProof, phoneNumber: a.phoneNumber });
      var b = a && a.providerId;
      if (!b || 'password' === b) return null;
      var c = a && a.oauthAccessToken,
        d = a && a.oauthTokenSecret;
      a = a && a.oauthIdToken;
      try {
        switch (b) {
          case 'google.com':
            return Cg(a, c);
          case 'facebook.com':
            return yg(c);
          case 'github.com':
            return Ag(c);
          case 'twitter.com':
            return Eg(c, d);
          default:
            return new P(b).credential(a, c);
        }
      } catch (e) {
        return null;
      }
    },
    Rg = function(a) {
      if (!a.isOAuthProvider) throw new O('invalid-oauth-provider');
    };
  var Sg = function(a, b, c) {
    O.call(this, a, c);
    a = b || {};
    a.email && N(this, 'email', a.email);
    a.phoneNumber && N(this, 'phoneNumber', a.phoneNumber);
    a.credential && N(this, 'credential', a.credential);
  };
  t(Sg, O);
  Sg.prototype.G = function() {
    var a = { code: this.code, message: this.message };
    this.email && (a.email = this.email);
    this.phoneNumber && (a.phoneNumber = this.phoneNumber);
    var b = this.credential && this.credential.G();
    b && mb(a, b);
    return a;
  };
  Sg.prototype.toJSON = function() {
    return this.G();
  };
  var Tg = function(a) {
    if (a.code) {
      var b = a.code || '';
      0 == b.indexOf('auth/') && (b = b.substring(5));
      var c = { credential: Qg(a) };
      if (a.email) c.email = a.email;
      else if (a.phoneNumber) c.phoneNumber = a.phoneNumber;
      else return new O(b, a.message || void 0);
      return new Sg(b, c, a.message);
    }
    return null;
  };
  var Ug = function(a) {
    this.Dg = a;
  };
  t(Ug, Lc);
  Ug.prototype.sc = function() {
    return new this.Dg();
  };
  Ug.prototype.Cd = function() {
    return {};
  };
  var R = function(a, b, c) {
      var d = 'Node' == Hf();
      d =
        k.XMLHttpRequest ||
        (d && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest);
      if (!d)
        throw new O(
          'internal-error',
          'The XMLHttpRequest compatibility library was not found.'
        );
      this.m = a;
      a = b || {};
      this.pg =
        a.secureTokenEndpoint || 'https://securetoken.googleapis.com/v1/token';
      this.qg = a.secureTokenTimeout || Vg;
      this.Qc = kb(a.secureTokenHeaders || Wg);
      this.Af =
        a.firebaseEndpoint ||
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/';
      this.Bf = a.firebaseTimeout || Xg;
      this.mb = kb(a.firebaseHeaders || Yg);
      c &&
        ((this.mb['X-Client-Version'] = c), (this.Qc['X-Client-Version'] = c));
      this.sf = new Qc();
      this.Cg = new Ug(d);
    },
    Zg,
    Vg = new Wf(3e4, 6e4),
    Wg = { 'Content-Type': 'application/x-www-form-urlencoded' },
    Xg = new Wf(3e4, 6e4),
    Yg = { 'Content-Type': 'application/json' },
    $g = function(a, b) {
      b ? (a.mb['X-Firebase-Locale'] = b) : delete a.mb['X-Firebase-Locale'];
    },
    ah = function(a, b) {
      b
        ? ((a.mb['X-Client-Version'] = b), (a.Qc['X-Client-Version'] = b))
        : (delete a.mb['X-Client-Version'], delete a.Qc['X-Client-Version']);
    },
    ch = function(a, b, c, d, e, f, g) {
      Vf()
        ? (wf()
            ? (a = r(a.sg, a))
            : (Zg ||
                (Zg = new C(function(a, b) {
                  bh(a, b);
                })),
              (a = r(a.rg, a))),
          a(b, c, d, e, f, g))
        : c && c(null);
    };
  R.prototype.sg = function(a, b, c, d, e, f) {
    var g = 'Node' == Hf(),
      l = If() ? (g ? new I(this.Cg) : new I()) : new I(this.sf);
    if (f) {
      l.Db = Math.max(0, f);
      var n = setTimeout(function() {
        l.dispatchEvent('timeout');
      }, f);
    }
    l.listen('complete', function() {
      n && clearTimeout(n);
      var a = null;
      try {
        a = JSON.parse(Se(this)) || null;
      } catch (zb) {
        a = null;
      }
      b && b(a);
    });
    sc(l, 'ready', function() {
      n && clearTimeout(n);
      this.Ma || ((this.Ma = !0), this.lb());
    });
    sc(l, 'timeout', function() {
      n && clearTimeout(n);
      this.Ma || ((this.Ma = !0), this.lb());
      b && b(null);
    });
    l.send(a, c, d, e);
  };
  var dh = Ha('https://apis.google.com/js/client.js?onload=%{onload}'),
    eh = '__fcb' + Math.floor(1e6 * Math.random()).toString(),
    bh = function(a, b) {
      if (((window.gapi || {}).client || {}).request) a();
      else {
        k[eh] = function() {
          ((window.gapi || {}).client || {}).request
            ? a()
            : b(Error('CORS_UNSUPPORTED'));
        };
        var c = Ma(dh, { onload: eh });
        Xd(ee(c), function() {
          b(Error('CORS_UNSUPPORTED'));
        });
      }
    };
  R.prototype.rg = function(a, b, c, d, e) {
    var f = this;
    Zg.then(function() {
      window.gapi.client.setApiKey(f.m);
      var g = window.gapi.auth.getToken();
      window.gapi.auth.setToken(null);
      window.gapi.client.request({
        path: a,
        method: c,
        body: d,
        headers: e,
        authType: 'none',
        callback: function(a) {
          window.gapi.auth.setToken(g);
          b && b(a);
        }
      });
    }).g(function(a) {
      b && b({ error: { message: (a && a.message) || 'CORS_UNSUPPORTED' } });
    });
  };
  var gh = function(a, b) {
      return new C(function(c, d) {
        ('refresh_token' == b.grant_type && b.refresh_token) ||
        ('authorization_code' == b.grant_type && b.code)
          ? ch(
              a,
              a.pg + '?key=' + encodeURIComponent(a.m),
              function(a) {
                a
                  ? a.error
                    ? d(fh(a))
                    : a.access_token && a.refresh_token
                      ? c(a)
                      : d(new O('internal-error'))
                  : d(new O('network-request-failed'));
              },
              'POST',
              nf(b).toString(),
              a.Qc,
              a.qg.get()
            )
          : d(new O('internal-error'));
      });
    },
    hh = function(a, b, c, d, e, f) {
      var g = hf(a.Af + b);
      K(g, 'key', a.m);
      f && K(g, 'cb', ma().toString());
      var l = 'GET' == c;
      if (l) for (var n in d) d.hasOwnProperty(n) && K(g, n, d[n]);
      return new C(function(b, f) {
        ch(
          a,
          g.toString(),
          function(a) {
            a
              ? a.error
                ? f(fh(a, e || {}))
                : b(a)
              : f(new O('network-request-failed'));
          },
          c,
          l ? void 0 : Hc(Rf(d)),
          a.mb,
          a.Bf.get()
        );
      });
    },
    ih = function(a) {
      if (!yc.test(a.email)) throw new O('invalid-email');
    },
    jh = function(a) {
      'email' in a && ih(a);
    },
    lh = function(a, b) {
      return Q(a, kh, {
        identifier: b,
        continueUri: Nf() ? sf() : 'http://localhost'
      }).then(function(a) {
        return a.allProviders || [];
      });
    },
    nh = function(a) {
      return Q(a, mh, {}).then(function(a) {
        return a.authorizedDomains || [];
      });
    },
    oh = function(a) {
      if (!a.idToken) throw new O('internal-error');
    },
    ph = function(a) {
      if (a.phoneNumber || a.temporaryProof) {
        if (!a.phoneNumber || !a.temporaryProof) throw new O('internal-error');
      } else {
        if (!a.sessionInfo) throw new O('missing-verification-id');
        if (!a.code) throw new O('missing-verification-code');
      }
    };
  R.prototype.signInAnonymously = function() {
    return Q(this, qh, {});
  };
  R.prototype.updateEmail = function(a, b) {
    return Q(this, rh, { idToken: a, email: b });
  };
  R.prototype.updatePassword = function(a, b) {
    return Q(this, Hg, { idToken: a, password: b });
  };
  var sh = { displayName: 'DISPLAY_NAME', photoUrl: 'PHOTO_URL' };
  R.prototype.updateProfile = function(a, b) {
    var c = { idToken: a },
      d = [];
    eb(sh, function(a, f) {
      var e = b[f];
      null === e ? d.push(a) : f in b && (c[f] = e);
    });
    d.length && (c.deleteAttribute = d);
    return Q(this, rh, c);
  };
  R.prototype.sendPasswordResetEmail = function(a, b) {
    a = { requestType: 'PASSWORD_RESET', email: a };
    mb(a, b);
    return Q(this, th, a);
  };
  R.prototype.sendEmailVerification = function(a, b) {
    a = { requestType: 'VERIFY_EMAIL', idToken: a };
    mb(a, b);
    return Q(this, uh, a);
  };
  R.prototype.verifyPhoneNumber = function(a) {
    return Q(this, vh, a);
  };
  var xh = function(a, b, c) {
      return Q(a, wh, { idToken: b, deleteProvider: c });
    },
    yh = function(a) {
      if (!a.requestUri || (!a.sessionId && !a.postBody))
        throw new O('internal-error');
    },
    zh = function(a) {
      var b = null;
      a.needConfirmation
        ? ((a.code = 'account-exists-with-different-credential'), (b = Tg(a)))
        : 'FEDERATED_USER_ID_ALREADY_LINKED' == a.errorMessage
          ? ((a.code = 'credential-already-in-use'), (b = Tg(a)))
          : 'EMAIL_EXISTS' == a.errorMessage &&
            ((a.code = 'email-already-in-use'), (b = Tg(a)));
      if (b) throw b;
      if (!a.idToken) throw new O('internal-error');
    },
    sg = function(a, b) {
      b.returnIdpCredential = !0;
      return Q(a, Ah, b);
    },
    ug = function(a, b) {
      b.returnIdpCredential = !0;
      return Q(a, Bh, b);
    },
    vg = function(a, b) {
      b.returnIdpCredential = !0;
      b.autoCreate = !1;
      return Q(a, Ch, b);
    },
    Dh = function(a) {
      if (!a.oobCode) throw new O('invalid-action-code');
    };
  R.prototype.confirmPasswordReset = function(a, b) {
    return Q(this, Eh, { oobCode: a, newPassword: b });
  };
  R.prototype.checkActionCode = function(a) {
    return Q(this, Fh, { oobCode: a });
  };
  R.prototype.applyActionCode = function(a) {
    return Q(this, Gh, { oobCode: a });
  };
  var Gh = { endpoint: 'setAccountInfo', D: Dh, cb: 'email' },
    Fh = {
      endpoint: 'resetPassword',
      D: Dh,
      $: function(a) {
        if (!a.email || !a.requestType) throw new O('internal-error');
      }
    },
    Hh = {
      endpoint: 'signupNewUser',
      D: function(a) {
        ih(a);
        if (!a.password) throw new O('weak-password');
      },
      $: oh,
      Aa: !0
    },
    kh = { endpoint: 'createAuthUri' },
    Ih = { endpoint: 'deleteAccount', ab: ['idToken'] },
    wh = {
      endpoint: 'setAccountInfo',
      ab: ['idToken', 'deleteProvider'],
      D: function(a) {
        if (!ha(a.deleteProvider)) throw new O('internal-error');
      }
    },
    Jh = { endpoint: 'getAccountInfo' },
    uh = {
      endpoint: 'getOobConfirmationCode',
      ab: ['idToken', 'requestType'],
      D: function(a) {
        if ('VERIFY_EMAIL' != a.requestType) throw new O('internal-error');
      },
      cb: 'email'
    },
    th = {
      endpoint: 'getOobConfirmationCode',
      ab: ['requestType'],
      D: function(a) {
        if ('PASSWORD_RESET' != a.requestType) throw new O('internal-error');
        ih(a);
      },
      cb: 'email'
    },
    mh = { he: !0, endpoint: 'getProjectConfig', Ce: 'GET' },
    Kh = {
      he: !0,
      endpoint: 'getRecaptchaParam',
      Ce: 'GET',
      $: function(a) {
        if (!a.recaptchaSiteKey) throw new O('internal-error');
      }
    },
    Eh = {
      endpoint: 'resetPassword',
      D: Dh,
      cb: 'email'
    },
    Og = {
      endpoint: 'sendVerificationCode',
      ab: ['phoneNumber', 'recaptchaToken'],
      cb: 'sessionInfo'
    },
    rh = { endpoint: 'setAccountInfo', ab: ['idToken'], D: jh, Aa: !0 },
    Hg = {
      endpoint: 'setAccountInfo',
      ab: ['idToken'],
      D: function(a) {
        jh(a);
        if (!a.password) throw new O('weak-password');
      },
      $: oh,
      Aa: !0
    },
    qh = { endpoint: 'signupNewUser', $: oh, Aa: !0 },
    Ah = { endpoint: 'verifyAssertion', D: yh, $: zh, Aa: !0 },
    Ch = {
      endpoint: 'verifyAssertion',
      D: yh,
      $: function(a) {
        if (a.errorMessage && 'USER_NOT_FOUND' == a.errorMessage)
          throw new O('user-not-found');
        if (!a.idToken) throw new O('internal-error');
      },
      Aa: !0
    },
    Bh = {
      endpoint: 'verifyAssertion',
      D: function(a) {
        yh(a);
        if (!a.idToken) throw new O('internal-error');
      },
      $: zh,
      Aa: !0
    },
    Lh = {
      endpoint: 'verifyCustomToken',
      D: function(a) {
        if (!a.token) throw new O('invalid-custom-token');
      },
      $: oh,
      Aa: !0
    },
    Gg = {
      endpoint: 'verifyPassword',
      D: function(a) {
        ih(a);
        if (!a.password) throw new O('wrong-password');
      },
      $: oh,
      Aa: !0
    },
    vh = { endpoint: 'verifyPhoneNumber', D: ph, $: oh },
    Lg = {
      endpoint: 'verifyPhoneNumber',
      D: function(a) {
        if (!a.idToken) throw new O('internal-error');
        ph(a);
      },
      $: function(a) {
        if (a.temporaryProof)
          throw ((a.code = 'credential-already-in-use'), Tg(a));
        oh(a);
      }
    },
    Mg = {
      vf: { USER_NOT_FOUND: 'user-not-found' },
      endpoint: 'verifyPhoneNumber',
      D: ph,
      $: oh
    },
    Q = function(a, b, c) {
      if (!eg(c, b.ab)) return E(new O('internal-error'));
      var d = b.Ce || 'POST',
        e;
      return D(c)
        .then(b.D)
        .then(function() {
          b.Aa && (c.returnSecureToken = !0);
          return hh(a, b.endpoint, d, c, b.vf, b.he || !1);
        })
        .then(function(a) {
          return (e = a);
        })
        .then(b.$)
        .then(function() {
          if (!b.cb) return e;
          if (!(b.cb in e)) throw new O('internal-error');
          return e[b.cb];
        });
    },
    fh = function(a, b) {
      var c =
        ((a.error && a.error.errors && a.error.errors[0]) || {}).reason || '';
      var d = {
        keyInvalid: 'invalid-api-key',
        ipRefererBlocked: 'app-not-authorized'
      };
      if ((c = d[c] ? new O(d[c]) : null)) return c;
      c = (a.error && a.error.message) || '';
      d = {
        INVALID_CUSTOM_TOKEN: 'invalid-custom-token',
        CREDENTIAL_MISMATCH: 'custom-token-mismatch',
        MISSING_CUSTOM_TOKEN: 'internal-error',
        INVALID_IDENTIFIER: 'invalid-email',
        MISSING_CONTINUE_URI: 'internal-error',
        INVALID_EMAIL: 'invalid-email',
        INVALID_PASSWORD: 'wrong-password',
        USER_DISABLED: 'user-disabled',
        MISSING_PASSWORD: 'internal-error',
        EMAIL_EXISTS: 'email-already-in-use',
        PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
        INVALID_IDP_RESPONSE: 'invalid-credential',
        FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
        INVALID_MESSAGE_PAYLOAD: 'invalid-message-payload',
        INVALID_RECIPIENT_EMAIL: 'invalid-recipient-email',
        INVALID_SENDER: 'invalid-sender',
        EMAIL_NOT_FOUND: 'user-not-found',
        EXPIRED_OOB_CODE: 'expired-action-code',
        INVALID_OOB_CODE: 'invalid-action-code',
        MISSING_OOB_CODE: 'internal-error',
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
        INVALID_ID_TOKEN: 'invalid-user-token',
        TOKEN_EXPIRED: 'user-token-expired',
        USER_NOT_FOUND: 'user-token-expired',
        CORS_UNSUPPORTED: 'cors-unsupported',
        DYNAMIC_LINK_NOT_ACTIVATED: 'dynamic-link-not-activated',
        INVALID_APP_ID: 'invalid-app-id',
        TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
        WEAK_PASSWORD: 'weak-password',
        OPERATION_NOT_ALLOWED: 'operation-not-allowed',
        USER_CANCELLED: 'user-cancelled',
        CAPTCHA_CHECK_FAILED: 'captcha-check-failed',
        INVALID_APP_CREDENTIAL: 'invalid-app-credential',
        INVALID_CODE: 'invalid-verification-code',
        INVALID_PHONE_NUMBER: 'invalid-phone-number',
        INVALID_SESSION_INFO: 'invalid-verification-id',
        INVALID_TEMPORARY_PROOF: 'invalid-credential',
        MISSING_APP_CREDENTIAL: 'missing-app-credential',
        MISSING_CODE: 'missing-verification-code',
        MISSING_PHONE_NUMBER: 'missing-phone-number',
        MISSING_SESSION_INFO: 'missing-verification-id',
        QUOTA_EXCEEDED: 'quota-exceeded',
        SESSION_EXPIRED: 'code-expired',
        INVALID_CONTINUE_URI: 'invalid-continue-uri',
        MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
        MISSING_IOS_BUNDLE_ID: 'missing-ios-bundle-id',
        UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
        INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id'
      };
      mb(d, b || {});
      b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;
      for (var e in d) if (0 === c.indexOf(e)) return new O(d[e], b);
      !b && a && (b = Qf(a));
      return new O('internal-error', b);
    };
  var Nh = function(a) {
      this.Ag = a;
      this.zc = null;
      this.Id = Mh(this);
    },
    Mh = function(a) {
      return Oh().then(function() {
        return new C(function(b, c) {
          M('gapi.iframes.getContext')().open(
            {
              where: document.body,
              url: a.Ag,
              messageHandlersFilter: M(
                'gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'
              ),
              attributes: {
                style: {
                  position: 'absolute',
                  top: '-100px',
                  width: '1px',
                  height: '1px'
                }
              },
              dontclear: !0
            },
            function(d) {
              a.zc = d;
              a.zc.restyle({ setHideOnLeave: !1 });
              var e = setTimeout(function() {
                  c(Error('Network Error'));
                }, Ph.get()),
                f = function() {
                  clearTimeout(e);
                  b();
                };
              d.ping(f).then(f, function() {
                c(Error('Network Error'));
              });
            }
          );
        });
      });
    };
  Nh.prototype.sendMessage = function(a) {
    var b = this;
    return this.Id.then(function() {
      return new C(function(c) {
        b.zc.send(a.type, a, c, M('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'));
      });
    });
  };
  var Qh = function(a, b) {
      a.Id.then(function() {
        a.zc.register(
          'authEvent',
          b,
          M('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER')
        );
      });
    },
    Rh = Ha('https://apis.google.com/js/api.js?onload=%{onload}'),
    Sh = new Wf(3e4, 6e4),
    Ph = new Wf(5e3, 15e3),
    Th = null,
    Oh = function() {
      return Th
        ? Th
        : (Th = new C(function(a, b) {
            if (Vf()) {
              var c = function() {
                Uf();
                M('gapi.load')('gapi.iframes', {
                  callback: a,
                  ontimeout: function() {
                    Uf();
                    b(Error('Network Error'));
                  },
                  timeout: Sh.get()
                });
              };
              if (M('gapi.iframes.Iframe')) a();
              else if (M('gapi.load')) c();
              else {
                var d =
                  '__iframefcb' + Math.floor(1e6 * Math.random()).toString();
                k[d] = function() {
                  M('gapi.load') ? c() : b(Error('Network Error'));
                };
                d = Ma(Rh, { onload: d });
                D(ee(d)).g(function() {
                  b(Error('Network Error'));
                });
              }
            } else b(Error('Network Error'));
          }).g(function(a) {
            Th = null;
            throw a;
          }));
    };
  var Uh = function(a, b, c) {
    this.A = a;
    this.m = b;
    this.o = c;
    this.fb = null;
    this.Ba = jf(this.A, '/__/auth/iframe');
    K(this.Ba, 'apiKey', this.m);
    K(this.Ba, 'appName', this.o);
    this.O = null;
    this.M = [];
  };
  Uh.prototype.$d = function(a) {
    this.fb = a;
    return this;
  };
  Uh.prototype.Yd = function(a) {
    this.O = a;
    return this;
  };
  Uh.prototype.toString = function() {
    this.fb ? K(this.Ba, 'v', this.fb) : this.Ba.removeParameter('v');
    this.O ? K(this.Ba, 'eid', this.O) : this.Ba.removeParameter('eid');
    this.M.length
      ? K(this.Ba, 'fw', this.M.join(','))
      : this.Ba.removeParameter('fw');
    return this.Ba.toString();
  };
  var Vh = function(a, b, c, d, e) {
    this.A = a;
    this.m = b;
    this.o = c;
    this.pf = d;
    this.fb = this.W = this.Sd = null;
    this.xb = e;
    this.O = null;
  };
  Vh.prototype.$d = function(a) {
    this.fb = a;
    return this;
  };
  Vh.prototype.Yd = function(a) {
    this.O = a;
    return this;
  };
  Vh.prototype.toString = function() {
    var a = jf(this.A, '/__/auth/handler');
    K(a, 'apiKey', this.m);
    K(a, 'appName', this.o);
    K(a, 'authType', this.pf);
    if (this.xb.isOAuthProvider) {
      var b = this.xb;
      try {
        var c = firebase.app(this.o).auth().ia;
      } catch (l) {
        c = null;
      }
      b.nd = c;
      K(a, 'providerId', this.xb.providerId);
      b = this.xb;
      c = Rf(b.pe);
      for (var d in c) c[d] = c[d].toString();
      d = b.jg;
      c = kb(c);
      for (var e = 0; e < d.length; e++) {
        var f = d[e];
        f in c && delete c[f];
      }
      b.Ed && b.nd && !c[b.Ed] && (c[b.Ed] = b.nd);
      ib(c) || K(a, 'customParameters', Qf(c));
    }
    'function' === typeof this.xb.xe &&
      ((b = this.xb.xe()), b.length && K(a, 'scopes', b.join(',')));
    this.Sd ? K(a, 'redirectUrl', this.Sd) : a.removeParameter('redirectUrl');
    this.W ? K(a, 'eventId', this.W) : a.removeParameter('eventId');
    this.fb ? K(a, 'v', this.fb) : a.removeParameter('v');
    if (this.nc)
      for (var g in this.nc)
        this.nc.hasOwnProperty(g) && !gf(a, g) && K(a, g, this.nc[g]);
    this.O ? K(a, 'eid', this.O) : a.removeParameter('eid');
    g = Wh(this.o);
    g.length && K(a, 'fw', g.join(','));
    return a.toString();
  };
  var Wh = function(a) {
      try {
        return $a(firebase.app(a).auth().M);
      } catch (b) {
        return [];
      }
    },
    Xh = function(a, b, c, d, e) {
      this.A = a;
      this.m = b;
      this.o = c;
      this.La = d || null;
      this.O = e || null;
      this.f = this.yd = this.ve = null;
      this.ta = [];
      this.Bc = this.wa = null;
    },
    Yh = function(a) {
      var b = sf();
      return nh(a).then(function(a) {
        a: {
          var c = hf(b),
            e = c.qa;
          c = c.pa;
          for (var f = 0; f < a.length; f++) {
            var g = a[f];
            var l = c;
            var n = e;
            0 == g.indexOf('chrome-extension://')
              ? (l = hf(g).pa == l && 'chrome-extension' == n)
              : 'http' != n && 'https' != n
                ? (l = !1)
                : Bf.test(g)
                  ? (l = l == g)
                  : ((g = g.split('.').join('\\.')),
                    (l = new RegExp('^(.+\\.' + g + '|' + g + ')$', 'i').test(
                      l
                    )));
            if (l) {
              a = !0;
              break a;
            }
          }
          a = !1;
        }
        if (!a) throw new og(sf());
      });
    };
  h = Xh.prototype;
  h.Sb = function() {
    if (this.Bc) return this.Bc;
    var a = this;
    return (this.Bc = Cf().then(function() {
      if (!a.yd) {
        var b = a.La,
          c = a.O,
          d = Wh(a.o);
        b = new Uh(a.A, a.m, a.o).$d(b).Yd(c);
        b.M = $a(d || []);
        a.yd = b.toString();
      }
      a.yc = new Nh(a.yd);
      Zh(a);
    }));
  };
  h.fc = function(a, b, c) {
    var d = new O('popup-closed-by-user'),
      e = new O('web-storage-unsupported'),
      f = this,
      g = !1;
    return this.Ra()
      .then(function() {
        $h(f).then(function(c) {
          c || (a && yf(a), b(e), (g = !0));
        });
      })
      .g(function() {})
      .then(function() {
        if (!g) return Af(a);
      })
      .then(function() {
        if (!g)
          return Ce(c).then(function() {
            b(d);
          });
      });
  };
  h.Ve = function() {
    var a = L();
    return !Pf(a) && !Tf(a);
  };
  h.Ae = function() {
    return !1;
  };
  h.$b = function(a, b, c, d, e, f, g) {
    if (!a) return E(new O('popup-blocked'));
    if (g && !Pf())
      return (
        this.Ra().g(function(b) {
          yf(a);
          e(b);
        }),
        d(),
        D()
      );
    this.wa || (this.wa = Yh(ai(this)));
    var l = this;
    return this.wa
      .then(function() {
        var b = l.Ra().g(function(b) {
          yf(a);
          e(b);
          throw b;
        });
        d();
        return b;
      })
      .then(function() {
        Rg(c);
        if (!g) {
          var d = bi(l.A, l.m, l.o, b, c, null, f, l.La, void 0, l.O);
          tf(d, a);
        }
      })
      .g(function(a) {
        'auth/network-request-failed' == a.code && (l.wa = null);
        throw a;
      });
  };
  var ai = function(a) {
    a.f ||
      ((a.ve = a.La ? Kf(a.La, Wh(a.o)) : null),
      (a.f = new R(a.m, pf(a.O), a.ve)));
    return a.f;
  };
  Xh.prototype.ac = function(a, b, c) {
    this.wa || (this.wa = Yh(ai(this)));
    var d = this;
    return this.wa
      .then(function() {
        Rg(b);
        var e = bi(d.A, d.m, d.o, a, b, sf(), c, d.La, void 0, d.O);
        tf(e);
      })
      .g(function(a) {
        'auth/network-request-failed' == a.code && (d.wa = null);
        throw a;
      });
  };
  Xh.prototype.Ra = function() {
    var a = this;
    return this.Sb()
      .then(function() {
        return a.yc.Id;
      })
      .g(function() {
        a.wa = null;
        throw new O('network-request-failed');
      });
  };
  Xh.prototype.Ze = function() {
    return !0;
  };
  var bi = function(a, b, c, d, e, f, g, l, n, F) {
      a = new Vh(a, b, c, d, e);
      a.Sd = f;
      a.W = g;
      f = a.$d(l);
      f.nc = kb(n || null);
      return f.Yd(F).toString();
    },
    Zh = function(a) {
      if (!a.yc) throw Error('IfcHandler must be initialized!');
      Qh(a.yc, function(b) {
        var c = {};
        if (b && b.authEvent) {
          var d = !1;
          b = ng(b.authEvent);
          for (c = 0; c < a.ta.length; c++) d = a.ta[c](b) || d;
          c = {};
          c.status = d ? 'ACK' : 'ERROR';
          return D(c);
        }
        c.status = 'ERROR';
        return D(c);
      });
    },
    $h = function(a) {
      var b = { type: 'webStorageSupport' };
      return a
        .Sb()
        .then(function() {
          return a.yc.sendMessage(b);
        })
        .then(function(a) {
          if (a && a.length && 'undefined' !== typeof a[0].webStorageSupport)
            return a[0].webStorageSupport;
          throw Error();
        });
    };
  Xh.prototype.ib = function(a) {
    this.ta.push(a);
  };
  Xh.prototype.dc = function(a) {
    Ya(this.ta, function(b) {
      return b == a;
    });
  };
  var ci = function(a, b, c, d, e, f) {
    N(this, 'type', 'recaptcha');
    this.bd = this.Ib = null;
    this.Kb = !1;
    this.ne = b;
    this.Fa = c || { theme: 'light', type: 'image' };
    this.J = [];
    if (this.Fa.sitekey)
      throw new O(
        'argument-error',
        'sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.'
      );
    this.Cc = 'invisible' === this.Fa.size;
    if (!md(b) || (!this.Cc && md(b).hasChildNodes()))
      throw new O(
        'argument-error',
        'reCAPTCHA container is either not found or already contains inner elements!'
      );
    this.f = new R(a, f || null, e || null);
    this.Gf =
      d ||
      function() {
        return null;
      };
    var g = this;
    this.Xc = [];
    var l = this.Fa.callback;
    this.Fa.callback = function(a) {
      g.Lb(a);
      if ('function' === typeof l) l(a);
      else if ('string' === typeof l) {
        var b = M(l, k);
        'function' === typeof b && b(a);
      }
    };
    var n = this.Fa['expired-callback'];
    this.Fa['expired-callback'] = function() {
      g.Lb(null);
      if ('function' === typeof n) n();
      else if ('string' === typeof n) {
        var a = M(n, k);
        'function' === typeof a && a();
      }
    };
  };
  ci.prototype.Lb = function(a) {
    for (var b = 0; b < this.Xc.length; b++)
      try {
        this.Xc[b](a);
      } catch (c) {}
  };
  var di = function(a, b) {
    Ya(a.Xc, function(a) {
      return a == b;
    });
  };
  ci.prototype.c = function(a) {
    var b = this;
    this.J.push(a);
    Fd(a, function() {
      Xa(b.J, a);
    });
    return a;
  };
  ci.prototype.Tb = function() {
    var a = this;
    return this.Ib
      ? this.Ib
      : (this.Ib = this.c(
          D()
            .then(function() {
              if (Nf()) return Cf();
              throw new O(
                'operation-not-supported-in-this-environment',
                'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.'
              );
            })
            .then(function() {
              return ei(fi(), a.Gf());
            })
            .then(function() {
              return Q(a.f, Kh, {});
            })
            .then(function(b) {
              a.Fa.sitekey = b.recaptchaSiteKey;
            })
            .g(function(b) {
              a.Ib = null;
              throw b;
            })
        ));
  };
  ci.prototype.render = function() {
    gi(this);
    var a = this;
    return this.c(
      this.Tb().then(function() {
        if (null === a.bd) {
          var b = a.ne;
          if (!a.Cc) {
            var c = md(b);
            b = qd('DIV');
            c.appendChild(b);
          }
          a.bd = grecaptcha.render(b, a.Fa);
        }
        return a.bd;
      })
    );
  };
  ci.prototype.verify = function() {
    gi(this);
    var a = this;
    return this.c(
      this.render().then(function(b) {
        return new C(function(c) {
          var d = grecaptcha.getResponse(b);
          if (d) c(d);
          else {
            var e = function(b) {
              b && (di(a, e), c(b));
            };
            a.Xc.push(e);
            a.Cc && grecaptcha.execute(a.bd);
          }
        });
      })
    );
  };
  var gi = function(a) {
    if (a.Kb)
      throw new O(
        'internal-error',
        'RecaptchaVerifier instance has been destroyed.'
      );
  };
  ci.prototype.clear = function() {
    gi(this);
    this.Kb = !0;
    fi().ld--;
    for (var a = 0; a < this.J.length; a++)
      this.J[a].cancel('RecaptchaVerifier instance has been destroyed.');
    if (!this.Cc) {
      a = md(this.ne);
      for (var b; (b = a.firstChild); ) a.removeChild(b);
    }
  };
  var hi = Ha(
      'https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}'
    ),
    ii = function() {
      this.ld = k.grecaptcha ? Infinity : 0;
      this.Be = null;
      this.jd = '__rcb' + Math.floor(1e6 * Math.random()).toString();
    },
    ei = function(a, b) {
      return new C(function(c, d) {
        if (Vf())
          if (!k.grecaptcha || (b !== a.Be && !a.ld)) {
            k[a.jd] = function() {
              if (k.grecaptcha) {
                a.Be = b;
                var e = k.grecaptcha.render;
                k.grecaptcha.render = function(b, c) {
                  b = e(b, c);
                  a.ld++;
                  return b;
                };
                c();
              } else d(new O('internal-error'));
              delete k[a.jd];
            };
            var e = Ma(hi, {
              onload: a.jd,
              hl: b || ''
            });
            D(ee(e)).g(function() {
              d(
                new O(
                  'internal-error',
                  'Unable to load external reCAPTCHA dependencies!'
                )
              );
            });
          } else c();
        else d(new O('network-request-failed'));
      });
    },
    ji = null,
    fi = function() {
      ji || (ji = new ii());
      return ji;
    },
    ki = function(a, b, c) {
      try {
        this.i = c || firebase.app();
      } catch (f) {
        throw new O(
          'argument-error',
          'No firebase.app.App instance is currently initialized.'
        );
      }
      if (this.i.options && this.i.options.apiKey) c = this.i.options.apiKey;
      else throw new O('invalid-api-key');
      var d = this,
        e = null;
      try {
        e = $a(this.i.auth().M);
      } catch (f) {}
      e = firebase.SDK_VERSION ? Kf(firebase.SDK_VERSION, e) : null;
      ci.call(
        this,
        c,
        a,
        b,
        function() {
          try {
            var a = d.i.auth().ia;
          } catch (g) {
            a = null;
          }
          return a;
        },
        e,
        pf(qf)
      );
    };
  t(ki, ci);
  var li = function(a) {
    this.F =
      a ||
      (firebase.INTERNAL.reactNative &&
        firebase.INTERNAL.reactNative.AsyncStorage);
    if (!this.F)
      throw new O(
        'internal-error',
        'The React Native compatibility library was not found.'
      );
  };
  h = li.prototype;
  h.get = function(a) {
    return D(this.F.getItem(a)).then(function(a) {
      return a && Sf(a);
    });
  };
  h.set = function(a, b) {
    return D(this.F.setItem(a, Qf(b)));
  };
  h.remove = function(a) {
    return D(this.F.removeItem(a));
  };
  h.jb = function() {};
  h.$a = function() {};
  var mi = function() {
    this.F = {};
  };
  h = mi.prototype;
  h.get = function(a) {
    return D(this.F[a]);
  };
  h.set = function(a, b) {
    this.F[a] = b;
    return D();
  };
  h.remove = function(a) {
    delete this.F[a];
    return D();
  };
  h.jb = function() {};
  h.$a = function() {};
  var oi = function() {
      if (!ni()) {
        if ('Node' == Hf())
          throw new O(
            'internal-error',
            'The LocalStorage compatibility library was not found.'
          );
        throw new O('web-storage-unsupported');
      }
      this.F = k.localStorage || firebase.INTERNAL.node.localStorage;
    },
    ni = function() {
      var a = 'Node' == Hf();
      a =
        k.localStorage ||
        (a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage);
      if (!a) return !1;
      try {
        return a.setItem('__sak', '1'), a.removeItem('__sak'), !0;
      } catch (b) {
        return !1;
      }
    };
  h = oi.prototype;
  h.get = function(a) {
    var b = this;
    return D().then(function() {
      var c = b.F.getItem(a);
      return Sf(c);
    });
  };
  h.set = function(a, b) {
    var c = this;
    return D().then(function() {
      var d = Qf(b);
      null === d ? c.remove(a) : c.F.setItem(a, d);
    });
  };
  h.remove = function(a) {
    var b = this;
    return D().then(function() {
      b.F.removeItem(a);
    });
  };
  h.jb = function(a) {
    k.window && lc(k.window, 'storage', a);
  };
  h.$a = function(a) {
    k.window && tc(k.window, 'storage', a);
  };
  var pi = function() {
    this.F = {};
  };
  h = pi.prototype;
  h.get = function() {
    return D(null);
  };
  h.set = function() {
    return D();
  };
  h.remove = function() {
    return D();
  };
  h.jb = function() {};
  h.$a = function() {};
  var ri = function() {
      if (!qi()) {
        if ('Node' == Hf())
          throw new O(
            'internal-error',
            'The SessionStorage compatibility library was not found.'
          );
        throw new O('web-storage-unsupported');
      }
      this.F = k.sessionStorage || firebase.INTERNAL.node.sessionStorage;
    },
    qi = function() {
      var a = 'Node' == Hf();
      a =
        k.sessionStorage ||
        (a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage);
      if (!a) return !1;
      try {
        return a.setItem('__sak', '1'), a.removeItem('__sak'), !0;
      } catch (b) {
        return !1;
      }
    };
  h = ri.prototype;
  h.get = function(a) {
    var b = this;
    return D().then(function() {
      var c = b.F.getItem(a);
      return Sf(c);
    });
  };
  h.set = function(a, b) {
    var c = this;
    return D().then(function() {
      var d = Qf(b);
      null === d ? c.remove(a) : c.F.setItem(a, d);
    });
  };
  h.remove = function(a) {
    var b = this;
    return D().then(function() {
      b.F.removeItem(a);
    });
  };
  h.jb = function() {};
  h.$a = function() {};
  var si = function(a, b, c, d, e, f) {
      if (!window.indexedDB) throw new O('web-storage-unsupported');
      this.wf = a;
      this.Hd = b;
      this.md = c;
      this.cf = d;
      this.gb = e;
      this.Y = {};
      this.gc = [];
      this.Wb = 0;
      this.Of = f || k.indexedDB;
    },
    ti,
    ui = function(a) {
      return new C(function(b, c) {
        var d = a.Of.open(a.wf, a.gb);
        d.onerror = function(a) {
          c(Error(a.target.errorCode));
        };
        d.onupgradeneeded = function(b) {
          b = b.target.result;
          try {
            b.createObjectStore(a.Hd, { keyPath: a.md });
          } catch (f) {
            c(f);
          }
        };
        d.onsuccess = function(a) {
          b(a.target.result);
        };
      });
    },
    wi = function(a) {
      a.Fe || (a.Fe = ui(a));
      return a.Fe;
    },
    xi = function(a, b) {
      return b.objectStore(a.Hd);
    },
    yi = function(a, b, c) {
      return b.transaction([a.Hd], c ? 'readwrite' : 'readonly');
    },
    zi = function(a) {
      return new C(function(b, c) {
        a.onsuccess = function(a) {
          a && a.target ? b(a.target.result) : b();
        };
        a.onerror = function(a) {
          c(Error(a.target.errorCode));
        };
      });
    };
  h = si.prototype;
  h.set = function(a, b) {
    var c = !1,
      d,
      e = this;
    return Fd(
      wi(this)
        .then(function(b) {
          d = b;
          b = xi(e, yi(e, d, !0));
          return zi(b.get(a));
        })
        .then(function(f) {
          var g = xi(e, yi(e, d, !0));
          if (f) return (f.value = b), zi(g.put(f));
          e.Wb++;
          c = !0;
          f = {};
          f[e.md] = a;
          f[e.cf] = b;
          return zi(g.add(f));
        })
        .then(function() {
          e.Y[a] = b;
        }),
      function() {
        c && e.Wb--;
      }
    );
  };
  h.get = function(a) {
    var b = this;
    return wi(this)
      .then(function(c) {
        return zi(xi(b, yi(b, c, !1)).get(a));
      })
      .then(function(a) {
        return a && a.value;
      });
  };
  h.remove = function(a) {
    var b = !1,
      c = this;
    return Fd(
      wi(this)
        .then(function(d) {
          b = !0;
          c.Wb++;
          return zi(xi(c, yi(c, d, !0))['delete'](a));
        })
        .then(function() {
          delete c.Y[a];
        }),
      function() {
        b && c.Wb--;
      }
    );
  };
  h.wg = function() {
    var a = this;
    return wi(this)
      .then(function(b) {
        var c = xi(a, yi(a, b, !1));
        return c.getAll
          ? zi(c.getAll())
          : new C(function(a, b) {
              var d = [],
                e = c.openCursor();
              e.onsuccess = function(b) {
                (b = b.target.result)
                  ? (d.push(b.value), b['continue']())
                  : a(d);
              };
              e.onerror = function(a) {
                b(Error(a.target.errorCode));
              };
            });
      })
      .then(function(b) {
        var c = {},
          d = [];
        if (0 == a.Wb) {
          for (d = 0; d < b.length; d++) c[b[d][a.md]] = b[d][a.cf];
          d = uf(a.Y, c);
          a.Y = c;
        }
        return d;
      });
  };
  h.jb = function(a) {
    0 == this.gc.length && this.be();
    this.gc.push(a);
  };
  h.$a = function(a) {
    Ya(this.gc, function(b) {
      return b == a;
    });
    0 == this.gc.length && this.Tc();
  };
  h.be = function() {
    var a = this;
    this.Tc();
    var b = function() {
      a.Nd = Ce(800)
        .then(r(a.wg, a))
        .then(function(b) {
          0 < b.length &&
            x(a.gc, function(a) {
              a(b);
            });
        })
        .then(b)
        .g(function(a) {
          'STOP_EVENT' != a.message && b();
        });
      return a.Nd;
    };
    b();
  };
  h.Tc = function() {
    this.Nd && this.Nd.cancel('STOP_EVENT');
  };
  var Di = function() {
      this.re = { Browser: Ai, Node: Bi, ReactNative: Ci }[Hf()];
    },
    Ei,
    Ai = { C: oi, de: ri },
    Bi = { C: oi, de: ri },
    Ci = { C: li, de: pi };
  var Fi = function(a) {
    this.Bd(a);
  };
  Fi.prototype.Bd = function(a) {
    var b = a.url;
    if ('undefined' === typeof b) throw new O('missing-continue-uri');
    if ('string' !== typeof b || ('string' === typeof b && !b.length))
      throw new O('invalid-continue-uri');
    this.rf = b;
    this.fe = this.oc = null;
    this.Ge = !1;
    var c = a.android;
    if (c && 'object' === typeof c) {
      b = c.packageName;
      var d = c.installApp;
      c = c.minimumVersion;
      if ('string' === typeof b && b.length) {
        this.oc = b;
        if ('undefined' !== typeof d && 'boolean' !== typeof d)
          throw new O(
            'argument-error',
            'installApp property must be a boolean when specified.'
          );
        this.Ge = !!d;
        if (
          'undefined' !== typeof c &&
          ('string' !== typeof c || ('string' === typeof c && !c.length))
        )
          throw new O(
            'argument-error',
            'minimumVersion property must be a non empty string when specified.'
          );
        this.fe = c || null;
      } else {
        if ('undefined' !== typeof b)
          throw new O(
            'argument-error',
            'packageName property must be a non empty string when specified.'
          );
        if ('undefined' !== typeof d || 'undefined' !== typeof c)
          throw new O('missing-android-pkg-name');
      }
    } else if ('undefined' !== typeof c)
      throw new O(
        'argument-error',
        'android property must be a non null object when specified.'
      );
    this.xd = null;
    if ((b = a.iOS) && 'object' === typeof b)
      if (((b = b.bundleId), 'string' === typeof b && b.length)) this.xd = b;
      else {
        if ('undefined' !== typeof b)
          throw new O(
            'argument-error',
            'bundleId property must be a non empty string when specified.'
          );
      }
    else if ('undefined' !== typeof b)
      throw new O(
        'argument-error',
        'iOS property must be a non null object when specified.'
      );
    a = a.handleCodeInApp;
    if ('undefined' !== typeof a && 'boolean' !== typeof a)
      throw new O(
        'argument-error',
        'handleCodeInApp property must be a boolean when specified.'
      );
    if ((this.le = !!a) && !this.xd && !this.oc)
      throw new O(
        'argument-error',
        "handleCodeInApp property can't be true when no mobile application is provided."
      );
  };
  var Gi = function(a) {
    var b = {};
    b.continueUrl = a.rf;
    b.canHandleCodeInApp = a.le;
    if ((b.androidPackageName = a.oc))
      (b.androidMinimumVersion = a.fe), (b.androidInstallApp = a.Ge);
    b.iOSBundleId = a.xd;
    for (var c in b) null === b[c] && delete b[c];
    return b;
  };
  var Hi = function(a, b) {
    this.uf = b;
    N(this, 'verificationId', a);
  };
  Hi.prototype.confirm = function(a) {
    a = Pg(this.verificationId, a);
    return this.uf(a);
  };
  var Ii = function(a, b, c, d) {
    return new Ng(a).verifyPhoneNumber(b, c).then(function(a) {
      return new Hi(a, d);
    });
  };
  var Ji = function(a) {
    var b = {},
      c = a.email,
      d = a.newEmail;
    a = a.requestType;
    if (!c || !a) throw Error('Invalid provider user info!');
    b.fromEmail = d || null;
    b.email = c;
    N(this, 'operation', a);
    N(this, 'data', fg(b));
  };
  var Ki = function(a, b, c, d, e, f) {
    this.dg = a;
    this.lg = b;
    this.Hf = c;
    this.Hc = d;
    this.ee = e;
    this.mg = !!f;
    this.ub = null;
    this.Sa = this.Hc;
    if (this.ee < this.Hc)
      throw Error('Proactive refresh lower bound greater than upper bound!');
  };
  Ki.prototype.start = function() {
    this.Sa = this.Hc;
    Li(this, !0);
  };
  var Mi = function(a, b) {
      if (b) return (a.Sa = a.Hc), a.Hf();
      b = a.Sa;
      a.Sa *= 2;
      a.Sa > a.ee && (a.Sa = a.ee);
      return b;
    },
    Li = function(a, b) {
      a.stop();
      a.ub = Ce(Mi(a, b))
        .then(function() {
          return a.mg ? D() : Yf();
        })
        .then(function() {
          return a.dg();
        })
        .then(function() {
          Li(a, !0);
        })
        .g(function(b) {
          a.lg(b) && Li(a, !1);
        });
    };
  Ki.prototype.stop = function() {
    this.ub && (this.ub.cancel(), (this.ub = null));
  };
  var Si = function(a) {
      var b = {};
      b['facebook.com'] = Ni;
      b['google.com'] = Oi;
      b['github.com'] = Pi;
      b['twitter.com'] = Qi;
      var c = a && a.providerId;
      return c ? (b[c] ? new b[c](a) : new Ri(a)) : null;
    },
    Ri = function(a) {
      var b = Sf(a.rawUserInfo || '{}');
      a = a.providerId;
      if (!a) throw Error('Invalid additional user info!');
      N(this, 'profile', fg(b || {}));
      N(this, 'providerId', a);
    },
    Ni = function(a) {
      Ri.call(this, a);
      if ('facebook.com' != this.providerId)
        throw Error('Invalid provider id!');
    };
  t(Ni, Ri);
  var Pi = function(a) {
    Ri.call(this, a);
    if ('github.com' != this.providerId) throw Error('Invalid provider id!');
    N(this, 'username', (this.profile && this.profile.login) || null);
  };
  t(Pi, Ri);
  var Oi = function(a) {
    Ri.call(this, a);
    if ('google.com' != this.providerId) throw Error('Invalid provider id!');
  };
  t(Oi, Ri);
  var Qi = function(a) {
    Ri.call(this, a);
    if ('twitter.com' != this.providerId) throw Error('Invalid provider id!');
    N(this, 'username', a.screenName || null);
  };
  t(Qi, Ri);
  var Ti = { LOCAL: 'local', NONE: 'none', SESSION: 'session' },
    Ui = function(a) {
      var b = new O('invalid-persistence-type'),
        c = new O('unsupported-persistence-type');
      a: {
        for (d in Ti)
          if (Ti[d] == a) {
            var d = !0;
            break a;
          }
        d = !1;
      }
      if (!d || 'string' !== typeof a) throw b;
      switch (Hf()) {
        case 'ReactNative':
          if ('session' === a) throw c;
          break;
        case 'Node':
          if ('none' !== a) throw c;
          break;
        default:
          if (!Mf() && 'none' !== a) throw c;
      }
    },
    Vi = function(a, b, c, d) {
      this.Ke = a;
      this.Wd = b;
      this.ng = c;
      this.ec = d;
      this.X = {};
      Ei || (Ei = new Di());
      a = Ei;
      try {
        if (rf()) {
          ti ||
            (ti = new si(
              'firebaseLocalStorageDb',
              'firebaseLocalStorage',
              'fbase_key',
              'value',
              1
            ));
          var e = ti;
        } else e = new a.re.C();
        this.Qe = e;
      } catch (f) {
        (this.Qe = new mi()), (this.ec = !0);
      }
      try {
        this.Ye = new a.re.de();
      } catch (f) {
        this.Ye = new mi();
      }
      this.Nf = new mi();
      this.ce = r(this.We, this);
      this.Y = {};
    },
    Wi,
    Xi = function() {
      Wi || (Wi = new Vi('firebase', ':', !Tf(L()) && Gf() ? !0 : !1, Pf()));
      return Wi;
    },
    Yi = function(a, b) {
      switch (b) {
        case 'session':
          return a.Ye;
        case 'none':
          return a.Nf;
        default:
          return a.Qe;
      }
    };
  h = Vi.prototype;
  h.ca = function(a, b) {
    return this.Ke + this.Wd + a.name + (b ? this.Wd + b : '');
  };
  h.get = function(a, b) {
    return Yi(this, a.C).get(this.ca(a, b));
  };
  h.remove = function(a, b) {
    b = this.ca(a, b);
    'local' != a.C || this.ec || (this.Y[b] = null);
    return Yi(this, a.C).remove(b);
  };
  h.set = function(a, b, c) {
    var d = this.ca(a, c),
      e = this,
      f = Yi(this, a.C);
    return f
      .set(d, b)
      .then(function() {
        return f.get(d);
      })
      .then(function(b) {
        'local' != a.C || e.ec || (e.Y[d] = b);
      });
  };
  h.addListener = function(a, b, c) {
    a = this.ca(a, b);
    this.ec || (this.Y[a] = k.localStorage.getItem(a));
    ib(this.X) && this.be();
    this.X[a] || (this.X[a] = []);
    this.X[a].push(c);
  };
  h.removeListener = function(a, b, c) {
    a = this.ca(a, b);
    this.X[a] &&
      (Ya(this.X[a], function(a) {
        return a == c;
      }),
      0 == this.X[a].length && delete this.X[a]);
    ib(this.X) && this.Tc();
  };
  h.be = function() {
    Yi(this, 'local').jb(this.ce);
    this.ec || rf() || Zi(this);
  };
  var Zi = function(a) {
      $i(a);
      a.Fd = setInterval(function() {
        for (var b in a.X) {
          var c = k.localStorage.getItem(b),
            d = a.Y[b];
          c != d &&
            ((a.Y[b] = c),
            (c = new Yb({
              type: 'storage',
              key: b,
              target: window,
              oldValue: d,
              newValue: c,
              Md: !0
            })),
            a.We(c));
        }
      }, 1e3);
    },
    $i = function(a) {
      a.Fd && (clearInterval(a.Fd), (a.Fd = null));
    };
  Vi.prototype.Tc = function() {
    Yi(this, 'local').$a(this.ce);
    $i(this);
  };
  Vi.prototype.We = function(a) {
    if (a && a.Ef) {
      var b = a.P.key;
      if (0 == b.indexOf(this.Ke + this.Wd) && this.X[b]) {
        'undefined' !== typeof a.P.Md
          ? Yi(this, 'local').$a(this.ce)
          : $i(this);
        if (this.ng) {
          var c = k.localStorage.getItem(b),
            d = a.P.newValue;
          if (d !== c)
            null !== d
              ? k.localStorage.setItem(b, d)
              : k.localStorage.removeItem(b);
          else if (this.Y[b] === d && 'undefined' === typeof a.P.Md) return;
        }
        var e = this;
        c = function() {
          if (
            'undefined' !== typeof a.P.Md ||
            e.Y[b] !== k.localStorage.getItem(b)
          )
            (e.Y[b] = k.localStorage.getItem(b)), e.je(b);
        };
        z &&
        Cb &&
        10 == Cb &&
        k.localStorage.getItem(b) !== a.P.newValue &&
        a.P.newValue !== a.P.oldValue
          ? setTimeout(c, 10)
          : c();
      }
    } else x(a, r(this.je, this));
  };
  Vi.prototype.je = function(a) {
    this.X[a] &&
      x(this.X[a], function(a) {
        a();
      });
  };
  var aj = function(a, b) {
      this.j = a;
      this.h = b || Xi();
    },
    bj = { name: 'authEvent', C: 'local' },
    cj = function(a) {
      return a.h.get(bj, a.j).then(function(a) {
        return ng(a);
      });
    };
  aj.prototype.ib = function(a) {
    this.h.addListener(bj, this.j, a);
  };
  aj.prototype.dc = function(a) {
    this.h.removeListener(bj, this.j, a);
  };
  var dj = function(a) {
      this.h = a || Xi();
    },
    ej = { name: 'sessionId', C: 'session' };
  dj.prototype.uc = function(a) {
    return this.h.get(ej, a);
  };
  var fj = function(a, b, c, d, e, f, g) {
      this.A = a;
      this.m = b;
      this.o = c;
      this.La = d || null;
      this.O = g || null;
      this.Xe = b + ':' + c;
      this.og = new dj();
      this.we = new aj(this.Xe);
      this.Ad = null;
      this.ta = [];
      this.Sf = e || 500;
      this.hg = f || 2e3;
      this.Rb = this.Kc = null;
    },
    gj = function(a) {
      return new O('invalid-cordova-configuration', a);
    };
  fj.prototype.Ra = function() {
    return this.Tb
      ? this.Tb
      : (this.Tb = Ef().then(
          function() {
            if ('function' !== typeof M('universalLinks.subscribe', k))
              throw gj('cordova-universal-links-plugin is not installed');
            if ('undefined' === typeof M('BuildInfo.packageName', k))
              throw gj('cordova-plugin-buildinfo is not installed');
            if (
              'function' !== typeof M('cordova.plugins.browsertab.openUrl', k)
            )
              throw gj('cordova-plugin-browsertab is not installed');
            if ('function' !== typeof M('cordova.InAppBrowser.open', k))
              throw gj('cordova-plugin-inappbrowser is not installed');
          },
          function() {
            throw new O('cordova-not-ready');
          }
        ));
  };
  var hj = function() {
      for (var a = 20, b = []; 0 < a; )
        b.push(
          '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
            Math.floor(62 * Math.random())
          )
        ),
          a--;
      return b.join('');
    },
    ij = function(a) {
      var b = new Sb();
      b.update(a);
      return ab(b.digest());
    };
  h = fj.prototype;
  h.fc = function(a, b) {
    b(new O('operation-not-supported-in-this-environment'));
    return D();
  };
  h.$b = function() {
    return E(new O('operation-not-supported-in-this-environment'));
  };
  h.Ze = function() {
    return !1;
  };
  h.Ve = function() {
    return !0;
  };
  h.Ae = function() {
    return !0;
  };
  h.ac = function(a, b, c) {
    if (this.Kc) return E(new O('redirect-operation-pending'));
    var d = this,
      e = k.document,
      f = null,
      g = null,
      l = null,
      n = null;
    return (this.Kc = Fd(
      D()
        .then(function() {
          Rg(b);
          return jj(d);
        })
        .then(function() {
          return kj(d, a, b, c);
        })
        .then(function() {
          return new C(function(a, b) {
            g = function() {
              var b = M('cordova.plugins.browsertab.close', k);
              a();
              'function' === typeof b && b();
              d.Rb &&
                'function' === typeof d.Rb.close &&
                (d.Rb.close(), (d.Rb = null));
              return !1;
            };
            d.ib(g);
            l = function() {
              f ||
                (f = Ce(d.hg).then(function() {
                  b(new O('redirect-cancelled-by-user'));
                }));
            };
            n = function() {
              Xf() && l();
            };
            e.addEventListener('resume', l, !1);
            L()
              .toLowerCase()
              .match(/android/) ||
              e.addEventListener('visibilitychange', n, !1);
          }).g(function(a) {
            return lj(d).then(function() {
              throw a;
            });
          });
        }),
      function() {
        l && e.removeEventListener('resume', l, !1);
        n && e.removeEventListener('visibilitychange', n, !1);
        f && f.cancel();
        g && d.dc(g);
        d.Kc = null;
      }
    ));
  };
  var kj = function(a, b, c, d) {
    var e = hj(),
      f = new mg(b, d, null, e, new O('no-auth-event')),
      g = M('BuildInfo.packageName', k);
    if ('string' !== typeof g) throw new O('invalid-cordova-configuration');
    var l = M('BuildInfo.displayName', k),
      n = {};
    if (
      L()
        .toLowerCase()
        .match(/iphone|ipad|ipod/)
    )
      n.ibi = g;
    else if (
      L()
        .toLowerCase()
        .match(/android/)
    )
      n.apn = g;
    else return E(new O('operation-not-supported-in-this-environment'));
    l && (n.appDisplayName = l);
    e = ij(e);
    n.sessionId = e;
    var F = bi(a.A, a.m, a.o, b, c, null, d, a.La, n, a.O);
    return a
      .Ra()
      .then(function() {
        var b = a.Xe;
        return a.og.h.set(bj, f.G(), b);
      })
      .then(function() {
        var b = M('cordova.plugins.browsertab.isAvailable', k);
        if ('function' !== typeof b)
          throw new O('invalid-cordova-configuration');
        var c = null;
        b(function(b) {
          if (b) {
            c = M('cordova.plugins.browsertab.openUrl', k);
            if ('function' !== typeof c)
              throw new O('invalid-cordova-configuration');
            c(F);
          } else {
            c = M('cordova.InAppBrowser.open', k);
            if ('function' !== typeof c)
              throw new O('invalid-cordova-configuration');
            b = c;
            var d = L();
            d = !(
              !d.match(/(iPad|iPhone|iPod).*OS 7_\d/i) &&
              !d.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
            );
            a.Rb = b(F, d ? '_blank' : '_system', 'location=yes');
          }
        });
      });
  };
  fj.prototype.Lb = function(a) {
    for (var b = 0; b < this.ta.length; b++)
      try {
        this.ta[b](a);
      } catch (c) {}
  };
  var jj = function(a) {
      a.Ad ||
        (a.Ad = a.Ra().then(function() {
          return new C(function(b) {
            var c = function(d) {
              b(d);
              a.dc(c);
              return !1;
            };
            a.ib(c);
            mj(a);
          });
        }));
      return a.Ad;
    },
    lj = function(a) {
      var b = null;
      return cj(a.we)
        .then(function(c) {
          b = c;
          c = a.we;
          return c.h.remove(bj, c.j);
        })
        .then(function() {
          return b;
        });
    },
    mj = function(a) {
      var b = M('universalLinks.subscribe', k);
      if ('function' !== typeof b) throw new O('invalid-cordova-configuration');
      var c = new mg('unknown', null, null, null, new O('no-auth-event')),
        d = !1,
        e = Ce(a.Sf).then(function() {
          return lj(a).then(function() {
            d || a.Lb(c);
          });
        }),
        f = function(b) {
          d = !0;
          e && e.cancel();
          lj(a).then(function(d) {
            var e = c;
            if (d && b && b.url) {
              e = null;
              var f = b.url;
              var g = hf(f),
                l = gf(g, 'link'),
                n = gf(hf(l), 'link');
              g = gf(g, 'deep_link_id');
              f = gf(hf(g), 'link') || g || n || l || f;
              -1 != f.indexOf('/__/auth/callback') &&
                ((e = hf(f)),
                (e = Sf(gf(e, 'firebaseError') || null)),
                (e = (e = 'object' === typeof e ? lg(e) : null)
                  ? new mg(d.ma, d.W, null, null, e)
                  : new mg(d.ma, d.W, f, d.uc())));
              e = e || c;
            }
            a.Lb(e);
          });
        },
        g = k.handleOpenURL;
      k.handleOpenURL = function(a) {
        0 ==
          a
            .toLowerCase()
            .indexOf(M('BuildInfo.packageName', k).toLowerCase() + '://') &&
          f({ url: a });
        if ('function' === typeof g)
          try {
            g(a);
          } catch (n) {
            console.error(n);
          }
      };
      b(null, f);
    };
  fj.prototype.ib = function(a) {
    this.ta.push(a);
    jj(this).g(function(b) {
      'auth/invalid-cordova-configuration' === b.code &&
        ((b = new mg('unknown', null, null, null, new O('no-auth-event'))),
        a(b));
    });
  };
  fj.prototype.dc = function(a) {
    Ya(this.ta, function(b) {
      return b == a;
    });
  };
  var nj = function(a) {
      this.j = a;
      this.h = Xi();
    },
    oj = { name: 'pendingRedirect', C: 'session' },
    pj = function(a) {
      return a.h.set(oj, 'pending', a.j);
    },
    qj = function(a) {
      return a.h.remove(oj, a.j);
    },
    rj = function(a) {
      return a.h.get(oj, a.j).then(function(a) {
        return 'pending' == a;
      });
    };
  var vj = function(a, b, c) {
      this.A = a;
      this.m = b;
      this.o = c;
      this.hc = [];
      this.sb = !1;
      this.fd = r(this.vd, this);
      this.Xa = new sj(this);
      this.Od = new tj(this);
      this.Xb = new nj(this.m + ':' + this.o);
      this.Ia = {};
      this.Ia.unknown = this.Xa;
      this.Ia.signInViaRedirect = this.Xa;
      this.Ia.linkViaRedirect = this.Xa;
      this.Ia.reauthViaRedirect = this.Xa;
      this.Ia.signInViaPopup = this.Od;
      this.Ia.linkViaPopup = this.Od;
      this.Ia.reauthViaPopup = this.Od;
      this.Z = uj(this.A, this.m, this.o, qf);
    },
    uj = function(a, b, c, d) {
      var e = firebase.SDK_VERSION || null;
      return Df()
        ? new fj(a, b, c, e, void 0, void 0, d)
        : new Xh(a, b, c, e, d);
    };
  vj.prototype.reset = function() {
    this.sb = !1;
    this.Z.dc(this.fd);
    this.Z = uj(this.A, this.m, this.o);
  };
  vj.prototype.Sb = function() {
    var a = this;
    this.sb || ((this.sb = !0), this.Z.ib(this.fd));
    var b = this.Z;
    return this.Z.Ra().g(function(c) {
      a.Z == b && a.reset();
      throw c;
    });
  };
  var yj = function(a) {
    a.Z.Ve() &&
      a.Sb().g(function(b) {
        var c = new mg(
          'unknown',
          null,
          null,
          null,
          new O('operation-not-supported-in-this-environment')
        );
        wj(b) && a.vd(c);
      });
    a.Z.Ae() || xj(a.Xa);
  };
  vj.prototype.subscribe = function(a) {
    Va(this.hc, a) || this.hc.push(a);
    if (!this.sb) {
      var b = this;
      rj(this.Xb)
        .then(function(a) {
          a
            ? qj(b.Xb).then(function() {
                b.Sb().g(function(a) {
                  var c = new mg(
                    'unknown',
                    null,
                    null,
                    null,
                    new O('operation-not-supported-in-this-environment')
                  );
                  wj(a) && b.vd(c);
                });
              })
            : yj(b);
        })
        .g(function() {
          yj(b);
        });
    }
  };
  vj.prototype.unsubscribe = function(a) {
    Ya(this.hc, function(b) {
      return b == a;
    });
  };
  vj.prototype.vd = function(a) {
    if (!a) throw new O('invalid-auth-event');
    for (var b = !1, c = 0; c < this.hc.length; c++) {
      var d = this.hc[c];
      if (d.ke(a.ma, a.W)) {
        (b = this.Ia[a.ma]) && b.Re(a, d);
        b = !0;
        break;
      }
    }
    xj(this.Xa);
    return b;
  };
  var zj = new Wf(2e3, 1e4),
    Aj = new Wf(3e4, 6e4);
  vj.prototype.getRedirectResult = function() {
    return this.Xa.getRedirectResult();
  };
  vj.prototype.$b = function(a, b, c, d, e) {
    var f = this;
    return this.Z.$b(
      a,
      b,
      c,
      function() {
        f.sb || ((f.sb = !0), f.Z.ib(f.fd));
      },
      function() {
        f.reset();
      },
      d,
      e
    );
  };
  var wj = function(a) {
    return a && 'auth/cordova-not-ready' == a.code ? !0 : !1;
  };
  vj.prototype.ac = function(a, b, c) {
    var d = this,
      e;
    return pj(this.Xb).then(function() {
      return d.Z.ac(a, b, c)
        .g(function(a) {
          if (wj(a)) throw new O('operation-not-supported-in-this-environment');
          e = a;
          return qj(d.Xb).then(function() {
            throw e;
          });
        })
        .then(function() {
          return d.Z.Ze()
            ? new C(function() {})
            : qj(d.Xb)
                .then(function() {
                  return d.getRedirectResult();
                })
                .then(function() {})
                .g(function() {});
        });
    });
  };
  vj.prototype.fc = function(a, b, c, d) {
    return this.Z.fc(
      c,
      function(c) {
        a.bb(b, null, c, d);
      },
      zj.get()
    );
  };
  var Bj = {},
    Cj = function(a, b, c) {
      var d = b + ':' + c;
      Bj[d] || (Bj[d] = new vj(a, b, c));
      return Bj[d];
    },
    sj = function(a) {
      this.h = a;
      this.Ab = null;
      this.cc = [];
      this.bc = [];
      this.yb = null;
      this.Rd = !1;
    };
  sj.prototype.reset = function() {
    this.Ab = null;
    this.yb && (this.yb.cancel(), (this.yb = null));
  };
  sj.prototype.Re = function(a, b) {
    if (!a) return E(new O('invalid-auth-event'));
    this.reset();
    this.Rd = !0;
    var c = a.ma,
      d = a.W,
      e = a.getError() && 'auth/web-storage-unsupported' == a.getError().code,
      f =
        a.getError() &&
        'auth/operation-not-supported-in-this-environment' == a.getError().code;
    'unknown' != c || e || f
      ? (a = a.ba
          ? this.Pd(a, b)
          : b.Nb(c, d)
            ? this.Qd(a, b)
            : E(new O('invalid-auth-event')))
      : (Dj(this, !1, null, null), (a = D()));
    return a;
  };
  var xj = function(a) {
    a.Rd || ((a.Rd = !0), Dj(a, !1, null, null));
  };
  sj.prototype.Pd = function(a) {
    Dj(this, !0, null, a.getError());
    return D();
  };
  sj.prototype.Qd = function(a, b) {
    var c = this;
    b = b.Nb(a.ma, a.W);
    var d = a.Eb,
      e = a.uc(),
      f = !!a.ma.match(/Redirect$/);
    return b(d, e)
      .then(function(a) {
        Dj(c, f, a, null);
      })
      .g(function(a) {
        Dj(c, f, null, a);
      });
  };
  var Ej = function(a, b) {
      a.Ab = function() {
        return E(b);
      };
      if (a.bc.length) for (var c = 0; c < a.bc.length; c++) a.bc[c](b);
    },
    Fj = function(a, b) {
      a.Ab = function() {
        return D(b);
      };
      if (a.cc.length) for (var c = 0; c < a.cc.length; c++) a.cc[c](b);
    },
    Dj = function(a, b, c, d) {
      b ? (d ? Ej(a, d) : Fj(a, c)) : Fj(a, { user: null });
      a.cc = [];
      a.bc = [];
    };
  sj.prototype.getRedirectResult = function() {
    var a = this;
    return new C(function(b, c) {
      a.Ab ? a.Ab().then(b, c) : (a.cc.push(b), a.bc.push(c), Gj(a));
    });
  };
  var Gj = function(a) {
      var b = new O('timeout');
      a.yb && a.yb.cancel();
      a.yb = Ce(Aj.get()).then(function() {
        a.Ab || Dj(a, !0, null, b);
      });
    },
    tj = function(a) {
      this.h = a;
    };
  tj.prototype.Re = function(a, b) {
    if (!a) return E(new O('invalid-auth-event'));
    var c = a.ma,
      d = a.W;
    return a.ba
      ? this.Pd(a, b)
      : b.Nb(c, d)
        ? this.Qd(a, b)
        : E(new O('invalid-auth-event'));
  };
  tj.prototype.Pd = function(a, b) {
    b.bb(a.ma, null, a.getError(), a.W);
    return D();
  };
  tj.prototype.Qd = function(a, b) {
    var c = a.W,
      d = a.ma,
      e = b.Nb(d, c),
      f = a.Eb;
    a = a.uc();
    return e(f, a)
      .then(function(a) {
        b.bb(d, a, null, c);
      })
      .g(function(a) {
        b.bb(d, null, a, c);
      });
  };
  var Hj = function(a) {
    this.f = a;
    this.Ja = this.fa = null;
    this.Na = 0;
  };
  Hj.prototype.G = function() {
    return {
      apiKey: this.f.m,
      refreshToken: this.fa,
      accessToken: this.Ja,
      expirationTime: this.Na
    };
  };
  var Jj = function(a, b) {
      var c = b.idToken,
        d = b.refreshToken;
      b = Ij(b.expiresIn);
      a.Ja = c;
      a.Na = b;
      a.fa = d;
    },
    Ij = function(a) {
      return ma() + 1e3 * parseInt(a, 10);
    },
    Kj = function(a, b) {
      return gh(a.f, b)
        .then(function(b) {
          a.Ja = b.access_token;
          a.Na = Ij(b.expires_in);
          a.fa = b.refresh_token;
          return {
            accessToken: a.Ja,
            expirationTime: a.Na,
            refreshToken: a.fa
          };
        })
        .g(function(b) {
          'auth/user-token-expired' == b.code && (a.fa = null);
          throw b;
        });
    };
  Hj.prototype.getToken = function(a) {
    a = !!a;
    return this.Ja && !this.fa
      ? E(new O('user-token-expired'))
      : a || !this.Ja || ma() > this.Na - 3e4
        ? this.fa
          ? Kj(this, { grant_type: 'refresh_token', refresh_token: this.fa })
          : D(null)
        : D({
            accessToken: this.Ja,
            expirationTime: this.Na,
            refreshToken: this.fa
          });
  };
  var Lj = function(a, b, c, d, e, f) {
      bg(this, {
        uid: a,
        displayName: d || null,
        photoURL: e || null,
        email: c || null,
        phoneNumber: f || null,
        providerId: b
      });
    },
    Mj = function(a, b) {
      B.call(this, a);
      for (var c in b) this[c] = b[c];
    };
  t(Mj, B);
  var S = function(a, b, c) {
    this.J = [];
    this.m = a.apiKey;
    this.o = a.appName;
    this.A = a.authDomain || null;
    a = firebase.SDK_VERSION ? Kf(firebase.SDK_VERSION) : null;
    this.f = new R(this.m, pf(qf), a);
    this.ra = new Hj(this.f);
    Nj(this, b.idToken);
    Jj(this.ra, b);
    N(this, 'refreshToken', this.ra.fa);
    Oj(this, c || {});
    G.call(this);
    this.Lc = !1;
    this.A && Of() && (this.v = Cj(this.A, this.m, this.o));
    this.Sc = [];
    this.sa = null;
    this.wb = Pj(this);
    this.Gb = r(this.wd, this);
    var d = this;
    this.ia = null;
    this.Ne = function(a) {
      d.Cb(a.languageCode);
    };
    this.Dd = null;
    this.M = [];
    this.Me = function(a) {
      Qj(d, a.Cf);
    };
    this.sd = null;
  };
  t(S, G);
  S.prototype.Cb = function(a) {
    this.ia = a;
    $g(this.f, a);
  };
  var Rj = function(a, b) {
      a.Dd && tc(a.Dd, 'languageCodeChanged', a.Ne);
      (a.Dd = b) && lc(b, 'languageCodeChanged', a.Ne);
    },
    Qj = function(a, b) {
      a.M = b;
      ah(a.f, firebase.SDK_VERSION ? Kf(firebase.SDK_VERSION, a.M) : null);
    },
    Sj = function(a, b) {
      a.sd && tc(a.sd, 'frameworkChanged', a.Me);
      (a.sd = b) && lc(b, 'frameworkChanged', a.Me);
    };
  S.prototype.wd = function() {
    this.wb.ub && (this.wb.stop(), this.wb.start());
  };
  var Tj = function(a) {
      try {
        return firebase.app(a.o).auth();
      } catch (b) {
        throw new O(
          'internal-error',
          "No firebase.auth.Auth instance is available for the Firebase App '" +
            a.o +
            "'!"
        );
      }
    },
    Pj = function(a) {
      return new Ki(
        function() {
          return a.getIdToken(!0);
        },
        function(a) {
          return a && 'auth/network-request-failed' == a.code ? !0 : !1;
        },
        function() {
          var b = a.ra.Na - ma() - 3e5;
          return 0 < b ? b : 0;
        },
        3e4,
        96e4,
        !1
      );
    },
    Uj = function(a) {
      a.Kb ||
        a.wb.ub ||
        (a.wb.start(),
        tc(a, 'tokenChanged', a.Gb),
        lc(a, 'tokenChanged', a.Gb));
    },
    Vj = function(a) {
      tc(a, 'tokenChanged', a.Gb);
      a.wb.stop();
    },
    Nj = function(a, b) {
      a.He = b;
      N(a, '_lat', b);
    },
    Wj = function(a, b) {
      Ya(a.Sc, function(a) {
        return a == b;
      });
    },
    Xj = function(a) {
      for (var b = [], c = 0; c < a.Sc.length; c++) b.push(a.Sc[c](a));
      return Cd(b).then(function() {
        return a;
      });
    },
    Yj = function(a) {
      a.v && !a.Lc && ((a.Lc = !0), a.v.subscribe(a));
    },
    Oj = function(a, b) {
      bg(a, {
        uid: b.uid,
        displayName: b.displayName || null,
        photoURL: b.photoURL || null,
        email: b.email || null,
        emailVerified: b.emailVerified || !1,
        phoneNumber: b.phoneNumber || null,
        isAnonymous: b.isAnonymous || !1,
        providerData: []
      });
    };
  N(S.prototype, 'providerId', 'firebase');
  var Zj = function() {},
    ak = function(a) {
      return D().then(function() {
        if (a.Kb) throw new O('app-deleted');
      });
    },
    bk = function(a) {
      return Ra(a.providerData, function(a) {
        return a.providerId;
      });
    },
    dk = function(a, b) {
      b && (ck(a, b.providerId), a.providerData.push(b));
    },
    ck = function(a, b) {
      Ya(a.providerData, function(a) {
        return a.providerId == b;
      });
    },
    ek = function(a, b, c) {
      ('uid' != b || c) && a.hasOwnProperty(b) && N(a, b, c);
    };
  S.prototype.copy = function(a) {
    var b = this;
    b != a &&
      (bg(this, {
        uid: a.uid,
        displayName: a.displayName,
        photoURL: a.photoURL,
        email: a.email,
        emailVerified: a.emailVerified,
        phoneNumber: a.phoneNumber,
        isAnonymous: a.isAnonymous,
        providerData: []
      }),
      x(a.providerData, function(a) {
        dk(b, a);
      }),
      (this.ra = a.ra),
      N(this, 'refreshToken', this.ra.fa));
  };
  S.prototype.reload = function() {
    var a = this;
    return this.c(
      ak(this).then(function() {
        return fk(a)
          .then(function() {
            return Xj(a);
          })
          .then(Zj);
      })
    );
  };
  var fk = function(a) {
    return a.getIdToken().then(function(b) {
      var c = a.isAnonymous;
      return gk(a, b).then(function() {
        c || ek(a, 'isAnonymous', !1);
        return b;
      });
    });
  };
  S.prototype.getIdToken = function(a) {
    var b = this;
    return this.c(
      ak(this)
        .then(function() {
          return b.ra.getToken(a);
        })
        .then(function(a) {
          if (!a) throw new O('internal-error');
          a.accessToken != b.He && (Nj(b, a.accessToken), b.Ta());
          ek(b, 'refreshToken', a.refreshToken);
          return a.accessToken;
        })
    );
  };
  S.prototype.getToken = function(a) {
    Zf[
      'firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead.'
    ] ||
      ((Zf[
        'firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead.'
      ] = !0),
      'undefined' !== typeof console &&
        'function' === typeof console.warn &&
        console.warn(
          'firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead.'
        ));
    return this.getIdToken(a);
  };
  var hk = function(a, b) {
    b.idToken &&
      a.He != b.idToken &&
      (Jj(a.ra, b), a.Ta(), Nj(a, b.idToken), ek(a, 'refreshToken', a.ra.fa));
  };
  S.prototype.Ta = function() {
    this.dispatchEvent(new Mj('tokenChanged'));
  };
  var gk = function(a, b) {
    return Q(a.f, Jh, { idToken: b }).then(r(a.eg, a));
  };
  S.prototype.eg = function(a) {
    a = a.users;
    if (!a || !a.length) throw new O('internal-error');
    a = a[0];
    Oj(this, {
      uid: a.localId,
      displayName: a.displayName,
      photoURL: a.photoUrl,
      email: a.email,
      emailVerified: !!a.emailVerified,
      phoneNumber: a.phoneNumber
    });
    for (var b = ik(a), c = 0; c < b.length; c++) dk(this, b[c]);
    ek(
      this,
      'isAnonymous',
      !(this.email && a.passwordHash) &&
        !(this.providerData && this.providerData.length)
    );
  };
  var ik = function(a) {
    return (a = a.providerUserInfo) && a.length
      ? Ra(a, function(a) {
          return new Lj(
            a.rawId,
            a.providerId,
            a.email,
            a.displayName,
            a.photoUrl,
            a.phoneNumber
          );
        })
      : [];
  };
  S.prototype.reauthenticateAndRetrieveDataWithCredential = function(a) {
    var b = this,
      c = null;
    return this.c(
      a
        .Gd(this.f, this.uid)
        .then(function(a) {
          hk(b, a);
          c = jk(b, a, 'reauthenticate');
          b.sa = null;
          return b.reload();
        })
        .then(function() {
          return c;
        }),
      !0
    );
  };
  S.prototype.reauthenticateWithCredential = function(a) {
    return this.reauthenticateAndRetrieveDataWithCredential(a).then(
      function() {}
    );
  };
  var kk = function(a, b) {
    return fk(a).then(function() {
      if (Va(bk(a), b))
        return Xj(a).then(function() {
          throw new O('provider-already-linked');
        });
    });
  };
  S.prototype.linkAndRetrieveDataWithCredential = function(a) {
    var b = this,
      c = null;
    return this.c(
      kk(this, a.providerId)
        .then(function() {
          return b.getIdToken();
        })
        .then(function(c) {
          return a.Gc(b.f, c);
        })
        .then(function(a) {
          c = jk(b, a, 'link');
          return lk(b, a);
        })
        .then(function() {
          return c;
        })
    );
  };
  S.prototype.linkWithCredential = function(a) {
    return this.linkAndRetrieveDataWithCredential(a).then(function(a) {
      return a.user;
    });
  };
  S.prototype.linkWithPhoneNumber = function(a, b) {
    var c = this;
    return this.c(
      kk(this, 'phone').then(function() {
        return Ii(Tj(c), a, b, r(c.linkAndRetrieveDataWithCredential, c));
      })
    );
  };
  S.prototype.reauthenticateWithPhoneNumber = function(a, b) {
    var c = this;
    return this.c(
      D().then(function() {
        return Ii(
          Tj(c),
          a,
          b,
          r(c.reauthenticateAndRetrieveDataWithCredential, c)
        );
      }),
      !0
    );
  };
  var jk = function(a, b, c) {
      var d = Qg(b);
      b = Si(b);
      return cg({
        user: a,
        credential: d,
        additionalUserInfo: b,
        operationType: c
      });
    },
    lk = function(a, b) {
      hk(a, b);
      return a.reload().then(function() {
        return a;
      });
    };
  h = S.prototype;
  h.updateEmail = function(a) {
    var b = this;
    return this.c(
      this.getIdToken()
        .then(function(c) {
          return b.f.updateEmail(c, a);
        })
        .then(function(a) {
          hk(b, a);
          return b.reload();
        })
    );
  };
  h.updatePhoneNumber = function(a) {
    var b = this;
    return this.c(
      this.getIdToken()
        .then(function(c) {
          return a.Gc(b.f, c);
        })
        .then(function(a) {
          hk(b, a);
          return b.reload();
        })
    );
  };
  h.updatePassword = function(a) {
    var b = this;
    return this.c(
      this.getIdToken()
        .then(function(c) {
          return b.f.updatePassword(c, a);
        })
        .then(function(a) {
          hk(b, a);
          return b.reload();
        })
    );
  };
  h.updateProfile = function(a) {
    if (void 0 === a.displayName && void 0 === a.photoURL) return ak(this);
    var b = this;
    return this.c(
      this.getIdToken()
        .then(function(c) {
          return b.f.updateProfile(c, {
            displayName: a.displayName,
            photoUrl: a.photoURL
          });
        })
        .then(function(a) {
          hk(b, a);
          ek(b, 'displayName', a.displayName || null);
          ek(b, 'photoURL', a.photoUrl || null);
          x(b.providerData, function(a) {
            'password' === a.providerId &&
              (N(a, 'displayName', b.displayName),
              N(a, 'photoURL', b.photoURL));
          });
          return Xj(b);
        })
        .then(Zj)
    );
  };
  h.unlink = function(a) {
    var b = this;
    return this.c(
      fk(this).then(function(c) {
        return Va(bk(b), a)
          ? xh(b.f, c, [a]).then(function(a) {
              var c = {};
              x(a.providerUserInfo || [], function(a) {
                c[a.providerId] = !0;
              });
              x(bk(b), function(a) {
                c[a] || ck(b, a);
              });
              c[Ng.PROVIDER_ID] || N(b, 'phoneNumber', null);
              return Xj(b);
            })
          : Xj(b).then(function() {
              throw new O('no-such-provider');
            });
      })
    );
  };
  h['delete'] = function() {
    var a = this;
    return this.c(
      this.getIdToken()
        .then(function(b) {
          return Q(a.f, Ih, { idToken: b });
        })
        .then(function() {
          a.dispatchEvent(new Mj('userDeleted'));
        })
    ).then(function() {
      for (var b = 0; b < a.J.length; b++) a.J[b].cancel('app-deleted');
      Rj(a, null);
      Sj(a, null);
      a.J = [];
      a.Kb = !0;
      Vj(a);
      N(a, 'refreshToken', null);
      a.v && a.v.unsubscribe(a);
    });
  };
  h.ke = function(a, b) {
    return ('linkViaPopup' == a && (this.la || null) == b && this.ka) ||
      ('reauthViaPopup' == a && (this.la || null) == b && this.ka) ||
      ('linkViaRedirect' == a && (this.Ha || null) == b) ||
      ('reauthViaRedirect' == a && (this.Ha || null) == b)
      ? !0
      : !1;
  };
  h.bb = function(a, b, c, d) {
    ('linkViaPopup' != a && 'reauthViaPopup' != a) ||
      d != (this.la || null) ||
      (c && this.Va ? this.Va(c) : b && !c && this.ka && this.ka(b),
      this.K && (this.K.cancel(), (this.K = null)),
      delete this.ka,
      delete this.Va);
  };
  h.Nb = function(a, b) {
    return 'linkViaPopup' == a && b == (this.la || null)
      ? r(this.te, this)
      : 'reauthViaPopup' == a && b == (this.la || null)
        ? r(this.ue, this)
        : 'linkViaRedirect' == a && (this.Ha || null) == b
          ? r(this.te, this)
          : 'reauthViaRedirect' == a && (this.Ha || null) == b
            ? r(this.ue, this)
            : null;
  };
  h.tc = function() {
    return Lf(this.uid + ':::');
  };
  h.linkWithPopup = function(a) {
    var b = this;
    return mk(
      this,
      'linkViaPopup',
      a,
      function() {
        return kk(b, a.providerId).then(function() {
          return Xj(b);
        });
      },
      !1
    );
  };
  h.reauthenticateWithPopup = function(a) {
    return mk(
      this,
      'reauthViaPopup',
      a,
      function() {
        return D();
      },
      !0
    );
  };
  var mk = function(a, b, c, d, e) {
    if (!Of()) return E(new O('operation-not-supported-in-this-environment'));
    if (a.sa && !e) return E(a.sa);
    var f = jg(c.providerId),
      g = a.tc(),
      l = null;
    (!Pf() || Gf()) &&
      a.A &&
      c.isOAuthProvider &&
      (l = bi(a.A, a.m, a.o, b, c, null, g, firebase.SDK_VERSION || null));
    var n = zf(l, f && f.Zb, f && f.Yb);
    d = d()
      .then(function() {
        nk(a);
        if (!e) return a.getIdToken().then(function() {});
      })
      .then(function() {
        return a.v.$b(n, b, c, g, !!l);
      })
      .then(function() {
        return new C(function(c, d) {
          a.bb(b, null, new O('cancelled-popup-request'), a.la || null);
          a.ka = c;
          a.Va = d;
          a.la = g;
          a.K = a.v.fc(a, b, n, g);
        });
      })
      .then(function(a) {
        n && yf(n);
        return a ? cg(a) : null;
      })
      .g(function(a) {
        n && yf(n);
        throw a;
      });
    return a.c(d, e);
  };
  S.prototype.linkWithRedirect = function(a) {
    var b = this;
    return ok(
      this,
      'linkViaRedirect',
      a,
      function() {
        return kk(b, a.providerId);
      },
      !1
    );
  };
  S.prototype.reauthenticateWithRedirect = function(a) {
    return ok(
      this,
      'reauthViaRedirect',
      a,
      function() {
        return D();
      },
      !0
    );
  };
  var ok = function(a, b, c, d, e) {
      if (!Of()) return E(new O('operation-not-supported-in-this-environment'));
      if (a.sa && !e) return E(a.sa);
      var f = null,
        g = a.tc();
      d = d()
        .then(function() {
          nk(a);
          if (!e) return a.getIdToken().then(function() {});
        })
        .then(function() {
          a.Ha = g;
          return Xj(a);
        })
        .then(function(b) {
          a.Ya && ((b = a.Ya), (b = b.h.set(pk, a.G(), b.j)));
          return b;
        })
        .then(function() {
          return a.v.ac(b, c, g);
        })
        .g(function(b) {
          f = b;
          if (a.Ya) return qk(a.Ya);
          throw f;
        })
        .then(function() {
          if (f) throw f;
        });
      return a.c(d, e);
    },
    nk = function(a) {
      if (!a.v || !a.Lc) {
        if (a.v && !a.Lc) throw new O('internal-error');
        throw new O('auth-domain-config-required');
      }
    };
  S.prototype.te = function(a, b) {
    var c = this;
    this.K && (this.K.cancel(), (this.K = null));
    var d = null,
      e = this.getIdToken()
        .then(function(d) {
          return ug(c.f, { requestUri: a, sessionId: b, idToken: d });
        })
        .then(function(a) {
          d = jk(c, a, 'link');
          return lk(c, a);
        })
        .then(function() {
          return d;
        });
    return this.c(e);
  };
  S.prototype.ue = function(a, b) {
    var c = this;
    this.K && (this.K.cancel(), (this.K = null));
    var d = null,
      e = D()
        .then(function() {
          return qg(vg(c.f, { requestUri: a, sessionId: b }), c.uid);
        })
        .then(function(a) {
          d = jk(c, a, 'reauthenticate');
          hk(c, a);
          c.sa = null;
          return c.reload();
        })
        .then(function() {
          return d;
        });
    return this.c(e, !0);
  };
  S.prototype.sendEmailVerification = function(a) {
    var b = this,
      c = null;
    return this.c(
      this.getIdToken()
        .then(function(b) {
          c = b;
          return 'undefined' === typeof a || ib(a) ? {} : Gi(new Fi(a));
        })
        .then(function(a) {
          return b.f.sendEmailVerification(c, a);
        })
        .then(function(a) {
          if (b.email != a) return b.reload();
        })
        .then(function() {})
    );
  };
  S.prototype.c = function(a, b) {
    var c = this,
      d = rk(this, a, b);
    this.J.push(d);
    Fd(d, function() {
      Xa(c.J, d);
    });
    return d;
  };
  var rk = function(a, b, c) {
    return a.sa && !c
      ? (b.cancel(), E(a.sa))
      : b.g(function(b) {
          !b ||
            ('auth/user-disabled' != b.code &&
              'auth/user-token-expired' != b.code) ||
            (a.sa || a.dispatchEvent(new Mj('userInvalidated')), (a.sa = b));
          throw b;
        });
  };
  S.prototype.toJSON = function() {
    return this.G();
  };
  S.prototype.G = function() {
    var a = {
      uid: this.uid,
      displayName: this.displayName,
      photoURL: this.photoURL,
      email: this.email,
      emailVerified: this.emailVerified,
      phoneNumber: this.phoneNumber,
      isAnonymous: this.isAnonymous,
      providerData: [],
      apiKey: this.m,
      appName: this.o,
      authDomain: this.A,
      stsTokenManager: this.ra.G(),
      redirectEventId: this.Ha || null
    };
    x(this.providerData, function(b) {
      a.providerData.push(dg(b));
    });
    return a;
  };
  var sk = function(a) {
      if (!a.apiKey) return null;
      var b = {
          apiKey: a.apiKey,
          authDomain: a.authDomain,
          appName: a.appName
        },
        c = {};
      if (
        a.stsTokenManager &&
        a.stsTokenManager.accessToken &&
        a.stsTokenManager.expirationTime
      )
        (c.idToken = a.stsTokenManager.accessToken),
          (c.refreshToken = a.stsTokenManager.refreshToken || null),
          (c.expiresIn = (a.stsTokenManager.expirationTime - ma()) / 1e3);
      else return null;
      var d = new S(b, c, a);
      a.providerData &&
        x(a.providerData, function(a) {
          a && dk(d, cg(a));
        });
      a.redirectEventId && (d.Ha = a.redirectEventId);
      return d;
    },
    tk = function(a, b, c, d) {
      var e = new S(a, b);
      c && (e.Ya = c);
      d && Qj(e, d);
      return e.reload().then(function() {
        return e;
      });
    };
  var uk = function(a) {
      this.j = a;
      this.h = Xi();
    },
    pk = { name: 'redirectUser', C: 'session' },
    qk = function(a) {
      return a.h.remove(pk, a.j);
    },
    vk = function(a, b) {
      return a.h.get(pk, a.j).then(function(a) {
        a && b && (a.authDomain = b);
        return sk(a || {});
      });
    };
  var xk = function(a, b) {
    this.j = a;
    this.h = b || Xi();
    this.N = null;
    this.Jd = this.Bd();
    this.h.addListener(wk('local'), this.j, r(this.ug, this));
  };
  xk.prototype.ug = function() {
    var a = this,
      b = wk('local');
    yk(this, function() {
      return D()
        .then(function() {
          return a.N && 'local' != a.N.C ? a.h.get(b, a.j) : null;
        })
        .then(function(c) {
          if (c)
            return zk(a, 'local').then(function() {
              a.N = b;
            });
        });
    });
  };
  var zk = function(a, b) {
    var c = [],
      d;
    for (d in Ti) Ti[d] !== b && c.push(a.h.remove(wk(Ti[d]), a.j));
    c.push(a.h.remove(Ak, a.j));
    return Bd(c);
  };
  xk.prototype.Bd = function() {
    var a = this,
      b = wk('local'),
      c = wk('session'),
      d = wk('none');
    return this.h
      .get(c, this.j)
      .then(function(e) {
        return e
          ? c
          : a.h.get(d, a.j).then(function(c) {
              return c
                ? d
                : a.h.get(b, a.j).then(function(c) {
                    return c
                      ? b
                      : a.h.get(Ak, a.j).then(function(a) {
                          return a ? wk(a) : b;
                        });
                  });
            });
      })
      .then(function(b) {
        a.N = b;
        return zk(a, b.C);
      })
      .g(function() {
        a.N || (a.N = b);
      });
  };
  var Ak = { name: 'persistence', C: 'session' },
    wk = function(a) {
      return { name: 'authUser', C: a };
    };
  xk.prototype.setPersistence = function(a) {
    var b = null,
      c = this;
    Ui(a);
    return yk(this, function() {
      return a != c.N.C
        ? c.h
            .get(c.N, c.j)
            .then(function(d) {
              b = d;
              return zk(c, a);
            })
            .then(function() {
              c.N = wk(a);
              if (b) return c.h.set(c.N, b, c.j);
            })
        : D();
    });
  };
  var Bk = function(a) {
      return yk(a, function() {
        return a.h.set(Ak, a.N.C, a.j);
      });
    },
    Ck = function(a, b) {
      return yk(a, function() {
        return a.h.set(a.N, b.G(), a.j);
      });
    },
    Dk = function(a) {
      return yk(a, function() {
        return a.h.remove(a.N, a.j);
      });
    },
    Ek = function(a, b) {
      return yk(a, function() {
        return a.h.get(a.N, a.j).then(function(a) {
          a && b && (a.authDomain = b);
          return sk(a || {});
        });
      });
    },
    yk = function(a, b) {
      a.Jd = a.Jd.then(b, b);
      return a.Jd;
    };
  var T = function(a) {
    this.Ea = !1;
    N(this, 'app', a);
    if (this.i().options && this.i().options.apiKey)
      (a = firebase.SDK_VERSION ? Kf(firebase.SDK_VERSION) : null),
        (this.f = new R(
          this.i().options && this.i().options.apiKey,
          pf(qf),
          a
        ));
    else throw new O('invalid-api-key');
    this.J = [];
    this.Ka = [];
    this.Fb = [];
    this.ag = firebase.INTERNAL.createSubscribe(r(this.Pf, this));
    this.mc = void 0;
    this.cg = firebase.INTERNAL.createSubscribe(r(this.Rf, this));
    Fk(this, null);
    a = this.i().options.apiKey;
    var b = this.i().name;
    this.na = new xk(a + ':' + b);
    a = this.i().options.apiKey;
    b = this.i().name;
    this.zb = new uk(a + ':' + b);
    this.pc = this.c(Gk(this));
    this.ya = this.c(Hk(this));
    this.Dc = !1;
    this.ud = r(this.vg, this);
    this.bf = r(this.pb, this);
    this.Gb = r(this.wd, this);
    this.$e = r(this.Lf, this);
    this.af = r(this.Mf, this);
    Ik(this);
    this.INTERNAL = {};
    this.INTERNAL['delete'] = r(this['delete'], this);
    this.INTERNAL.logFramework = r(this.Xf, this);
    this.Oa = 0;
    G.call(this);
    Jk(this);
    this.M = [];
  };
  t(T, G);
  var Kk = function(a) {
    B.call(this, 'languageCodeChanged');
    this.languageCode = a;
  };
  t(Kk, B);
  var Lk = function(a) {
    B.call(this, 'frameworkChanged');
    this.Cf = a;
  };
  t(Lk, B);
  T.prototype.setPersistence = function(a) {
    a = this.na.setPersistence(a);
    return this.c(a);
  };
  T.prototype.Cb = function(a) {
    this.ia === a ||
      this.Ea ||
      ((this.ia = a), $g(this.f, this.ia), this.dispatchEvent(new Kk(this.ia)));
  };
  T.prototype.useDeviceLanguage = function() {
    var a = k.navigator;
    this.Cb(
      a
        ? (a.languages && a.languages[0]) ||
          a.language ||
          a.userLanguage ||
          null
        : null
    );
  };
  T.prototype.Xf = function(a) {
    this.M.push(a);
    ah(this.f, firebase.SDK_VERSION ? Kf(firebase.SDK_VERSION, this.M) : null);
    this.dispatchEvent(new Lk(this.M));
  };
  var Jk = function(a) {
    Object.defineProperty(a, 'lc', {
      get: function() {
        return this.ia;
      },
      set: function(a) {
        this.Cb(a);
      },
      enumerable: !1
    });
    a.ia = null;
  };
  T.prototype.toJSON = function() {
    return {
      apiKey: this.i().options.apiKey,
      authDomain: this.i().options.authDomain,
      appName: this.i().name,
      currentUser: U(this) && U(this).G()
    };
  };
  var Mk = function(a) {
      return a.xf || E(new O('auth-domain-config-required'));
    },
    Ik = function(a) {
      var b = a.i().options.authDomain,
        c = a.i().options.apiKey;
      b &&
        Of() &&
        (a.xf = a.pc.then(function() {
          if (!a.Ea) {
            a.v = Cj(b, c, a.i().name);
            a.v.subscribe(a);
            U(a) && Yj(U(a));
            if (a.Za) {
              Yj(a.Za);
              var d = a.Za;
              d.Cb(a.ia);
              Rj(d, a);
              d = a.Za;
              Qj(d, a.M);
              Sj(d, a);
              a.Za = null;
            }
            return a.v;
          }
        }));
    };
  h = T.prototype;
  h.ke = function(a, b) {
    switch (a) {
      case 'unknown':
      case 'signInViaRedirect':
        return !0;
      case 'signInViaPopup':
        return this.la == b && !!this.ka;
      default:
        return !1;
    }
  };
  h.bb = function(a, b, c, d) {
    'signInViaPopup' == a &&
      this.la == d &&
      (c && this.Va ? this.Va(c) : b && !c && this.ka && this.ka(b),
      this.K && (this.K.cancel(), (this.K = null)),
      delete this.ka,
      delete this.Va);
  };
  h.Nb = function(a, b) {
    return 'signInViaRedirect' == a ||
      ('signInViaPopup' == a && this.la == b && this.ka)
      ? r(this.zf, this)
      : null;
  };
  h.zf = function(a, b) {
    var c = this;
    a = { requestUri: a, sessionId: b };
    this.K && (this.K.cancel(), (this.K = null));
    var d = null,
      e = null,
      f = sg(c.f, a).then(function(a) {
        d = Qg(a);
        e = Si(a);
        return a;
      });
    a = c.pc
      .then(function() {
        return f;
      })
      .then(function(a) {
        return Nk(c, a);
      })
      .then(function() {
        return cg({
          user: U(c),
          credential: d,
          additionalUserInfo: e,
          operationType: 'signIn'
        });
      });
    return this.c(a);
  };
  h.tc = function() {
    return Lf();
  };
  h.signInWithPopup = function(a) {
    if (!Of()) return E(new O('operation-not-supported-in-this-environment'));
    var b = this,
      c = jg(a.providerId),
      d = this.tc(),
      e = null;
    (!Pf() || Gf()) &&
      this.i().options.authDomain &&
      a.isOAuthProvider &&
      (e = bi(
        this.i().options.authDomain,
        this.i().options.apiKey,
        this.i().name,
        'signInViaPopup',
        a,
        null,
        d,
        firebase.SDK_VERSION || null
      ));
    var f = zf(e, c && c.Zb, c && c.Yb);
    c = Mk(this)
      .then(function(b) {
        return b.$b(f, 'signInViaPopup', a, d, !!e);
      })
      .then(function() {
        return new C(function(a, c) {
          b.bb('signInViaPopup', null, new O('cancelled-popup-request'), b.la);
          b.ka = a;
          b.Va = c;
          b.la = d;
          b.K = b.v.fc(b, 'signInViaPopup', f, d);
        });
      })
      .then(function(a) {
        f && yf(f);
        return a ? cg(a) : null;
      })
      .g(function(a) {
        f && yf(f);
        throw a;
      });
    return this.c(c);
  };
  h.signInWithRedirect = function(a) {
    if (!Of()) return E(new O('operation-not-supported-in-this-environment'));
    var b = this,
      c = Mk(this)
        .then(function() {
          return Bk(b.na);
        })
        .then(function() {
          return b.v.ac('signInViaRedirect', a);
        });
    return this.c(c);
  };
  h.getRedirectResult = function() {
    if (!Of()) return E(new O('operation-not-supported-in-this-environment'));
    var a = this,
      b = Mk(this)
        .then(function() {
          return a.v.getRedirectResult();
        })
        .then(function(a) {
          return a ? cg(a) : null;
        });
    return this.c(b);
  };
  var Nk = function(a, b) {
      var c = {};
      c.apiKey = a.i().options.apiKey;
      c.authDomain = a.i().options.authDomain;
      c.appName = a.i().name;
      return a.pc
        .then(function() {
          return tk(c, b, a.zb, $a(a.M));
        })
        .then(function(b) {
          if (U(a) && b.uid == U(a).uid) return U(a).copy(b), a.pb(b);
          Fk(a, b);
          Yj(b);
          return a.pb(b);
        })
        .then(function() {
          a.Ta();
        });
    },
    Fk = function(a, b) {
      U(a) &&
        (Wj(U(a), a.bf),
        tc(U(a), 'tokenChanged', a.Gb),
        tc(U(a), 'userDeleted', a.$e),
        tc(U(a), 'userInvalidated', a.af),
        Vj(U(a)));
      b &&
        (b.Sc.push(a.bf),
        lc(b, 'tokenChanged', a.Gb),
        lc(b, 'userDeleted', a.$e),
        lc(b, 'userInvalidated', a.af),
        0 < a.Oa && Uj(b));
      N(a, 'currentUser', b);
      b && (b.Cb(a.ia), Rj(b, a), Qj(b, a.M), Sj(b, a));
    };
  T.prototype.signOut = function() {
    var a = this,
      b = this.ya.then(function() {
        if (!U(a)) return D();
        Fk(a, null);
        return Dk(a.na).then(function() {
          a.Ta();
        });
      });
    return this.c(b);
  };
  var Ok = function(a) {
      var b = a.i().options.authDomain;
      b = vk(a.zb, b).then(function(b) {
        if ((a.Za = b)) b.Ya = a.zb;
        return qk(a.zb);
      });
      return a.c(b);
    },
    Gk = function(a) {
      var b = a.i().options.authDomain,
        c = Ok(a)
          .then(function() {
            return Ek(a.na, b);
          })
          .then(function(b) {
            return b
              ? ((b.Ya = a.zb),
                a.Za && (a.Za.Ha || null) == (b.Ha || null)
                  ? b
                  : b
                      .reload()
                      .then(function() {
                        return Ck(a.na, b).then(function() {
                          return b;
                        });
                      })
                      .g(function(c) {
                        return 'auth/network-request-failed' == c.code
                          ? b
                          : Dk(a.na);
                      }))
              : null;
          })
          .then(function(b) {
            Fk(a, b || null);
          });
      return a.c(c);
    },
    Hk = function(a) {
      return a.pc
        .then(function() {
          return a.getRedirectResult();
        })
        .g(function() {})
        .then(function() {
          if (!a.Ea) return a.ud();
        })
        .g(function() {})
        .then(function() {
          if (!a.Ea) {
            a.Dc = !0;
            var b = a.na;
            b.h.addListener(wk('local'), b.j, a.ud);
          }
        });
    };
  h = T.prototype;
  h.vg = function() {
    var a = this,
      b = this.i().options.authDomain;
    return Ek(this.na, b).then(function(b) {
      if (!a.Ea) {
        var c;
        if ((c = U(a) && b)) {
          c = U(a).uid;
          var e = b.uid;
          c =
            void 0 === c ||
            null === c ||
            '' === c ||
            void 0 === e ||
            null === e ||
            '' === e
              ? !1
              : c == e;
        }
        if (c) return U(a).copy(b), U(a).getIdToken();
        if (U(a) || b)
          Fk(a, b),
            b && (Yj(b), (b.Ya = a.zb)),
            a.v && a.v.subscribe(a),
            a.Ta();
      }
    });
  };
  h.pb = function(a) {
    return Ck(this.na, a);
  };
  h.wd = function() {
    this.Ta();
    this.pb(U(this));
  };
  h.Lf = function() {
    this.signOut();
  };
  h.Mf = function() {
    this.signOut();
  };
  var Pk = function(a, b) {
    var c = null,
      d = null;
    return a.c(
      b
        .then(function(b) {
          c = Qg(b);
          d = Si(b);
          return Nk(a, b);
        })
        .then(function() {
          return cg({
            user: U(a),
            credential: c,
            additionalUserInfo: d,
            operationType: 'signIn'
          });
        })
    );
  };
  h = T.prototype;
  h.Pf = function(a) {
    var b = this;
    this.addAuthTokenListener(function() {
      a.next(U(b));
    });
  };
  h.Rf = function(a) {
    var b = this;
    Qk(this, function() {
      a.next(U(b));
    });
  };
  h.onIdTokenChanged = function(a, b, c) {
    var d = this;
    this.Dc &&
      firebase.Promise.resolve().then(function() {
        p(a) ? a(U(d)) : p(a.next) && a.next(U(d));
      });
    return this.ag(a, b, c);
  };
  h.onAuthStateChanged = function(a, b, c) {
    var d = this;
    this.Dc &&
      firebase.Promise.resolve().then(function() {
        d.mc = d.getUid();
        p(a) ? a(U(d)) : p(a.next) && a.next(U(d));
      });
    return this.cg(a, b, c);
  };
  h.Ff = function(a) {
    var b = this,
      c = this.ya.then(function() {
        return U(b)
          ? U(b)
              .getIdToken(a)
              .then(function(a) {
                return { accessToken: a };
              })
          : null;
      });
    return this.c(c);
  };
  h.signInWithCustomToken = function(a) {
    var b = this;
    return this.ya
      .then(function() {
        return Pk(b, Q(b.f, Lh, { token: a }));
      })
      .then(function(a) {
        a = a.user;
        ek(a, 'isAnonymous', !1);
        return b.pb(a);
      })
      .then(function() {
        return U(b);
      });
  };
  h.signInWithEmailAndPassword = function(a, b) {
    var c = this;
    return this.ya
      .then(function() {
        return Pk(c, Q(c.f, Gg, { email: a, password: b }));
      })
      .then(function(a) {
        return a.user;
      });
  };
  h.createUserWithEmailAndPassword = function(a, b) {
    var c = this;
    return this.ya
      .then(function() {
        return Pk(c, Q(c.f, Hh, { email: a, password: b }));
      })
      .then(function(a) {
        return a.user;
      });
  };
  h.signInWithCredential = function(a) {
    return this.signInAndRetrieveDataWithCredential(a).then(function(a) {
      return a.user;
    });
  };
  h.signInAndRetrieveDataWithCredential = function(a) {
    var b = this;
    return this.ya.then(function() {
      return Pk(b, a.Ob(b.f));
    });
  };
  h.signInAnonymously = function() {
    var a = this;
    return this.ya.then(function() {
      var b = U(a);
      return b && b.isAnonymous
        ? b
        : Pk(a, a.f.signInAnonymously())
            .then(function(b) {
              b = b.user;
              ek(b, 'isAnonymous', !0);
              return a.pb(b);
            })
            .then(function() {
              return U(a);
            });
    });
  };
  h.i = function() {
    return this.app;
  };
  var U = function(a) {
    return a.currentUser;
  };
  T.prototype.getUid = function() {
    return (U(this) && U(this).uid) || null;
  };
  var Rk = function(a) {
    return (U(a) && U(a)._lat) || null;
  };
  h = T.prototype;
  h.Ta = function() {
    if (this.Dc) {
      for (var a = 0; a < this.Ka.length; a++)
        if (this.Ka[a]) this.Ka[a](Rk(this));
      if (this.mc !== this.getUid() && this.Fb.length)
        for (this.mc = this.getUid(), a = 0; a < this.Fb.length; a++)
          if (this.Fb[a]) this.Fb[a](Rk(this));
    }
  };
  h.lf = function(a) {
    this.addAuthTokenListener(a);
    this.Oa++;
    0 < this.Oa && U(this) && Uj(U(this));
  };
  h.ig = function(a) {
    var b = this;
    x(this.Ka, function(c) {
      c == a && b.Oa--;
    });
    0 > this.Oa && (this.Oa = 0);
    0 == this.Oa && U(this) && Vj(U(this));
    this.removeAuthTokenListener(a);
  };
  h.addAuthTokenListener = function(a) {
    var b = this;
    this.Ka.push(a);
    this.c(
      this.ya.then(function() {
        b.Ea || (Va(b.Ka, a) && a(Rk(b)));
      })
    );
  };
  h.removeAuthTokenListener = function(a) {
    Ya(this.Ka, function(b) {
      return b == a;
    });
  };
  var Qk = function(a, b) {
    a.Fb.push(b);
    a.c(
      a.ya.then(function() {
        !a.Ea &&
          Va(a.Fb, b) &&
          a.mc !== a.getUid() &&
          ((a.mc = a.getUid()), b(Rk(a)));
      })
    );
  };
  h = T.prototype;
  h['delete'] = function() {
    this.Ea = !0;
    for (var a = 0; a < this.J.length; a++) this.J[a].cancel('app-deleted');
    this.J = [];
    this.na && ((a = this.na), a.h.removeListener(wk('local'), a.j, this.ud));
    this.v && this.v.unsubscribe(this);
    return firebase.Promise.resolve();
  };
  h.c = function(a) {
    var b = this;
    this.J.push(a);
    Fd(a, function() {
      Xa(b.J, a);
    });
    return a;
  };
  h.fetchProvidersForEmail = function(a) {
    return this.c(lh(this.f, a));
  };
  h.verifyPasswordResetCode = function(a) {
    return this.checkActionCode(a).then(function(a) {
      return a.data.email;
    });
  };
  h.confirmPasswordReset = function(a, b) {
    return this.c(this.f.confirmPasswordReset(a, b).then(function() {}));
  };
  h.checkActionCode = function(a) {
    return this.c(
      this.f.checkActionCode(a).then(function(a) {
        return new Ji(a);
      })
    );
  };
  h.applyActionCode = function(a) {
    return this.c(this.f.applyActionCode(a).then(function() {}));
  };
  h.sendPasswordResetEmail = function(a, b) {
    var c = this;
    return this.c(
      D()
        .then(function() {
          return 'undefined' === typeof b || ib(b) ? {} : Gi(new Fi(b));
        })
        .then(function(b) {
          return c.f.sendPasswordResetEmail(a, b);
        })
        .then(function() {})
    );
  };
  h.signInWithPhoneNumber = function(a, b) {
    return this.c(
      Ii(this, a, b, r(this.signInAndRetrieveDataWithCredential, this))
    );
  };
  var Tk = function(a, b, c, d) {
      a: {
        c = Array.prototype.slice.call(c);
        var e = 0;
        for (var f = !1, g = 0; g < b.length; g++)
          if (b[g].optional) f = !0;
          else {
            if (f)
              throw new O(
                'internal-error',
                'Argument validator encountered a required argument after an optional argument.'
              );
            e++;
          }
        f = b.length;
        if (c.length < e || f < c.length)
          d =
            'Expected ' +
            (e == f
              ? 1 == e
                ? '1 argument'
                : e + ' arguments'
              : e + '-' + f + ' arguments') +
            ' but got ' +
            c.length +
            '.';
        else {
          for (e = 0; e < c.length; e++)
            if (((f = b[e].optional && void 0 === c[e]), !b[e].U(c[e]) && !f)) {
              b = b[e];
              if (0 > e || e >= Sk.length)
                throw new O(
                  'internal-error',
                  'Argument validator received an unsupported number of arguments.'
                );
              c = Sk[e];
              d =
                (d ? '' : c + ' argument ') +
                (b.name ? '"' + b.name + '" ' : '') +
                'must be ' +
                b.T +
                '.';
              break a;
            }
          d = null;
        }
      }
      if (d) throw new O('argument-error', a + ' failed: ' + d);
    },
    Sk = 'First Second Third Fourth Fifth Sixth Seventh Eighth Ninth'.split(
      ' '
    ),
    V = function(a, b) {
      return { name: a || '', T: 'a valid string', optional: !!b, U: m };
    },
    Uk = function() {
      return { name: 'opt_forceRefresh', T: 'a boolean', optional: !0, U: ca };
    },
    W = function(a, b) {
      return {
        name: a || '',
        T: 'a valid object',
        optional: !!b,
        U: q
      };
    },
    Vk = function(a, b) {
      return { name: a || '', T: 'a function', optional: !!b, U: p };
    },
    Wk = function(a, b) {
      return { name: a || '', T: 'null', optional: !!b, U: fa };
    },
    Xk = function() {
      return {
        name: '',
        T: 'an HTML element',
        optional: !1,
        U: function(a) {
          return !!(a && a instanceof Element);
        }
      };
    },
    Yk = function() {
      return {
        name: 'auth',
        T: 'an instance of Firebase Auth',
        optional: !0,
        U: function(a) {
          return !!(a && a instanceof T);
        }
      };
    },
    Zk = function() {
      return {
        name: 'app',
        T: 'an instance of Firebase App',
        optional: !0,
        U: function(a) {
          return !!(a && a instanceof firebase.app.App);
        }
      };
    },
    $k = function(a) {
      return {
        name: a ? a + 'Credential' : 'credential',
        T: a ? 'a valid ' + a + ' credential' : 'a valid credential',
        optional: !1,
        U: function(b) {
          if (!b) return !1;
          var c = !a || b.providerId === a;
          return !(!b.Ob || !c);
        }
      };
    },
    al = function() {
      return {
        name: 'authProvider',
        T: 'a valid Auth provider',
        optional: !1,
        U: function(a) {
          return !!(
            a &&
            a.providerId &&
            a.hasOwnProperty &&
            a.hasOwnProperty('isOAuthProvider')
          );
        }
      };
    },
    bl = function() {
      return {
        name: 'applicationVerifier',
        T: 'an implementation of firebase.auth.ApplicationVerifier',
        optional: !1,
        U: function(a) {
          return !!(a && m(a.type) && p(a.verify));
        }
      };
    },
    X = function(a, b, c, d) {
      return {
        name: c || '',
        T: a.T + ' or ' + b.T,
        optional: !!d,
        U: function(c) {
          return a.U(c) || b.U(c);
        }
      };
    };
  var Y = function(a, b) {
      for (var c in b) {
        var d = b[c].name;
        a[d] = cl(d, a[c], b[c].a);
      }
    },
    Z = function(a, b, c, d) {
      a[b] = cl(b, c, d);
    },
    cl = function(a, b, c) {
      if (!c) return b;
      var d = dl(a);
      a = function() {
        var a = Array.prototype.slice.call(arguments);
        Tk(d, c, a);
        return b.apply(this, a);
      };
      for (var e in b) a[e] = b[e];
      for (e in b.prototype) a.prototype[e] = b.prototype[e];
      return a;
    },
    dl = function(a) {
      a = a.split('.');
      return a[a.length - 1];
    };
  Y(T.prototype, {
    applyActionCode: { name: 'applyActionCode', a: [V('code')] },
    checkActionCode: { name: 'checkActionCode', a: [V('code')] },
    confirmPasswordReset: {
      name: 'confirmPasswordReset',
      a: [V('code'), V('newPassword')]
    },
    createUserWithEmailAndPassword: {
      name: 'createUserWithEmailAndPassword',
      a: [V('email'), V('password')]
    },
    fetchProvidersForEmail: { name: 'fetchProvidersForEmail', a: [V('email')] },
    getRedirectResult: { name: 'getRedirectResult', a: [] },
    onAuthStateChanged: {
      name: 'onAuthStateChanged',
      a: [
        X(W(), Vk(), 'nextOrObserver'),
        Vk('opt_error', !0),
        Vk('opt_completed', !0)
      ]
    },
    onIdTokenChanged: {
      name: 'onIdTokenChanged',
      a: [
        X(W(), Vk(), 'nextOrObserver'),
        Vk('opt_error', !0),
        Vk('opt_completed', !0)
      ]
    },
    sendPasswordResetEmail: {
      name: 'sendPasswordResetEmail',
      a: [
        V('email'),
        X(
          W('opt_actionCodeSettings', !0),
          Wk(null, !0),
          'opt_actionCodeSettings',
          !0
        )
      ]
    },
    setPersistence: { name: 'setPersistence', a: [V('persistence')] },
    signInAndRetrieveDataWithCredential: {
      name: 'signInAndRetrieveDataWithCredential',
      a: [$k()]
    },
    signInAnonymously: { name: 'signInAnonymously', a: [] },
    signInWithCredential: { name: 'signInWithCredential', a: [$k()] },
    signInWithCustomToken: { name: 'signInWithCustomToken', a: [V('token')] },
    signInWithEmailAndPassword: {
      name: 'signInWithEmailAndPassword',
      a: [V('email'), V('password')]
    },
    signInWithPhoneNumber: {
      name: 'signInWithPhoneNumber',
      a: [V('phoneNumber'), bl()]
    },
    signInWithPopup: { name: 'signInWithPopup', a: [al()] },
    signInWithRedirect: { name: 'signInWithRedirect', a: [al()] },
    signOut: { name: 'signOut', a: [] },
    toJSON: { name: 'toJSON', a: [V(null, !0)] },
    useDeviceLanguage: {
      name: 'useDeviceLanguage',
      a: []
    },
    verifyPasswordResetCode: { name: 'verifyPasswordResetCode', a: [V('code')] }
  });
  (function(a, b) {
    for (var c in b) {
      var d = b[c].name;
      if (d !== c) {
        var e = b[c].nf;
        Object.defineProperty(a, d, {
          get: function() {
            return this[c];
          },
          set: function(a) {
            Tk(d, [e], [a], !0);
            this[c] = a;
          },
          enumerable: !0
        });
      }
    }
  })(T.prototype, {
    lc: { name: 'languageCode', nf: X(V(), Wk(), 'languageCode') }
  });
  T.Persistence = Ti;
  T.Persistence.LOCAL = 'local';
  T.Persistence.SESSION = 'session';
  T.Persistence.NONE = 'none';
  Y(S.prototype, {
    delete: { name: 'delete', a: [] },
    getIdToken: { name: 'getIdToken', a: [Uk()] },
    getToken: { name: 'getToken', a: [Uk()] },
    linkAndRetrieveDataWithCredential: {
      name: 'linkAndRetrieveDataWithCredential',
      a: [$k()]
    },
    linkWithCredential: { name: 'linkWithCredential', a: [$k()] },
    linkWithPhoneNumber: {
      name: 'linkWithPhoneNumber',
      a: [V('phoneNumber'), bl()]
    },
    linkWithPopup: { name: 'linkWithPopup', a: [al()] },
    linkWithRedirect: { name: 'linkWithRedirect', a: [al()] },
    reauthenticateAndRetrieveDataWithCredential: {
      name: 'reauthenticateAndRetrieveDataWithCredential',
      a: [$k()]
    },
    reauthenticateWithCredential: {
      name: 'reauthenticateWithCredential',
      a: [$k()]
    },
    reauthenticateWithPhoneNumber: {
      name: 'reauthenticateWithPhoneNumber',
      a: [V('phoneNumber'), bl()]
    },
    reauthenticateWithPopup: { name: 'reauthenticateWithPopup', a: [al()] },
    reauthenticateWithRedirect: {
      name: 'reauthenticateWithRedirect',
      a: [al()]
    },
    reload: { name: 'reload', a: [] },
    sendEmailVerification: {
      name: 'sendEmailVerification',
      a: [
        X(
          W('opt_actionCodeSettings', !0),
          Wk(null, !0),
          'opt_actionCodeSettings',
          !0
        )
      ]
    },
    toJSON: {
      name: 'toJSON',
      a: [V(null, !0)]
    },
    unlink: { name: 'unlink', a: [V('provider')] },
    updateEmail: { name: 'updateEmail', a: [V('email')] },
    updatePassword: { name: 'updatePassword', a: [V('password')] },
    updatePhoneNumber: { name: 'updatePhoneNumber', a: [$k('phone')] },
    updateProfile: { name: 'updateProfile', a: [W('profile')] }
  });
  Y(C.prototype, { g: { name: 'catch' }, then: { name: 'then' } });
  Y(Hi.prototype, { confirm: { name: 'confirm', a: [V('verificationCode')] } });
  Z(
    Ig,
    'credential',
    function(a, b) {
      return new Fg(a, b);
    },
    [V('email'), V('password')]
  );
  Y(xg.prototype, {
    addScope: { name: 'addScope', a: [V('scope')] },
    setCustomParameters: {
      name: 'setCustomParameters',
      a: [W('customOAuthParameters')]
    }
  });
  Z(xg, 'credential', yg, [X(V(), W(), 'token')]);
  Y(zg.prototype, {
    addScope: { name: 'addScope', a: [V('scope')] },
    setCustomParameters: {
      name: 'setCustomParameters',
      a: [W('customOAuthParameters')]
    }
  });
  Z(zg, 'credential', Ag, [X(V(), W(), 'token')]);
  Y(Bg.prototype, {
    addScope: { name: 'addScope', a: [V('scope')] },
    setCustomParameters: {
      name: 'setCustomParameters',
      a: [W('customOAuthParameters')]
    }
  });
  Z(Bg, 'credential', Cg, [
    X(V(), X(W(), Wk()), 'idToken'),
    X(V(), Wk(), 'accessToken', !0)
  ]);
  Y(Dg.prototype, {
    setCustomParameters: {
      name: 'setCustomParameters',
      a: [W('customOAuthParameters')]
    }
  });
  Z(Dg, 'credential', Eg, [X(V(), W(), 'token'), V('secret', !0)]);
  Y(P.prototype, {
    addScope: { name: 'addScope', a: [V('scope')] },
    credential: {
      name: 'credential',
      a: [X(V(), Wk(), 'idToken', !0), X(V(), Wk(), 'accessToken', !0)]
    },
    setCustomParameters: {
      name: 'setCustomParameters',
      a: [W('customOAuthParameters')]
    }
  });
  Z(Ng, 'credential', Pg, [V('verificationId'), V('verificationCode')]);
  Y(Ng.prototype, {
    verifyPhoneNumber: {
      name: 'verifyPhoneNumber',
      a: [V('phoneNumber'), bl()]
    }
  });
  Y(O.prototype, { toJSON: { name: 'toJSON', a: [V(null, !0)] } });
  Y(Sg.prototype, { toJSON: { name: 'toJSON', a: [V(null, !0)] } });
  Y(og.prototype, { toJSON: { name: 'toJSON', a: [V(null, !0)] } });
  Y(ki.prototype, {
    clear: { name: 'clear', a: [] },
    render: { name: 'render', a: [] },
    verify: { name: 'verify', a: [] }
  });
  (function() {
    if (
      'undefined' !== typeof firebase &&
      firebase.INTERNAL &&
      firebase.INTERNAL.registerService
    ) {
      var a = { Auth: T, Error: O };
      Z(a, 'EmailAuthProvider', Ig, []);
      Z(a, 'FacebookAuthProvider', xg, []);
      Z(a, 'GithubAuthProvider', zg, []);
      Z(a, 'GoogleAuthProvider', Bg, []);
      Z(a, 'TwitterAuthProvider', Dg, []);
      Z(a, 'OAuthProvider', P, [V('providerId')]);
      Z(a, 'PhoneAuthProvider', Ng, [Yk()]);
      Z(a, 'RecaptchaVerifier', ki, [
        X(V(), Xk(), 'recaptchaContainer'),
        W('recaptchaParameters', !0),
        Zk()
      ]);
      firebase.INTERNAL.registerService(
        'auth',
        function(a, c) {
          a = new T(a);
          c({
            INTERNAL: {
              getUid: r(a.getUid, a),
              getToken: r(a.Ff, a),
              addAuthTokenListener: r(a.lf, a),
              removeAuthTokenListener: r(a.ig, a)
            }
          });
          return a;
        },
        a,
        function(a, c) {
          if ('create' === a)
            try {
              c.auth();
            } catch (d) {}
        }
      );
      firebase.INTERNAL.extendNamespace({ User: S });
    } else
      throw Error(
        'Cannot find the firebase namespace; be sure to include firebase-app.js before this library.'
      );
  })();
}.call(this));

try {
  webpackJsonpFirebase(
    [0],
    [
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return i;
        }),
          n.d(e, 'b', function() {
            return o;
          });
        var r = n(17),
          i = function(t, e) {
            if (!t) throw o(e);
          },
          o = function(t) {
            return Error(
              'Firebase Database (' +
                r.a.SDK_VERSION +
                ') INTERNAL ASSERT FAILED: ' +
                t
            );
          };
      },
      function(t, e, n) {
        'use strict';
        var r = n(0),
          i = n(2),
          o = n(32),
          a = function(t) {
            for (var e = [], n = 0, r = 0; r < t.length; r++) {
              for (var i = t.charCodeAt(r); i > 255; )
                (e[n++] = 255 & i), (i >>= 8);
              e[n++] = i;
            }
            return e;
          },
          s = function(t) {
            if (t.length < 8192) return String.fromCharCode.apply(null, t);
            for (var e = '', n = 0; n < t.length; n += 8192) {
              var r = t.slice(n, n + 8192);
              e += String.fromCharCode.apply(null, r);
            }
            return e;
          },
          c = {
            _: null,
            O: null,
            S: null,
            T: null,
            ENCODED_VALS_BASE:
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            get ENCODED_VALS() {
              return this.ENCODED_VALS_BASE + '+/=';
            },
            get ENCODED_VALS_WEBSAFE() {
              return this.ENCODED_VALS_BASE + '-_.';
            },
            HAS_NATIVE_SUPPORT: 'function' == typeof o.a.atob,
            encodeByteArray: function(t, e) {
              if (!Array.isArray(t))
                throw Error('encodeByteArray takes an array as a parameter');
              this.N();
              for (
                var n = e ? this.S : this._, r = [], i = 0;
                i < t.length;
                i += 3
              ) {
                var o = t[i],
                  a = i + 1 < t.length,
                  s = a ? t[i + 1] : 0,
                  c = i + 2 < t.length,
                  u = c ? t[i + 2] : 0,
                  h = o >> 2,
                  l = ((3 & o) << 4) | (s >> 4),
                  p = ((15 & s) << 2) | (u >> 6),
                  d = 63 & u;
                c || ((d = 64), a || (p = 64)), r.push(n[h], n[l], n[p], n[d]);
              }
              return r.join('');
            },
            encodeString: function(t, e) {
              return this.HAS_NATIVE_SUPPORT && !e
                ? btoa(t)
                : this.encodeByteArray(a(t), e);
            },
            decodeString: function(t, e) {
              return this.HAS_NATIVE_SUPPORT && !e
                ? atob(t)
                : s(this.decodeStringToByteArray(t, e));
            },
            decodeStringToByteArray: function(t, e) {
              this.N();
              for (var n = e ? this.T : this.O, r = [], i = 0; i < t.length; ) {
                var o = n[t.charAt(i++)],
                  a = i < t.length,
                  s = a ? n[t.charAt(i)] : 0;
                ++i;
                var c = i < t.length,
                  u = c ? n[t.charAt(i)] : 64;
                ++i;
                var h = i < t.length,
                  l = h ? n[t.charAt(i)] : 64;
                if ((++i, null == o || null == s || null == u || null == l))
                  throw Error();
                var p = (o << 2) | (s >> 4);
                if ((r.push(p), 64 != u)) {
                  var d = ((s << 4) & 240) | (u >> 2);
                  if ((r.push(d), 64 != l)) {
                    var f = ((u << 6) & 192) | l;
                    r.push(f);
                  }
                }
              }
              return r;
            },
            N: function() {
              if (!this._) {
                (this._ = {}), (this.O = {}), (this.S = {}), (this.T = {});
                for (var t = 0; t < this.ENCODED_VALS.length; t++)
                  (this._[t] = this.ENCODED_VALS.charAt(t)),
                    (this.O[this._[t]] = t),
                    (this.S[t] = this.ENCODED_VALS_WEBSAFE.charAt(t)),
                    (this.T[this.S[t]] = t),
                    t >= this.ENCODED_VALS_BASE.length &&
                      ((this.O[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
                      (this.T[this.ENCODED_VALS.charAt(t)] = t));
              }
            }
          },
          u = (function() {
            function t() {
              this.blockSize = -1;
            }
            return t;
          })(),
          h =
            (this && this.__extends) ||
            (function() {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(t, e) {
                    t.__proto__ = e;
                  }) ||
                function(t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
              return function(e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          l = (function(t) {
            function e() {
              var e = t.call(this) || this;
              (e.I = []),
                (e.P = []),
                (e.R = []),
                (e.D = []),
                (e.F = 0),
                (e.L = 0),
                (e.blockSize = 64),
                (e.D[0] = 128);
              for (var n = 1; n < e.blockSize; ++n) e.D[n] = 0;
              return e.reset(), e;
            }
            return (
              h(e, t),
              (e.prototype.reset = function() {
                (this.I[0] = 1732584193),
                  (this.I[1] = 4023233417),
                  (this.I[2] = 2562383102),
                  (this.I[3] = 271733878),
                  (this.I[4] = 3285377520),
                  (this.F = 0),
                  (this.L = 0);
              }),
              (e.prototype.M = function(t, e) {
                e || (e = 0);
                var n = this.R;
                if ('string' == typeof t)
                  for (var r = 0; r < 16; r++)
                    (n[r] =
                      (t.charCodeAt(e) << 24) |
                      (t.charCodeAt(e + 1) << 16) |
                      (t.charCodeAt(e + 2) << 8) |
                      t.charCodeAt(e + 3)),
                      (e += 4);
                else
                  for (var r = 0; r < 16; r++)
                    (n[r] =
                      (t[e] << 24) |
                      (t[e + 1] << 16) |
                      (t[e + 2] << 8) |
                      t[e + 3]),
                      (e += 4);
                for (var r = 16; r < 80; r++) {
                  var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
                  n[r] = 4294967295 & ((i << 1) | (i >>> 31));
                }
                for (
                  var o,
                    a,
                    s = this.I[0],
                    c = this.I[1],
                    u = this.I[2],
                    h = this.I[3],
                    l = this.I[4],
                    r = 0;
                  r < 80;
                  r++
                ) {
                  r < 40
                    ? r < 20
                      ? ((o = h ^ (c & (u ^ h))), (a = 1518500249))
                      : ((o = c ^ u ^ h), (a = 1859775393))
                    : r < 60
                      ? ((o = (c & u) | (h & (c | u))), (a = 2400959708))
                      : ((o = c ^ u ^ h), (a = 3395469782));
                  var i =
                    (((s << 5) | (s >>> 27)) + o + l + a + n[r]) & 4294967295;
                  (l = h),
                    (h = u),
                    (u = 4294967295 & ((c << 30) | (c >>> 2))),
                    (c = s),
                    (s = i);
                }
                (this.I[0] = (this.I[0] + s) & 4294967295),
                  (this.I[1] = (this.I[1] + c) & 4294967295),
                  (this.I[2] = (this.I[2] + u) & 4294967295),
                  (this.I[3] = (this.I[3] + h) & 4294967295),
                  (this.I[4] = (this.I[4] + l) & 4294967295);
              }),
              (e.prototype.update = function(t, e) {
                if (null != t) {
                  void 0 === e && (e = t.length);
                  for (
                    var n = e - this.blockSize, r = 0, i = this.P, o = this.F;
                    r < e;

                  ) {
                    if (0 == o)
                      for (; r <= n; ) this.M(t, r), (r += this.blockSize);
                    if ('string' == typeof t) {
                      for (; r < e; )
                        if (
                          ((i[o] = t.charCodeAt(r)),
                          ++o,
                          ++r,
                          o == this.blockSize)
                        ) {
                          this.M(i), (o = 0);
                          break;
                        }
                    } else
                      for (; r < e; )
                        if (((i[o] = t[r]), ++o, ++r, o == this.blockSize)) {
                          this.M(i), (o = 0);
                          break;
                        }
                  }
                  (this.F = o), (this.L += e);
                }
              }),
              (e.prototype.digest = function() {
                var t = [],
                  e = 8 * this.L;
                this.F < 56
                  ? this.update(this.D, 56 - this.F)
                  : this.update(this.D, this.blockSize - (this.F - 56));
                for (var n = this.blockSize - 1; n >= 56; n--)
                  (this.P[n] = 255 & e), (e /= 256);
                this.M(this.P);
                for (var r = 0, n = 0; n < 5; n++)
                  for (var i = 24; i >= 0; i -= 8)
                    (t[r] = (this.I[n] >> i) & 255), ++r;
                return t;
              }),
              e
            );
          })(u),
          p = n(25),
          d = n(8),
          f = n(18),
          _ = n(13);
        n.d(e, 'a', function() {
          return g;
        }),
          n.d(e, 'f', function() {
            return m;
          }),
          n.d(e, 'e', function() {
            return b;
          }),
          n.d(e, 'y', function() {
            return C;
          }),
          n.d(e, 'u', function() {
            return O;
          }),
          n.d(e, 'j', function() {
            return S;
          }),
          n.d(e, 's', function() {
            return T;
          }),
          n.d(e, 't', function() {
            return j;
          }),
          n.d(e, 'k', function() {
            return N;
          }),
          n.d(e, 'o', function() {
            return I;
          }),
          n.d(e, 'B', function() {
            return P;
          }),
          n.d(e, 'C', function() {
            return R;
          }),
          n.d(e, 'q', function() {
            return D;
          }),
          n.d(e, 'n', function() {
            return x;
          }),
          n.d(e, 'c', function() {
            return k;
          }),
          n.d(e, 'b', function() {
            return F;
          }),
          n.d(e, 'v', function() {
            return A;
          }),
          n.d(e, 'A', function() {
            return L;
          }),
          n.d(e, 'w', function() {
            return M;
          }),
          n.d(e, 'd', function() {
            return W;
          }),
          n.d(e, 'z', function() {
            return q;
          }),
          n.d(e, 'i', function() {
            return Q;
          }),
          n.d(e, 'h', function() {
            return U;
          }),
          n.d(e, 'p', function() {
            return V;
          }),
          n.d(e, 'r', function() {
            return B;
          }),
          n.d(e, 'l', function() {
            return H;
          }),
          n.d(e, 'm', function() {
            return z;
          }),
          n.d(e, 'g', function() {
            return G;
          }),
          n.d(e, 'x', function() {
            return X;
          });
        var y,
          v =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          g = (function() {
            var t = 1;
            return function() {
              return t++;
            };
          })(),
          m = function(t) {
            var e = Object(p.b)(t);
            return c.encodeByteArray(e, !0);
          },
          b = function(t) {
            try {
              return y
                ? new y(t, 'base64').toString('utf8')
                : c.decodeString(t, !0);
            } catch (t) {
              T('base64Decode failed: ', t);
            }
            return null;
          },
          C = function(t) {
            var e = Object(p.b)(t),
              n = new l();
            n.update(e);
            var r = n.digest();
            return c.encodeByteArray(r);
          },
          E = function t() {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            for (var r = '', i = 0; i < e.length; i++)
              Array.isArray(e[i]) ||
              (e[i] && 'object' === v(e[i]) && 'number' == typeof e[i].length)
                ? (r += t.apply(null, e[i]))
                : 'object' === v(e[i])
                  ? (r += Object(d.b)(e[i]))
                  : (r += e[i]),
                (r += ' ');
            return r;
          },
          O = null,
          w = !0,
          S = function(t, e) {
            Object(r.a)(
              !e || !0 === t || !1 === t,
              "Can't turn on custom loggers persistently."
            ),
              !0 === t
                ? ('undefined' != typeof console &&
                    ('function' == typeof console.log
                      ? (O = console.log.bind(console))
                      : 'object' === v(console.log) &&
                        (O = function(t) {
                          console.log(t);
                        })),
                  e && f.b.set('logging_enabled', !0))
                : 'function' == typeof t
                  ? (O = t)
                  : ((O = null), f.b.remove('logging_enabled'));
          },
          T = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            if (
              (!0 === w &&
                ((w = !1),
                null === O && !0 === f.b.get('logging_enabled') && S(!0)),
              O)
            ) {
              var n = E.apply(null, t);
              O(n);
            }
          },
          j = function(t) {
            return function() {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              T.apply(void 0, [t].concat(e));
            };
          },
          N = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            if ('undefined' != typeof console) {
              var n = 'FIREBASE INTERNAL ERROR: ' + E.apply(void 0, t);
              void 0 !== console.error ? console.error(n) : console.log(n);
            }
          },
          I = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = E.apply(void 0, t);
            throw Error('FIREBASE FATAL ERROR: ' + n);
          },
          P = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            if ('undefined' != typeof console) {
              var n = 'FIREBASE WARNING: ' + E.apply(void 0, t);
              void 0 !== console.warn ? console.warn(n) : console.log(n);
            }
          },
          R = function() {
            'undefined' != typeof window &&
              window.location &&
              window.location.protocol &&
              -1 !== window.location.protocol.indexOf('https:') &&
              P(
                'Insecure Firebase access from a secure page. Please use https in calls to new Firebase().'
              );
          },
          D = function(t) {
            return (
              'number' == typeof t &&
              (t != t ||
                t == Number.POSITIVE_INFINITY ||
                t == Number.NEGATIVE_INFINITY)
            );
          },
          x = function(t) {
            if (Object(_.b)() || 'complete' === document.readyState) t();
            else {
              var e = !1,
                n = function n() {
                  if (!document.body) return void setTimeout(n, Math.floor(10));
                  e || ((e = !0), t());
                };
              document.addEventListener
                ? (document.addEventListener('DOMContentLoaded', n, !1),
                  window.addEventListener('load', n, !1))
                : document.attachEvent &&
                  (document.attachEvent('onreadystatechange', function() {
                    'complete' === document.readyState && n();
                  }),
                  window.attachEvent('onload', n));
            }
          },
          k = '[MIN_NAME]',
          F = '[MAX_NAME]',
          A = function(t, e) {
            if (t === e) return 0;
            if (t === k || e === F) return -1;
            if (e === k || t === F) return 1;
            var n = Y(t),
              r = Y(e);
            return null !== n
              ? null !== r
                ? n - r == 0
                  ? t.length - e.length
                  : n - r
                : -1
              : null !== r
                ? 1
                : t < e
                  ? -1
                  : 1;
          },
          L = function(t, e) {
            return t === e ? 0 : t < e ? -1 : 1;
          },
          M = function(t, e) {
            if (e && t in e) return e[t];
            throw Error(
              'Missing required key (' + t + ') in object: ' + Object(d.b)(e)
            );
          },
          W = function t(e) {
            if ('object' !== (void 0 === e ? 'undefined' : v(e)) || null === e)
              return Object(d.b)(e);
            var n = [];
            for (var r in e) n.push(r);
            n.sort();
            for (var i = '{', o = 0; o < n.length; o++)
              0 !== o && (i += ','),
                (i += Object(d.b)(n[o])),
                (i += ':'),
                (i += t(e[n[o]]));
            return (i += '}');
          },
          q = function(t, e) {
            var n = t.length;
            if (n <= e) return [t];
            for (var r = [], i = 0; i < n; i += e)
              i + e > n
                ? r.push(t.substring(i, n))
                : r.push(t.substring(i, i + e));
            return r;
          },
          Q = function(t, e) {
            if (Array.isArray(t)) for (var n = 0; n < t.length; ++n) e(n, t[n]);
            else
              Object(i.f)(t, function(t, n) {
                return e(n, t);
              });
          },
          U = function(t) {
            Object(r.a)(!D(t), 'Invalid JSON number');
            var e, n, i, o, a, s, c;
            for (
              0 === t
                ? ((n = 0), (i = 0), (e = 1 / t == -1 / 0 ? 1 : 0))
                : ((e = t < 0),
                  (t = Math.abs(t)),
                  t >= Math.pow(2, -1022)
                    ? ((o = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023)),
                      (n = o + 1023),
                      (i = Math.round(
                        t * Math.pow(2, 52 - o) - Math.pow(2, 52)
                      )))
                    : ((n = 0), (i = Math.round(t / Math.pow(2, -1074))))),
                s = [],
                a = 52;
              a;
              a -= 1
            )
              s.push(i % 2 ? 1 : 0), (i = Math.floor(i / 2));
            for (a = 11; a; a -= 1)
              s.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2));
            s.push(e ? 1 : 0), s.reverse(), (c = s.join(''));
            var u = '';
            for (a = 0; a < 64; a += 8) {
              var h = parseInt(c.substr(a, 8), 2).toString(16);
              1 === h.length && (h = '0' + h), (u += h);
            }
            return u.toLowerCase();
          },
          V = function() {
            return !(
              'object' !==
                ('undefined' == typeof window ? 'undefined' : v(window)) ||
              !window.chrome ||
              !window.chrome.extension ||
              /^chrome/.test(window.location.href)
            );
          },
          B = function() {
            return (
              'object' ===
                ('undefined' == typeof Windows ? 'undefined' : v(Windows)) &&
              'object' === v(Windows.UI)
            );
          },
          H = function(t, e) {
            var n = 'Unknown Error';
            'too_big' === t
              ? (n =
                  'The data requested exceeds the maximum size that can be accessed with a single request.')
              : 'permission_denied' == t
                ? (n =
                    "Client doesn't have permission to access the desired data.")
                : 'unavailable' == t && (n = 'The service is unavailable');
            var r = Error(t + ' at ' + e.path + ': ' + n);
            return (r.code = t.toUpperCase()), r;
          },
          K = RegExp('^-?\\d{1,10}$'),
          Y = function(t) {
            if (K.test(t)) {
              var e = +t;
              if (e >= -2147483648 && e <= 2147483647) return e;
            }
            return null;
          },
          z = function(t) {
            try {
              t();
            } catch (t) {
              setTimeout(function() {
                var e = t.stack || '';
                throw (P('Exception was thrown by user callback.', e), t);
              }, Math.floor(0));
            }
          },
          G = function() {
            return (
              (
                ('object' ===
                  ('undefined' == typeof window ? 'undefined' : v(window)) &&
                  window.navigator &&
                  window.navigator.userAgent) ||
                ''
              ).search(
                /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
              ) >= 0
            );
          },
          X = function(t, e) {
            var n = setTimeout(t, e);
            return (
              'object' === (void 0 === n ? 'undefined' : v(n)) &&
                n.unref &&
                n.unref(),
              n
            );
          };
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'b', function() {
          return r;
        }),
          n.d(e, 'l', function() {
            return i;
          }),
          n.d(e, 'f', function() {
            return o;
          }),
          n.d(e, 'a', function() {
            return s;
          }),
          n.d(e, 'j', function() {
            return c;
          }),
          n.d(e, 'h', function() {
            return u;
          }),
          n.d(e, 'k', function() {
            return h;
          }),
          n.d(e, 'd', function() {
            return l;
          }),
          n.d(e, 'e', function() {
            return p;
          }),
          n.d(e, 'g', function() {
            return d;
          }),
          n.d(e, 'i', function() {
            return f;
          }),
          n.d(e, 'c', function() {
            return _;
          });
        var r = ('function' == typeof Symbol && Symbol.iterator,
          function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          i = function(t, e) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          },
          o = function(t, e) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
          },
          a = function(t, e) {
            return (
              o(e, function(e, n) {
                t[e] = n;
              }),
              t
            );
          },
          s = function(t) {
            return a({}, t);
          },
          c = function(t) {
            for (var e in t) return !1;
            return !0;
          },
          u = function(t) {
            var e = 0;
            for (var n in t) e++;
            return e;
          },
          h = function(t, e, n) {
            var r = {};
            for (var i in t) r[i] = e.call(n, t[i], i, t);
            return r;
          },
          l = function(t, e, n) {
            for (var r in t) if (e.call(n, t[r], r, t)) return r;
          },
          p = function(t, e, n) {
            var r = l(t, e, n);
            return r && t[r];
          },
          d = function(t) {
            for (var e in t) return e;
          },
          f = function(t) {
            var e = [],
              n = 0;
            for (var r in t) e[n++] = t[r];
            return e;
          },
          _ = function(t, e) {
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n) && !e(n, t[n]))
                return !1;
            return !0;
          };
      },
      ,
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return o;
        }),
          n.d(e, 'b', function() {
            return a;
          });
        var r = n(1),
          i = n(25),
          o = (function() {
            function t(t, e) {
              if (void 0 === e) {
                this.W = t.split('/');
                for (var n = 0, r = 0; r < this.W.length; r++)
                  this.W[r].length > 0 && ((this.W[n] = this.W[r]), n++);
                (this.W.length = n), (this.Q = 0);
              } else (this.W = t), (this.Q = e);
            }
            return (
              Object.defineProperty(t, 'Empty', {
                get: function() {
                  return new t('');
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.getFront = function() {
                return this.Q >= this.W.length ? null : this.W[this.Q];
              }),
              (t.prototype.getLength = function() {
                return this.W.length - this.Q;
              }),
              (t.prototype.popFront = function() {
                var e = this.Q;
                return e < this.W.length && e++, new t(this.W, e);
              }),
              (t.prototype.getBack = function() {
                return this.Q < this.W.length
                  ? this.W[this.W.length - 1]
                  : null;
              }),
              (t.prototype.toString = function() {
                for (var t = '', e = this.Q; e < this.W.length; e++)
                  '' !== this.W[e] && (t += '/' + this.W[e]);
                return t || '/';
              }),
              (t.prototype.toUrlEncodedString = function() {
                for (var t = '', e = this.Q; e < this.W.length; e++)
                  '' !== this.W[e] &&
                    (t += '/' + encodeURIComponent(this.W[e] + ''));
                return t || '/';
              }),
              (t.prototype.slice = function(t) {
                return void 0 === t && (t = 0), this.W.slice(this.Q + t);
              }),
              (t.prototype.parent = function() {
                if (this.Q >= this.W.length) return null;
                for (var e = [], n = this.Q; n < this.W.length - 1; n++)
                  e.push(this.W[n]);
                return new t(e, 0);
              }),
              (t.prototype.child = function(e) {
                for (var n = [], r = this.Q; r < this.W.length; r++)
                  n.push(this.W[r]);
                if (e instanceof t)
                  for (var r = e.Q; r < e.W.length; r++) n.push(e.W[r]);
                else
                  for (var i = e.split('/'), r = 0; r < i.length; r++)
                    i[r].length > 0 && n.push(i[r]);
                return new t(n, 0);
              }),
              (t.prototype.isEmpty = function() {
                return this.Q >= this.W.length;
              }),
              (t.relativePath = function(e, n) {
                var r = e.getFront(),
                  i = n.getFront();
                if (null === r) return n;
                if (r === i) return t.relativePath(e.popFront(), n.popFront());
                throw Error(
                  'INTERNAL ERROR: innerPath (' +
                    n +
                    ') is not within outerPath (' +
                    e +
                    ')'
                );
              }),
              (t.comparePaths = function(t, e) {
                for (
                  var n = t.slice(), i = e.slice(), o = 0;
                  o < n.length && o < i.length;
                  o++
                ) {
                  var a = Object(r.v)(n[o], i[o]);
                  if (0 !== a) return a;
                }
                return n.length === i.length ? 0 : n.length < i.length ? -1 : 1;
              }),
              (t.prototype.equals = function(t) {
                if (this.getLength() !== t.getLength()) return !1;
                for (var e = this.Q, n = t.Q; e <= this.W.length; e++, n++)
                  if (this.W[e] !== t.W[n]) return !1;
                return !0;
              }),
              (t.prototype.contains = function(t) {
                var e = this.Q,
                  n = t.Q;
                if (this.getLength() > t.getLength()) return !1;
                for (; e < this.W.length; ) {
                  if (this.W[e] !== t.W[n]) return !1;
                  ++e, ++n;
                }
                return !0;
              }),
              t
            );
          })(),
          a = (function() {
            function t(t, e) {
              (this.U = e),
                (this.V = t.slice()),
                (this.H = Math.max(1, this.V.length));
              for (var n = 0; n < this.V.length; n++)
                this.H += Object(i.a)(this.V[n]);
              this.K();
            }
            return (
              Object.defineProperty(t, 'MAX_PATH_DEPTH', {
                get: function() {
                  return 32;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t, 'MAX_PATH_LENGTH_BYTES', {
                get: function() {
                  return 768;
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.push = function(t) {
                this.V.length > 0 && (this.H += 1),
                  this.V.push(t),
                  (this.H += Object(i.a)(t)),
                  this.K();
              }),
              (t.prototype.pop = function() {
                var t = this.V.pop();
                (this.H -= Object(i.a)(t)), this.V.length > 0 && (this.H -= 1);
              }),
              (t.prototype.K = function() {
                if (this.H > t.MAX_PATH_LENGTH_BYTES)
                  throw Error(
                    this.U +
                      'has a key path longer than ' +
                      t.MAX_PATH_LENGTH_BYTES +
                      ' bytes (' +
                      this.H +
                      ').'
                  );
                if (this.V.length > t.MAX_PATH_DEPTH)
                  throw Error(
                    this.U +
                      'path specified exceeds the maximum depth that can be written (' +
                      t.MAX_PATH_DEPTH +
                      ') or object contains a cycle ' +
                      this.toErrorString()
                  );
              }),
              (t.prototype.toErrorString = function() {
                return 0 == this.V.length
                  ? ''
                  : "in property '" + this.V.join('.') + "'";
              }),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        function r(t) {
          o = t;
        }
        function i(t) {
          a = t;
        }
        (e.c = r),
          (e.b = i),
          n.d(e, 'a', function() {
            return d;
          });
        var o,
          a,
          s = n(20),
          c = n(1),
          u = n(7),
          h = n(21),
          l =
            (this && this.__extends) ||
            (function() {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(t, e) {
                    t.__proto__ = e;
                  }) ||
                function(t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
              return function(e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          p = (function(t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              l(e, t),
              (e.prototype.compare = function(t, e) {
                var n = t.node.getPriority(),
                  r = e.node.getPriority(),
                  i = n.compareTo(r);
                return 0 === i ? Object(c.v)(t.name, e.name) : i;
              }),
              (e.prototype.isDefinedOn = function(t) {
                return !t.getPriority().isEmpty();
              }),
              (e.prototype.indexedValueChanged = function(t, e) {
                return !t.getPriority().equals(e.getPriority());
              }),
              (e.prototype.minPost = function() {
                return u.a.MIN;
              }),
              (e.prototype.maxPost = function() {
                return new u.a(c.b, new h.a('[PRIORITY-POST]', a));
              }),
              (e.prototype.makePost = function(t, e) {
                var n = o(t);
                return new u.a(e, new h.a('[PRIORITY-POST]', n));
              }),
              (e.prototype.toString = function() {
                return '.priority';
              }),
              e
            );
          })(s.a),
          d = new p();
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return _;
        }),
          n.d(e, 'b', function() {
            return v;
          });
        var r,
          i = n(0),
          o = n(1),
          a = n(22),
          s = n(7),
          c = n(40),
          u = n(5),
          h = n(15),
          l = n(42),
          p = n(21),
          d = n(44),
          f =
            (this && this.__extends) ||
            (function() {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(t, e) {
                    t.__proto__ = e;
                  }) ||
                function(t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
              return function(e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          _ = (function() {
            function t(t, e, n) {
              (this.Y = t),
                (this.G = e),
                (this.X = n),
                (this.$ = null),
                this.G && Object(c.c)(this.G),
                this.Y.isEmpty() &&
                  Object(i.a)(
                    !this.G || this.G.isEmpty(),
                    'An empty node cannot have a priority'
                  );
            }
            return (
              Object.defineProperty(t, 'EMPTY_NODE', {
                get: function() {
                  return r || (r = new t(new a.b(d.a), null, l.a.Default));
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.isLeafNode = function() {
                return !1;
              }),
              (t.prototype.getPriority = function() {
                return this.G || r;
              }),
              (t.prototype.updatePriority = function(e) {
                return this.Y.isEmpty() ? this : new t(this.Y, e, this.X);
              }),
              (t.prototype.getImmediateChild = function(t) {
                if ('.priority' === t) return this.getPriority();
                var e = this.Y.get(t);
                return null === e ? r : e;
              }),
              (t.prototype.getChild = function(t) {
                var e = t.getFront();
                return null === e
                  ? this
                  : this.getImmediateChild(e).getChild(t.popFront());
              }),
              (t.prototype.hasChild = function(t) {
                return null !== this.Y.get(t);
              }),
              (t.prototype.updateImmediateChild = function(e, n) {
                if (
                  (Object(i.a)(n, 'We should always be passing snapshot nodes'),
                  '.priority' === e)
                )
                  return this.updatePriority(n);
                var o = new s.a(e, n),
                  a = void 0,
                  c = void 0,
                  u = void 0;
                return (
                  n.isEmpty()
                    ? ((a = this.Y.remove(e)),
                      (c = this.X.removeFromIndexes(o, this.Y)))
                    : ((a = this.Y.insert(e, n)),
                      (c = this.X.addToIndexes(o, this.Y))),
                  (u = a.isEmpty() ? r : this.G),
                  new t(a, u, c)
                );
              }),
              (t.prototype.updateChild = function(t, e) {
                var n = t.getFront();
                if (null === n) return e;
                Object(i.a)(
                  '.priority' !== t.getFront() || 1 === t.getLength(),
                  '.priority must be the last token in a path'
                );
                var r = this.getImmediateChild(n).updateChild(t.popFront(), e);
                return this.updateImmediateChild(n, r);
              }),
              (t.prototype.isEmpty = function() {
                return this.Y.isEmpty();
              }),
              (t.prototype.numChildren = function() {
                return this.Y.count();
              }),
              (t.prototype.val = function(e) {
                if (this.isEmpty()) return null;
                var n = {},
                  r = 0,
                  i = 0,
                  o = !0;
                if (
                  (this.forEachChild(u.a, function(a, s) {
                    (n[a] = s.val(e)),
                      r++,
                      o && t.J.test(a) ? (i = Math.max(i, +a)) : (o = !1);
                  }),
                  !e && o && i < 2 * r)
                ) {
                  var a = [];
                  for (var s in n) a[s] = n[s];
                  return a;
                }
                return (
                  e &&
                    !this.getPriority().isEmpty() &&
                    (n['.priority'] = this.getPriority().val()),
                  n
                );
              }),
              (t.prototype.hash = function() {
                if (null === this.$) {
                  var t = '';
                  this.getPriority().isEmpty() ||
                    (t +=
                      'priority:' +
                      Object(c.a)(this.getPriority().val()) +
                      ':'),
                    this.forEachChild(u.a, function(e, n) {
                      var r = n.hash();
                      '' !== r && (t += ':' + e + ':' + r);
                    }),
                    (this.$ = '' === t ? '' : Object(o.y)(t));
                }
                return this.$;
              }),
              (t.prototype.getPredecessorChildName = function(t, e, n) {
                var r = this.Z(n);
                if (r) {
                  var i = r.getPredecessorKey(new s.a(t, e));
                  return i ? i.name : null;
                }
                return this.Y.getPredecessorKey(t);
              }),
              (t.prototype.getFirstChildName = function(t) {
                var e = this.Z(t);
                if (e) {
                  var n = e.minKey();
                  return n && n.name;
                }
                return this.Y.minKey();
              }),
              (t.prototype.getFirstChild = function(t) {
                var e = this.getFirstChildName(t);
                return e ? new s.a(e, this.Y.get(e)) : null;
              }),
              (t.prototype.getLastChildName = function(t) {
                var e = this.Z(t);
                if (e) {
                  var n = e.maxKey();
                  return n && n.name;
                }
                return this.Y.maxKey();
              }),
              (t.prototype.getLastChild = function(t) {
                var e = this.getLastChildName(t);
                return e ? new s.a(e, this.Y.get(e)) : null;
              }),
              (t.prototype.forEachChild = function(t, e) {
                var n = this.Z(t);
                return n
                  ? n.inorderTraversal(function(t) {
                      return e(t.name, t.node);
                    })
                  : this.Y.inorderTraversal(e);
              }),
              (t.prototype.getIterator = function(t) {
                return this.getIteratorFrom(t.minPost(), t);
              }),
              (t.prototype.getIteratorFrom = function(t, e) {
                var n = this.Z(e);
                if (n)
                  return n.getIteratorFrom(t, function(t) {
                    return t;
                  });
                for (
                  var r = this.Y.getIteratorFrom(t.name, s.a.Wrap),
                    i = r.peek();
                  null != i && e.compare(i, t) < 0;

                )
                  r.getNext(), (i = r.peek());
                return r;
              }),
              (t.prototype.getReverseIterator = function(t) {
                return this.getReverseIteratorFrom(t.maxPost(), t);
              }),
              (t.prototype.getReverseIteratorFrom = function(t, e) {
                var n = this.Z(e);
                if (n)
                  return n.getReverseIteratorFrom(t, function(t) {
                    return t;
                  });
                for (
                  var r = this.Y.getReverseIteratorFrom(t.name, s.a.Wrap),
                    i = r.peek();
                  null != i && e.compare(i, t) > 0;

                )
                  r.getNext(), (i = r.peek());
                return r;
              }),
              (t.prototype.compareTo = function(t) {
                return this.isEmpty()
                  ? t.isEmpty()
                    ? 0
                    : -1
                  : t.isLeafNode() || t.isEmpty()
                    ? 1
                    : t === v
                      ? -1
                      : 0;
              }),
              (t.prototype.withIndex = function(e) {
                if (e === h.a || this.X.hasIndex(e)) return this;
                var n = this.X.addIndex(e, this.Y);
                return new t(this.Y, this.G, n);
              }),
              (t.prototype.isIndexed = function(t) {
                return t === h.a || this.X.hasIndex(t);
              }),
              (t.prototype.equals = function(t) {
                if (t === this) return !0;
                if (t.isLeafNode()) return !1;
                var e = t;
                if (this.getPriority().equals(e.getPriority())) {
                  if (this.Y.count() === e.Y.count()) {
                    for (
                      var n = this.getIterator(u.a),
                        r = e.getIterator(u.a),
                        i = n.getNext(),
                        o = r.getNext();
                      i && o;

                    ) {
                      if (i.name !== o.name || !i.node.equals(o.node))
                        return !1;
                      (i = n.getNext()), (o = r.getNext());
                    }
                    return null === i && null === o;
                  }
                  return !1;
                }
                return !1;
              }),
              (t.prototype.Z = function(t) {
                return t === h.a ? null : this.X.get('' + t);
              }),
              (t.J = /^(0|[1-9]\d*)$/),
              t
            );
          })(),
          y = (function(t) {
            function e() {
              return (
                t.call(this, new a.b(d.a), _.EMPTY_NODE, l.a.Default) || this
              );
            }
            return (
              f(e, t),
              (e.prototype.compareTo = function(t) {
                return t === this ? 0 : 1;
              }),
              (e.prototype.equals = function(t) {
                return t === this;
              }),
              (e.prototype.getPriority = function() {
                return this;
              }),
              (e.prototype.getImmediateChild = function(t) {
                return _.EMPTY_NODE;
              }),
              (e.prototype.isEmpty = function() {
                return !1;
              }),
              e
            );
          })(_),
          v = new y();
        Object.defineProperties(s.a, {
          MIN: { value: new s.a(o.c, _.EMPTY_NODE) },
          MAX: { value: new s.a(o.b, v) }
        }),
          (h.b.__EMPTY_NODE = _.EMPTY_NODE),
          (p.a.__childrenNodeConstructor = _),
          Object(c.b)(v),
          Object(u.b)(v);
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return r;
        });
        var r = (function() {
          function t(t, e) {
            (this.name = t), (this.node = e);
          }
          return (
            (t.Wrap = function(e, n) {
              return new t(e, n);
            }),
            t
          );
        })();
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return r;
        }),
          n.d(e, 'b', function() {
            return i;
          });
        var r = function(t) {
            return JSON.parse(t);
          },
          i = function(t) {
            return JSON.stringify(t);
          };
      },
      ,
      function(t, e, n) {
        'use strict';
        function r(t, e, n) {
          var r = '';
          switch (e) {
            case 1:
              r = n ? 'first' : 'First';
              break;
            case 2:
              r = n ? 'second' : 'Second';
              break;
            case 3:
              r = n ? 'third' : 'Third';
              break;
            case 4:
              r = n ? 'fourth' : 'Fourth';
              break;
            default:
              throw Error(
                'errorPrefix called with argumentNumber > 4.  Need to update it?'
              );
          }
          var i = t + ' failed: ';
          return (i += r + ' argument ');
        }
        n.d(e, 'b', function() {
          return o;
        }),
          (e.a = r),
          n.d(e, 'c', function() {
            return a;
          }),
          n.d(e, 'd', function() {
            return s;
          });
        var i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          o = function(t, e, n, r) {
            var i;
            if (
              (r < e
                ? (i = 'at least ' + e)
                : r > n && (i = 0 === n ? 'none' : 'no more than ' + n),
              i)
            ) {
              var o =
                t +
                ' failed: Was called with ' +
                r +
                (1 === r ? ' argument.' : ' arguments.') +
                ' Expects ' +
                i +
                '.';
              throw Error(o);
            }
          },
          a = function(t, e, n, i) {
            if ((!i || n) && 'function' != typeof n)
              throw Error(r(t, e, i) + 'must be a valid function.');
          },
          s = function(t, e, n, o) {
            if (
              (!o || n) &&
              ('object' !== (void 0 === n ? 'undefined' : i(n)) || null === n)
            )
              throw Error(r(t, e, o) + 'must be a valid context object.');
          };
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return f;
        }),
          n.d(e, 'e', function() {
            return _;
          }),
          n.d(e, 'd', function() {
            return y;
          }),
          n.d(e, 'f', function() {
            return g;
          }),
          n.d(e, 'i', function() {
            return m;
          }),
          n.d(e, 'c', function() {
            return b;
          }),
          n.d(e, 'g', function() {
            return C;
          }),
          n.d(e, 'h', function() {
            return E;
          }),
          n.d(e, 'j', function() {
            return O;
          }),
          n.d(e, 'l', function() {
            return w;
          }),
          n.d(e, 'k', function() {
            return S;
          }),
          n.d(e, 'b', function() {
            return T;
          });
        var r = n(4),
          i = n(2),
          o = n(1),
          a = n(10),
          s = n(25),
          c =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          u = /[\[\].#$\/\u0000-\u001F\u007F]/,
          h = /[\[\].#$\u0000-\u001F\u007F]/,
          l = function(t) {
            return 'string' == typeof t && 0 !== t.length && !u.test(t);
          },
          p = function(t) {
            return 'string' == typeof t && 0 !== t.length && !h.test(t);
          },
          d = function(t) {
            return t && (t = t.replace(/^\/*\.info(\/|$)/, '/')), p(t);
          },
          f = function(t) {
            return (
              null === t ||
              'string' == typeof t ||
              ('number' == typeof t && !Object(o.q)(t)) ||
              (t &&
                'object' === (void 0 === t ? 'undefined' : c(t)) &&
                Object(i.b)(t, '.sv'))
            );
          },
          _ = function(t, e, n, r, i) {
            (i && void 0 === n) || y(Object(a.a)(t, e, i), n, r);
          },
          y = function t(e, n, a) {
            var u = a instanceof r.a ? new r.b(a, e) : a;
            if (void 0 === n)
              throw Error(e + 'contains undefined ' + u.toErrorString());
            if ('function' == typeof n)
              throw Error(
                e +
                  'contains a function ' +
                  u.toErrorString() +
                  ' with contents = ' +
                  n
              );
            if (Object(o.q)(n))
              throw Error(e + 'contains ' + n + ' ' + u.toErrorString());
            if (
              'string' == typeof n &&
              n.length > 10485760 / 3 &&
              Object(s.a)(n) > 10485760
            )
              throw Error(
                e +
                  'contains a string greater than 10485760 utf8 bytes ' +
                  u.toErrorString() +
                  " ('" +
                  n.substring(0, 50) +
                  "...')"
              );
            if (n && 'object' === (void 0 === n ? 'undefined' : c(n))) {
              var h = !1,
                p = !1;
              if (
                (Object(i.f)(n, function(n, r) {
                  if ('.value' === n) h = !0;
                  else if (
                    '.priority' !== n &&
                    '.sv' !== n &&
                    ((p = !0), !l(n))
                  )
                    throw Error(
                      e +
                        ' contains an invalid key (' +
                        n +
                        ') ' +
                        u.toErrorString() +
                        '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                    );
                  u.push(n), t(e, r, u), u.pop();
                }),
                h && p)
              )
                throw Error(
                  e +
                    ' contains ".value" child ' +
                    u.toErrorString() +
                    ' in addition to actual children.'
                );
            }
          },
          v = function(t, e) {
            var n, i;
            for (n = 0; n < e.length; n++) {
              i = e[n];
              for (var o = i.slice(), a = 0; a < o.length; a++)
                if ('.priority' === o[a] && a === o.length - 1);
                else if (!l(o[a]))
                  throw Error(
                    t +
                      'contains an invalid key (' +
                      o[a] +
                      ') in path ' +
                      i +
                      '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                  );
            }
            e.sort(r.a.comparePaths);
            var s = null;
            for (n = 0; n < e.length; n++) {
              if (((i = e[n]), null !== s && s.contains(i)))
                throw Error(
                  t +
                    'contains a path ' +
                    s +
                    ' that is ancestor of another path ' +
                    i
                );
              s = i;
            }
          },
          g = function(t, e, n, o, s) {
            if (!s || void 0 !== n) {
              var u = Object(a.a)(t, e, s);
              if (
                !n ||
                'object' !== (void 0 === n ? 'undefined' : c(n)) ||
                Array.isArray(n)
              )
                throw Error(
                  u + ' must be an object containing the children to replace.'
                );
              var h = [];
              Object(i.f)(n, function(t, e) {
                var n = new r.a(t);
                if ((y(u, e, o.child(n)), '.priority' === n.getBack() && !f(e)))
                  throw Error(
                    u +
                      "contains an invalid value for '" +
                      n +
                      "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
                  );
                h.push(n);
              }),
                v(u, h);
            }
          },
          m = function(t, e, n, r) {
            if (!r || void 0 !== n) {
              if (Object(o.q)(n))
                throw Error(
                  Object(a.a)(t, e, r) +
                    'is ' +
                    n +
                    ', but must be a valid Firebase priority (a string, finite number, server value, or null).'
                );
              if (!f(n))
                throw Error(
                  Object(a.a)(t, e, r) +
                    'must be a valid Firebase priority (a string, finite number, server value, or null).'
                );
            }
          },
          b = function(t, e, n, r) {
            if (!r || void 0 !== n)
              switch (n) {
                case 'value':
                case 'child_added':
                case 'child_removed':
                case 'child_changed':
                case 'child_moved':
                  break;
                default:
                  throw Error(
                    Object(a.a)(t, e, r) +
                      'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
                  );
              }
          },
          C = function(t, e, n, r) {
            if (!((r && void 0 === n) || l(n)))
              throw Error(
                Object(a.a)(t, e, r) +
                  'was an invalid key = "' +
                  n +
                  '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
              );
          },
          E = function(t, e, n, r) {
            if (!((r && void 0 === n) || p(n)))
              throw Error(
                Object(a.a)(t, e, r) +
                  'was an invalid path = "' +
                  n +
                  '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
              );
          },
          O = function(t, e, n, r) {
            n && (n = n.replace(/^\/*\.info(\/|$)/, '/')), E(t, e, n, r);
          },
          w = function(t, e) {
            if ('.info' === e.getFront())
              throw Error(t + " failed = Can't modify data under /.info/");
          },
          S = function(t, e, n) {
            var r = '' + n.path;
            if (
              'string' != typeof n.repoInfo.host ||
              0 === n.repoInfo.host.length ||
              !l(n.repoInfo.namespace) ||
              (0 !== r.length && !d(r))
            )
              throw Error(
                Object(a.a)(t, e, !1) +
                  'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
              );
          },
          T = function(t, e, n, r) {
            if ((!r || void 0 !== n) && 'boolean' != typeof n)
              throw Error(Object(a.a)(t, e, r) + 'must be a boolean.');
          };
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'b', function() {
          return r;
        }),
          n.d(e, 'a', function() {
            return o;
          });
        var r,
          i = n(0);
        !(function(t) {
          (t[(t.OVERWRITE = 0)] = 'OVERWRITE'),
            (t[(t.MERGE = 1)] = 'MERGE'),
            (t[(t.ACK_USER_WRITE = 2)] = 'ACK_USER_WRITE'),
            (t[(t.LISTEN_COMPLETE = 3)] = 'LISTEN_COMPLETE');
        })(r || (r = {}));
        var o = (function() {
          function t(t, e, n, r) {
            (this.fromUser = t),
              (this.fromServer = e),
              (this.queryId = n),
              (this.tagged = r),
              Object(i.a)(!r || e, 'Tagged queries must be from server.');
          }
          return (
            (t.User = new t(!0, !1, null, !1)),
            (t.Server = new t(!1, !0, null, !1)),
            (t.forServerTaggedQuery = function(e) {
              return new t(!1, !0, e, !0);
            }),
            t
          );
        })();
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return a;
        }),
          n.d(e, 'c', function() {
            return s;
          }),
          n.d(e, 'b', function() {
            return c;
          });
        var r = n(17),
          i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          o = function() {
            return 'undefined' != typeof navigator &&
              'string' == typeof navigator.userAgent
              ? navigator.userAgent
              : '';
          },
          a = function() {
            return (
              'undefined' != typeof window &&
              !!(window.cordova || window.phonegap || window.PhoneGap) &&
              /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o())
            );
          },
          s = function() {
            return (
              'object' ===
                ('undefined' == typeof navigator
                  ? 'undefined'
                  : i(navigator)) && 'ReactNative' === navigator.product
            );
          },
          c = function() {
            return !0 === r.a.NODE_CLIENT || !0 === r.a.NODE_ADMIN;
          };
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return r;
        });
        var r = (function() {
          function t(t, e, n, r, i) {
            (this.type = t),
              (this.snapshotNode = e),
              (this.childName = n),
              (this.oldSnap = r),
              (this.prevName = i);
          }
          return (
            (t.valueChange = function(e) {
              return new t(t.VALUE, e);
            }),
            (t.childAddedChange = function(e, n) {
              return new t(t.CHILD_ADDED, n, e);
            }),
            (t.childRemovedChange = function(e, n) {
              return new t(t.CHILD_REMOVED, n, e);
            }),
            (t.childChangedChange = function(e, n, r) {
              return new t(t.CHILD_CHANGED, n, e, r);
            }),
            (t.childMovedChange = function(e, n) {
              return new t(t.CHILD_MOVED, n, e);
            }),
            (t.CHILD_ADDED = 'child_added'),
            (t.CHILD_REMOVED = 'child_removed'),
            (t.CHILD_CHANGED = 'child_changed'),
            (t.CHILD_MOVED = 'child_moved'),
            (t.VALUE = 'value'),
            t
          );
        })();
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'b', function() {
          return u;
        }),
          n.d(e, 'a', function() {
            return h;
          });
        var r,
          i = n(20),
          o = n(7),
          a = n(1),
          s = n(0),
          c =
            (this && this.__extends) ||
            (function() {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(t, e) {
                    t.__proto__ = e;
                  }) ||
                function(t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
              return function(e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          u = (function(t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              c(e, t),
              Object.defineProperty(e, '__EMPTY_NODE', {
                get: function() {
                  return r;
                },
                set: function(t) {
                  r = t;
                },
                enumerable: !0,
                configurable: !0
              }),
              (e.prototype.compare = function(t, e) {
                return Object(a.v)(t.name, e.name);
              }),
              (e.prototype.isDefinedOn = function(t) {
                throw Object(s.b)(
                  'KeyIndex.isDefinedOn not expected to be called.'
                );
              }),
              (e.prototype.indexedValueChanged = function(t, e) {
                return !1;
              }),
              (e.prototype.minPost = function() {
                return o.a.MIN;
              }),
              (e.prototype.maxPost = function() {
                return new o.a(a.b, r);
              }),
              (e.prototype.makePost = function(t, e) {
                return (
                  Object(s.a)(
                    'string' == typeof t,
                    'KeyIndex indexValue must always be a string.'
                  ),
                  new o.a(t, r)
                );
              }),
              (e.prototype.toString = function() {
                return '.key';
              }),
              e
            );
          })(i.a),
          h = new u();
      },
      function(t, e, n) {
        'use strict';
        function r(t, e) {
          if ((void 0 === e && (e = null), null === t)) return i.a.EMPTY_NODE;
          if (
            ('object' === (void 0 === t ? 'undefined' : d(t)) &&
              '.priority' in t &&
              (e = t['.priority']),
            Object(c.a)(
              null === e ||
                'string' == typeof e ||
                'number' == typeof e ||
                ('object' === (void 0 === e ? 'undefined' : d(e)) &&
                  '.sv' in e),
              'Invalid priority type found: ' +
                (void 0 === e ? 'undefined' : d(e))
            ),
            'object' === (void 0 === t ? 'undefined' : d(t)) &&
              '.value' in t &&
              null !== t['.value'] &&
              (t = t['.value']),
            'object' !== (void 0 === t ? 'undefined' : d(t)) || '.sv' in t)
          ) {
            var n = t;
            return new o.a(n, r(e));
          }
          if (t instanceof Array || !f) {
            var _ = i.a.EMPTY_NODE,
              y = t;
            return (
              Object(s.f)(y, function(t, e) {
                if (Object(s.b)(y, t) && '.' !== t.substring(0, 1)) {
                  var n = r(e);
                  (!n.isLeafNode() && n.isEmpty()) ||
                    (_ = _.updateImmediateChild(t, n));
                }
              }),
              _.updatePriority(r(e))
            );
          }
          var v = [],
            g = !1,
            m = t;
          if (
            (Object(s.f)(m, function(t, e) {
              if ('string' != typeof t || '.' !== t.substring(0, 1)) {
                var n = r(m[t]);
                n.isEmpty() ||
                  ((g = g || !n.getPriority().isEmpty()),
                  v.push(new a.a(t, n)));
              }
            }),
            0 == v.length)
          )
            return i.a.EMPTY_NODE;
          var b = Object(u.a)(
            v,
            h.b,
            function(t) {
              return t.name;
            },
            h.a
          );
          if (g) {
            var C = Object(u.a)(v, p.a.getCompare());
            return new i.a(
              b,
              r(e),
              new l.a({ '.priority': C }, { '.priority': p.a })
            );
          }
          return new i.a(b, r(e), l.a.Default);
        }
        e.a = r;
        var i = n(6),
          o = n(21),
          a = n(7),
          s = n(2),
          c = n(0),
          u = n(43),
          h = n(44),
          l = n(42),
          p = n(5),
          d =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          f = !0;
        Object(p.c)(r);
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return r;
        });
        var r = { NODE_CLIENT: !1, NODE_ADMIN: !1, SDK_VERSION: '4.5.0' };
      },
      function(t, e, n) {
        'use strict';
        var r = n(8),
          i = (function() {
            function t(t) {
              (this.tt = t), (this.et = 'firebase:');
            }
            return (
              (t.prototype.set = function(t, e) {
                null == e
                  ? this.tt.removeItem(this.nt(t))
                  : this.tt.setItem(this.nt(t), Object(r.b)(e));
              }),
              (t.prototype.get = function(t) {
                var e = this.tt.getItem(this.nt(t));
                return null == e ? null : Object(r.a)(e);
              }),
              (t.prototype.remove = function(t) {
                this.tt.removeItem(this.nt(t));
              }),
              (t.prototype.nt = function(t) {
                return this.et + t;
              }),
              (t.prototype.toString = function() {
                return '' + this.tt;
              }),
              t
            );
          })(),
          o = n(2),
          a = (function() {
            function t() {
              (this.rt = {}), (this.isInMemoryStorage = !0);
            }
            return (
              (t.prototype.set = function(t, e) {
                null == e ? delete this.rt[t] : (this.rt[t] = e);
              }),
              (t.prototype.get = function(t) {
                return Object(o.b)(this.rt, t) ? this.rt[t] : null;
              }),
              (t.prototype.remove = function(t) {
                delete this.rt[t];
              }),
              t
            );
          })();
        n.d(e, 'a', function() {
          return c;
        }),
          n.d(e, 'b', function() {
            return u;
          });
        var s = function(t) {
            try {
              if ('undefined' != typeof window && void 0 !== window[t]) {
                var e = window[t];
                return (
                  e.setItem('firebase:sentinel', 'cache'),
                  e.removeItem('firebase:sentinel'),
                  new i(e)
                );
              }
            } catch (t) {}
            return new a();
          },
          c = s('localStorage'),
          u = s('sessionStorage');
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'e', function() {
          return r;
        }),
          n.d(e, 'h', function() {
            return i;
          }),
          n.d(e, 'g', function() {
            return o;
          }),
          n.d(e, 'f', function() {
            return a;
          }),
          n.d(e, 'b', function() {
            return s;
          }),
          n.d(e, 'a', function() {
            return c;
          }),
          n.d(e, 'c', function() {
            return u;
          }),
          n.d(e, 'i', function() {
            return h;
          }),
          n.d(e, 'd', function() {
            return l;
          });
        var r = '5',
          i = 'v',
          o = 's',
          a = 'r',
          s = 'f',
          c = 'firebaseio.com',
          u = 'ls',
          h = 'websocket',
          l = 'long_polling';
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return o;
        });
        var r = n(7),
          i = n(1),
          o = (function() {
            function t() {}
            return (
              (t.prototype.getCompare = function() {
                return this.compare.bind(this);
              }),
              (t.prototype.indexedValueChanged = function(t, e) {
                var n = new r.a(i.c, t),
                  o = new r.a(i.c, e);
                return 0 !== this.compare(n, o);
              }),
              (t.prototype.minPost = function() {
                return r.a.MIN;
              }),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return c;
        });
        var r,
          i = n(0),
          o = n(1),
          a = n(40),
          s =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          c = (function() {
            function t(e, n) {
              void 0 === n && (n = t.__childrenNodeConstructor.EMPTY_NODE),
                (this.it = e),
                (this.G = n),
                (this.$ = null),
                Object(i.a)(
                  void 0 !== this.it && null !== this.it,
                  "LeafNode shouldn't be created with null/undefined value."
                ),
                Object(a.c)(this.G);
            }
            return (
              Object.defineProperty(t, '__childrenNodeConstructor', {
                get: function() {
                  return r;
                },
                set: function(t) {
                  r = t;
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.isLeafNode = function() {
                return !0;
              }),
              (t.prototype.getPriority = function() {
                return this.G;
              }),
              (t.prototype.updatePriority = function(e) {
                return new t(this.it, e);
              }),
              (t.prototype.getImmediateChild = function(e) {
                return '.priority' === e
                  ? this.G
                  : t.__childrenNodeConstructor.EMPTY_NODE;
              }),
              (t.prototype.getChild = function(e) {
                return e.isEmpty()
                  ? this
                  : '.priority' === e.getFront()
                    ? this.G
                    : t.__childrenNodeConstructor.EMPTY_NODE;
              }),
              (t.prototype.hasChild = function() {
                return !1;
              }),
              (t.prototype.getPredecessorChildName = function(t, e) {
                return null;
              }),
              (t.prototype.updateImmediateChild = function(e, n) {
                return '.priority' === e
                  ? this.updatePriority(n)
                  : n.isEmpty() && '.priority' !== e
                    ? this
                    : t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                        e,
                        n
                      ).updatePriority(this.G);
              }),
              (t.prototype.updateChild = function(e, n) {
                var r = e.getFront();
                return null === r
                  ? n
                  : n.isEmpty() && '.priority' !== r
                    ? this
                    : (Object(i.a)(
                        '.priority' !== r || 1 === e.getLength(),
                        '.priority must be the last token in a path'
                      ),
                      this.updateImmediateChild(
                        r,
                        t.__childrenNodeConstructor.EMPTY_NODE.updateChild(
                          e.popFront(),
                          n
                        )
                      ));
              }),
              (t.prototype.isEmpty = function() {
                return !1;
              }),
              (t.prototype.numChildren = function() {
                return 0;
              }),
              (t.prototype.forEachChild = function(t, e) {
                return !1;
              }),
              (t.prototype.val = function(t) {
                return t && !this.getPriority().isEmpty()
                  ? {
                      '.value': this.getValue(),
                      '.priority': this.getPriority().val()
                    }
                  : this.getValue();
              }),
              (t.prototype.hash = function() {
                if (null === this.$) {
                  var t = '';
                  this.G.isEmpty() ||
                    (t += 'priority:' + Object(a.a)(this.G.val()) + ':');
                  var e = s(this.it);
                  (t += e + ':'),
                    (t += 'number' === e ? Object(o.h)(this.it) : this.it),
                    (this.$ = Object(o.y)(t));
                }
                return this.$;
              }),
              (t.prototype.getValue = function() {
                return this.it;
              }),
              (t.prototype.compareTo = function(e) {
                return e === t.__childrenNodeConstructor.EMPTY_NODE
                  ? 1
                  : e instanceof t.__childrenNodeConstructor
                    ? -1
                    : (Object(i.a)(e.isLeafNode(), 'Unknown node type'),
                      this.ot(e));
              }),
              (t.prototype.ot = function(e) {
                var n = s(e.it),
                  r = s(this.it),
                  o = t.VALUE_TYPE_ORDER.indexOf(n),
                  a = t.VALUE_TYPE_ORDER.indexOf(r);
                return (
                  Object(i.a)(o >= 0, 'Unknown leaf type: ' + n),
                  Object(i.a)(a >= 0, 'Unknown leaf type: ' + r),
                  o === a
                    ? 'object' === r
                      ? 0
                      : this.it < e.it
                        ? -1
                        : this.it === e.it
                          ? 0
                          : 1
                    : a - o
                );
              }),
              (t.prototype.withIndex = function() {
                return this;
              }),
              (t.prototype.isIndexed = function() {
                return !0;
              }),
              (t.prototype.equals = function(t) {
                if (t === this) return !0;
                if (t.isLeafNode()) {
                  var e = t;
                  return this.it === e.it && this.G.equals(e.G);
                }
                return !1;
              }),
              (t.VALUE_TYPE_ORDER = ['object', 'boolean', 'number', 'string']),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return i;
        }),
          n.d(e, 'b', function() {
            return a;
          });
        var r = (function() {
            function t(t, e, n, r, i) {
              void 0 === i && (i = null),
                (this.st = r),
                (this.ct = i),
                (this.ut = []);
              for (var o = 1; !t.isEmpty(); )
                if (((t = t), (o = e ? n(t.key, e) : 1), r && (o *= -1), o < 0))
                  t = this.st ? t.left : t.right;
                else {
                  if (0 === o) {
                    this.ut.push(t);
                    break;
                  }
                  this.ut.push(t), (t = this.st ? t.right : t.left);
                }
            }
            return (
              (t.prototype.getNext = function() {
                if (0 === this.ut.length) return null;
                var t,
                  e = this.ut.pop();
                if (
                  ((t = this.ct
                    ? this.ct(e.key, e.value)
                    : { key: e.key, value: e.value }),
                  this.st)
                )
                  for (e = e.left; !e.isEmpty(); )
                    this.ut.push(e), (e = e.right);
                else
                  for (e = e.right; !e.isEmpty(); )
                    this.ut.push(e), (e = e.left);
                return t;
              }),
              (t.prototype.hasNext = function() {
                return this.ut.length > 0;
              }),
              (t.prototype.peek = function() {
                if (0 === this.ut.length) return null;
                var t = this.ut[this.ut.length - 1];
                return this.ct
                  ? this.ct(t.key, t.value)
                  : { key: t.key, value: t.value };
              }),
              t
            );
          })(),
          i = (function() {
            function t(e, n, r, i, o) {
              (this.key = e),
                (this.value = n),
                (this.color = null != r ? r : t.RED),
                (this.left = null != i ? i : a.EMPTY_NODE),
                (this.right = null != o ? o : a.EMPTY_NODE);
            }
            return (
              (t.prototype.copy = function(e, n, r, i, o) {
                return new t(
                  null != e ? e : this.key,
                  null != n ? n : this.value,
                  null != r ? r : this.color,
                  null != i ? i : this.left,
                  null != o ? o : this.right
                );
              }),
              (t.prototype.count = function() {
                return this.left.count() + 1 + this.right.count();
              }),
              (t.prototype.isEmpty = function() {
                return !1;
              }),
              (t.prototype.inorderTraversal = function(t) {
                return (
                  this.left.inorderTraversal(t) ||
                  t(this.key, this.value) ||
                  this.right.inorderTraversal(t)
                );
              }),
              (t.prototype.reverseTraversal = function(t) {
                return (
                  this.right.reverseTraversal(t) ||
                  t(this.key, this.value) ||
                  this.left.reverseTraversal(t)
                );
              }),
              (t.prototype.ht = function() {
                return this.left.isEmpty() ? this : this.left.ht();
              }),
              (t.prototype.minKey = function() {
                return this.ht().key;
              }),
              (t.prototype.maxKey = function() {
                return this.right.isEmpty() ? this.key : this.right.maxKey();
              }),
              (t.prototype.insert = function(t, e, n) {
                var r, i;
                return (
                  (i = this),
                  (r = n(t, i.key)),
                  (i =
                    r < 0
                      ? i.copy(null, null, null, i.left.insert(t, e, n), null)
                      : 0 === r
                        ? i.copy(null, e, null, null, null)
                        : i.copy(
                            null,
                            null,
                            null,
                            null,
                            i.right.insert(t, e, n)
                          )),
                  i.lt()
                );
              }),
              (t.prototype.pt = function() {
                if (this.left.isEmpty()) return a.EMPTY_NODE;
                var t = this;
                return (
                  t.left.dt() || t.left.left.dt() || (t = t.ft()),
                  (t = t.copy(null, null, null, t.left.pt(), null)),
                  t.lt()
                );
              }),
              (t.prototype.remove = function(t, e) {
                var n, r;
                if (((n = this), e(t, n.key) < 0))
                  n.left.isEmpty() ||
                    n.left.dt() ||
                    n.left.left.dt() ||
                    (n = n.ft()),
                    (n = n.copy(null, null, null, n.left.remove(t, e), null));
                else {
                  if (
                    (n.left.dt() && (n = n._t()),
                    n.right.isEmpty() ||
                      n.right.dt() ||
                      n.right.left.dt() ||
                      (n = n.yt()),
                    0 === e(t, n.key))
                  ) {
                    if (n.right.isEmpty()) return a.EMPTY_NODE;
                    (r = n.right.ht()),
                      (n = n.copy(r.key, r.value, null, null, n.right.pt()));
                  }
                  n = n.copy(null, null, null, null, n.right.remove(t, e));
                }
                return n.lt();
              }),
              (t.prototype.dt = function() {
                return this.color;
              }),
              (t.prototype.lt = function() {
                var t = this;
                return (
                  t.right.dt() && !t.left.dt() && (t = t.vt()),
                  t.left.dt() && t.left.left.dt() && (t = t._t()),
                  t.left.dt() && t.right.dt() && (t = t.gt()),
                  t
                );
              }),
              (t.prototype.ft = function() {
                var t = this.gt();
                return (
                  t.right.left.dt() &&
                    ((t = t.copy(null, null, null, null, t.right._t())),
                    (t = t.vt()),
                    (t = t.gt())),
                  t
                );
              }),
              (t.prototype.yt = function() {
                var t = this.gt();
                return t.left.left.dt() && ((t = t._t()), (t = t.gt())), t;
              }),
              (t.prototype.vt = function() {
                var e = this.copy(null, null, t.RED, null, this.right.left);
                return this.right.copy(null, null, this.color, e, null);
              }),
              (t.prototype._t = function() {
                var e = this.copy(null, null, t.RED, this.left.right, null);
                return this.left.copy(null, null, this.color, null, e);
              }),
              (t.prototype.gt = function() {
                var t = this.left.copy(
                    null,
                    null,
                    !this.left.color,
                    null,
                    null
                  ),
                  e = this.right.copy(
                    null,
                    null,
                    !this.right.color,
                    null,
                    null
                  );
                return this.copy(null, null, !this.color, t, e);
              }),
              (t.prototype.mt = function() {
                var t = this.bt();
                return Math.pow(2, t) <= this.count() + 1;
              }),
              (t.prototype.bt = function() {
                var t;
                if (this.dt() && this.left.dt())
                  throw Error(
                    'Red node has red child(' +
                      this.key +
                      ',' +
                      this.value +
                      ')'
                  );
                if (this.right.dt())
                  throw Error(
                    'Right child of (' +
                      this.key +
                      ',' +
                      this.value +
                      ') is red'
                  );
                if ((t = this.left.bt()) !== this.right.bt())
                  throw Error('Black depths differ');
                return t + (this.dt() ? 0 : 1);
              }),
              (t.RED = !0),
              (t.BLACK = !1),
              t
            );
          })(),
          o = (function() {
            function t() {}
            return (
              (t.prototype.copy = function(t, e, n, r, i) {
                return this;
              }),
              (t.prototype.insert = function(t, e, n) {
                return new i(t, e, null);
              }),
              (t.prototype.remove = function(t, e) {
                return this;
              }),
              (t.prototype.count = function() {
                return 0;
              }),
              (t.prototype.isEmpty = function() {
                return !0;
              }),
              (t.prototype.inorderTraversal = function(t) {
                return !1;
              }),
              (t.prototype.reverseTraversal = function(t) {
                return !1;
              }),
              (t.prototype.minKey = function() {
                return null;
              }),
              (t.prototype.maxKey = function() {
                return null;
              }),
              (t.prototype.bt = function() {
                return 0;
              }),
              (t.prototype.dt = function() {
                return !1;
              }),
              t
            );
          })(),
          a = (function() {
            function t(e, n) {
              void 0 === n && (n = t.EMPTY_NODE), (this.Ct = e), (this.Et = n);
            }
            return (
              (t.prototype.insert = function(e, n) {
                return new t(
                  this.Ct,
                  this.Et.insert(e, n, this.Ct).copy(
                    null,
                    null,
                    i.BLACK,
                    null,
                    null
                  )
                );
              }),
              (t.prototype.remove = function(e) {
                return new t(
                  this.Ct,
                  this.Et.remove(e, this.Ct).copy(
                    null,
                    null,
                    i.BLACK,
                    null,
                    null
                  )
                );
              }),
              (t.prototype.get = function(t) {
                for (var e, n = this.Et; !n.isEmpty(); ) {
                  if (0 === (e = this.Ct(t, n.key))) return n.value;
                  e < 0 ? (n = n.left) : e > 0 && (n = n.right);
                }
                return null;
              }),
              (t.prototype.getPredecessorKey = function(t) {
                for (var e, n = this.Et, r = null; !n.isEmpty(); ) {
                  if (0 === (e = this.Ct(t, n.key))) {
                    if (n.left.isEmpty()) return r ? r.key : null;
                    for (n = n.left; !n.right.isEmpty(); ) n = n.right;
                    return n.key;
                  }
                  e < 0 ? (n = n.left) : e > 0 && ((r = n), (n = n.right));
                }
                throw Error(
                  'Attempted to find predecessor key for a nonexistent key.  What gives?'
                );
              }),
              (t.prototype.isEmpty = function() {
                return this.Et.isEmpty();
              }),
              (t.prototype.count = function() {
                return this.Et.count();
              }),
              (t.prototype.minKey = function() {
                return this.Et.minKey();
              }),
              (t.prototype.maxKey = function() {
                return this.Et.maxKey();
              }),
              (t.prototype.inorderTraversal = function(t) {
                return this.Et.inorderTraversal(t);
              }),
              (t.prototype.reverseTraversal = function(t) {
                return this.Et.reverseTraversal(t);
              }),
              (t.prototype.getIterator = function(t) {
                return new r(this.Et, null, this.Ct, !1, t);
              }),
              (t.prototype.getIteratorFrom = function(t, e) {
                return new r(this.Et, t, this.Ct, !1, e);
              }),
              (t.prototype.getReverseIteratorFrom = function(t, e) {
                return new r(this.Et, t, this.Ct, !0, e);
              }),
              (t.prototype.getReverseIterator = function(t) {
                return new r(this.Et, null, this.Ct, !0, t);
              }),
              (t.EMPTY_NODE = new o()),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        var r = n(47),
          i = n(16),
          o = n(4),
          a = n(48),
          s = n(0),
          c = n(1),
          u = n(12),
          h = (function() {
            function t(t, e, n) {
              (this.path = t),
                (this.affectedTree = e),
                (this.revert = n),
                (this.type = u.b.ACK_USER_WRITE),
                (this.source = u.a.User);
            }
            return (
              (t.prototype.operationForChild = function(e) {
                if (this.path.isEmpty()) {
                  if (null != this.affectedTree.value)
                    return (
                      Object(s.a)(
                        this.affectedTree.children.isEmpty(),
                        'affectedTree should not have overlapping affected paths.'
                      ),
                      this
                    );
                  var n = this.affectedTree.subtree(new o.a(e));
                  return new t(o.a.Empty, n, this.revert);
                }
                return (
                  Object(s.a)(
                    this.path.getFront() === e,
                    'operationForChild called for unrelated child.'
                  ),
                  new t(this.path.popFront(), this.affectedTree, this.revert)
                );
              }),
              t
            );
          })(),
          l = n(6),
          p = n(2),
          d = n(27),
          f = (function() {
            function t(t, e) {
              (this.source = t),
                (this.path = e),
                (this.type = u.b.LISTEN_COMPLETE);
            }
            return (
              (t.prototype.operationForChild = function(e) {
                return this.path.isEmpty()
                  ? new t(this.source, o.a.Empty)
                  : new t(this.source, this.path.popFront());
              }),
              t
            );
          })(),
          _ = (function() {
            function t(t, e, n) {
              (this.source = t),
                (this.path = e),
                (this.snap = n),
                (this.type = u.b.OVERWRITE);
            }
            return (
              (t.prototype.operationForChild = function(e) {
                return this.path.isEmpty()
                  ? new t(
                      this.source,
                      o.a.Empty,
                      this.snap.getImmediateChild(e)
                    )
                  : new t(this.source, this.path.popFront(), this.snap);
              }),
              t
            );
          })(),
          y = (function() {
            function t(t, e, n) {
              (this.source = t),
                (this.path = e),
                (this.children = n),
                (this.type = u.b.MERGE);
            }
            return (
              (t.prototype.operationForChild = function(e) {
                if (this.path.isEmpty()) {
                  var n = this.children.subtree(new o.a(e));
                  return n.isEmpty()
                    ? null
                    : n.value
                      ? new _(this.source, o.a.Empty, n.value)
                      : new t(this.source, o.a.Empty, n);
                }
                return (
                  Object(s.a)(
                    this.path.getFront() === e,
                    "Can't get a merge for a child not on the path of the operation"
                  ),
                  new t(this.source, this.path.popFront(), this.children)
                );
              }),
              (t.prototype.toString = function() {
                return (
                  'Operation(' +
                  this.path +
                  ': ' +
                  this.source +
                  ' merge: ' +
                  this.children +
                  ')'
                );
              }),
              t
            );
          })(),
          v = n(50),
          g = n(7),
          m = n(5),
          b = (function() {
            function t(t) {
              this.Ot = t;
            }
            return (
              (t.prototype.addWrite = function(e, n) {
                if (e.isEmpty()) return new t(new d.a(n));
                var r = this.Ot.findRootMostValueAndPath(e);
                if (null != r) {
                  var i = r.path,
                    a = r.value,
                    s = o.a.relativePath(i, e);
                  return (a = a.updateChild(s, n)), new t(this.Ot.set(i, a));
                }
                var c = new d.a(n);
                return new t(this.Ot.setTree(e, c));
              }),
              (t.prototype.addWrites = function(t, e) {
                var n = this;
                return (
                  Object(p.f)(e, function(e, r) {
                    n = n.addWrite(t.child(e), r);
                  }),
                  n
                );
              }),
              (t.prototype.removeWrite = function(e) {
                return e.isEmpty()
                  ? t.Empty
                  : new t(this.Ot.setTree(e, d.a.Empty));
              }),
              (t.prototype.hasCompleteWrite = function(t) {
                return null != this.getCompleteNode(t);
              }),
              (t.prototype.getCompleteNode = function(t) {
                var e = this.Ot.findRootMostValueAndPath(t);
                return null != e
                  ? this.Ot.get(e.path).getChild(o.a.relativePath(e.path, t))
                  : null;
              }),
              (t.prototype.getCompleteChildren = function() {
                var t = [],
                  e = this.Ot.value;
                return (
                  null != e
                    ? e.isLeafNode() ||
                      e.forEachChild(m.a, function(e, n) {
                        t.push(new g.a(e, n));
                      })
                    : this.Ot.children.inorderTraversal(function(e, n) {
                        null != n.value && t.push(new g.a(e, n.value));
                      }),
                  t
                );
              }),
              (t.prototype.childCompoundWrite = function(e) {
                if (e.isEmpty()) return this;
                var n = this.getCompleteNode(e);
                return new t(null != n ? new d.a(n) : this.Ot.subtree(e));
              }),
              (t.prototype.isEmpty = function() {
                return this.Ot.isEmpty();
              }),
              (t.prototype.apply = function(e) {
                return t.wt(o.a.Empty, this.Ot, e);
              }),
              (t.Empty = new t(new d.a(null))),
              (t.wt = function(e, n, r) {
                if (null != n.value) return r.updateChild(e, n.value);
                var i = null;
                return (
                  n.children.inorderTraversal(function(n, o) {
                    '.priority' === n
                      ? (Object(s.a)(
                          null !== o.value,
                          'Priority writes must always be leaf nodes'
                        ),
                        (i = o.value))
                      : (r = t.wt(e.child(n), o, r));
                  }),
                  r.getChild(e).isEmpty() ||
                    null === i ||
                    (r = r.updateChild(e.child('.priority'), i)),
                  r
                );
              }),
              t
            );
          })(),
          C = (function() {
            function t() {
              (this.St = b.Empty), (this.Tt = []), (this.jt = -1);
            }
            return (
              (t.prototype.childWrites = function(t) {
                return new E(t, this);
              }),
              (t.prototype.addOverwrite = function(t, e, n, r) {
                Object(s.a)(
                  n > this.jt,
                  'Stacking an older write on top of newer ones'
                ),
                  void 0 === r && (r = !0),
                  this.Tt.push({ path: t, snap: e, writeId: n, visible: r }),
                  r && (this.St = this.St.addWrite(t, e)),
                  (this.jt = n);
              }),
              (t.prototype.addMerge = function(t, e, n) {
                Object(s.a)(
                  n > this.jt,
                  'Stacking an older merge on top of newer ones'
                ),
                  this.Tt.push({
                    path: t,
                    children: e,
                    writeId: n,
                    visible: !0
                  }),
                  (this.St = this.St.addWrites(t, e)),
                  (this.jt = n);
              }),
              (t.prototype.getWrite = function(t) {
                for (var e = 0; e < this.Tt.length; e++) {
                  var n = this.Tt[e];
                  if (n.writeId === t) return n;
                }
                return null;
              }),
              (t.prototype.removeWrite = function(t) {
                var e = this,
                  n = this.Tt.findIndex(function(e) {
                    return e.writeId === t;
                  });
                Object(s.a)(
                  n >= 0,
                  'removeWrite called with nonexistent writeId.'
                );
                var r = this.Tt[n];
                this.Tt.splice(n, 1);
                for (
                  var i = r.visible, o = !1, a = this.Tt.length - 1;
                  i && a >= 0;

                ) {
                  var c = this.Tt[a];
                  c.visible &&
                    (a >= n && this.Nt(c, r.path)
                      ? (i = !1)
                      : r.path.contains(c.path) && (o = !0)),
                    a--;
                }
                if (i) {
                  if (o) return this.It(), !0;
                  if (r.snap) this.St = this.St.removeWrite(r.path);
                  else {
                    var u = r.children;
                    Object(p.f)(u, function(t) {
                      e.St = e.St.removeWrite(r.path.child(t));
                    });
                  }
                  return !0;
                }
                return !1;
              }),
              (t.prototype.getCompleteWriteData = function(t) {
                return this.St.getCompleteNode(t);
              }),
              (t.prototype.calcCompleteEventCache = function(e, n, r, i) {
                if (r || i) {
                  var a = this.St.childCompoundWrite(e);
                  if (!i && a.isEmpty()) return n;
                  if (i || null != n || a.hasCompleteWrite(o.a.Empty)) {
                    var s = function(t) {
                        return (
                          (t.visible || i) &&
                          (!r || !~r.indexOf(t.writeId)) &&
                          (t.path.contains(e) || e.contains(t.path))
                        );
                      },
                      c = t.Pt(this.Tt, s, e),
                      u = n || l.a.EMPTY_NODE;
                    return c.apply(u);
                  }
                  return null;
                }
                var h = this.St.getCompleteNode(e);
                if (null != h) return h;
                var p = this.St.childCompoundWrite(e);
                if (p.isEmpty()) return n;
                if (null != n || p.hasCompleteWrite(o.a.Empty)) {
                  var u = n || l.a.EMPTY_NODE;
                  return p.apply(u);
                }
                return null;
              }),
              (t.prototype.calcCompleteEventChildren = function(t, e) {
                var n = l.a.EMPTY_NODE,
                  r = this.St.getCompleteNode(t);
                if (r)
                  return (
                    r.isLeafNode() ||
                      r.forEachChild(m.a, function(t, e) {
                        n = n.updateImmediateChild(t, e);
                      }),
                    n
                  );
                if (e) {
                  var i = this.St.childCompoundWrite(t);
                  return (
                    e.forEachChild(m.a, function(t, e) {
                      var r = i.childCompoundWrite(new o.a(t)).apply(e);
                      n = n.updateImmediateChild(t, r);
                    }),
                    i.getCompleteChildren().forEach(function(t) {
                      n = n.updateImmediateChild(t.name, t.node);
                    }),
                    n
                  );
                }
                return (
                  this.St.childCompoundWrite(t)
                    .getCompleteChildren()
                    .forEach(function(t) {
                      n = n.updateImmediateChild(t.name, t.node);
                    }),
                  n
                );
              }),
              (t.prototype.calcEventCacheAfterServerOverwrite = function(
                t,
                e,
                n,
                r
              ) {
                Object(s.a)(
                  n || r,
                  'Either existingEventSnap or existingServerSnap must exist'
                );
                var i = t.child(e);
                if (this.St.hasCompleteWrite(i)) return null;
                var o = this.St.childCompoundWrite(i);
                return o.isEmpty() ? r.getChild(e) : o.apply(r.getChild(e));
              }),
              (t.prototype.calcCompleteChild = function(t, e, n) {
                var r = t.child(e),
                  i = this.St.getCompleteNode(r);
                return null != i
                  ? i
                  : n.isCompleteForChild(e)
                    ? this.St.childCompoundWrite(r).apply(
                        n.getNode().getImmediateChild(e)
                      )
                    : null;
              }),
              (t.prototype.shadowingWrite = function(t) {
                return this.St.getCompleteNode(t);
              }),
              (t.prototype.calcIndexedSlice = function(t, e, n, r, i, a) {
                var s,
                  c = this.St.childCompoundWrite(t),
                  u = c.getCompleteNode(o.a.Empty);
                if (null != u) s = u;
                else {
                  if (null == e) return [];
                  s = c.apply(e);
                }
                if (((s = s.withIndex(a)), s.isEmpty() || s.isLeafNode()))
                  return [];
                for (
                  var h = [],
                    l = a.getCompare(),
                    p = i
                      ? s.getReverseIteratorFrom(n, a)
                      : s.getIteratorFrom(n, a),
                    d = p.getNext();
                  d && h.length < r;

                )
                  0 !== l(d, n) && h.push(d), (d = p.getNext());
                return h;
              }),
              (t.prototype.Nt = function(t, e) {
                return t.snap
                  ? t.path.contains(e)
                  : !!Object(p.d)(t.children, function(n, r) {
                      return t.path.child(r).contains(e);
                    });
              }),
              (t.prototype.It = function() {
                (this.St = t.Pt(this.Tt, t.Rt, o.a.Empty)),
                  this.Tt.length > 0
                    ? (this.jt = this.Tt[this.Tt.length - 1].writeId)
                    : (this.jt = -1);
              }),
              (t.Rt = function(t) {
                return t.visible;
              }),
              (t.Pt = function(t, e, n) {
                for (var r = b.Empty, i = 0; i < t.length; ++i) {
                  var a = t[i];
                  if (e(a)) {
                    var c = a.path,
                      u = void 0;
                    if (a.snap)
                      n.contains(c)
                        ? ((u = o.a.relativePath(n, c)),
                          (r = r.addWrite(u, a.snap)))
                        : c.contains(n) &&
                          ((u = o.a.relativePath(c, n)),
                          (r = r.addWrite(o.a.Empty, a.snap.getChild(u))));
                    else {
                      if (!a.children)
                        throw Object(s.b)(
                          'WriteRecord should have .snap or .children'
                        );
                      if (n.contains(c))
                        (u = o.a.relativePath(n, c)),
                          (r = r.addWrites(u, a.children));
                      else if (c.contains(n))
                        if (((u = o.a.relativePath(c, n)), u.isEmpty()))
                          r = r.addWrites(o.a.Empty, a.children);
                        else {
                          var h = Object(p.l)(a.children, u.getFront());
                          if (h) {
                            var l = h.getChild(u.popFront());
                            r = r.addWrite(o.a.Empty, l);
                          }
                        }
                    }
                  }
                }
                return r;
              }),
              t
            );
          })(),
          E = (function() {
            function t(t, e) {
              (this.Dt = t), (this.Ot = e);
            }
            return (
              (t.prototype.calcCompleteEventCache = function(t, e, n) {
                return this.Ot.calcCompleteEventCache(this.Dt, t, e, n);
              }),
              (t.prototype.calcCompleteEventChildren = function(t) {
                return this.Ot.calcCompleteEventChildren(this.Dt, t);
              }),
              (t.prototype.calcEventCacheAfterServerOverwrite = function(
                t,
                e,
                n
              ) {
                return this.Ot.calcEventCacheAfterServerOverwrite(
                  this.Dt,
                  t,
                  e,
                  n
                );
              }),
              (t.prototype.shadowingWrite = function(t) {
                return this.Ot.shadowingWrite(this.Dt.child(t));
              }),
              (t.prototype.calcIndexedSlice = function(t, e, n, r, i) {
                return this.Ot.calcIndexedSlice(this.Dt, t, e, n, r, i);
              }),
              (t.prototype.calcCompleteChild = function(t, e) {
                return this.Ot.calcCompleteChild(this.Dt, t, e);
              }),
              (t.prototype.child = function(e) {
                return new t(this.Dt.child(e), this.Ot);
              }),
              t
            );
          })(),
          O = (function() {
            function t(t) {
              (this.xt = t),
                (this.kt = d.a.Empty),
                (this.Ft = new C()),
                (this.At = {}),
                (this.Lt = {});
            }
            return (
              (t.prototype.applyUserOverwrite = function(t, e, n, r) {
                return (
                  this.Ft.addOverwrite(t, e, n, r),
                  r ? this.Mt(new _(u.a.User, t, e)) : []
                );
              }),
              (t.prototype.applyUserMerge = function(t, e, n) {
                this.Ft.addMerge(t, e, n);
                var r = d.a.fromObject(e);
                return this.Mt(new y(u.a.User, t, r));
              }),
              (t.prototype.ackUserWrite = function(t, e) {
                void 0 === e && (e = !1);
                var n = this.Ft.getWrite(t);
                if (this.Ft.removeWrite(t)) {
                  var r = d.a.Empty;
                  return (
                    null != n.snap
                      ? (r = r.set(o.a.Empty, !0))
                      : Object(p.f)(n.children, function(t, e) {
                          r = r.set(new o.a(t), e);
                        }),
                    this.Mt(new h(n.path, r, e))
                  );
                }
                return [];
              }),
              (t.prototype.applyServerOverwrite = function(t, e) {
                return this.Mt(new _(u.a.Server, t, e));
              }),
              (t.prototype.applyServerMerge = function(t, e) {
                var n = d.a.fromObject(e);
                return this.Mt(new y(u.a.Server, t, n));
              }),
              (t.prototype.applyListenComplete = function(t) {
                return this.Mt(new f(u.a.Server, t));
              }),
              (t.prototype.applyTaggedQueryOverwrite = function(e, n, r) {
                var i = this.Wt(r);
                if (null != i) {
                  var a = t.qt(i),
                    s = a.path,
                    c = a.queryId,
                    h = o.a.relativePath(s, e),
                    l = new _(u.a.forServerTaggedQuery(c), h, n);
                  return this.Qt(s, l);
                }
                return [];
              }),
              (t.prototype.applyTaggedQueryMerge = function(e, n, r) {
                var i = this.Wt(r);
                if (i) {
                  var a = t.qt(i),
                    s = a.path,
                    c = a.queryId,
                    h = o.a.relativePath(s, e),
                    l = d.a.fromObject(n),
                    p = new y(u.a.forServerTaggedQuery(c), h, l);
                  return this.Qt(s, p);
                }
                return [];
              }),
              (t.prototype.applyTaggedListenComplete = function(e, n) {
                var r = this.Wt(n);
                if (r) {
                  var i = t.qt(r),
                    a = i.path,
                    s = i.queryId,
                    c = o.a.relativePath(a, e),
                    h = new f(u.a.forServerTaggedQuery(s), c);
                  return this.Qt(a, h);
                }
                return [];
              }),
              (t.prototype.addEventRegistration = function(e, n) {
                var r = e.path,
                  i = null,
                  a = !1;
                this.kt.foreachOnPath(r, function(t, e) {
                  var n = o.a.relativePath(t, r);
                  (i = i || e.getCompleteServerCache(n)),
                    (a = a || e.hasCompleteView());
                });
                var c = this.kt.get(r);
                c
                  ? ((a = a || c.hasCompleteView()),
                    (i = i || c.getCompleteServerCache(o.a.Empty)))
                  : ((c = new v.a()), (this.kt = this.kt.set(r, c)));
                var u;
                null != i
                  ? (u = !0)
                  : ((u = !1),
                    (i = l.a.EMPTY_NODE),
                    this.kt.subtree(r).foreachChild(function(t, e) {
                      var n = e.getCompleteServerCache(o.a.Empty);
                      n && (i = i.updateImmediateChild(t, n));
                    }));
                var h = c.viewExistsForQuery(e);
                if (!h && !e.getQueryParams().loadsAllData()) {
                  var p = t.Ut(e);
                  Object(s.a)(
                    !(p in this.Lt),
                    'View does not exist, but we have a tag'
                  );
                  var d = t.Vt();
                  (this.Lt[p] = d), (this.At['_' + d] = p);
                }
                var f = this.Ft.childWrites(r),
                  _ = c.addEventRegistration(e, n, f, i, u);
                if (!h && !a) {
                  var y = c.viewForQuery(e);
                  _ = _.concat(this.Bt(e, y));
                }
                return _;
              }),
              (t.prototype.removeEventRegistration = function(e, n, r) {
                var i = this,
                  o = e.path,
                  a = this.kt.get(o),
                  s = [];
                if (
                  a &&
                  ('default' === e.queryIdentifier() || a.viewExistsForQuery(e))
                ) {
                  var c = a.removeEventRegistration(e, n, r);
                  a.isEmpty() && (this.kt = this.kt.remove(o));
                  var u = c.removed;
                  s = c.events;
                  var h =
                      -1 !==
                      u.findIndex(function(t) {
                        return t.getQueryParams().loadsAllData();
                      }),
                    l = this.kt.findOnPath(o, function(t, e) {
                      return e.hasCompleteView();
                    });
                  if (h && !l) {
                    var p = this.kt.subtree(o);
                    if (!p.isEmpty())
                      for (var d = this.Ht(p), f = 0; f < d.length; ++f) {
                        var _ = d[f],
                          y = _.getQuery(),
                          v = this.Kt(_);
                        this.xt.startListening(
                          t.Yt(y),
                          this.zt(y),
                          v.hashFn,
                          v.onComplete
                        );
                      }
                  }
                  !l &&
                    u.length > 0 &&
                    !r &&
                    (h
                      ? this.xt.stopListening(t.Yt(e), null)
                      : u.forEach(function(e) {
                          var n = i.Lt[t.Ut(e)];
                          i.xt.stopListening(t.Yt(e), n);
                        })),
                    this.Gt(u);
                }
                return s;
              }),
              (t.prototype.calcCompleteEventCache = function(t, e) {
                var n = this.Ft,
                  r = this.kt.findOnPath(t, function(e, n) {
                    var r = o.a.relativePath(e, t),
                      i = n.getCompleteServerCache(r);
                    if (i) return i;
                  });
                return n.calcCompleteEventCache(t, r, e, !0);
              }),
              (t.prototype.Ht = function(t) {
                return t.fold(function(t, e, n) {
                  if (e && e.hasCompleteView()) return [e.getCompleteView()];
                  var r = [];
                  return (
                    e && (r = e.getQueryViews()),
                    Object(p.f)(n, function(t, e) {
                      r = r.concat(e);
                    }),
                    r
                  );
                });
              }),
              (t.prototype.Gt = function(e) {
                for (var n = 0; n < e.length; ++n) {
                  var r = e[n];
                  if (!r.getQueryParams().loadsAllData()) {
                    var i = t.Ut(r),
                      o = this.Lt[i];
                    delete this.Lt[i], delete this.At['_' + o];
                  }
                }
              }),
              (t.Yt = function(t) {
                return t.getQueryParams().loadsAllData() &&
                  !t.getQueryParams().isDefault()
                  ? t.getRef()
                  : t;
              }),
              (t.prototype.Bt = function(e, n) {
                var r = e.path,
                  i = this.zt(e),
                  o = this.Kt(n),
                  a = this.xt.startListening(
                    t.Yt(e),
                    i,
                    o.hashFn,
                    o.onComplete
                  ),
                  c = this.kt.subtree(r);
                if (i)
                  Object(s.a)(
                    !c.value.hasCompleteView(),
                    "If we're adding a query, it shouldn't be shadowed"
                  );
                else
                  for (
                    var u = c.fold(function(t, e, n) {
                        if (!t.isEmpty() && e && e.hasCompleteView())
                          return [e.getCompleteView().getQuery()];
                        var r = [];
                        return (
                          e &&
                            (r = r.concat(
                              e.getQueryViews().map(function(t) {
                                return t.getQuery();
                              })
                            )),
                          Object(p.f)(n, function(t, e) {
                            r = r.concat(e);
                          }),
                          r
                        );
                      }),
                      h = 0;
                    h < u.length;
                    ++h
                  ) {
                    var l = u[h];
                    this.xt.stopListening(t.Yt(l), this.zt(l));
                  }
                return a;
              }),
              (t.prototype.Kt = function(t) {
                var e = this,
                  n = t.getQuery(),
                  r = this.zt(n);
                return {
                  hashFn: function() {
                    return (t.getServerCache() || l.a.EMPTY_NODE).hash();
                  },
                  onComplete: function(t) {
                    if ('ok' === t)
                      return r
                        ? e.applyTaggedListenComplete(n.path, r)
                        : e.applyListenComplete(n.path);
                    var i = Object(c.l)(t, n);
                    return e.removeEventRegistration(n, null, i);
                  }
                };
              }),
              (t.Ut = function(t) {
                return t.path + '$' + t.queryIdentifier();
              }),
              (t.qt = function(t) {
                var e = t.indexOf('$');
                return (
                  Object(s.a)(-1 !== e && e < t.length - 1, 'Bad queryKey.'),
                  { queryId: t.substr(e + 1), path: new o.a(t.substr(0, e)) }
                );
              }),
              (t.prototype.Wt = function(t) {
                return this.At['_' + t];
              }),
              (t.prototype.zt = function(e) {
                var n = t.Ut(e);
                return Object(p.l)(this.Lt, n);
              }),
              (t.Vt = function() {
                return t.Xt++;
              }),
              (t.prototype.Qt = function(t, e) {
                var n = this.kt.get(t);
                Object(s.a)(
                  n,
                  "Missing sync point for query tag that we're tracking"
                );
                var r = this.Ft.childWrites(t);
                return n.applyOperation(e, r, null);
              }),
              (t.prototype.Mt = function(t) {
                return this.$t(
                  t,
                  this.kt,
                  null,
                  this.Ft.childWrites(o.a.Empty)
                );
              }),
              (t.prototype.$t = function(t, e, n, r) {
                if (t.path.isEmpty()) return this.Jt(t, e, n, r);
                var i = e.get(o.a.Empty);
                null == n &&
                  null != i &&
                  (n = i.getCompleteServerCache(o.a.Empty));
                var a = [],
                  s = t.path.getFront(),
                  c = t.operationForChild(s),
                  u = e.children.get(s);
                if (u && c) {
                  var h = n ? n.getImmediateChild(s) : null,
                    l = r.child(s);
                  a = a.concat(this.$t(c, u, h, l));
                }
                return i && (a = a.concat(i.applyOperation(t, r, n))), a;
              }),
              (t.prototype.Jt = function(t, e, n, r) {
                var i = this,
                  a = e.get(o.a.Empty);
                null == n &&
                  null != a &&
                  (n = a.getCompleteServerCache(o.a.Empty));
                var s = [];
                return (
                  e.children.inorderTraversal(function(e, o) {
                    var a = n ? n.getImmediateChild(e) : null,
                      c = r.child(e),
                      u = t.operationForChild(e);
                    u && (s = s.concat(i.Jt(u, o, a, c)));
                  }),
                  a && (s = s.concat(a.applyOperation(t, r, n))),
                  s
                );
              }),
              (t.Xt = 1),
              t
            );
          })(),
          w = (function() {
            function t() {
              this.Zt = l.a.EMPTY_NODE;
            }
            return (
              (t.prototype.getNode = function(t) {
                return this.Zt.getChild(t);
              }),
              (t.prototype.updateSnapshot = function(t, e) {
                this.Zt = this.Zt.updateChild(t, e);
              }),
              t
            );
          })(),
          S = n(8),
          T = (function() {
            function t(t) {
              this.te = t;
            }
            return (
              (t.prototype.getToken = function(t) {
                return this.te.INTERNAL.getToken(t).then(null, function(t) {
                  return t && 'auth/token-not-initialized' === t.code
                    ? (Object(c.s)(
                        'Got auth/token-not-initialized error.  Treating as null token.'
                      ),
                      null)
                    : Promise.reject(t);
                });
              }),
              (t.prototype.addTokenChangeListener = function(t) {
                this.te.INTERNAL.addAuthTokenListener(t);
              }),
              (t.prototype.removeTokenChangeListener = function(t) {
                this.te.INTERNAL.removeAuthTokenListener(t);
              }),
              (t.prototype.notifyForInvalidToken = function() {
                var t =
                  'Provided authentication credentials for the app named "' +
                  this.te.name +
                  '" are invalid. This usually indicates your app was not initialized correctly. ';
                'credential' in this.te.options
                  ? (t +=
                      'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                  : 'serviceAccount' in this.te.options
                    ? (t +=
                        'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                    : (t +=
                        'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
                  Object(c.B)(t);
              }),
              t
            );
          })(),
          j = n(29),
          N = (function() {
            function t(t) {
              (this.ee = t), (this.ne = null);
            }
            return (
              (t.prototype.get = function() {
                var t = this.ee.get(),
                  e = Object(p.a)(t);
                return (
                  this.ne &&
                    Object(p.f)(this.ne, function(t, n) {
                      e[t] = e[t] - n;
                    }),
                  (this.ne = t),
                  e
                );
              }),
              t
            );
          })(),
          I = 1e4,
          P = 3e4,
          R = (function() {
            function t(t, e) {
              (this.re = e), (this.ie = {}), (this.oe = new N(t));
              var n = I + (P - I) * Math.random();
              Object(c.x)(this.ae.bind(this), Math.floor(n));
            }
            return (
              (t.prototype.includeStat = function(t) {
                this.ie[t] = !0;
              }),
              (t.prototype.ae = function() {
                var t = this,
                  e = this.oe.get(),
                  n = {},
                  r = !1;
                Object(p.f)(e, function(e, i) {
                  i > 0 && Object(p.b)(t.ie, e) && ((n[e] = i), (r = !0));
                }),
                  r && this.re.reportStats(n),
                  Object(c.x)(
                    this.ae.bind(this),
                    Math.floor(2 * Math.random() * 3e5)
                  );
              }),
              t
            );
          })(),
          D = (function() {
            function t() {
              (this.se = []), (this.ce = 0);
            }
            return (
              (t.prototype.queueEvents = function(t) {
                for (var e = null, n = 0; n < t.length; n++) {
                  var r = t[n],
                    i = r.getPath();
                  null === e ||
                    i.equals(e.getPath()) ||
                    (this.se.push(e), (e = null)),
                    null === e && (e = new x(i)),
                    e.add(r);
                }
                e && this.se.push(e);
              }),
              (t.prototype.raiseEventsAtPath = function(t, e) {
                this.queueEvents(e),
                  this.ue(function(e) {
                    return e.equals(t);
                  });
              }),
              (t.prototype.raiseEventsForChangedPath = function(t, e) {
                this.queueEvents(e),
                  this.ue(function(e) {
                    return e.contains(t) || t.contains(e);
                  });
              }),
              (t.prototype.ue = function(t) {
                this.ce++;
                for (var e = !0, n = 0; n < this.se.length; n++) {
                  var r = this.se[n];
                  r &&
                    (t(r.getPath())
                      ? (this.se[n].raise(), (this.se[n] = null))
                      : (e = !1));
                }
                e && (this.se = []), this.ce--;
              }),
              t
            );
          })(),
          x = (function() {
            function t(t) {
              (this.he = t), (this.le = []);
            }
            return (
              (t.prototype.add = function(t) {
                this.le.push(t);
              }),
              (t.prototype.raise = function() {
                for (var t = 0; t < this.le.length; t++) {
                  var e = this.le[t];
                  if (null !== e) {
                    this.le[t] = null;
                    var n = e.getEventRunner();
                    c.u && Object(c.s)('event: ' + e), Object(c.m)(n);
                  }
                }
              }),
              (t.prototype.getPath = function() {
                return this.he;
              }),
              t
            );
          })(),
          k = n(51),
          F = function(t) {
            var e = [];
            return (
              Object(p.f)(t, function(t, n) {
                Array.isArray(n)
                  ? n.forEach(function(n) {
                      e.push(
                        encodeURIComponent(t) + '=' + encodeURIComponent(n)
                      );
                    })
                  : e.push(encodeURIComponent(t) + '=' + encodeURIComponent(n));
              }),
              e.length ? '&' + e.join('&') : ''
            );
          },
          A = n(55),
          L =
            (this && this.__extends) ||
            (function() {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(t, e) {
                    t.__proto__ = e;
                  }) ||
                function(t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
              return function(e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          M = (function(t) {
            function e(e, n, r) {
              var i = t.call(this) || this;
              return (
                (i.pe = e),
                (i.de = n),
                (i.fe = r),
                (i._e = Object(c.t)('p:rest:')),
                (i.ye = {}),
                i
              );
            }
            return (
              L(e, t),
              (e.prototype.reportStats = function(t) {
                throw Error('Method not implemented.');
              }),
              (e.ve = function(t, e) {
                return void 0 !== e
                  ? 'tag$' + e
                  : (Object(s.a)(
                      t.getQueryParams().isDefault(),
                      "should have a tag if it's not a default query."
                    ),
                    '' + t.path);
              }),
              (e.prototype.listen = function(t, n, r, i) {
                var o = this,
                  a = '' + t.path;
                this._e('Listen called for ' + a + ' ' + t.queryIdentifier());
                var s = e.ve(t, r),
                  c = {};
                this.ye[s] = c;
                var u = t.getQueryParams().toRestQueryStringParameters();
                this.ge(a + '.json', u, function(t, e) {
                  var n = e;
                  if (
                    (404 === t && ((n = null), (t = null)),
                    null === t && o.de(a, n, !1, r),
                    Object(p.l)(o.ye, s) === c)
                  ) {
                    var u;
                    (u = t
                      ? 401 == t
                        ? 'permission_denied'
                        : 'rest_error:' + t
                      : 'ok'),
                      i(u, null);
                  }
                });
              }),
              (e.prototype.unlisten = function(t, n) {
                var r = e.ve(t, n);
                delete this.ye[r];
              }),
              (e.prototype.refreshAuthToken = function(t) {}),
              (e.prototype.ge = function(t, e, n) {
                var r = this;
                void 0 === e && (e = {}),
                  (e.format = 'export'),
                  this.fe.getToken(!1).then(function(i) {
                    var o = i && i.accessToken;
                    o && (e.auth = o);
                    var a =
                      (r.pe.secure ? 'https://' : 'http://') +
                      r.pe.host +
                      t +
                      '?' +
                      F(e);
                    r._e('Sending REST request for ' + a);
                    var s = new XMLHttpRequest();
                    (s.onreadystatechange = function() {
                      if (n && 4 === s.readyState) {
                        r._e(
                          'REST Response for ' + a + ' received. status:',
                          s.status,
                          'response:',
                          s.responseText
                        );
                        var t = null;
                        if (s.status >= 200 && s.status < 300) {
                          try {
                            t = Object(S.a)(s.responseText);
                          } catch (t) {
                            Object(c.B)(
                              'Failed to parse JSON response for ' +
                                a +
                                ': ' +
                                s.responseText
                            );
                          }
                          n(null, t);
                        } else
                          401 !== s.status &&
                            404 !== s.status &&
                            Object(c.B)(
                              'Got unsuccessful REST response for ' +
                                a +
                                ' Status: ' +
                                s.status
                            ),
                            n(s.status);
                        n = null;
                      }
                    }),
                      s.open('GET', a, !0),
                      s.send();
                  });
              }),
              e
            );
          })(A.a),
          W = n(36);
        n.d(e, 'a', function() {
          return Q;
        });
        var q =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          Q = (function() {
            function t(t, e, n) {
              var r = this;
              (this.pe = t),
                (this.app = n),
                (this.dataUpdateCount = 0),
                (this.oe = null),
                (this.me = new D()),
                (this.be = 1),
                (this.Ce = null),
                (this.Ee = new a.a()),
                (this.Oe = null);
              var i = new T(n);
              if (((this.we = j.a.getCollection(t)), e || Object(c.g)()))
                (this.re = new M(this.pe, this.de.bind(this), i)),
                  setTimeout(this.Se.bind(this, !0), 0);
              else {
                var o = n.options.databaseAuthVariableOverride;
                if (void 0 !== o && null !== o) {
                  if ('object' !== (void 0 === o ? 'undefined' : q(o)))
                    throw Error(
                      'Only objects are supported for option databaseAuthVariableOverride'
                    );
                  try {
                    Object(S.b)(o);
                  } catch (t) {
                    throw Error('Invalid authOverride provided: ' + t);
                  }
                }
                (this.Oe = new k.a(
                  this.pe,
                  this.de.bind(this),
                  this.Se.bind(this),
                  this.Te.bind(this),
                  i,
                  o
                )),
                  (this.re = this.Oe);
              }
              i.addTokenChangeListener(function(t) {
                r.re.refreshAuthToken(t);
              }),
                (this.je = j.a.getOrCreateReporter(t, function() {
                  return new R(r.we, r.re);
                })),
                this.Ne(),
                (this.Ie = new w()),
                (this.Pe = new O({
                  startListening: function(t, e, n, i) {
                    var o = [],
                      a = r.Ie.getNode(t.path);
                    return (
                      a.isEmpty() ||
                        ((o = r.Pe.applyServerOverwrite(t.path, a)),
                        setTimeout(function() {
                          i('ok');
                        }, 0)),
                      o
                    );
                  },
                  stopListening: function() {}
                })),
                this.Re('connected', !1),
                (this.De = new O({
                  startListening: function(t, e, n, i) {
                    return (
                      r.re.listen(t, n, e, function(e, n) {
                        var o = i(e, n);
                        r.me.raiseEventsForChangedPath(t.path, o);
                      }),
                      []
                    );
                  },
                  stopListening: function(t, e) {
                    r.re.unlisten(t, e);
                  }
                }));
            }
            return (
              (t.prototype.toString = function() {
                return (this.pe.secure ? 'https://' : 'http://') + this.pe.host;
              }),
              (t.prototype.name = function() {
                return this.pe.namespace;
              }),
              (t.prototype.serverTime = function() {
                var t = this.Ie.getNode(new o.a('.info/serverTimeOffset')),
                  e = t.val() || 0;
                return new Date().getTime() + e;
              }),
              (t.prototype.generateServerValues = function() {
                return Object(r.a)({ timestamp: this.serverTime() });
              }),
              (t.prototype.de = function(t, e, n, r) {
                this.dataUpdateCount++;
                var a = new o.a(t);
                e = this.Ce ? this.Ce(t, e) : e;
                var s = [];
                if (r)
                  if (n) {
                    var c = Object(p.k)(e, function(t) {
                      return Object(i.a)(t);
                    });
                    s = this.De.applyTaggedQueryMerge(a, c, r);
                  } else {
                    var u = Object(i.a)(e);
                    s = this.De.applyTaggedQueryOverwrite(a, u, r);
                  }
                else if (n) {
                  var h = Object(p.k)(e, function(t) {
                    return Object(i.a)(t);
                  });
                  s = this.De.applyServerMerge(a, h);
                } else {
                  var l = Object(i.a)(e);
                  s = this.De.applyServerOverwrite(a, l);
                }
                var d = a;
                s.length > 0 && (d = this.xe(a)),
                  this.me.raiseEventsForChangedPath(d, s);
              }),
              (t.prototype.ke = function(t) {
                this.Ce = t;
              }),
              (t.prototype.Se = function(t) {
                this.Re('connected', t), !1 === t && this.Fe();
              }),
              (t.prototype.Te = function(t) {
                var e = this;
                Object(c.i)(t, function(t, n) {
                  e.Re(n, t);
                });
              }),
              (t.prototype.Re = function(t, e) {
                var n = new o.a('/.info/' + t),
                  r = Object(i.a)(e);
                this.Ie.updateSnapshot(n, r);
                var a = this.Pe.applyServerOverwrite(n, r);
                this.me.raiseEventsForChangedPath(n, a);
              }),
              (t.prototype.Ae = function() {
                return this.be++;
              }),
              (t.prototype.setWithPriority = function(t, e, n, o) {
                var a = this;
                this._e('set', { path: '' + t, value: e, priority: n });
                var s = this.generateServerValues(),
                  u = Object(i.a)(e, n),
                  h = Object(r.b)(u, s),
                  l = this.Ae(),
                  p = this.De.applyUserOverwrite(t, h, l, !0);
                this.me.queueEvents(p),
                  this.re.put('' + t, u.val(!0), function(e, n) {
                    var r = 'ok' === e;
                    r || Object(c.B)('set at ' + t + ' failed: ' + e);
                    var i = a.De.ackUserWrite(l, !r);
                    a.me.raiseEventsForChangedPath(t, i),
                      a.callOnCompleteCallback(o, e, n);
                  });
                var d = this.Le(t);
                this.xe(d), this.me.raiseEventsForChangedPath(d, []);
              }),
              (t.prototype.update = function(t, e, n) {
                var o = this;
                this._e('update', { path: '' + t, value: e });
                var a = !0,
                  s = this.generateServerValues(),
                  u = {};
                if (
                  (Object(p.f)(e, function(t, e) {
                    a = !1;
                    var n = Object(i.a)(e);
                    u[t] = Object(r.b)(n, s);
                  }),
                  a)
                )
                  Object(c.s)(
                    "update() called with empty data.  Don't do anything."
                  ),
                    this.callOnCompleteCallback(n, 'ok');
                else {
                  var h = this.Ae(),
                    l = this.De.applyUserMerge(t, u, h);
                  this.me.queueEvents(l),
                    this.re.merge('' + t, e, function(e, r) {
                      var i = 'ok' === e;
                      i || Object(c.B)('update at ' + t + ' failed: ' + e);
                      var a = o.De.ackUserWrite(h, !i),
                        s = a.length > 0 ? o.xe(t) : t;
                      o.me.raiseEventsForChangedPath(s, a),
                        o.callOnCompleteCallback(n, e, r);
                    }),
                    Object(p.f)(e, function(e) {
                      var n = o.Le(t.child(e));
                      o.xe(n);
                    }),
                    this.me.raiseEventsForChangedPath(t, []);
                }
              }),
              (t.prototype.Fe = function() {
                var t = this;
                this._e('onDisconnectEvents');
                var e = this.generateServerValues(),
                  n = Object(r.c)(this.Ee, e),
                  i = [];
                n.forEachTree(o.a.Empty, function(e, n) {
                  i = i.concat(t.De.applyServerOverwrite(e, n));
                  var r = t.Le(e);
                  t.xe(r);
                }),
                  (this.Ee = new a.a()),
                  this.me.raiseEventsForChangedPath(o.a.Empty, i);
              }),
              (t.prototype.onDisconnectCancel = function(t, e) {
                var n = this;
                this.re.onDisconnectCancel('' + t, function(r, i) {
                  'ok' === r && n.Ee.forget(t),
                    n.callOnCompleteCallback(e, r, i);
                });
              }),
              (t.prototype.onDisconnectSet = function(t, e, n) {
                var r = this,
                  o = Object(i.a)(e);
                this.re.onDisconnectPut('' + t, o.val(!0), function(e, i) {
                  'ok' === e && r.Ee.remember(t, o),
                    r.callOnCompleteCallback(n, e, i);
                });
              }),
              (t.prototype.onDisconnectSetWithPriority = function(t, e, n, r) {
                var o = this,
                  a = Object(i.a)(e, n);
                this.re.onDisconnectPut('' + t, a.val(!0), function(e, n) {
                  'ok' === e && o.Ee.remember(t, a),
                    o.callOnCompleteCallback(r, e, n);
                });
              }),
              (t.prototype.onDisconnectUpdate = function(t, e, n) {
                var r = this;
                if (Object(p.j)(e))
                  return (
                    Object(c.s)(
                      "onDisconnect().update() called with empty data.  Don't do anything."
                    ),
                    void this.callOnCompleteCallback(n, 'ok')
                  );
                this.re.onDisconnectMerge('' + t, e, function(o, a) {
                  'ok' === o &&
                    Object(p.f)(e, function(e, n) {
                      var o = Object(i.a)(n);
                      r.Ee.remember(t.child(e), o);
                    }),
                    r.callOnCompleteCallback(n, o, a);
                });
              }),
              (t.prototype.addEventCallbackForQuery = function(t, e) {
                var n;
                (n =
                  '.info' === t.path.getFront()
                    ? this.Pe.addEventRegistration(t, e)
                    : this.De.addEventRegistration(t, e)),
                  this.me.raiseEventsAtPath(t.path, n);
              }),
              (t.prototype.removeEventCallbackForQuery = function(t, e) {
                var n;
                (n =
                  '.info' === t.path.getFront()
                    ? this.Pe.removeEventRegistration(t, e)
                    : this.De.removeEventRegistration(t, e)),
                  this.me.raiseEventsAtPath(t.path, n);
              }),
              (t.prototype.interrupt = function() {
                this.Oe && this.Oe.interrupt('repo_interrupt');
              }),
              (t.prototype.resume = function() {
                this.Oe && this.Oe.resume('repo_interrupt');
              }),
              (t.prototype.stats = function(t) {
                if ((void 0 === t && (t = !1), 'undefined' != typeof console)) {
                  var e;
                  t
                    ? (this.oe || (this.oe = new N(this.we)),
                      (e = this.oe.get()))
                    : (e = this.we.get());
                  var n = Object.keys(e).reduce(function(t, e) {
                    return Math.max(e.length, t);
                  }, 0);
                  Object(p.f)(e, function(t, e) {
                    for (var r = t.length; r < n + 2; r++) t += ' ';
                    console.log(t + e);
                  });
                }
              }),
              (t.prototype.statsIncrementCounter = function(t) {
                this.we.incrementCounter(t), this.je.includeStat(t);
              }),
              (t.prototype._e = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                var n = '';
                this.Oe && (n = this.Oe.id + ':'),
                  c.s.apply(void 0, [n].concat(t));
              }),
              (t.prototype.callOnCompleteCallback = function(t, e, n) {
                t &&
                  Object(c.m)(function() {
                    if ('ok' == e) t(null);
                    else {
                      var r = (e || 'error').toUpperCase(),
                        i = r;
                      n && (i += ': ' + n);
                      var o = Error(i);
                      (o.code = r), t(o);
                    }
                  });
              }),
              Object.defineProperty(t.prototype, 'database', {
                get: function() {
                  return this.__database || (this.__database = new W.a(this));
                },
                enumerable: !0,
                configurable: !0
              }),
              t
            );
          })();
      },
      ,
      function(t, e, n) {
        'use strict';
        n.d(e, 'b', function() {
          return i;
        }),
          n.d(e, 'a', function() {
            return o;
          });
        var r = n(0),
          i = function(t) {
            for (var e = [], n = 0, i = 0; i < t.length; i++) {
              var o = t.charCodeAt(i);
              if (o >= 55296 && o <= 56319) {
                var a = o - 55296;
                i++,
                  Object(r.a)(
                    i < t.length,
                    'Surrogate pair missing trail surrogate.'
                  ),
                  (o = 65536 + (a << 10) + (t.charCodeAt(i) - 56320));
              }
              o < 128
                ? (e[n++] = o)
                : o < 2048
                  ? ((e[n++] = (o >> 6) | 192), (e[n++] = (63 & o) | 128))
                  : o < 65536
                    ? ((e[n++] = (o >> 12) | 224),
                      (e[n++] = ((o >> 6) & 63) | 128),
                      (e[n++] = (63 & o) | 128))
                    : ((e[n++] = (o >> 18) | 240),
                      (e[n++] = ((o >> 12) & 63) | 128),
                      (e[n++] = ((o >> 6) & 63) | 128),
                      (e[n++] = (63 & o) | 128));
            }
            return e;
          },
          o = function(t) {
            for (var e = 0, n = 0; n < t.length; n++) {
              var r = t.charCodeAt(n);
              r < 128
                ? e++
                : r < 2048
                  ? (e += 2)
                  : r >= 55296 && r <= 56319
                    ? ((e += 4), n++)
                    : (e += 3);
            }
            return e;
          };
      },
      function(t, e, n) {
        'use strict';
        var r = n(10),
          i = n(11),
          o = n(1),
          a = n(3),
          s = (function() {
            function t(t, e) {
              (this.Me = t), (this.he = e);
            }
            return (
              (t.prototype.cancel = function(t) {
                Object(r.b)('OnDisconnect.cancel', 0, 1, arguments.length),
                  Object(r.c)('OnDisconnect.cancel', 1, t, !0);
                var e = new a.a();
                return (
                  this.Me.onDisconnectCancel(this.he, e.wrapCallback(t)),
                  e.promise
                );
              }),
              (t.prototype.remove = function(t) {
                Object(r.b)('OnDisconnect.remove', 0, 1, arguments.length),
                  Object(i.l)('OnDisconnect.remove', this.he),
                  Object(r.c)('OnDisconnect.remove', 1, t, !0);
                var e = new a.a();
                return (
                  this.Me.onDisconnectSet(this.he, null, e.wrapCallback(t)),
                  e.promise
                );
              }),
              (t.prototype.set = function(t, e) {
                Object(r.b)('OnDisconnect.set', 1, 2, arguments.length),
                  Object(i.l)('OnDisconnect.set', this.he),
                  Object(i.e)('OnDisconnect.set', 1, t, this.he, !1),
                  Object(r.c)('OnDisconnect.set', 2, e, !0);
                var n = new a.a();
                return (
                  this.Me.onDisconnectSet(this.he, t, n.wrapCallback(e)),
                  n.promise
                );
              }),
              (t.prototype.setWithPriority = function(t, e, n) {
                Object(r.b)(
                  'OnDisconnect.setWithPriority',
                  2,
                  3,
                  arguments.length
                ),
                  Object(i.l)('OnDisconnect.setWithPriority', this.he),
                  Object(i.e)(
                    'OnDisconnect.setWithPriority',
                    1,
                    t,
                    this.he,
                    !1
                  ),
                  Object(i.i)('OnDisconnect.setWithPriority', 2, e, !1),
                  Object(r.c)('OnDisconnect.setWithPriority', 3, n, !0);
                var o = new a.a();
                return (
                  this.Me.onDisconnectSetWithPriority(
                    this.he,
                    t,
                    e,
                    o.wrapCallback(n)
                  ),
                  o.promise
                );
              }),
              (t.prototype.update = function(t, e) {
                if (
                  (Object(r.b)('OnDisconnect.update', 1, 2, arguments.length),
                  Object(i.l)('OnDisconnect.update', this.he),
                  Array.isArray(t))
                ) {
                  for (var n = {}, s = 0; s < t.length; ++s) n['' + s] = t[s];
                  (t = n),
                    Object(o.B)(
                      'Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.'
                    );
                }
                Object(i.f)('OnDisconnect.update', 1, t, this.he, !1),
                  Object(r.c)('OnDisconnect.update', 2, e, !0);
                var c = new a.a();
                return (
                  this.Me.onDisconnectUpdate(this.he, t, c.wrapCallback(e)),
                  c.promise
                );
              }),
              t
            );
          })(),
          c = (function() {
            function t(t, e) {
              (this.committed = t), (this.snapshot = e);
            }
            return (
              (t.prototype.toJSON = function() {
                return (
                  Object(r.b)(
                    'TransactionResult.toJSON',
                    0,
                    1,
                    arguments.length
                  ),
                  {
                    committed: this.committed,
                    snapshot: this.snapshot.toJSON()
                  }
                );
              }),
              t
            );
          })(),
          u = n(0),
          h = (function() {
            var t =
                '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
              e = 0,
              n = [];
            return function(r) {
              var i = r === e;
              e = r;
              var o,
                a = Array(8);
              for (o = 7; o >= 0; o--)
                (a[o] = t.charAt(r % 64)), (r = Math.floor(r / 64));
              Object(u.a)(0 === r, 'Cannot push at time == 0');
              var s = a.join('');
              if (i) {
                for (o = 11; o >= 0 && 63 === n[o]; o--) n[o] = 0;
                n[o]++;
              } else
                for (o = 0; o < 12; o++) n[o] = Math.floor(64 * Math.random());
              for (o = 0; o < 12; o++) s += t.charAt(n[o]);
              return (
                Object(u.a)(
                  20 === s.length,
                  'nextPushId: Length should be 20.'
                ),
                s
              );
            };
          })(),
          l = n(39),
          p = n(23),
          d = n(4),
          f = n(15),
          _ = n(5),
          y = n(41),
          v = n(45),
          g = n(28),
          m = n(7),
          b = n(6),
          C = (function() {
            function t(e) {
              (this.We = new g.a(e.getIndex())),
                (this.qe = e.getIndex()),
                (this.Qe = t.Ue(e)),
                (this.Ve = t.Be(e));
            }
            return (
              (t.prototype.getStartPost = function() {
                return this.Qe;
              }),
              (t.prototype.getEndPost = function() {
                return this.Ve;
              }),
              (t.prototype.matches = function(t) {
                return (
                  this.qe.compare(this.getStartPost(), t) <= 0 &&
                  this.qe.compare(t, this.getEndPost()) <= 0
                );
              }),
              (t.prototype.updateChild = function(t, e, n, r, i, o) {
                return (
                  this.matches(new m.a(e, n)) || (n = b.a.EMPTY_NODE),
                  this.We.updateChild(t, e, n, r, i, o)
                );
              }),
              (t.prototype.updateFullNode = function(t, e, n) {
                e.isLeafNode() && (e = b.a.EMPTY_NODE);
                var r = e.withIndex(this.qe);
                r = r.updatePriority(b.a.EMPTY_NODE);
                var i = this;
                return (
                  e.forEachChild(_.a, function(t, e) {
                    i.matches(new m.a(t, e)) ||
                      (r = r.updateImmediateChild(t, b.a.EMPTY_NODE));
                  }),
                  this.We.updateFullNode(t, r, n)
                );
              }),
              (t.prototype.updatePriority = function(t, e) {
                return t;
              }),
              (t.prototype.filtersNodes = function() {
                return !0;
              }),
              (t.prototype.getIndexedFilter = function() {
                return this.We;
              }),
              (t.prototype.getIndex = function() {
                return this.qe;
              }),
              (t.Ue = function(t) {
                if (t.hasStart()) {
                  var e = t.getIndexStartName();
                  return t.getIndex().makePost(t.getIndexStartValue(), e);
                }
                return t.getIndex().minPost();
              }),
              (t.Be = function(t) {
                if (t.hasEnd()) {
                  var e = t.getIndexEndName();
                  return t.getIndex().makePost(t.getIndexEndValue(), e);
                }
                return t.getIndex().maxPost();
              }),
              t
            );
          })(),
          E = n(14),
          O = (function() {
            function t(t) {
              (this.He = new C(t)),
                (this.qe = t.getIndex()),
                (this.Ke = t.getLimit()),
                (this.Ye = !t.isViewFromLeft());
            }
            return (
              (t.prototype.updateChild = function(t, e, n, r, i, o) {
                return (
                  this.He.matches(new m.a(e, n)) || (n = b.a.EMPTY_NODE),
                  t.getImmediateChild(e).equals(n)
                    ? t
                    : t.numChildren() < this.Ke
                      ? this.He.getIndexedFilter().updateChild(t, e, n, r, i, o)
                      : this.ze(t, e, n, i, o)
                );
              }),
              (t.prototype.updateFullNode = function(t, e, n) {
                var r;
                if (e.isLeafNode() || e.isEmpty())
                  r = b.a.EMPTY_NODE.withIndex(this.qe);
                else if (
                  2 * this.Ke < e.numChildren() &&
                  e.isIndexed(this.qe)
                ) {
                  r = b.a.EMPTY_NODE.withIndex(this.qe);
                  var i = void 0;
                  i = this.Ye
                    ? e.getReverseIteratorFrom(this.He.getEndPost(), this.qe)
                    : e.getIteratorFrom(this.He.getStartPost(), this.qe);
                  for (var o = 0; i.hasNext() && o < this.Ke; ) {
                    var a = i.getNext(),
                      s = void 0;
                    if (
                      !(s = this.Ye
                        ? this.qe.compare(this.He.getStartPost(), a) <= 0
                        : this.qe.compare(a, this.He.getEndPost()) <= 0)
                    )
                      break;
                    (r = r.updateImmediateChild(a.name, a.node)), o++;
                  }
                } else {
                  (r = e.withIndex(this.qe)),
                    (r = r.updatePriority(b.a.EMPTY_NODE));
                  var c = void 0,
                    u = void 0,
                    h = void 0,
                    i = void 0;
                  if (this.Ye) {
                    (i = r.getReverseIterator(this.qe)),
                      (c = this.He.getEndPost()),
                      (u = this.He.getStartPost());
                    var l = this.qe.getCompare();
                    h = function(t, e) {
                      return l(e, t);
                    };
                  } else
                    (i = r.getIterator(this.qe)),
                      (c = this.He.getStartPost()),
                      (u = this.He.getEndPost()),
                      (h = this.qe.getCompare());
                  for (var o = 0, p = !1; i.hasNext(); ) {
                    var a = i.getNext();
                    !p && h(c, a) <= 0 && (p = !0);
                    var s = p && o < this.Ke && h(a, u) <= 0;
                    s
                      ? o++
                      : (r = r.updateImmediateChild(a.name, b.a.EMPTY_NODE));
                  }
                }
                return this.He.getIndexedFilter().updateFullNode(t, r, n);
              }),
              (t.prototype.updatePriority = function(t, e) {
                return t;
              }),
              (t.prototype.filtersNodes = function() {
                return !0;
              }),
              (t.prototype.getIndexedFilter = function() {
                return this.He.getIndexedFilter();
              }),
              (t.prototype.getIndex = function() {
                return this.qe;
              }),
              (t.prototype.ze = function(t, e, n, r, i) {
                var o;
                if (this.Ye) {
                  var a = this.qe.getCompare();
                  o = function(t, e) {
                    return a(e, t);
                  };
                } else o = this.qe.getCompare();
                var s = t;
                Object(u.a)(s.numChildren() == this.Ke, '');
                var c = new m.a(e, n),
                  h = this.Ye
                    ? s.getFirstChild(this.qe)
                    : s.getLastChild(this.qe),
                  l = this.He.matches(c);
                if (s.hasChild(e)) {
                  for (
                    var p = s.getImmediateChild(e),
                      d = r.getChildAfterChild(this.qe, h, this.Ye);
                    null != d && (d.name == e || s.hasChild(d.name));

                  )
                    d = r.getChildAfterChild(this.qe, d, this.Ye);
                  var f = null == d ? 1 : o(d, c);
                  if (l && !n.isEmpty() && f >= 0)
                    return (
                      null != i &&
                        i.trackChildChange(E.a.childChangedChange(e, n, p)),
                      s.updateImmediateChild(e, n)
                    );
                  null != i && i.trackChildChange(E.a.childRemovedChange(e, p));
                  var _ = s.updateImmediateChild(e, b.a.EMPTY_NODE);
                  return null != d && this.He.matches(d)
                    ? (null != i &&
                        i.trackChildChange(
                          E.a.childAddedChange(d.name, d.node)
                        ),
                      _.updateImmediateChild(d.name, d.node))
                    : _;
                }
                return n.isEmpty()
                  ? t
                  : l && o(h, c) >= 0
                    ? (null != i &&
                        (i.trackChildChange(
                          E.a.childRemovedChange(h.name, h.node)
                        ),
                        i.trackChildChange(E.a.childAddedChange(e, n))),
                      s
                        .updateImmediateChild(e, n)
                        .updateImmediateChild(h.name, b.a.EMPTY_NODE))
                    : t;
              }),
              t
            );
          })(),
          w = n(8),
          S = (function() {
            function t() {
              (this.Ge = !1),
                (this.Xe = !1),
                (this.$e = !1),
                (this.Je = !1),
                (this.Ze = !1),
                (this.Ke = 0),
                (this.tn = ''),
                (this.en = null),
                (this.nn = ''),
                (this.rn = null),
                (this.in = ''),
                (this.qe = _.a);
            }
            return (
              (t.prototype.hasStart = function() {
                return this.Xe;
              }),
              (t.prototype.isViewFromLeft = function() {
                return '' === this.tn
                  ? this.Xe
                  : this.tn === t.an.VIEW_FROM_LEFT;
              }),
              (t.prototype.getIndexStartValue = function() {
                return (
                  Object(u.a)(this.Xe, 'Only valid if start has been set'),
                  this.en
                );
              }),
              (t.prototype.getIndexStartName = function() {
                return (
                  Object(u.a)(this.Xe, 'Only valid if start has been set'),
                  this.$e ? this.nn : o.c
                );
              }),
              (t.prototype.hasEnd = function() {
                return this.Je;
              }),
              (t.prototype.getIndexEndValue = function() {
                return (
                  Object(u.a)(this.Je, 'Only valid if end has been set'),
                  this.rn
                );
              }),
              (t.prototype.getIndexEndName = function() {
                return (
                  Object(u.a)(this.Je, 'Only valid if end has been set'),
                  this.Ze ? this.in : o.b
                );
              }),
              (t.prototype.hasLimit = function() {
                return this.Ge;
              }),
              (t.prototype.hasAnchoredLimit = function() {
                return this.Ge && '' !== this.tn;
              }),
              (t.prototype.getLimit = function() {
                return (
                  Object(u.a)(this.Ge, 'Only valid if limit has been set'),
                  this.Ke
                );
              }),
              (t.prototype.getIndex = function() {
                return this.qe;
              }),
              (t.prototype.sn = function() {
                var e = new t();
                return (
                  (e.Ge = this.Ge),
                  (e.Ke = this.Ke),
                  (e.Xe = this.Xe),
                  (e.en = this.en),
                  (e.$e = this.$e),
                  (e.nn = this.nn),
                  (e.Je = this.Je),
                  (e.rn = this.rn),
                  (e.Ze = this.Ze),
                  (e.in = this.in),
                  (e.qe = this.qe),
                  (e.tn = this.tn),
                  e
                );
              }),
              (t.prototype.limit = function(t) {
                var e = this.sn();
                return (e.Ge = !0), (e.Ke = t), (e.tn = ''), e;
              }),
              (t.prototype.limitToFirst = function(e) {
                var n = this.sn();
                return (n.Ge = !0), (n.Ke = e), (n.tn = t.an.VIEW_FROM_LEFT), n;
              }),
              (t.prototype.limitToLast = function(e) {
                var n = this.sn();
                return (
                  (n.Ge = !0), (n.Ke = e), (n.tn = t.an.VIEW_FROM_RIGHT), n
                );
              }),
              (t.prototype.startAt = function(t, e) {
                var n = this.sn();
                return (
                  (n.Xe = !0),
                  void 0 === t && (t = null),
                  (n.en = t),
                  null != e
                    ? ((n.$e = !0), (n.nn = e))
                    : ((n.$e = !1), (n.nn = '')),
                  n
                );
              }),
              (t.prototype.endAt = function(t, e) {
                var n = this.sn();
                return (
                  (n.Je = !0),
                  void 0 === t && (t = null),
                  (n.rn = t),
                  void 0 !== e
                    ? ((n.Ze = !0), (n.in = e))
                    : ((n.Ze = !1), (n.in = '')),
                  n
                );
              }),
              (t.prototype.orderBy = function(t) {
                var e = this.sn();
                return (e.qe = t), e;
              }),
              (t.prototype.getQueryObject = function() {
                var e = t.an,
                  n = {};
                if (
                  (this.Xe &&
                    ((n[e.INDEX_START_VALUE] = this.en),
                    this.$e && (n[e.INDEX_START_NAME] = this.nn)),
                  this.Je &&
                    ((n[e.INDEX_END_VALUE] = this.rn),
                    this.Ze && (n[e.INDEX_END_NAME] = this.in)),
                  this.Ge)
                ) {
                  n[e.LIMIT] = this.Ke;
                  var r = this.tn;
                  '' === r &&
                    (r = this.isViewFromLeft()
                      ? e.VIEW_FROM_LEFT
                      : e.VIEW_FROM_RIGHT),
                    (n[e.VIEW_FROM] = r);
                }
                return this.qe !== _.a && (n[e.INDEX] = '' + this.qe), n;
              }),
              (t.prototype.loadsAllData = function() {
                return !(this.Xe || this.Je || this.Ge);
              }),
              (t.prototype.isDefault = function() {
                return this.loadsAllData() && this.qe == _.a;
              }),
              (t.prototype.getNodeFilter = function() {
                return this.loadsAllData()
                  ? new g.a(this.getIndex())
                  : this.hasLimit()
                    ? new O(this)
                    : new C(this);
              }),
              (t.prototype.toRestQueryStringParameters = function() {
                var e = t.cn,
                  n = {};
                if (this.isDefault()) return n;
                var r;
                return (
                  this.qe === _.a
                    ? (r = e.PRIORITY_INDEX)
                    : this.qe === y.a
                      ? (r = e.VALUE_INDEX)
                      : this.qe === f.a
                        ? (r = e.KEY_INDEX)
                        : (Object(u.a)(
                            this.qe instanceof v.a,
                            'Unrecognized index type!'
                          ),
                          (r = '' + this.qe)),
                  (n[e.ORDER_BY] = Object(w.b)(r)),
                  this.Xe &&
                    ((n[e.START_AT] = Object(w.b)(this.en)),
                    this.$e && (n[e.START_AT] += ',' + Object(w.b)(this.nn))),
                  this.Je &&
                    ((n[e.END_AT] = Object(w.b)(this.rn)),
                    this.Ze && (n[e.END_AT] += ',' + Object(w.b)(this.in))),
                  this.Ge &&
                    (this.isViewFromLeft()
                      ? (n[e.LIMIT_TO_FIRST] = this.Ke)
                      : (n[e.LIMIT_TO_LAST] = this.Ke)),
                  n
                );
              }),
              (t.an = {
                INDEX_START_VALUE: 'sp',
                INDEX_START_NAME: 'sn',
                INDEX_END_VALUE: 'ep',
                INDEX_END_NAME: 'en',
                LIMIT: 'l',
                VIEW_FROM: 'vf',
                VIEW_FROM_LEFT: 'l',
                VIEW_FROM_RIGHT: 'r',
                INDEX: 'i'
              }),
              (t.cn = {
                ORDER_BY: 'orderBy',
                PRIORITY_INDEX: '$priority',
                VALUE_INDEX: '$value',
                KEY_INDEX: '$key',
                START_AT: 'startAt',
                END_AT: 'endAt',
                LIMIT_TO_FIRST: 'limitToFirst',
                LIMIT_TO_LAST: 'limitToLast'
              }),
              (t.DEFAULT = new t()),
              t
            );
          })(),
          T = n(50);
        n.d(e, 'a', function() {
          return N;
        });
        var j =
            (this && this.__extends) ||
            (function() {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(t, e) {
                    t.__proto__ = e;
                  }) ||
                function(t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
              return function(e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          N = (function(t) {
            function e(e, n) {
              if (!(e instanceof p.a))
                throw Error(
                  'new Reference() no longer supported - use app.database().'
                );
              return t.call(this, e, n, S.DEFAULT, !1) || this;
            }
            return (
              j(e, t),
              (e.prototype.getKey = function() {
                return (
                  Object(r.b)('Reference.key', 0, 0, arguments.length),
                  this.path.isEmpty() ? null : this.path.getBack()
                );
              }),
              (e.prototype.child = function(t) {
                return (
                  Object(r.b)('Reference.child', 1, 1, arguments.length),
                  'number' == typeof t
                    ? (t += '')
                    : t instanceof d.a ||
                      (null === this.path.getFront()
                        ? Object(i.j)('Reference.child', 1, t, !1)
                        : Object(i.h)('Reference.child', 1, t, !1)),
                  new e(this.repo, this.path.child(t))
                );
              }),
              (e.prototype.getParent = function() {
                Object(r.b)('Reference.parent', 0, 0, arguments.length);
                var t = this.path.parent();
                return null === t ? null : new e(this.repo, t);
              }),
              (e.prototype.getRoot = function() {
                Object(r.b)('Reference.root', 0, 0, arguments.length);
                for (var t = this; null !== t.getParent(); ) t = t.getParent();
                return t;
              }),
              (e.prototype.databaseProp = function() {
                return this.repo.database;
              }),
              (e.prototype.set = function(t, e) {
                Object(r.b)('Reference.set', 1, 2, arguments.length),
                  Object(i.l)('Reference.set', this.path),
                  Object(i.e)('Reference.set', 1, t, this.path, !1),
                  Object(r.c)('Reference.set', 2, e, !0);
                var n = new a.a();
                return (
                  this.repo.setWithPriority(
                    this.path,
                    t,
                    null,
                    n.wrapCallback(e)
                  ),
                  n.promise
                );
              }),
              (e.prototype.update = function(t, e) {
                if (
                  (Object(r.b)('Reference.update', 1, 2, arguments.length),
                  Object(i.l)('Reference.update', this.path),
                  Array.isArray(t))
                ) {
                  for (var n = {}, s = 0; s < t.length; ++s) n['' + s] = t[s];
                  (t = n),
                    Object(o.B)(
                      'Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.'
                    );
                }
                Object(i.f)('Reference.update', 1, t, this.path, !1),
                  Object(r.c)('Reference.update', 2, e, !0);
                var c = new a.a();
                return (
                  this.repo.update(this.path, t, c.wrapCallback(e)), c.promise
                );
              }),
              (e.prototype.setWithPriority = function(t, e, n) {
                if (
                  (Object(r.b)(
                    'Reference.setWithPriority',
                    2,
                    3,
                    arguments.length
                  ),
                  Object(i.l)('Reference.setWithPriority', this.path),
                  Object(i.e)('Reference.setWithPriority', 1, t, this.path, !1),
                  Object(i.i)('Reference.setWithPriority', 2, e, !1),
                  Object(r.c)('Reference.setWithPriority', 3, n, !0),
                  '.length' === this.getKey() || '.keys' === this.getKey())
                )
                  throw 'Reference.setWithPriority failed: ' +
                    this.getKey() +
                    ' is a read-only object.';
                var o = new a.a();
                return (
                  this.repo.setWithPriority(this.path, t, e, o.wrapCallback(n)),
                  o.promise
                );
              }),
              (e.prototype.remove = function(t) {
                return (
                  Object(r.b)('Reference.remove', 0, 1, arguments.length),
                  Object(i.l)('Reference.remove', this.path),
                  Object(r.c)('Reference.remove', 1, t, !0),
                  this.set(null, t)
                );
              }),
              (e.prototype.transaction = function(t, e, n) {
                if (
                  (Object(r.b)('Reference.transaction', 1, 3, arguments.length),
                  Object(i.l)('Reference.transaction', this.path),
                  Object(r.c)('Reference.transaction', 1, t, !1),
                  Object(r.c)('Reference.transaction', 2, e, !0),
                  Object(i.b)('Reference.transaction', 3, n, !0),
                  '.length' === this.getKey() || '.keys' === this.getKey())
                )
                  throw 'Reference.transaction failed: ' +
                    this.getKey() +
                    ' is a read-only object.';
                void 0 === n && (n = !0);
                var o = new a.a();
                'function' == typeof e && Object(a.c)(o.promise);
                var s = function(t, n, r) {
                  t ? o.reject(t) : o.resolve(new c(n, r)),
                    'function' == typeof e && e(t, n, r);
                };
                return (
                  this.repo.startTransaction(this.path, t, s, n), o.promise
                );
              }),
              (e.prototype.setPriority = function(t, e) {
                Object(r.b)('Reference.setPriority', 1, 2, arguments.length),
                  Object(i.l)('Reference.setPriority', this.path),
                  Object(i.i)('Reference.setPriority', 1, t, !1),
                  Object(r.c)('Reference.setPriority', 2, e, !0);
                var n = new a.a();
                return (
                  this.repo.setWithPriority(
                    this.path.child('.priority'),
                    t,
                    null,
                    n.wrapCallback(e)
                  ),
                  n.promise
                );
              }),
              (e.prototype.push = function(t, e) {
                Object(r.b)('Reference.push', 0, 2, arguments.length),
                  Object(i.l)('Reference.push', this.path),
                  Object(i.e)('Reference.push', 1, t, this.path, !0),
                  Object(r.c)('Reference.push', 2, e, !0);
                var n,
                  o = this.repo.serverTime(),
                  s = h(o),
                  c = this.child(s),
                  u = this.child(s);
                return (
                  (n =
                    null != t
                      ? c.set(t, e).then(function() {
                          return u;
                        })
                      : a.b.resolve(u)),
                  (c.then = n.then.bind(n)),
                  (c.catch = n.then.bind(n, void 0)),
                  'function' == typeof e && Object(a.c)(n),
                  c
                );
              }),
              (e.prototype.onDisconnect = function() {
                return (
                  Object(i.l)('Reference.onDisconnect', this.path),
                  new s(this.repo, this.path)
                );
              }),
              Object.defineProperty(e.prototype, 'database', {
                get: function() {
                  return this.databaseProp();
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(e.prototype, 'key', {
                get: function() {
                  return this.getKey();
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(e.prototype, 'parent', {
                get: function() {
                  return this.getParent();
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(e.prototype, 'root', {
                get: function() {
                  return this.getRoot();
                },
                enumerable: !0,
                configurable: !0
              }),
              e
            );
          })(l.a);
        (l.a.__referenceConstructor = N), (T.a.__referenceConstructor = N);
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return u;
        });
        var r,
          i = n(22),
          o = n(4),
          a = n(1),
          s = n(2),
          c = function() {
            return r || (r = new i.b(a.A)), r;
          },
          u = (function() {
            function t(t, e) {
              void 0 === e && (e = c()), (this.value = t), (this.children = e);
            }
            return (
              (t.fromObject = function(e) {
                var n = t.Empty;
                return (
                  Object(s.f)(e, function(t, e) {
                    n = n.set(new o.a(t), e);
                  }),
                  n
                );
              }),
              (t.prototype.isEmpty = function() {
                return null === this.value && this.children.isEmpty();
              }),
              (t.prototype.findRootMostMatchingPathAndValue = function(t, e) {
                if (null != this.value && e(this.value))
                  return { path: o.a.Empty, value: this.value };
                if (t.isEmpty()) return null;
                var n = t.getFront(),
                  r = this.children.get(n);
                if (null !== r) {
                  var i = r.findRootMostMatchingPathAndValue(t.popFront(), e);
                  return null != i
                    ? { path: new o.a(n).child(i.path), value: i.value }
                    : null;
                }
                return null;
              }),
              (t.prototype.findRootMostValueAndPath = function(t) {
                return this.findRootMostMatchingPathAndValue(t, function() {
                  return !0;
                });
              }),
              (t.prototype.subtree = function(e) {
                if (e.isEmpty()) return this;
                var n = e.getFront(),
                  r = this.children.get(n);
                return null !== r ? r.subtree(e.popFront()) : t.Empty;
              }),
              (t.prototype.set = function(e, n) {
                if (e.isEmpty()) return new t(n, this.children);
                var r = e.getFront(),
                  i = this.children.get(r) || t.Empty,
                  o = i.set(e.popFront(), n),
                  a = this.children.insert(r, o);
                return new t(this.value, a);
              }),
              (t.prototype.remove = function(e) {
                if (e.isEmpty())
                  return this.children.isEmpty()
                    ? t.Empty
                    : new t(null, this.children);
                var n = e.getFront(),
                  r = this.children.get(n);
                if (r) {
                  var i = r.remove(e.popFront()),
                    o = void 0;
                  return (
                    (o = i.isEmpty()
                      ? this.children.remove(n)
                      : this.children.insert(n, i)),
                    null === this.value && o.isEmpty()
                      ? t.Empty
                      : new t(this.value, o)
                  );
                }
                return this;
              }),
              (t.prototype.get = function(t) {
                if (t.isEmpty()) return this.value;
                var e = t.getFront(),
                  n = this.children.get(e);
                return n ? n.get(t.popFront()) : null;
              }),
              (t.prototype.setTree = function(e, n) {
                if (e.isEmpty()) return n;
                var r = e.getFront(),
                  i = this.children.get(r) || t.Empty,
                  o = i.setTree(e.popFront(), n),
                  a = void 0;
                return (
                  (a = o.isEmpty()
                    ? this.children.remove(r)
                    : this.children.insert(r, o)),
                  new t(this.value, a)
                );
              }),
              (t.prototype.fold = function(t) {
                return this.un(o.a.Empty, t);
              }),
              (t.prototype.un = function(t, e) {
                var n = {};
                return (
                  this.children.inorderTraversal(function(r, i) {
                    n[r] = i.un(t.child(r), e);
                  }),
                  e(t, this.value, n)
                );
              }),
              (t.prototype.findOnPath = function(t, e) {
                return this.hn(t, o.a.Empty, e);
              }),
              (t.prototype.hn = function(t, e, n) {
                var r = !!this.value && n(e, this.value);
                if (r) return r;
                if (t.isEmpty()) return null;
                var i = t.getFront(),
                  o = this.children.get(i);
                return o ? o.hn(t.popFront(), e.child(i), n) : null;
              }),
              (t.prototype.foreachOnPath = function(t, e) {
                return this.ln(t, o.a.Empty, e);
              }),
              (t.prototype.ln = function(e, n, r) {
                if (e.isEmpty()) return this;
                this.value && r(n, this.value);
                var i = e.getFront(),
                  o = this.children.get(i);
                return o ? o.ln(e.popFront(), n.child(i), r) : t.Empty;
              }),
              (t.prototype.foreach = function(t) {
                this.pn(o.a.Empty, t);
              }),
              (t.prototype.pn = function(t, e) {
                this.children.inorderTraversal(function(n, r) {
                  r.pn(t.child(n), e);
                }),
                  this.value && e(t, this.value);
              }),
              (t.prototype.foreachChild = function(t) {
                this.children.inorderTraversal(function(e, n) {
                  n.value && t(e, n.value);
                });
              }),
              (t.Empty = new t(null)),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return s;
        });
        var r = n(0),
          i = n(14),
          o = n(6),
          a = n(5),
          s = (function() {
            function t(t) {
              this.qe = t;
            }
            return (
              (t.prototype.updateChild = function(t, e, n, o, a, s) {
                Object(r.a)(
                  t.isIndexed(this.qe),
                  'A node must be indexed if only a child is updated'
                );
                var c = t.getImmediateChild(e);
                return c.getChild(o).equals(n.getChild(o)) &&
                  c.isEmpty() == n.isEmpty()
                  ? t
                  : (null != s &&
                      (n.isEmpty()
                        ? t.hasChild(e)
                          ? s.trackChildChange(i.a.childRemovedChange(e, c))
                          : Object(r.a)(
                              t.isLeafNode(),
                              'A child remove without an old child only makes sense on a leaf node'
                            )
                        : c.isEmpty()
                          ? s.trackChildChange(i.a.childAddedChange(e, n))
                          : s.trackChildChange(
                              i.a.childChangedChange(e, n, c)
                            )),
                    t.isLeafNode() && n.isEmpty()
                      ? t
                      : t.updateImmediateChild(e, n).withIndex(this.qe));
              }),
              (t.prototype.updateFullNode = function(t, e, n) {
                return (
                  null != n &&
                    (t.isLeafNode() ||
                      t.forEachChild(a.a, function(t, r) {
                        e.hasChild(t) ||
                          n.trackChildChange(i.a.childRemovedChange(t, r));
                      }),
                    e.isLeafNode() ||
                      e.forEachChild(a.a, function(e, r) {
                        if (t.hasChild(e)) {
                          var o = t.getImmediateChild(e);
                          o.equals(r) ||
                            n.trackChildChange(i.a.childChangedChange(e, r, o));
                        } else n.trackChildChange(i.a.childAddedChange(e, r));
                      })),
                  e.withIndex(this.qe)
                );
              }),
              (t.prototype.updatePriority = function(t, e) {
                return t.isEmpty() ? o.a.EMPTY_NODE : t.updatePriority(e);
              }),
              (t.prototype.filtersNodes = function() {
                return !1;
              }),
              (t.prototype.getIndexedFilter = function() {
                return this;
              }),
              (t.prototype.getIndex = function() {
                return this.qe;
              }),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        var r = n(35),
          i = n(2),
          o = (function() {
            function t() {
              this.dn = {};
            }
            return (
              (t.prototype.incrementCounter = function(t, e) {
                void 0 === e && (e = 1),
                  Object(i.b)(this.dn, t) || (this.dn[t] = 0),
                  (this.dn[t] += e);
              }),
              (t.prototype.get = function() {
                return Object(r.a)(this.dn);
              }),
              t
            );
          })();
        n.d(e, 'a', function() {
          return a;
        });
        var a = (function() {
          function t() {}
          return (
            (t.getCollection = function(t) {
              var e = '' + t;
              return this.fn[e] || (this.fn[e] = new o()), this.fn[e];
            }),
            (t.getOrCreateReporter = function(t, e) {
              var n = '' + t;
              return this._n[n] || (this._n[n] = e()), this._n[n];
            }),
            (t.fn = {}),
            (t._n = {}),
            t
          );
        })();
      },
      function(t, e, n) {
        'use strict';
        var r,
          i = n(2),
          o = n(23),
          a = n(1),
          s = n(37),
          c = n(11),
          u = n(0),
          h = n(26),
          l = n(46),
          p = n(4),
          d = (function() {
            function t() {
              (this.children = {}), (this.childCount = 0), (this.value = null);
            }
            return t;
          })(),
          f = (function() {
            function t(t, e, n) {
              void 0 === t && (t = ''),
                void 0 === e && (e = null),
                void 0 === n && (n = new d()),
                (this.yn = t),
                (this.vn = e),
                (this.gn = n);
            }
            return (
              (t.prototype.subTree = function(e) {
                for (
                  var n, r = e instanceof p.a ? e : new p.a(e), o = this;
                  null !== (n = r.getFront());

                )
                  (o = new t(n, o, Object(i.l)(o.gn.children, n) || new d())),
                    (r = r.popFront());
                return o;
              }),
              (t.prototype.getValue = function() {
                return this.gn.value;
              }),
              (t.prototype.setValue = function(t) {
                Object(u.a)(void 0 !== t, 'Cannot set value to undefined'),
                  (this.gn.value = t),
                  this.mn();
              }),
              (t.prototype.clear = function() {
                (this.gn.value = null),
                  (this.gn.children = {}),
                  (this.gn.childCount = 0),
                  this.mn();
              }),
              (t.prototype.hasChildren = function() {
                return this.gn.childCount > 0;
              }),
              (t.prototype.isEmpty = function() {
                return null === this.getValue() && !this.hasChildren();
              }),
              (t.prototype.forEachChild = function(e) {
                var n = this;
                Object(i.f)(this.gn.children, function(r, i) {
                  e(new t(r, n, i));
                });
              }),
              (t.prototype.forEachDescendant = function(t, e, n) {
                e && !n && t(this),
                  this.forEachChild(function(e) {
                    e.forEachDescendant(t, !0, n);
                  }),
                  e && n && t(this);
              }),
              (t.prototype.forEachAncestor = function(t, e) {
                for (var n = e ? this : this.parent(); null !== n; ) {
                  if (t(n)) return !0;
                  n = n.parent();
                }
                return !1;
              }),
              (t.prototype.forEachImmediateDescendantWithValue = function(t) {
                this.forEachChild(function(e) {
                  null !== e.getValue()
                    ? t(e)
                    : e.forEachImmediateDescendantWithValue(t);
                });
              }),
              (t.prototype.path = function() {
                return new p.a(
                  null === this.vn ? this.yn : this.vn.path() + '/' + this.yn
                );
              }),
              (t.prototype.name = function() {
                return this.yn;
              }),
              (t.prototype.parent = function() {
                return this.vn;
              }),
              (t.prototype.mn = function() {
                null !== this.vn && this.vn.bn(this.yn, this);
              }),
              (t.prototype.bn = function(t, e) {
                var n = e.isEmpty(),
                  r = Object(i.b)(this.gn.children, t);
                n && r
                  ? (delete this.gn.children[t],
                    this.gn.childCount--,
                    this.mn())
                  : n ||
                    r ||
                    ((this.gn.children[t] = e.gn),
                    this.gn.childCount++,
                    this.mn());
              }),
              t
            );
          })(),
          _ = n(5),
          y = n(47),
          v = n(16),
          g = n(6),
          m =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                };
        !(function(t) {
          (t[(t.RUN = 0)] = 'RUN'),
            (t[(t.SENT = 1)] = 'SENT'),
            (t[(t.COMPLETED = 2)] = 'COMPLETED'),
            (t[(t.SENT_NEEDS_ABORT = 3)] = 'SENT_NEEDS_ABORT'),
            (t[(t.NEEDS_ABORT = 4)] = 'NEEDS_ABORT');
        })(r || (r = {})),
          (o.a.Cn = 25),
          (o.a.prototype.Ne = function() {
            this.En = new f();
          }),
          (o.a.prototype.startTransaction = function(t, e, n, o) {
            this._e('transaction on ' + t);
            var s = function() {},
              p = new h.a(this, t);
            p.on('value', s);
            var d = function() {
                p.off('value', s);
              },
              f = {
                path: t,
                update: e,
                onComplete: n,
                status: null,
                order: Object(a.a)(),
                applyLocally: o,
                retryCount: 0,
                unwatcher: d,
                abortReason: null,
                currentWriteId: null,
                currentInputSnapshot: null,
                currentOutputSnapshotRaw: null,
                currentOutputSnapshotResolved: null
              },
              b = this.On(t);
            f.currentInputSnapshot = b;
            var C = f.update(b.val());
            if (void 0 === C) {
              if (
                (f.unwatcher(),
                (f.currentOutputSnapshotRaw = null),
                (f.currentOutputSnapshotResolved = null),
                f.onComplete)
              ) {
                var E = new l.a(
                  f.currentInputSnapshot,
                  new h.a(this, f.path),
                  _.a
                );
                f.onComplete(null, !1, E);
              }
            } else {
              Object(c.d)('transaction failed: Data returned ', C, f.path),
                (f.status = r.RUN);
              var O = this.En.subTree(t),
                w = O.getValue() || [];
              w.push(f), O.setValue(w);
              var S = void 0;
              'object' === (void 0 === C ? 'undefined' : m(C)) &&
              null !== C &&
              Object(i.b)(C, '.priority')
                ? ((S = Object(i.l)(C, '.priority')),
                  Object(u.a)(
                    Object(c.a)(S),
                    'Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.'
                  ))
                : (S = (this.De.calcCompleteEventCache(t) || g.a.EMPTY_NODE)
                    .getPriority()
                    .val()),
                (S = S);
              var T = this.generateServerValues(),
                j = Object(v.a)(C, S),
                N = Object(y.b)(j, T);
              (f.currentOutputSnapshotRaw = j),
                (f.currentOutputSnapshotResolved = N),
                (f.currentWriteId = this.Ae());
              var I = this.De.applyUserOverwrite(
                t,
                N,
                f.currentWriteId,
                f.applyLocally
              );
              this.me.raiseEventsForChangedPath(t, I), this.wn();
            }
          }),
          (o.a.prototype.On = function(t, e) {
            return this.De.calcCompleteEventCache(t, e) || g.a.EMPTY_NODE;
          }),
          (o.a.prototype.wn = function(t) {
            var e = this;
            if (
              (void 0 === t && (t = this.En),
              t || this.Sn(t),
              null !== t.getValue())
            ) {
              var n = this.Tn(t);
              Object(u.a)(
                n.length > 0,
                'Sending zero length transaction queue'
              ),
                n.every(function(t) {
                  return t.status === r.RUN;
                }) && this.jn(t.path(), n);
            } else
              t.hasChildren() &&
                t.forEachChild(function(t) {
                  e.wn(t);
                });
          }),
          (o.a.prototype.jn = function(t, e) {
            for (
              var n = this,
                i = e.map(function(t) {
                  return t.currentWriteId;
                }),
                o = this.On(t, i),
                s = o,
                c = o.hash(),
                d = 0;
              d < e.length;
              d++
            ) {
              var f = e[d];
              Object(u.a)(
                f.status === r.RUN,
                'tryToSendTransactionQueue_: items in queue should all be run.'
              ),
                (f.status = r.SENT),
                f.retryCount++;
              var y = p.a.relativePath(t, f.path);
              s = s.updateChild(y, f.currentOutputSnapshotRaw);
            }
            var v = s.val(!0),
              g = t;
            this.re.put(
              '' + g,
              v,
              function(i) {
                n._e('transaction put response', { path: '' + g, status: i });
                var o = [];
                if ('ok' === i) {
                  for (var s = [], c = 0; c < e.length; c++) {
                    if (
                      ((e[c].status = r.COMPLETED),
                      (o = o.concat(n.De.ackUserWrite(e[c].currentWriteId))),
                      e[c].onComplete)
                    ) {
                      var u = e[c].currentOutputSnapshotResolved,
                        p = new h.a(n, e[c].path),
                        d = new l.a(u, p, _.a);
                      s.push(e[c].onComplete.bind(null, null, !0, d));
                    }
                    e[c].unwatcher();
                  }
                  n.Sn(n.En.subTree(t)),
                    n.wn(),
                    n.me.raiseEventsForChangedPath(t, o);
                  for (var c = 0; c < s.length; c++) Object(a.m)(s[c]);
                } else {
                  if ('datastale' === i)
                    for (var c = 0; c < e.length; c++)
                      e[c].status === r.SENT_NEEDS_ABORT
                        ? (e[c].status = r.NEEDS_ABORT)
                        : (e[c].status = r.RUN);
                  else {
                    Object(a.B)('transaction at ' + g + ' failed: ' + i);
                    for (var c = 0; c < e.length; c++)
                      (e[c].status = r.NEEDS_ABORT), (e[c].abortReason = i);
                  }
                  n.xe(t);
                }
              },
              c
            );
          }),
          (o.a.prototype.xe = function(t) {
            var e = this.Nn(t),
              n = e.path(),
              r = this.Tn(e);
            return this.In(r, n), n;
          }),
          (o.a.prototype.In = function(t, e) {
            if (0 !== t.length) {
              for (
                var n = [],
                  s = [],
                  d = t.filter(function(t) {
                    return t.status === r.RUN;
                  }),
                  f = d.map(function(t) {
                    return t.currentWriteId;
                  }),
                  g = 0;
                g < t.length;
                g++
              ) {
                var b = t[g],
                  C = p.a.relativePath(e, b.path),
                  E = !1,
                  O = void 0;
                if (
                  (Object(u.a)(
                    null !== C,
                    'rerunTransactionsUnderNode_: relativePath should not be null.'
                  ),
                  b.status === r.NEEDS_ABORT)
                )
                  (E = !0),
                    (O = b.abortReason),
                    (s = s.concat(this.De.ackUserWrite(b.currentWriteId, !0)));
                else if (b.status === r.RUN)
                  if (b.retryCount >= o.a.Cn)
                    (E = !0),
                      (O = 'maxretry'),
                      (s = s.concat(
                        this.De.ackUserWrite(b.currentWriteId, !0)
                      ));
                  else {
                    var w = this.On(b.path, f);
                    b.currentInputSnapshot = w;
                    var S = t[g].update(w.val());
                    if (void 0 !== S) {
                      Object(c.d)(
                        'transaction failed: Data returned ',
                        S,
                        b.path
                      );
                      var T = Object(v.a)(S),
                        j =
                          'object' === (void 0 === S ? 'undefined' : m(S)) &&
                          null != S &&
                          Object(i.b)(S, '.priority');
                      j || (T = T.updatePriority(w.getPriority()));
                      var N = b.currentWriteId,
                        I = this.generateServerValues(),
                        P = Object(y.b)(T, I);
                      (b.currentOutputSnapshotRaw = T),
                        (b.currentOutputSnapshotResolved = P),
                        (b.currentWriteId = this.Ae()),
                        f.splice(f.indexOf(N), 1),
                        (s = s.concat(
                          this.De.applyUserOverwrite(
                            b.path,
                            P,
                            b.currentWriteId,
                            b.applyLocally
                          )
                        )),
                        (s = s.concat(this.De.ackUserWrite(N, !0)));
                    } else
                      (E = !0),
                        (O = 'nodata'),
                        (s = s.concat(
                          this.De.ackUserWrite(b.currentWriteId, !0)
                        ));
                  }
                if (
                  (this.me.raiseEventsForChangedPath(e, s),
                  (s = []),
                  E &&
                    ((t[g].status = r.COMPLETED),
                    (function(t) {
                      setTimeout(t, Math.floor(0));
                    })(t[g].unwatcher),
                    t[g].onComplete))
                )
                  if ('nodata' === O) {
                    var R = new h.a(this, t[g].path),
                      D = t[g].currentInputSnapshot,
                      x = new l.a(D, R, _.a);
                    n.push(t[g].onComplete.bind(null, null, !1, x));
                  } else n.push(t[g].onComplete.bind(null, Error(O), !1, null));
              }
              this.Sn(this.En);
              for (var g = 0; g < n.length; g++) Object(a.m)(n[g]);
              this.wn();
            }
          }),
          (o.a.prototype.Nn = function(t) {
            for (
              var e, n = this.En;
              null !== (e = t.getFront()) && null === n.getValue();

            )
              (n = n.subTree(e)), (t = t.popFront());
            return n;
          }),
          (o.a.prototype.Tn = function(t) {
            var e = [];
            return (
              this.Pn(t, e),
              e.sort(function(t, e) {
                return t.order - e.order;
              }),
              e
            );
          }),
          (o.a.prototype.Pn = function(t, e) {
            var n = this,
              r = t.getValue();
            if (null !== r) for (var i = 0; i < r.length; i++) e.push(r[i]);
            t.forEachChild(function(t) {
              n.Pn(t, e);
            });
          }),
          (o.a.prototype.Sn = function(t) {
            var e = this,
              n = t.getValue();
            if (n) {
              for (var i = 0, o = 0; o < n.length; o++)
                n[o].status !== r.COMPLETED && ((n[i] = n[o]), i++);
              (n.length = i), t.setValue(n.length > 0 ? n : null);
            }
            t.forEachChild(function(t) {
              e.Sn(t);
            });
          }),
          (o.a.prototype.Le = function(t) {
            var e = this,
              n = this.Nn(t).path(),
              r = this.En.subTree(t);
            return (
              r.forEachAncestor(function(t) {
                e.Rn(t);
              }),
              this.Rn(r),
              r.forEachDescendant(function(t) {
                e.Rn(t);
              }),
              n
            );
          }),
          (o.a.prototype.Rn = function(t) {
            var e = t.getValue();
            if (null !== e) {
              for (var n = [], i = [], o = -1, s = 0; s < e.length; s++)
                e[s].status === r.SENT_NEEDS_ABORT ||
                  (e[s].status === r.SENT
                    ? (Object(u.a)(
                        o === s - 1,
                        'All SENT items should be at beginning of queue.'
                      ),
                      (o = s),
                      (e[s].status = r.SENT_NEEDS_ABORT),
                      (e[s].abortReason = 'set'))
                    : (Object(u.a)(
                        e[s].status === r.RUN,
                        'Unexpected transaction status in abort'
                      ),
                      e[s].unwatcher(),
                      (i = i.concat(
                        this.De.ackUserWrite(e[s].currentWriteId, !0)
                      )),
                      e[s].onComplete &&
                        n.push(
                          e[s].onComplete.bind(null, Error('set'), !1, null)
                        )));
              -1 === o ? t.setValue(null) : (e.length = o + 1),
                this.me.raiseEventsForChangedPath(t.path(), i);
              for (var s = 0; s < n.length; s++) Object(a.m)(n[s]);
            }
          }),
          n.d(e, 'a', function() {
            return C;
          });
        var b,
          C = (function() {
            function t() {
              (this.Dn = {}), (this.xn = !1);
            }
            return (
              (t.getInstance = function() {
                return b || (b = new t()), b;
              }),
              (t.prototype.interrupt = function() {
                for (var t in this.Dn)
                  for (var e in this.Dn[t]) this.Dn[t][e].interrupt();
              }),
              (t.prototype.resume = function() {
                for (var t in this.Dn)
                  for (var e in this.Dn[t]) this.Dn[t][e].resume();
              }),
              (t.prototype.databaseFromApp = function(t, e) {
                var n = e || t.options.databaseURL;
                void 0 === n &&
                  Object(a.o)(
                    "Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp()."
                  );
                var r = Object(s.a)(n),
                  i = r.repoInfo;
                return (
                  Object(c.k)('Invalid Firebase Database URL', 1, r),
                  r.path.isEmpty() ||
                    Object(a.o)(
                      'Database URL must point to the root of a Firebase Database (not including a child path).'
                    ),
                  this.createRepo(i, t).database
                );
              }),
              (t.prototype.deleteRepo = function(t) {
                var e = Object(i.l)(this.Dn, t.app.name);
                (e && Object(i.l)(e, t.pe.toURLString()) === t) ||
                  Object(a.o)(
                    'Database ' +
                      t.app.name +
                      '(' +
                      t.pe +
                      ') has already been deleted.'
                  ),
                  t.interrupt(),
                  delete e[t.pe.toURLString()];
              }),
              (t.prototype.createRepo = function(t, e) {
                var n = Object(i.l)(this.Dn, e.name);
                n || ((n = {}), (this.Dn[e.name] = n));
                var r = Object(i.l)(n, t.toURLString());
                return (
                  r &&
                    Object(a.o)(
                      'Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.'
                    ),
                  (r = new o.a(t, this.xn, e)),
                  (n[t.toURLString()] = r),
                  r
                );
              }),
              (t.prototype.forceRestClient = function(t) {
                this.xn = t;
              }),
              t
            );
          })();
      },
      ,
      ,
      ,
      ,
      ,
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return p;
        });
        var r = n(1),
          i = n(37),
          o = n(4),
          a = n(3),
          s = n(26),
          c = n(23),
          u = n(30),
          h = n(10),
          l = n(11),
          p = (function() {
            function t(t) {
              (this.Me = t),
                t instanceof c.a ||
                  Object(r.o)(
                    "Don't call new Database() directly - please use firebase.database()."
                  ),
                (this.Et = new s.a(t, o.a.Empty)),
                (this.INTERNAL = new d(this));
            }
            return (
              Object.defineProperty(t.prototype, 'app', {
                get: function() {
                  return this.Me.app;
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.ref = function(t) {
                return (
                  this.kn('ref'),
                  Object(h.b)('database.ref', 0, 1, arguments.length),
                  void 0 !== t ? this.Et.child(t) : this.Et
                );
              }),
              (t.prototype.refFromURL = function(t) {
                var e = 'database.refFromURL';
                this.kn(e), Object(h.b)(e, 1, 1, arguments.length);
                var n = Object(i.a)(t);
                Object(l.k)(e, 1, n);
                var o = n.repoInfo;
                return (
                  o.host !== this.Me.pe.host &&
                    Object(r.o)(
                      e +
                        ': Host name does not match the current database: (found ' +
                        o.host +
                        ' but expected ' +
                        this.Me.pe.host +
                        ')'
                    ),
                  this.ref('' + n.path)
                );
              }),
              (t.prototype.kn = function(t) {
                null === this.Me &&
                  Object(r.o)('Cannot call ' + t + ' on a deleted database.');
              }),
              (t.prototype.goOffline = function() {
                Object(h.b)('database.goOffline', 0, 0, arguments.length),
                  this.kn('goOffline'),
                  this.Me.interrupt();
              }),
              (t.prototype.goOnline = function() {
                Object(h.b)('database.goOnline', 0, 0, arguments.length),
                  this.kn('goOnline'),
                  this.Me.resume();
              }),
              (t.ServerValue = { TIMESTAMP: { '.sv': 'timestamp' } }),
              t
            );
          })(),
          d = (function() {
            function t(t) {
              this.database = t;
            }
            return (
              (t.prototype.delete = function() {
                return (
                  this.database.kn('delete'),
                  u.a.getInstance().deleteRepo(this.database.Me),
                  (this.database.Me = null),
                  (this.database.Et = null),
                  (this.database.INTERNAL = null),
                  (this.database = null),
                  a.b.resolve()
                );
              }),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        function r(t) {
          for (var e = '', n = t.split('/'), r = 0; r < n.length; r++)
            if (n[r].length > 0) {
              var i = n[r];
              try {
                i = decodeURIComponent(i.replace(/\+/g, ' '));
              } catch (t) {}
              e += '/' + i;
            }
          return e;
        }
        n.d(e, 'a', function() {
          return s;
        });
        var i = n(4),
          o = n(38),
          a = n(1),
          s = function(t) {
            var e = c(t),
              n = e.subdomain;
            'firebase' === e.domain &&
              Object(a.o)(
                e.host +
                  ' is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead'
              ),
              (n && 'undefined' != n) ||
                Object(a.o)(
                  'Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com'
                ),
              e.secure || Object(a.C)();
            var r = 'ws' === e.scheme || 'wss' === e.scheme;
            return {
              repoInfo: new o.a(e.host, e.secure, n, r),
              path: new i.a(e.pathString)
            };
          },
          c = function(t) {
            var e = '',
              n = '',
              i = '',
              o = '',
              a = !0,
              s = 'https',
              c = 443;
            if ('string' == typeof t) {
              var u = t.indexOf('//');
              u >= 0 && ((s = t.substring(0, u - 1)), (t = t.substring(u + 2)));
              var h = t.indexOf('/');
              -1 === h && (h = t.length),
                (e = t.substring(0, h)),
                (o = r(t.substring(h)));
              var l = e.split('.');
              3 === l.length
                ? ((n = l[1]), (i = l[0].toLowerCase()))
                : 2 === l.length && (n = l[0]),
                (u = e.indexOf(':')) >= 0 &&
                  ((a = 'https' === s || 'wss' === s),
                  (c = parseInt(e.substring(u + 1), 10)));
            }
            return {
              host: e,
              port: c,
              domain: n,
              subdomain: i,
              secure: a,
              scheme: s,
              pathString: o
            };
          };
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return c;
        });
        var r = n(0),
          i = n(2),
          o = n(18),
          a = n(19),
          s =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          c = (function() {
            function t(t, e, n, r, i) {
              void 0 === i && (i = ''),
                (this.secure = e),
                (this.namespace = n),
                (this.webSocketOnly = r),
                (this.persistenceKey = i),
                (this.host = t.toLowerCase()),
                (this.domain = this.host.substr(this.host.indexOf('.') + 1)),
                (this.internalHost = o.a.get('host:' + t) || this.host);
            }
            return (
              (t.prototype.needsQueryParam = function() {
                return this.host !== this.internalHost;
              }),
              (t.prototype.isCacheableHost = function() {
                return 's-' === this.internalHost.substr(0, 2);
              }),
              (t.prototype.isDemoHost = function() {
                return 'firebaseio-demo.com' === this.domain;
              }),
              (t.prototype.isCustomHost = function() {
                return (
                  'firebaseio.com' !== this.domain &&
                  'firebaseio-demo.com' !== this.domain
                );
              }),
              (t.prototype.updateHost = function(t) {
                t !== this.internalHost &&
                  ((this.internalHost = t),
                  this.isCacheableHost() &&
                    o.a.set('host:' + this.host, this.internalHost));
              }),
              (t.prototype.connectionURL = function(t, e) {
                Object(r.a)('string' == typeof t, 'typeof type must == string'),
                  Object(r.a)(
                    'object' === (void 0 === e ? 'undefined' : s(e)),
                    'typeof params must == object'
                  );
                var n;
                if (t === a.i)
                  n =
                    (this.secure ? 'wss://' : 'ws://') +
                    this.internalHost +
                    '/.ws?';
                else {
                  if (t !== a.d) throw Error('Unknown connection type: ' + t);
                  n =
                    (this.secure ? 'https://' : 'http://') +
                    this.internalHost +
                    '/.lp?';
                }
                this.needsQueryParam() && (e.ns = this.namespace);
                var o = [];
                return (
                  Object(i.f)(e, function(t, e) {
                    o.push(t + '=' + e);
                  }),
                  n + o.join('&')
                );
              }),
              (t.prototype.toString = function() {
                var t = this.toURLString();
                return (
                  this.persistenceKey && (t += '<' + this.persistenceKey + '>'),
                  t
                );
              }),
              (t.prototype.toURLString = function() {
                return (this.secure ? 'https://' : 'http://') + this.host;
              }),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        var r = n(0),
          i = n(15),
          o = n(5),
          a = n(41),
          s = n(45),
          c = n(1),
          u = n(4),
          h = n(11),
          l = n(10),
          p = n(46),
          d = n(8),
          f = (function() {
            function t(t, e, n, r) {
              (this.eventType = t),
                (this.eventRegistration = e),
                (this.snapshot = n),
                (this.prevName = r);
            }
            return (
              (t.prototype.getPath = function() {
                var t = this.snapshot.getRef();
                return 'value' === this.eventType ? t.path : t.getParent().path;
              }),
              (t.prototype.getEventType = function() {
                return this.eventType;
              }),
              (t.prototype.getEventRunner = function() {
                return this.eventRegistration.getEventRunner(this);
              }),
              (t.prototype.toString = function() {
                return (
                  this.getPath() +
                  ':' +
                  this.eventType +
                  ':' +
                  Object(d.b)(this.snapshot.exportVal())
                );
              }),
              t
            );
          })(),
          _ = (function() {
            function t(t, e, n) {
              (this.eventRegistration = t), (this.error = e), (this.path = n);
            }
            return (
              (t.prototype.getPath = function() {
                return this.path;
              }),
              (t.prototype.getEventType = function() {
                return 'cancel';
              }),
              (t.prototype.getEventRunner = function() {
                return this.eventRegistration.getEventRunner(this);
              }),
              (t.prototype.toString = function() {
                return this.path + ':cancel';
              }),
              t
            );
          })(),
          y = n(2),
          v = (function() {
            function t(t, e, n) {
              (this.Fn = t), (this.An = e), (this.Ln = n);
            }
            return (
              (t.prototype.respondsTo = function(t) {
                return 'value' === t;
              }),
              (t.prototype.createEvent = function(t, e) {
                var n = e.getQueryParams().getIndex();
                return new f(
                  'value',
                  this,
                  new p.a(t.snapshotNode, e.getRef(), n)
                );
              }),
              (t.prototype.getEventRunner = function(t) {
                var e = this.Ln;
                if ('cancel' === t.getEventType()) {
                  Object(r.a)(
                    this.An,
                    'Raising a cancel event on a listener with no cancel callback'
                  );
                  var n = this.An;
                  return function() {
                    n.call(e, t.error);
                  };
                }
                var i = this.Fn;
                return function() {
                  i.call(e, t.snapshot);
                };
              }),
              (t.prototype.createCancelEvent = function(t, e) {
                return this.An ? new _(this, t, e) : null;
              }),
              (t.prototype.matches = function(e) {
                return (
                  e instanceof t &&
                  (!e.Fn || !this.Fn || (e.Fn === this.Fn && e.Ln === this.Ln))
                );
              }),
              (t.prototype.hasAnyCallback = function() {
                return null !== this.Fn;
              }),
              t
            );
          })(),
          g = (function() {
            function t(t, e, n) {
              (this.Mn = t), (this.An = e), (this.Ln = n);
            }
            return (
              (t.prototype.respondsTo = function(t) {
                var e = 'children_added' === t ? 'child_added' : t;
                return (
                  (e = 'children_removed' === e ? 'child_removed' : e),
                  Object(y.b)(this.Mn, e)
                );
              }),
              (t.prototype.createCancelEvent = function(t, e) {
                return this.An ? new _(this, t, e) : null;
              }),
              (t.prototype.createEvent = function(t, e) {
                Object(r.a)(
                  null != t.childName,
                  'Child events should have a childName.'
                );
                var n = e.getRef().child(t.childName),
                  i = e.getQueryParams().getIndex();
                return new f(
                  t.type,
                  this,
                  new p.a(t.snapshotNode, n, i),
                  t.prevName
                );
              }),
              (t.prototype.getEventRunner = function(t) {
                var e = this.Ln;
                if ('cancel' === t.getEventType()) {
                  Object(r.a)(
                    this.An,
                    'Raising a cancel event on a listener with no cancel callback'
                  );
                  var n = this.An;
                  return function() {
                    n.call(e, t.error);
                  };
                }
                var i = this.Mn[t.eventType];
                return function() {
                  i.call(e, t.snapshot, t.prevName);
                };
              }),
              (t.prototype.matches = function(e) {
                if (e instanceof t) {
                  if (!this.Mn || !e.Mn) return !0;
                  if (this.Ln === e.Ln) {
                    var n = Object(y.h)(e.Mn);
                    if (n === Object(y.h)(this.Mn)) {
                      if (1 === n) {
                        var r = Object(y.g)(e.Mn),
                          i = Object(y.g)(this.Mn);
                        return !(
                          i !== r ||
                          (e.Mn[r] && this.Mn[i] && e.Mn[r] !== this.Mn[i])
                        );
                      }
                      return Object(y.c)(this.Mn, function(t, n) {
                        return e.Mn[t] === n;
                      });
                    }
                  }
                }
                return !1;
              }),
              (t.prototype.hasAnyCallback = function() {
                return null !== this.Mn;
              }),
              t
            );
          })(),
          m = n(3);
        n.d(e, 'a', function() {
          return E;
        });
        var b,
          C =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          E = (function() {
            function t(t, e, n, r) {
              (this.repo = t), (this.path = e), (this.Wn = n), (this.qn = r);
            }
            return (
              Object.defineProperty(t, '__referenceConstructor', {
                get: function() {
                  return Object(r.a)(b, 'Reference.ts has not been loaded'), b;
                },
                set: function(t) {
                  b = t;
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.Qn = function(t) {
                var e = null,
                  n = null;
                if (
                  (t.hasStart() && (e = t.getIndexStartValue()),
                  t.hasEnd() && (n = t.getIndexEndValue()),
                  t.getIndex() === i.a)
                ) {
                  var u =
                      'Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().',
                    l =
                      'Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.';
                  if (t.hasStart()) {
                    if (t.getIndexStartName() != c.c) throw Error(u);
                    if ('string' != typeof e) throw Error(l);
                  }
                  if (t.hasEnd()) {
                    if (t.getIndexEndName() != c.b) throw Error(u);
                    if ('string' != typeof n) throw Error(l);
                  }
                } else if (t.getIndex() === o.a) {
                  if (
                    (null != e && !Object(h.a)(e)) ||
                    (null != n && !Object(h.a)(n))
                  )
                    throw Error(
                      'Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).'
                    );
                } else if (
                  (Object(r.a)(
                    t.getIndex() instanceof s.a || t.getIndex() === a.a,
                    'unknown index type.'
                  ),
                  (null != e &&
                    'object' === (void 0 === e ? 'undefined' : C(e))) ||
                    (null != n &&
                      'object' === (void 0 === n ? 'undefined' : C(n))))
                )
                  throw Error(
                    'Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.'
                  );
              }),
              (t.Un = function(t) {
                if (
                  t.hasStart() &&
                  t.hasEnd() &&
                  t.hasLimit() &&
                  !t.hasAnchoredLimit()
                )
                  throw Error(
                    "Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead."
                  );
              }),
              (t.prototype.Vn = function(t) {
                if (!0 === this.qn)
                  throw Error(
                    t + ": You can't combine multiple orderBy calls."
                  );
              }),
              (t.prototype.getQueryParams = function() {
                return this.Wn;
              }),
              (t.prototype.getRef = function() {
                return (
                  Object(l.b)('Query.ref', 0, 0, arguments.length),
                  new t.__referenceConstructor(this.repo, this.path)
                );
              }),
              (t.prototype.on = function(e, n, r, i) {
                Object(l.b)('Query.on', 2, 4, arguments.length),
                  Object(h.c)('Query.on', 1, e, !1),
                  Object(l.c)('Query.on', 2, n, !1);
                var o = t.Bn('Query.on', r, i);
                if ('value' === e) this.onValueEvent(n, o.cancel, o.context);
                else {
                  var a = {};
                  (a[e] = n), this.onChildEvent(a, o.cancel, o.context);
                }
                return n;
              }),
              (t.prototype.onValueEvent = function(t, e, n) {
                var r = new v(t, e || null, n || null);
                this.repo.addEventCallbackForQuery(this, r);
              }),
              (t.prototype.onChildEvent = function(t, e, n) {
                var r = new g(t, e, n);
                this.repo.addEventCallbackForQuery(this, r);
              }),
              (t.prototype.off = function(t, e, n) {
                Object(l.b)('Query.off', 0, 3, arguments.length),
                  Object(h.c)('Query.off', 1, t, !0),
                  Object(l.c)('Query.off', 2, e, !0),
                  Object(l.d)('Query.off', 3, n, !0);
                var r = null,
                  i = null;
                'value' === t
                  ? (r = new v(e || null, null, n || null))
                  : t &&
                    (e && ((i = {}), (i[t] = e)),
                    (r = new g(i, null, n || null))),
                  this.repo.removeEventCallbackForQuery(this, r);
              }),
              (t.prototype.once = function(e, n, r, i) {
                var o = this;
                Object(l.b)('Query.once', 1, 4, arguments.length),
                  Object(h.c)('Query.once', 1, e, !1),
                  Object(l.c)('Query.once', 2, n, !0);
                var a = t.Bn('Query.once', r, i),
                  s = !0,
                  c = new m.a();
                Object(m.c)(c.promise);
                var u = function t(r) {
                  s &&
                    ((s = !1),
                    o.off(e, t),
                    n && n.bind(a.context)(r),
                    c.resolve(r));
                };
                return (
                  this.on(e, u, function(t) {
                    o.off(e, u),
                      a.cancel && a.cancel.bind(a.context)(t),
                      c.reject(t);
                  }),
                  c.promise
                );
              }),
              (t.prototype.limitToFirst = function(e) {
                if (
                  (Object(l.b)('Query.limitToFirst', 1, 1, arguments.length),
                  'number' != typeof e || Math.floor(e) !== e || e <= 0)
                )
                  throw Error(
                    'Query.limitToFirst: First argument must be a positive integer.'
                  );
                if (this.Wn.hasLimit())
                  throw Error(
                    'Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).'
                  );
                return new t(
                  this.repo,
                  this.path,
                  this.Wn.limitToFirst(e),
                  this.qn
                );
              }),
              (t.prototype.limitToLast = function(e) {
                if (
                  (Object(l.b)('Query.limitToLast', 1, 1, arguments.length),
                  'number' != typeof e || Math.floor(e) !== e || e <= 0)
                )
                  throw Error(
                    'Query.limitToLast: First argument must be a positive integer.'
                  );
                if (this.Wn.hasLimit())
                  throw Error(
                    'Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).'
                  );
                return new t(
                  this.repo,
                  this.path,
                  this.Wn.limitToLast(e),
                  this.qn
                );
              }),
              (t.prototype.orderByChild = function(e) {
                if (
                  (Object(l.b)('Query.orderByChild', 1, 1, arguments.length),
                  '$key' === e)
                )
                  throw Error(
                    'Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.'
                  );
                if ('$priority' === e)
                  throw Error(
                    'Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.'
                  );
                if ('$value' === e)
                  throw Error(
                    'Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.'
                  );
                Object(h.h)('Query.orderByChild', 1, e, !1),
                  this.Vn('Query.orderByChild');
                var n = new u.a(e);
                if (n.isEmpty())
                  throw Error(
                    'Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.'
                  );
                var r = new s.a(n),
                  i = this.Wn.orderBy(r);
                return t.Qn(i), new t(this.repo, this.path, i, !0);
              }),
              (t.prototype.orderByKey = function() {
                Object(l.b)('Query.orderByKey', 0, 0, arguments.length),
                  this.Vn('Query.orderByKey');
                var e = this.Wn.orderBy(i.a);
                return t.Qn(e), new t(this.repo, this.path, e, !0);
              }),
              (t.prototype.orderByPriority = function() {
                Object(l.b)('Query.orderByPriority', 0, 0, arguments.length),
                  this.Vn('Query.orderByPriority');
                var e = this.Wn.orderBy(o.a);
                return t.Qn(e), new t(this.repo, this.path, e, !0);
              }),
              (t.prototype.orderByValue = function() {
                Object(l.b)('Query.orderByValue', 0, 0, arguments.length),
                  this.Vn('Query.orderByValue');
                var e = this.Wn.orderBy(a.a);
                return t.Qn(e), new t(this.repo, this.path, e, !0);
              }),
              (t.prototype.startAt = function(e, n) {
                void 0 === e && (e = null),
                  Object(l.b)('Query.startAt', 0, 2, arguments.length),
                  Object(h.e)('Query.startAt', 1, e, this.path, !0),
                  Object(h.g)('Query.startAt', 2, n, !0);
                var r = this.Wn.startAt(e, n);
                if ((t.Un(r), t.Qn(r), this.Wn.hasStart()))
                  throw Error(
                    'Query.startAt: Starting point was already set (by another call to startAt or equalTo).'
                  );
                return (
                  void 0 === e && ((e = null), (n = null)),
                  new t(this.repo, this.path, r, this.qn)
                );
              }),
              (t.prototype.endAt = function(e, n) {
                void 0 === e && (e = null),
                  Object(l.b)('Query.endAt', 0, 2, arguments.length),
                  Object(h.e)('Query.endAt', 1, e, this.path, !0),
                  Object(h.g)('Query.endAt', 2, n, !0);
                var r = this.Wn.endAt(e, n);
                if ((t.Un(r), t.Qn(r), this.Wn.hasEnd()))
                  throw Error(
                    'Query.endAt: Ending point was already set (by another call to endAt or equalTo).'
                  );
                return new t(this.repo, this.path, r, this.qn);
              }),
              (t.prototype.equalTo = function(t, e) {
                if (
                  (Object(l.b)('Query.equalTo', 1, 2, arguments.length),
                  Object(h.e)('Query.equalTo', 1, t, this.path, !1),
                  Object(h.g)('Query.equalTo', 2, e, !0),
                  this.Wn.hasStart())
                )
                  throw Error(
                    'Query.equalTo: Starting point was already set (by another call to startAt or equalTo).'
                  );
                if (this.Wn.hasEnd())
                  throw Error(
                    'Query.equalTo: Ending point was already set (by another call to endAt or equalTo).'
                  );
                return this.startAt(t, e).endAt(t, e);
              }),
              (t.prototype.toString = function() {
                return (
                  Object(l.b)('Query.toString', 0, 0, arguments.length),
                  '' + this.repo + this.path.toUrlEncodedString()
                );
              }),
              (t.prototype.toJSON = function() {
                return (
                  Object(l.b)('Query.toJSON', 0, 1, arguments.length), '' + this
                );
              }),
              (t.prototype.queryObject = function() {
                return this.Wn.getQueryObject();
              }),
              (t.prototype.queryIdentifier = function() {
                var t = this.queryObject(),
                  e = Object(c.d)(t);
                return '{}' === e ? 'default' : e;
              }),
              (t.prototype.isEqual = function(e) {
                if (
                  (Object(l.b)('Query.isEqual', 1, 1, arguments.length),
                  !(e instanceof t))
                )
                  throw Error(
                    'Query.isEqual failed: First argument must be an instance of firebase.database.Query.'
                  );
                var n = this.repo === e.repo,
                  r = this.path.equals(e.path),
                  i = this.queryIdentifier() === e.queryIdentifier();
                return n && r && i;
              }),
              (t.Bn = function(t, e, n) {
                var r = { cancel: null, context: null };
                if (e && n)
                  (r.cancel = e),
                    Object(l.c)(t, 3, r.cancel, !0),
                    (r.context = n),
                    Object(l.d)(t, 4, r.context, !0);
                else if (e)
                  if (
                    'object' === (void 0 === e ? 'undefined' : C(e)) &&
                    null !== e
                  )
                    r.context = e;
                  else {
                    if ('function' != typeof e)
                      throw Error(
                        Object(l.a)(t, 3, !0) +
                          ' must either be a cancel callback or a context object.'
                      );
                    r.cancel = e;
                  }
                return r;
              }),
              Object.defineProperty(t.prototype, 'ref', {
                get: function() {
                  return this.getRef();
                },
                enumerable: !0,
                configurable: !0
              }),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        function r(t) {
          i = t;
        }
        (e.b = r),
          n.d(e, 'a', function() {
            return u;
          }),
          n.d(e, 'c', function() {
            return h;
          });
        var i,
          o = n(0),
          a = n(1),
          s = n(2),
          c =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          u = function(t) {
            return 'number' == typeof t
              ? 'number:' + Object(a.h)(t)
              : 'string:' + t;
          },
          h = function(t) {
            if (t.isLeafNode()) {
              var e = t.val();
              Object(o.a)(
                'string' == typeof e ||
                  'number' == typeof e ||
                  ('object' === (void 0 === e ? 'undefined' : c(e)) &&
                    Object(s.b)(e, '.sv')),
                'Priority must be a string or number.'
              );
            } else
              Object(o.a)(
                t === i || t.isEmpty(),
                'priority of unexpected type.'
              );
            Object(o.a)(
              t === i || t.getPriority().isEmpty(),
              "Priority nodes can't have a priority of their own."
            );
          };
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return u;
        });
        var r = n(20),
          i = n(7),
          o = n(1),
          a = n(16),
          s =
            (this && this.__extends) ||
            (function() {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(t, e) {
                    t.__proto__ = e;
                  }) ||
                function(t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
              return function(e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          c = (function(t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              s(e, t),
              (e.prototype.compare = function(t, e) {
                var n = t.node.compareTo(e.node);
                return 0 === n ? Object(o.v)(t.name, e.name) : n;
              }),
              (e.prototype.isDefinedOn = function(t) {
                return !0;
              }),
              (e.prototype.indexedValueChanged = function(t, e) {
                return !t.equals(e);
              }),
              (e.prototype.minPost = function() {
                return i.a.MIN;
              }),
              (e.prototype.maxPost = function() {
                return i.a.MAX;
              }),
              (e.prototype.makePost = function(t, e) {
                var n = Object(a.a)(t);
                return new i.a(e, n);
              }),
              (e.prototype.toString = function() {
                return '.value';
              }),
              e
            );
          })(r.a),
          u = new c();
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return l;
        });
        var r,
          i = n(0),
          o = n(43),
          a = n(2),
          s = n(7),
          c = n(5),
          u = n(15),
          h = {},
          l = (function() {
            function t(t, e) {
              (this.Hn = t), (this.Kn = e);
            }
            return (
              Object.defineProperty(t, 'Default', {
                get: function() {
                  return (
                    Object(i.a)(
                      h && c.a,
                      'ChildrenNode.ts has not been loaded'
                    ),
                    (r = r || new t({ '.priority': h }, { '.priority': c.a }))
                  );
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.get = function(t) {
                var e = Object(a.l)(this.Hn, t);
                if (!e) throw Error('No index defined for ' + t);
                return e === h ? null : e;
              }),
              (t.prototype.hasIndex = function(t) {
                return Object(a.b)(this.Kn, '' + t);
              }),
              (t.prototype.addIndex = function(e, n) {
                Object(i.a)(
                  e !== u.a,
                  "KeyIndex always exists and isn't meant to be added to the IndexMap."
                );
                for (
                  var r = [],
                    c = !1,
                    l = n.getIterator(s.a.Wrap),
                    p = l.getNext();
                  p;

                )
                  (c = c || e.isDefinedOn(p.node)),
                    r.push(p),
                    (p = l.getNext());
                var d;
                d = c ? Object(o.a)(r, e.getCompare()) : h;
                var f = '' + e,
                  _ = Object(a.a)(this.Kn);
                _[f] = e;
                var y = Object(a.a)(this.Hn);
                return (y[f] = d), new t(y, _);
              }),
              (t.prototype.addToIndexes = function(e, n) {
                var r = this;
                return new t(
                  Object(a.k)(this.Hn, function(t, c) {
                    var u = Object(a.l)(r.Kn, c);
                    if (
                      (Object(i.a)(u, 'Missing index implementation for ' + c),
                      t === h)
                    ) {
                      if (u.isDefinedOn(e.node)) {
                        for (
                          var l = [],
                            p = n.getIterator(s.a.Wrap),
                            d = p.getNext();
                          d;

                        )
                          d.name != e.name && l.push(d), (d = p.getNext());
                        return l.push(e), Object(o.a)(l, u.getCompare());
                      }
                      return h;
                    }
                    var f = n.get(e.name),
                      _ = t;
                    return (
                      f && (_ = _.remove(new s.a(e.name, f))),
                      _.insert(e, e.node)
                    );
                  }),
                  this.Kn
                );
              }),
              (t.prototype.removeFromIndexes = function(e, n) {
                return new t(
                  Object(a.k)(this.Hn, function(t) {
                    if (t === h) return t;
                    var r = n.get(e.name);
                    return r ? t.remove(new s.a(e.name, r)) : t;
                  }),
                  this.Kn
                );
              }),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return a;
        });
        var r = n(22),
          i = Math.log(2),
          o = (function() {
            function t(t) {
              (this.count = (function(t) {
                return parseInt(Math.log(t) / i, 10);
              })(t + 1)),
                (this.Yn = this.count - 1);
              var e = (function(t) {
                return parseInt(Array(t + 1).join('1'), 2);
              })(this.count);
              this.zn = (t + 1) & e;
            }
            return (
              (t.prototype.nextBitIsOne = function() {
                var t = !(this.zn & (1 << this.Yn));
                return this.Yn--, t;
              }),
              t
            );
          })(),
          a = function(t, e, n, i) {
            t.sort(e);
            var a = function e(i, o) {
                var a,
                  s,
                  c = o - i;
                if (0 == c) return null;
                if (1 == c)
                  return (
                    (a = t[i]),
                    (s = n ? n(a) : a),
                    new r.a(s, a.node, r.a.BLACK, null, null)
                  );
                var u = parseInt(c / 2, 10) + i,
                  h = e(i, u),
                  l = e(u + 1, o);
                return (
                  (a = t[u]),
                  (s = n ? n(a) : a),
                  new r.a(s, a.node, r.a.BLACK, h, l)
                );
              },
              s = new o(t.length),
              c = (function(e) {
                for (
                  var i = null,
                    o = null,
                    s = t.length,
                    c = function(e, i) {
                      var o = s - e,
                        c = s;
                      s -= e;
                      var h = a(o + 1, c),
                        l = t[o],
                        p = n ? n(l) : l;
                      u(new r.a(p, l.node, i, null, h));
                    },
                    u = function(t) {
                      i ? ((i.left = t), (i = t)) : ((o = t), (i = t));
                    },
                    h = 0;
                  h < e.count;
                  ++h
                ) {
                  var l = e.nextBitIsOne(),
                    p = Math.pow(2, e.count - (h + 1));
                  l ? c(p, r.a.BLACK) : (c(p, r.a.BLACK), c(p, r.a.RED));
                }
                return o;
              })(s);
            return new r.b(i || e, c);
          };
      },
      function(t, e, n) {
        'use strict';
        function r(t, e) {
          return Object(o.v)(t.name, e.name);
        }
        function i(t, e) {
          return Object(o.v)(t, e);
        }
        (e.b = r), (e.a = i);
        var o = n(1);
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return h;
        });
        var r = n(0),
          i = n(1),
          o = n(20),
          a = n(6),
          s = n(7),
          c = n(16),
          u =
            (this && this.__extends) ||
            (function() {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(t, e) {
                    t.__proto__ = e;
                  }) ||
                function(t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
              return function(e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          h = (function(t) {
            function e(e) {
              var n = t.call(this) || this;
              return (
                (n.Gn = e),
                Object(r.a)(
                  !e.isEmpty() && '.priority' !== e.getFront(),
                  "Can't create PathIndex with empty path or .priority key"
                ),
                n
              );
            }
            return (
              u(e, t),
              (e.prototype.extractChild = function(t) {
                return t.getChild(this.Gn);
              }),
              (e.prototype.isDefinedOn = function(t) {
                return !t.getChild(this.Gn).isEmpty();
              }),
              (e.prototype.compare = function(t, e) {
                var n = this.extractChild(t.node),
                  r = this.extractChild(e.node),
                  o = n.compareTo(r);
                return 0 === o ? Object(i.v)(t.name, e.name) : o;
              }),
              (e.prototype.makePost = function(t, e) {
                var n = Object(c.a)(t),
                  r = a.a.EMPTY_NODE.updateChild(this.Gn, n);
                return new s.a(e, r);
              }),
              (e.prototype.maxPost = function() {
                var t = a.a.EMPTY_NODE.updateChild(this.Gn, a.b);
                return new s.a(i.b, t);
              }),
              (e.prototype.toString = function() {
                return this.Gn.slice().join('/');
              }),
              e
            );
          })(o.a);
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return s;
        });
        var r = n(10),
          i = n(11),
          o = n(4),
          a = n(5),
          s = (function() {
            function t(t, e, n) {
              (this.gn = t), (this.Xn = e), (this.qe = n);
            }
            return (
              (t.prototype.val = function() {
                return (
                  Object(r.b)('DataSnapshot.val', 0, 0, arguments.length),
                  this.gn.val()
                );
              }),
              (t.prototype.exportVal = function() {
                return (
                  Object(r.b)('DataSnapshot.exportVal', 0, 0, arguments.length),
                  this.gn.val(!0)
                );
              }),
              (t.prototype.toJSON = function() {
                return (
                  Object(r.b)('DataSnapshot.toJSON', 0, 1, arguments.length),
                  this.exportVal()
                );
              }),
              (t.prototype.exists = function() {
                return (
                  Object(r.b)('DataSnapshot.exists', 0, 0, arguments.length),
                  !this.gn.isEmpty()
                );
              }),
              (t.prototype.child = function(e) {
                Object(r.b)('DataSnapshot.child', 0, 1, arguments.length),
                  (e += ''),
                  Object(i.h)('DataSnapshot.child', 1, e, !1);
                var n = new o.a(e),
                  s = this.Xn.child(n);
                return new t(this.gn.getChild(n), s, a.a);
              }),
              (t.prototype.hasChild = function(t) {
                Object(r.b)('DataSnapshot.hasChild', 1, 1, arguments.length),
                  Object(i.h)('DataSnapshot.hasChild', 1, t, !1);
                var e = new o.a(t);
                return !this.gn.getChild(e).isEmpty();
              }),
              (t.prototype.getPriority = function() {
                return (
                  Object(r.b)(
                    'DataSnapshot.getPriority',
                    0,
                    0,
                    arguments.length
                  ),
                  this.gn.getPriority().val()
                );
              }),
              (t.prototype.forEach = function(e) {
                var n = this;
                return (
                  Object(r.b)('DataSnapshot.forEach', 1, 1, arguments.length),
                  Object(r.c)('DataSnapshot.forEach', 1, e, !1),
                  !this.gn.isLeafNode() &&
                    !!this.gn.forEachChild(this.qe, function(r, i) {
                      return e(new t(i, n.Xn.child(r), a.a));
                    })
                );
              }),
              (t.prototype.hasChildren = function() {
                return (
                  Object(r.b)(
                    'DataSnapshot.hasChildren',
                    0,
                    0,
                    arguments.length
                  ),
                  !this.gn.isLeafNode() && !this.gn.isEmpty()
                );
              }),
              Object.defineProperty(t.prototype, 'key', {
                get: function() {
                  return this.Xn.getKey();
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.numChildren = function() {
                return (
                  Object(r.b)(
                    'DataSnapshot.numChildren',
                    0,
                    0,
                    arguments.length
                  ),
                  this.gn.numChildren()
                );
              }),
              (t.prototype.getRef = function() {
                return (
                  Object(r.b)('DataSnapshot.ref', 0, 0, arguments.length),
                  this.Xn
                );
              }),
              Object.defineProperty(t.prototype, 'ref', {
                get: function() {
                  return this.getRef();
                },
                enumerable: !0,
                configurable: !0
              }),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return h;
        }),
          n.d(e, 'c', function() {
            return p;
          }),
          n.d(e, 'b', function() {
            return d;
          });
        var r = n(0),
          i = n(4),
          o = n(48),
          a = n(21),
          s = n(16),
          c = n(5),
          u =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          h = function(t) {
            return (
              (t = t || {}),
              (t.timestamp = t.timestamp || new Date().getTime()),
              t
            );
          },
          l = function(t, e) {
            return t && 'object' === (void 0 === t ? 'undefined' : u(t))
              ? (Object(r.a)(
                  '.sv' in t,
                  'Unexpected leaf node or priority contents'
                ),
                e[t['.sv']])
              : t;
          },
          p = function(t, e) {
            var n = new o.a();
            return (
              t.forEachTree(new i.a(''), function(t, r) {
                n.remember(t, d(r, e));
              }),
              n
            );
          },
          d = function t(e, n) {
            var r,
              i = e.getPriority().val(),
              o = l(i, n);
            if (e.isLeafNode()) {
              var u = e,
                h = l(u.getValue(), n);
              return h !== u.getValue() || o !== u.getPriority().val()
                ? new a.a(h, Object(s.a)(o))
                : e;
            }
            var p = e;
            return (
              (r = p),
              o !== p.getPriority().val() && (r = r.updatePriority(new a.a(o))),
              p.forEachChild(c.a, function(e, i) {
                var o = t(i, n);
                o !== i && (r = r.updateImmediateChild(e, o));
              }),
              r
            );
          };
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return a;
        });
        var r = n(4),
          i = n(5),
          o = n(49),
          a = (function() {
            function t() {
              (this.it = null), (this.Y = null);
            }
            return (
              (t.prototype.find = function(t) {
                if (null != this.it) return this.it.getChild(t);
                if (t.isEmpty() || null == this.Y) return null;
                var e = t.getFront();
                return (
                  (t = t.popFront()),
                  this.Y.contains(e) ? this.Y.get(e).find(t) : null
                );
              }),
              (t.prototype.remember = function(e, n) {
                if (e.isEmpty()) (this.it = n), (this.Y = null);
                else if (null !== this.it) this.it = this.it.updateChild(e, n);
                else {
                  null == this.Y && (this.Y = new o.a());
                  var r = e.getFront();
                  this.Y.contains(r) || this.Y.add(r, new t());
                  var i = this.Y.get(r);
                  (e = e.popFront()), i.remember(e, n);
                }
              }),
              (t.prototype.forget = function(t) {
                if (t.isEmpty()) return (this.it = null), (this.Y = null), !0;
                if (null !== this.it) {
                  if (this.it.isLeafNode()) return !1;
                  var e = this.it;
                  this.it = null;
                  var n = this;
                  return (
                    e.forEachChild(i.a, function(t, e) {
                      n.remember(new r.a(t), e);
                    }),
                    this.forget(t)
                  );
                }
                if (null !== this.Y) {
                  var o = t.getFront();
                  return (
                    (t = t.popFront()),
                    this.Y.contains(o) &&
                      this.Y.get(o).forget(t) &&
                      this.Y.remove(o),
                    !!this.Y.isEmpty() && ((this.Y = null), !0)
                  );
                }
                return !0;
              }),
              (t.prototype.forEachTree = function(t, e) {
                null !== this.it
                  ? e(t, this.it)
                  : this.forEachChild(function(n, i) {
                      var o = new r.a(t + '/' + n);
                      i.forEachTree(o, e);
                    });
              }),
              (t.prototype.forEachChild = function(t) {
                null !== this.Y &&
                  this.Y.each(function(e, n) {
                    t(e, n);
                  });
              }),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return i;
        });
        var r = n(2),
          i = (function() {
            function t() {
              this.set = {};
            }
            return (
              (t.prototype.add = function(t, e) {
                this.set[t] = null === e || e;
              }),
              (t.prototype.contains = function(t) {
                return Object(r.b)(this.set, t);
              }),
              (t.prototype.get = function(t) {
                return this.contains(t) ? this.set[t] : void 0;
              }),
              (t.prototype.remove = function(t) {
                delete this.set[t];
              }),
              (t.prototype.clear = function() {
                this.set = {};
              }),
              (t.prototype.isEmpty = function() {
                return Object(r.j)(this.set);
              }),
              (t.prototype.count = function() {
                return Object(r.h)(this.set);
              }),
              (t.prototype.each = function(t) {
                Object(r.f)(this.set, function(e, n) {
                  return t(e, n);
                });
              }),
              (t.prototype.keys = function() {
                var t = [];
                return (
                  Object(r.f)(this.set, function(e) {
                    t.push(e);
                  }),
                  t
                );
              }),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        var r = (function() {
            function t(t, e, n) {
              (this.gn = t), (this.$n = e), (this.Jn = n);
            }
            return (
              (t.prototype.isFullyInitialized = function() {
                return this.$n;
              }),
              (t.prototype.isFiltered = function() {
                return this.Jn;
              }),
              (t.prototype.isCompleteForPath = function(t) {
                if (t.isEmpty()) return this.isFullyInitialized() && !this.Jn;
                var e = t.getFront();
                return this.isCompleteForChild(e);
              }),
              (t.prototype.isCompleteForChild = function(t) {
                return (
                  (this.isFullyInitialized() && !this.Jn) || this.gn.hasChild(t)
                );
              }),
              (t.prototype.getNode = function() {
                return this.gn;
              }),
              t
            );
          })(),
          i = n(6),
          o = n(0),
          a = n(2),
          s = (function() {
            function t(t, e) {
              (this.Zn = t), (this.tr = e);
            }
            return (
              (t.prototype.updateEventSnap = function(e, n, i) {
                return new t(new r(e, n, i), this.tr);
              }),
              (t.prototype.updateServerSnap = function(e, n, i) {
                return new t(this.Zn, new r(e, n, i));
              }),
              (t.prototype.getEventCache = function() {
                return this.Zn;
              }),
              (t.prototype.getCompleteEventSnap = function() {
                return this.Zn.isFullyInitialized() ? this.Zn.getNode() : null;
              }),
              (t.prototype.getServerCache = function() {
                return this.tr;
              }),
              (t.prototype.getCompleteServerSnap = function() {
                return this.tr.isFullyInitialized() ? this.tr.getNode() : null;
              }),
              (t.Empty = new t(
                new r(i.a.EMPTY_NODE, !1, !1),
                new r(i.a.EMPTY_NODE, !1, !1)
              )),
              t
            );
          })(),
          c = n(28),
          u = n(12),
          h = n(14),
          l = (function() {
            function t() {
              this.er = {};
            }
            return (
              (t.prototype.trackChildChange = function(t) {
                var e = t.type,
                  n = t.childName;
                Object(o.a)(
                  e == h.a.CHILD_ADDED ||
                    e == h.a.CHILD_CHANGED ||
                    e == h.a.CHILD_REMOVED,
                  'Only child changes supported for tracking'
                ),
                  Object(o.a)(
                    '.priority' !== n,
                    'Only non-priority child changes can be tracked.'
                  );
                var r = Object(a.l)(this.er, n);
                if (r) {
                  var i = r.type;
                  if (e == h.a.CHILD_ADDED && i == h.a.CHILD_REMOVED)
                    this.er[n] = h.a.childChangedChange(
                      n,
                      t.snapshotNode,
                      r.snapshotNode
                    );
                  else if (e == h.a.CHILD_REMOVED && i == h.a.CHILD_ADDED)
                    delete this.er[n];
                  else if (e == h.a.CHILD_REMOVED && i == h.a.CHILD_CHANGED)
                    this.er[n] = h.a.childRemovedChange(n, r.oldSnap);
                  else if (e == h.a.CHILD_CHANGED && i == h.a.CHILD_ADDED)
                    this.er[n] = h.a.childAddedChange(n, t.snapshotNode);
                  else {
                    if (e != h.a.CHILD_CHANGED || i != h.a.CHILD_CHANGED)
                      throw Object(o.b)(
                        'Illegal combination of changes: ' +
                          t +
                          ' occurred after ' +
                          r
                      );
                    this.er[n] = h.a.childChangedChange(
                      n,
                      t.snapshotNode,
                      r.oldSnap
                    );
                  }
                } else this.er[n] = t;
              }),
              (t.prototype.getChanges = function() {
                return Object(a.i)(this.er);
              }),
              t
            );
          })(),
          p = n(15),
          d = n(27),
          f = n(4),
          _ = (function() {
            function t() {}
            return (
              (t.prototype.getCompleteChild = function(t) {
                return null;
              }),
              (t.prototype.getChildAfterChild = function(t, e, n) {
                return null;
              }),
              t
            );
          })(),
          y = new _(),
          v = (function() {
            function t(t, e, n) {
              void 0 === n && (n = null),
                (this.nr = t),
                (this.rr = e),
                (this.ir = n);
            }
            return (
              (t.prototype.getCompleteChild = function(t) {
                var e = this.rr.getEventCache();
                if (e.isCompleteForChild(t))
                  return e.getNode().getImmediateChild(t);
                var n =
                  null != this.ir
                    ? new r(this.ir, !0, !1)
                    : this.rr.getServerCache();
                return this.nr.calcCompleteChild(t, n);
              }),
              (t.prototype.getChildAfterChild = function(t, e, n) {
                var r =
                    null != this.ir ? this.ir : this.rr.getCompleteServerSnap(),
                  i = this.nr.calcIndexedSlice(r, e, 1, n, t);
                return 0 === i.length ? null : i[0];
              }),
              t
            );
          })(),
          g = (function() {
            function t(t, e) {
              (this.viewCache = t), (this.changes = e);
            }
            return t;
          })(),
          m = (function() {
            function t(t) {
              this.or = t;
            }
            return (
              (t.prototype.assertIndexed = function(t) {
                Object(o.a)(
                  t
                    .getEventCache()
                    .getNode()
                    .isIndexed(this.or.getIndex()),
                  'Event snap not indexed'
                ),
                  Object(o.a)(
                    t
                      .getServerCache()
                      .getNode()
                      .isIndexed(this.or.getIndex()),
                    'Server snap not indexed'
                  );
              }),
              (t.prototype.applyOperation = function(e, n, r, i) {
                var a,
                  s,
                  c = new l();
                if (n.type === u.b.OVERWRITE) {
                  var h = n;
                  h.source.fromUser
                    ? (a = this.ar(e, h.path, h.snap, r, i, c))
                    : (Object(o.a)(h.source.fromServer, 'Unknown source.'),
                      (s =
                        h.source.tagged ||
                        (e.getServerCache().isFiltered() && !h.path.isEmpty())),
                      (a = this.sr(e, h.path, h.snap, r, i, s, c)));
                } else if (n.type === u.b.MERGE) {
                  var p = n;
                  p.source.fromUser
                    ? (a = this.cr(e, p.path, p.children, r, i, c))
                    : (Object(o.a)(p.source.fromServer, 'Unknown source.'),
                      (s = p.source.tagged || e.getServerCache().isFiltered()),
                      (a = this.ur(e, p.path, p.children, r, i, s, c)));
                } else if (n.type === u.b.ACK_USER_WRITE) {
                  var d = n;
                  a = d.revert
                    ? this.hr(e, d.path, r, i, c)
                    : this.lr(e, d.path, d.affectedTree, r, i, c);
                } else {
                  if (n.type !== u.b.LISTEN_COMPLETE)
                    throw Object(o.b)('Unknown operation type: ' + n.type);
                  a = this.pr(e, n.path, r, c);
                }
                var f = c.getChanges();
                return t.dr(e, a, f), new g(a, f);
              }),
              (t.dr = function(t, e, n) {
                var r = e.getEventCache();
                if (r.isFullyInitialized()) {
                  var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                    o = t.getCompleteEventSnap();
                  (n.length > 0 ||
                    !t.getEventCache().isFullyInitialized() ||
                    (i && !r.getNode().equals(o)) ||
                    !r
                      .getNode()
                      .getPriority()
                      .equals(o.getPriority())) &&
                    n.push(h.a.valueChange(e.getCompleteEventSnap()));
                }
              }),
              (t.prototype.fr = function(t, e, n, r, a) {
                var s = t.getEventCache();
                if (null != n.shadowingWrite(e)) return t;
                var c = void 0,
                  u = void 0;
                if (e.isEmpty())
                  if (
                    (Object(o.a)(
                      t.getServerCache().isFullyInitialized(),
                      'If change path is empty, we must have complete server data'
                    ),
                    t.getServerCache().isFiltered())
                  ) {
                    var h = t.getCompleteServerSnap(),
                      l = h instanceof i.a ? h : i.a.EMPTY_NODE,
                      p = n.calcCompleteEventChildren(l);
                    c = this.or.updateFullNode(
                      t.getEventCache().getNode(),
                      p,
                      a
                    );
                  } else {
                    var d = n.calcCompleteEventCache(t.getCompleteServerSnap());
                    c = this.or.updateFullNode(
                      t.getEventCache().getNode(),
                      d,
                      a
                    );
                  }
                else {
                  var f = e.getFront();
                  if ('.priority' == f) {
                    Object(o.a)(
                      1 == e.getLength(),
                      "Can't have a priority with additional path components"
                    );
                    var _ = s.getNode();
                    u = t.getServerCache().getNode();
                    var y = n.calcEventCacheAfterServerOverwrite(e, _, u);
                    c = null != y ? this.or.updatePriority(_, y) : s.getNode();
                  } else {
                    var v = e.popFront(),
                      g = void 0;
                    if (s.isCompleteForChild(f)) {
                      u = t.getServerCache().getNode();
                      var m = n.calcEventCacheAfterServerOverwrite(
                        e,
                        s.getNode(),
                        u
                      );
                      g =
                        null != m
                          ? s
                              .getNode()
                              .getImmediateChild(f)
                              .updateChild(v, m)
                          : s.getNode().getImmediateChild(f);
                    } else g = n.calcCompleteChild(f, t.getServerCache());
                    c =
                      null != g
                        ? this.or.updateChild(s.getNode(), f, g, v, r, a)
                        : s.getNode();
                  }
                }
                return t.updateEventSnap(
                  c,
                  s.isFullyInitialized() || e.isEmpty(),
                  this.or.filtersNodes()
                );
              }),
              (t.prototype.sr = function(t, e, n, r, i, o, a) {
                var s,
                  c = t.getServerCache(),
                  u = o ? this.or : this.or.getIndexedFilter();
                if (e.isEmpty()) s = u.updateFullNode(c.getNode(), n, null);
                else if (u.filtersNodes() && !c.isFiltered()) {
                  var h = c.getNode().updateChild(e, n);
                  s = u.updateFullNode(c.getNode(), h, null);
                } else {
                  var l = e.getFront();
                  if (!c.isCompleteForPath(e) && e.getLength() > 1) return t;
                  var p = e.popFront(),
                    d = c.getNode().getImmediateChild(l),
                    f = d.updateChild(p, n);
                  s =
                    '.priority' == l
                      ? u.updatePriority(c.getNode(), f)
                      : u.updateChild(c.getNode(), l, f, p, y, null);
                }
                var _ = t.updateServerSnap(
                    s,
                    c.isFullyInitialized() || e.isEmpty(),
                    u.filtersNodes()
                  ),
                  g = new v(r, _, i);
                return this.fr(_, e, r, g, a);
              }),
              (t.prototype.ar = function(t, e, n, r, o, a) {
                var s,
                  c,
                  u = t.getEventCache(),
                  h = new v(r, t, o);
                if (e.isEmpty())
                  (c = this.or.updateFullNode(
                    t.getEventCache().getNode(),
                    n,
                    a
                  )),
                    (s = t.updateEventSnap(c, !0, this.or.filtersNodes()));
                else {
                  var l = e.getFront();
                  if ('.priority' === l)
                    (c = this.or.updatePriority(
                      t.getEventCache().getNode(),
                      n
                    )),
                      (s = t.updateEventSnap(
                        c,
                        u.isFullyInitialized(),
                        u.isFiltered()
                      ));
                  else {
                    var p = e.popFront(),
                      d = u.getNode().getImmediateChild(l),
                      f = void 0;
                    if (p.isEmpty()) f = n;
                    else {
                      var _ = h.getCompleteChild(l);
                      f =
                        null != _
                          ? '.priority' === p.getBack() &&
                            _.getChild(p.parent()).isEmpty()
                            ? _
                            : _.updateChild(p, n)
                          : i.a.EMPTY_NODE;
                    }
                    if (d.equals(f)) s = t;
                    else {
                      var y = this.or.updateChild(u.getNode(), l, f, p, h, a);
                      s = t.updateEventSnap(
                        y,
                        u.isFullyInitialized(),
                        this.or.filtersNodes()
                      );
                    }
                  }
                }
                return s;
              }),
              (t._r = function(t, e) {
                return t.getEventCache().isCompleteForChild(e);
              }),
              (t.prototype.cr = function(e, n, r, i, o, a) {
                var s = this,
                  c = e;
                return (
                  r.foreach(function(r, u) {
                    var h = n.child(r);
                    t._r(e, h.getFront()) && (c = s.ar(c, h, u, i, o, a));
                  }),
                  r.foreach(function(r, u) {
                    var h = n.child(r);
                    t._r(e, h.getFront()) || (c = s.ar(c, h, u, i, o, a));
                  }),
                  c
                );
              }),
              (t.prototype.yr = function(t, e) {
                return (
                  e.foreach(function(e, n) {
                    t = t.updateChild(e, n);
                  }),
                  t
                );
              }),
              (t.prototype.ur = function(t, e, n, r, i, o, a) {
                var s = this;
                if (
                  t
                    .getServerCache()
                    .getNode()
                    .isEmpty() &&
                  !t.getServerCache().isFullyInitialized()
                )
                  return t;
                var c,
                  u = t;
                c = e.isEmpty() ? n : d.a.Empty.setTree(e, n);
                var h = t.getServerCache().getNode();
                return (
                  c.children.inorderTraversal(function(e, n) {
                    if (h.hasChild(e)) {
                      var c = t
                          .getServerCache()
                          .getNode()
                          .getImmediateChild(e),
                        l = s.yr(c, n);
                      u = s.sr(u, new f.a(e), l, r, i, o, a);
                    }
                  }),
                  c.children.inorderTraversal(function(e, n) {
                    var c =
                      !t.getServerCache().isCompleteForChild(e) &&
                      null == n.value;
                    if (!h.hasChild(e) && !c) {
                      var l = t
                          .getServerCache()
                          .getNode()
                          .getImmediateChild(e),
                        p = s.yr(l, n);
                      u = s.sr(u, new f.a(e), p, r, i, o, a);
                    }
                  }),
                  u
                );
              }),
              (t.prototype.lr = function(t, e, n, r, i, o) {
                if (null != r.shadowingWrite(e)) return t;
                var a = t.getServerCache().isFiltered(),
                  s = t.getServerCache();
                if (null != n.value) {
                  if (
                    (e.isEmpty() && s.isFullyInitialized()) ||
                    s.isCompleteForPath(e)
                  )
                    return this.sr(t, e, s.getNode().getChild(e), r, i, a, o);
                  if (e.isEmpty()) {
                    var c = d.a.Empty;
                    return (
                      s.getNode().forEachChild(p.a, function(t, e) {
                        c = c.set(new f.a(t), e);
                      }),
                      this.ur(t, e, c, r, i, a, o)
                    );
                  }
                  return t;
                }
                var u = d.a.Empty;
                return (
                  n.foreach(function(t, n) {
                    var r = e.child(t);
                    s.isCompleteForPath(r) &&
                      (u = u.set(t, s.getNode().getChild(r)));
                  }),
                  this.ur(t, e, u, r, i, a, o)
                );
              }),
              (t.prototype.pr = function(t, e, n, r) {
                var i = t.getServerCache(),
                  o = t.updateServerSnap(
                    i.getNode(),
                    i.isFullyInitialized() || e.isEmpty(),
                    i.isFiltered()
                  );
                return this.fr(o, e, n, y, r);
              }),
              (t.prototype.hr = function(t, e, n, r, a) {
                var s;
                if (null != n.shadowingWrite(e)) return t;
                var c = new v(n, t, r),
                  u = t.getEventCache().getNode(),
                  h = void 0;
                if (e.isEmpty() || '.priority' === e.getFront()) {
                  var l = void 0;
                  if (t.getServerCache().isFullyInitialized())
                    l = n.calcCompleteEventCache(t.getCompleteServerSnap());
                  else {
                    var p = t.getServerCache().getNode();
                    Object(o.a)(
                      p instanceof i.a,
                      'serverChildren would be complete if leaf node'
                    ),
                      (l = n.calcCompleteEventChildren(p));
                  }
                  (l = l), (h = this.or.updateFullNode(u, l, a));
                } else {
                  var d = e.getFront(),
                    _ = n.calcCompleteChild(d, t.getServerCache());
                  null == _ &&
                    t.getServerCache().isCompleteForChild(d) &&
                    (_ = u.getImmediateChild(d)),
                    (h =
                      null != _
                        ? this.or.updateChild(u, d, _, e.popFront(), c, a)
                        : t
                            .getEventCache()
                            .getNode()
                            .hasChild(d)
                          ? this.or.updateChild(
                              u,
                              d,
                              i.a.EMPTY_NODE,
                              e.popFront(),
                              c,
                              a
                            )
                          : u),
                    h.isEmpty() &&
                      t.getServerCache().isFullyInitialized() &&
                      ((s = n.calcCompleteEventCache(
                        t.getCompleteServerSnap()
                      )),
                      s.isLeafNode() && (h = this.or.updateFullNode(h, s, a)));
                }
                return (
                  (s =
                    t.getServerCache().isFullyInitialized() ||
                    null != n.shadowingWrite(f.a.Empty)),
                  t.updateEventSnap(h, s, this.or.filtersNodes())
                );
              }),
              t
            );
          })(),
          b = n(7),
          C = (function() {
            function t(t) {
              (this.vr = t), (this.qe = this.vr.getQueryParams().getIndex());
            }
            return (
              (t.prototype.generateEventsForChanges = function(t, e, n) {
                var r = this,
                  i = [],
                  o = [];
                return (
                  t.forEach(function(t) {
                    t.type === h.a.CHILD_CHANGED &&
                      r.qe.indexedValueChanged(t.oldSnap, t.snapshotNode) &&
                      o.push(h.a.childMovedChange(t.childName, t.snapshotNode));
                  }),
                  this.gr(i, h.a.CHILD_REMOVED, t, n, e),
                  this.gr(i, h.a.CHILD_ADDED, t, n, e),
                  this.gr(i, h.a.CHILD_MOVED, o, n, e),
                  this.gr(i, h.a.CHILD_CHANGED, t, n, e),
                  this.gr(i, h.a.VALUE, t, n, e),
                  i
                );
              }),
              (t.prototype.gr = function(t, e, n, r, i) {
                var o = this,
                  a = n.filter(function(t) {
                    return t.type === e;
                  });
                a.sort(this.mr.bind(this)),
                  a.forEach(function(e) {
                    var n = o.br(e, i);
                    r.forEach(function(r) {
                      r.respondsTo(e.type) && t.push(r.createEvent(n, o.vr));
                    });
                  });
              }),
              (t.prototype.br = function(t, e) {
                return 'value' === t.type || 'child_removed' === t.type
                  ? t
                  : ((t.prevName = e.getPredecessorChildName(
                      t.childName,
                      t.snapshotNode,
                      this.qe
                    )),
                    t);
              }),
              (t.prototype.mr = function(t, e) {
                if (null == t.childName || null == e.childName)
                  throw Object(o.b)('Should only compare child_ events.');
                var n = new b.a(t.childName, t.snapshotNode),
                  r = new b.a(e.childName, e.snapshotNode);
                return this.qe.compare(n, r);
              }),
              t
            );
          })(),
          E = n(5),
          O = (function() {
            function t(t, e) {
              (this.vr = t), (this.Cr = []);
              var n = this.vr.getQueryParams(),
                o = new c.a(n.getIndex()),
                a = n.getNodeFilter();
              this.Er = new m(a);
              var u = e.getServerCache(),
                h = e.getEventCache(),
                l = o.updateFullNode(i.a.EMPTY_NODE, u.getNode(), null),
                p = a.updateFullNode(i.a.EMPTY_NODE, h.getNode(), null),
                d = new r(l, u.isFullyInitialized(), o.filtersNodes()),
                f = new r(p, h.isFullyInitialized(), a.filtersNodes());
              (this.rr = new s(f, d)), (this.Or = new C(this.vr));
            }
            return (
              (t.prototype.getQuery = function() {
                return this.vr;
              }),
              (t.prototype.getServerCache = function() {
                return this.rr.getServerCache().getNode();
              }),
              (t.prototype.getCompleteServerCache = function(t) {
                var e = this.rr.getCompleteServerSnap();
                return e &&
                  (this.vr.getQueryParams().loadsAllData() ||
                    (!t.isEmpty() &&
                      !e.getImmediateChild(t.getFront()).isEmpty()))
                  ? e.getChild(t)
                  : null;
              }),
              (t.prototype.isEmpty = function() {
                return 0 === this.Cr.length;
              }),
              (t.prototype.addEventRegistration = function(t) {
                this.Cr.push(t);
              }),
              (t.prototype.removeEventRegistration = function(t, e) {
                var n = [];
                if (e) {
                  Object(o.a)(
                    null == t,
                    'A cancel should cancel all event registrations.'
                  );
                  var r = this.vr.path;
                  this.Cr.forEach(function(t) {
                    e = e;
                    var i = t.createCancelEvent(e, r);
                    i && n.push(i);
                  });
                }
                if (t) {
                  for (var i = [], a = 0; a < this.Cr.length; ++a) {
                    var s = this.Cr[a];
                    if (s.matches(t)) {
                      if (t.hasAnyCallback()) {
                        i = i.concat(this.Cr.slice(a + 1));
                        break;
                      }
                    } else i.push(s);
                  }
                  this.Cr = i;
                } else this.Cr = [];
                return n;
              }),
              (t.prototype.applyOperation = function(t, e, n) {
                t.type === u.b.MERGE &&
                  null !== t.source.queryId &&
                  (Object(o.a)(
                    this.rr.getCompleteServerSnap(),
                    'We should always have a full cache before handling merges'
                  ),
                  Object(o.a)(
                    this.rr.getCompleteEventSnap(),
                    'Missing event cache, even though we have a server cache'
                  ));
                var r = this.rr,
                  i = this.Er.applyOperation(r, t, e, n);
                return (
                  this.Er.assertIndexed(i.viewCache),
                  Object(o.a)(
                    i.viewCache.getServerCache().isFullyInitialized() ||
                      !r.getServerCache().isFullyInitialized(),
                    'Once a server snap is complete, it should never go back'
                  ),
                  (this.rr = i.viewCache),
                  this.wr(
                    i.changes,
                    i.viewCache.getEventCache().getNode(),
                    null
                  )
                );
              }),
              (t.prototype.getInitialEvents = function(t) {
                var e = this.rr.getEventCache(),
                  n = [];
                return (
                  e.getNode().isLeafNode() ||
                    e.getNode().forEachChild(E.a, function(t, e) {
                      n.push(h.a.childAddedChange(t, e));
                    }),
                  e.isFullyInitialized() &&
                    n.push(h.a.valueChange(e.getNode())),
                  this.wr(n, e.getNode(), t)
                );
              }),
              (t.prototype.wr = function(t, e, n) {
                var r = n ? [n] : this.Cr;
                return this.Or.generateEventsForChanges(t, e, r);
              }),
              t
            );
          })();
        n.d(e, 'a', function() {
          return S;
        });
        var w,
          S = (function() {
            function t() {
              this.Sr = {};
            }
            return (
              Object.defineProperty(t, '__referenceConstructor', {
                get: function() {
                  return Object(o.a)(w, 'Reference.ts has not been loaded'), w;
                },
                set: function(t) {
                  Object(o.a)(
                    !w,
                    '__referenceConstructor has already been defined'
                  ),
                    (w = t);
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.isEmpty = function() {
                return Object(a.j)(this.Sr);
              }),
              (t.prototype.applyOperation = function(t, e, n) {
                var r = t.source.queryId;
                if (null !== r) {
                  var i = Object(a.l)(this.Sr, r);
                  return (
                    Object(o.a)(
                      null != i,
                      'SyncTree gave us an op for an invalid query.'
                    ),
                    i.applyOperation(t, e, n)
                  );
                }
                var s = [];
                return (
                  Object(a.f)(this.Sr, function(r, i) {
                    s = s.concat(i.applyOperation(t, e, n));
                  }),
                  s
                );
              }),
              (t.prototype.addEventRegistration = function(t, e, n, o, c) {
                var u = t.queryIdentifier(),
                  h = Object(a.l)(this.Sr, u);
                if (!h) {
                  var l = n.calcCompleteEventCache(c ? o : null),
                    p = !1;
                  l
                    ? (p = !0)
                    : o instanceof i.a
                      ? ((l = n.calcCompleteEventChildren(o)), (p = !1))
                      : ((l = i.a.EMPTY_NODE), (p = !1));
                  var d = new s(new r(l, p, !1), new r(o, c, !1));
                  (h = new O(t, d)), (this.Sr[u] = h);
                }
                return h.addEventRegistration(e), h.getInitialEvents(e);
              }),
              (t.prototype.removeEventRegistration = function(e, n, r) {
                var i = e.queryIdentifier(),
                  o = [],
                  s = [],
                  c = this.hasCompleteView();
                if ('default' === i) {
                  var u = this;
                  Object(a.f)(this.Sr, function(t, e) {
                    (s = s.concat(e.removeEventRegistration(n, r))),
                      e.isEmpty() &&
                        (delete u.Sr[t],
                        e
                          .getQuery()
                          .getQueryParams()
                          .loadsAllData() || o.push(e.getQuery()));
                  });
                } else {
                  var h = Object(a.l)(this.Sr, i);
                  h &&
                    ((s = s.concat(h.removeEventRegistration(n, r))),
                    h.isEmpty() &&
                      (delete this.Sr[i],
                      h
                        .getQuery()
                        .getQueryParams()
                        .loadsAllData() || o.push(h.getQuery())));
                }
                return (
                  c &&
                    !this.hasCompleteView() &&
                    o.push(new t.__referenceConstructor(e.repo, e.path)),
                  { removed: o, events: s }
                );
              }),
              (t.prototype.getQueryViews = function() {
                var t = this;
                return Object.keys(this.Sr)
                  .map(function(e) {
                    return t.Sr[e];
                  })
                  .filter(function(t) {
                    return !t
                      .getQuery()
                      .getQueryParams()
                      .loadsAllData();
                  });
              }),
              (t.prototype.getCompleteServerCache = function(t) {
                var e = null;
                return (
                  Object(a.f)(this.Sr, function(n, r) {
                    e = e || r.getCompleteServerCache(t);
                  }),
                  e
                );
              }),
              (t.prototype.viewForQuery = function(t) {
                if (t.getQueryParams().loadsAllData())
                  return this.getCompleteView();
                var e = t.queryIdentifier();
                return Object(a.l)(this.Sr, e);
              }),
              (t.prototype.viewExistsForQuery = function(t) {
                return null != this.viewForQuery(t);
              }),
              (t.prototype.hasCompleteView = function() {
                return null != this.getCompleteView();
              }),
              (t.prototype.getCompleteView = function() {
                return (
                  Object(a.e)(this.Sr, function(t) {
                    return t
                      .getQuery()
                      .getQueryParams()
                      .loadsAllData();
                  }) || null
                );
              }),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        var r = n(9),
          i = n(2),
          o = n(8),
          a = n(0),
          s = n(1),
          c = n(4),
          u = (function() {
            function t(t) {
              (this.Tr = t),
                (this.jr = {}),
                Object(a.a)(
                  Array.isArray(t) && t.length > 0,
                  'Requires a non-empty array'
                );
            }
            return (
              (t.prototype.trigger = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                  e[n - 1] = arguments[n];
                if (Array.isArray(this.jr[t]))
                  for (var r = this.jr[t].slice(), i = 0; i < r.length; i++)
                    r[i].callback.apply(r[i].context, e);
              }),
              (t.prototype.on = function(t, e, n) {
                this.Nr(t),
                  (this.jr[t] = this.jr[t] || []),
                  this.jr[t].push({ callback: e, context: n });
                var r = this.getInitialEvent(t);
                r && e.apply(n, r);
              }),
              (t.prototype.off = function(t, e, n) {
                this.Nr(t);
                for (var r = this.jr[t] || [], i = 0; i < r.length; i++)
                  if (r[i].callback === e && (!n || n === r[i].context))
                    return void r.splice(i, 1);
              }),
              (t.prototype.Nr = function(t) {
                Object(a.a)(
                  this.Tr.find(function(e) {
                    return e === t;
                  }),
                  'Unknown event: ' + t
                );
              }),
              t
            );
          })(),
          h =
            (this && this.__extends) ||
            (function() {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(t, e) {
                    t.__proto__ = e;
                  }) ||
                function(t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
              return function(e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          l = (function(t) {
            function e() {
              var e,
                n,
                r = t.call(this, ['visible']) || this;
              return (
                'undefined' != typeof document &&
                  void 0 !== document.addEventListener &&
                  (void 0 !== document.hidden
                    ? ((n = 'visibilitychange'), (e = 'hidden'))
                    : void 0 !== document.mozHidden
                      ? ((n = 'mozvisibilitychange'), (e = 'mozHidden'))
                      : void 0 !== document.msHidden
                        ? ((n = 'msvisibilitychange'), (e = 'msHidden'))
                        : void 0 !== document.webkitHidden &&
                          ((n = 'webkitvisibilitychange'),
                          (e = 'webkitHidden'))),
                (r.Ir = !0),
                n &&
                  document.addEventListener(
                    n,
                    function() {
                      var t = !document[e];
                      t !== r.Ir && ((r.Ir = t), r.trigger('visible', t));
                    },
                    !1
                  ),
                r
              );
            }
            return (
              h(e, t),
              (e.getInstance = function() {
                return new e();
              }),
              (e.prototype.getInitialEvent = function(t) {
                return (
                  Object(a.a)('visible' === t, 'Unknown event type: ' + t),
                  [this.Ir]
                );
              }),
              e
            );
          })(u),
          p = n(13),
          d =
            (this && this.__extends) ||
            (function() {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(t, e) {
                    t.__proto__ = e;
                  }) ||
                function(t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
              return function(e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          f = (function(t) {
            function e() {
              var e = t.call(this, ['online']) || this;
              return (
                (e.Pr = !0),
                'undefined' == typeof window ||
                  void 0 === window.addEventListener ||
                  Object(p.a)() ||
                  (window.addEventListener(
                    'online',
                    function() {
                      e.Pr || ((e.Pr = !0), e.trigger('online', !0));
                    },
                    !1
                  ),
                  window.addEventListener(
                    'offline',
                    function() {
                      e.Pr && ((e.Pr = !1), e.trigger('online', !1));
                    },
                    !1
                  )),
                e
              );
            }
            return (
              d(e, t),
              (e.getInstance = function() {
                return new e();
              }),
              (e.prototype.getInitialEvent = function(t) {
                return (
                  Object(a.a)('online' === t, 'Unknown event type: ' + t),
                  [this.Pr]
                );
              }),
              (e.prototype.currentlyOnline = function() {
                return this.Pr;
              }),
              e
            );
          })(u),
          _ =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          y = function(t) {
            var e = {},
              n = {},
              r = {},
              i = '';
            try {
              var a = t.split('.');
              (e = Object(o.a)(Object(s.e)(a[0]) || '')),
                (n = Object(o.a)(Object(s.e)(a[1]) || '')),
                (i = a[2]),
                (r = n.d || {}),
                delete n.d;
            } catch (t) {}
            return { header: e, claims: n, data: r, signature: i };
          },
          v = function(t) {
            var e = y(t),
              n = e.claims;
            return (
              !!e.signature &&
              !!n &&
              'object' === (void 0 === n ? 'undefined' : _(n)) &&
              n.hasOwnProperty('iat')
            );
          },
          g = function(t) {
            var e = y(t).claims;
            return (
              'object' === (void 0 === e ? 'undefined' : _(e)) && !0 === e.admin
            );
          },
          m = n(52),
          b = n(17),
          C = n(55);
        n.d(e, 'a', function() {
          return T;
        });
        var E =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          O =
            (this && this.__extends) ||
            (function() {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(t, e) {
                    t.__proto__ = e;
                  }) ||
                function(t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
              return function(e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })(),
          w = 1e3,
          S = 3e5,
          T = (function(t) {
            function e(n, r, i, o, a, c) {
              var u = t.call(this) || this;
              if (
                ((u.pe = n),
                (u.de = r),
                (u.Se = i),
                (u.Te = o),
                (u.fe = a),
                (u.Rr = c),
                (u.id = e.Dr++),
                (u._e = Object(s.t)('p:' + u.id + ':')),
                (u.xr = {}),
                (u.ye = {}),
                (u.kr = []),
                (u.Fr = 0),
                (u.Ar = []),
                (u.Lr = !1),
                (u.Mr = w),
                (u.Wr = S),
                (u.qr = null),
                (u.lastSessionId = null),
                (u.Qr = null),
                (u.Ir = !1),
                (u.Ur = {}),
                (u.Vr = 0),
                (u.Br = null),
                (u.Hr = null),
                (u.Kr = !1),
                (u.Yr = 0),
                (u.zr = !0),
                (u.Gr = null),
                (u.Xr = null),
                c && !Object(p.b)())
              )
                throw Error(
                  'Auth override specified in options, but not supported on non Node.js platforms'
                );
              return (
                u.$r(0),
                l.getInstance().on('visible', u.Jr, u),
                -1 === n.host.indexOf('fblocal') &&
                  f.getInstance().on('online', u.Zr, u),
                u
              );
            }
            return (
              O(e, t),
              (e.prototype.sendRequest = function(t, e, n) {
                var r = ++this.Vr,
                  i = { r: r, a: t, b: e };
                this._e(Object(o.b)(i)),
                  Object(a.a)(
                    this.Lr,
                    "sendRequest call when we're not connected not allowed."
                  ),
                  this.Br.sendRequest(i),
                  n && (this.Ur[r] = n);
              }),
              (e.prototype.listen = function(t, e, n, r) {
                var i = t.queryIdentifier(),
                  o = '' + t.path;
                this._e('Listen called for ' + o + ' ' + i),
                  (this.ye[o] = this.ye[o] || {}),
                  Object(a.a)(
                    t.getQueryParams().isDefault() ||
                      !t.getQueryParams().loadsAllData(),
                    'listen() called for non-default but complete query'
                  ),
                  Object(a.a)(
                    !this.ye[o][i],
                    'listen() called twice for same path/queryId.'
                  );
                var s = { onComplete: r, hashFn: e, query: t, tag: n };
                (this.ye[o][i] = s), this.Lr && this.ti(s);
              }),
              (e.prototype.ti = function(t) {
                var n = this,
                  r = t.query,
                  i = '' + r.path,
                  o = r.queryIdentifier();
                this._e('Listen on ' + i + ' for ' + o);
                var a = { p: i };
                t.tag && ((a.q = r.queryObject()), (a.t = t.tag)),
                  (a.h = t.hashFn()),
                  this.sendRequest('q', a, function(a) {
                    var s = a.d,
                      c = a.s;
                    e.ei(s, r),
                      (n.ye[i] && n.ye[i][o]) === t &&
                        (n._e('listen response', a),
                        'ok' !== c && n.ni(i, o),
                        t.onComplete && t.onComplete(c, s));
                  });
              }),
              (e.ei = function(t, e) {
                if (
                  t &&
                  'object' === (void 0 === t ? 'undefined' : E(t)) &&
                  Object(i.b)(t, 'w')
                ) {
                  var n = Object(i.l)(t, 'w');
                  if (Array.isArray(n) && ~n.indexOf('no_index')) {
                    var r =
                        '".indexOn": "' + e.getQueryParams().getIndex() + '"',
                      o = '' + e.path;
                    Object(s.B)(
                      'Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ' +
                        r +
                        ' at ' +
                        o +
                        ' to your security rules for better performance.'
                    );
                  }
                }
              }),
              (e.prototype.refreshAuthToken = function(t) {
                (this.Hr = t),
                  this._e('Auth token refreshed'),
                  this.Hr
                    ? this.tryAuth()
                    : this.Lr && this.sendRequest('unauth', {}, function() {}),
                  this.ri(t);
              }),
              (e.prototype.ri = function(t) {
                ((t && 40 === t.length) || g(t)) &&
                  (this._e(
                    'Admin auth credential detected.  Reducing max reconnect time.'
                  ),
                  (this.Wr = 3e4));
              }),
              (e.prototype.tryAuth = function() {
                var t = this;
                if (this.Lr && this.Hr) {
                  var e = this.Hr,
                    n = v(e) ? 'auth' : 'gauth',
                    r = { cred: e };
                  null === this.Rr
                    ? (r.noauth = !0)
                    : 'object' === E(this.Rr) && (r.authvar = this.Rr),
                    this.sendRequest(n, r, function(n) {
                      var r = n.s,
                        i = n.d || 'error';
                      t.Hr === e && ('ok' === r ? (t.Yr = 0) : t.ii(r, i));
                    });
                }
              }),
              (e.prototype.unlisten = function(t, e) {
                var n = '' + t.path,
                  r = t.queryIdentifier();
                this._e('Unlisten called for ' + n + ' ' + r),
                  Object(a.a)(
                    t.getQueryParams().isDefault() ||
                      !t.getQueryParams().loadsAllData(),
                    'unlisten() called for non-default but complete query'
                  ),
                  this.ni(n, r) && this.Lr && this.oi(n, r, t.queryObject(), e);
              }),
              (e.prototype.oi = function(t, e, n, r) {
                this._e('Unlisten on ' + t + ' for ' + e);
                var i = { p: t };
                r && ((i.q = n), (i.t = r)), this.sendRequest('n', i);
              }),
              (e.prototype.onDisconnectPut = function(t, e, n) {
                this.Lr
                  ? this.ai('o', t, e, n)
                  : this.Ar.push({
                      pathString: t,
                      action: 'o',
                      data: e,
                      onComplete: n
                    });
              }),
              (e.prototype.onDisconnectMerge = function(t, e, n) {
                this.Lr
                  ? this.ai('om', t, e, n)
                  : this.Ar.push({
                      pathString: t,
                      action: 'om',
                      data: e,
                      onComplete: n
                    });
              }),
              (e.prototype.onDisconnectCancel = function(t, e) {
                this.Lr
                  ? this.ai('oc', t, null, e)
                  : this.Ar.push({
                      pathString: t,
                      action: 'oc',
                      data: null,
                      onComplete: e
                    });
              }),
              (e.prototype.ai = function(t, e, n, r) {
                var i = { p: e, d: n };
                this._e('onDisconnect ' + t, i),
                  this.sendRequest(t, i, function(t) {
                    r &&
                      setTimeout(function() {
                        r(t.s, t.d);
                      }, Math.floor(0));
                  });
              }),
              (e.prototype.put = function(t, e, n, r) {
                this.putInternal('p', t, e, n, r);
              }),
              (e.prototype.merge = function(t, e, n, r) {
                this.putInternal('m', t, e, n, r);
              }),
              (e.prototype.putInternal = function(t, e, n, r, i) {
                var o = { p: e, d: n };
                void 0 !== i && (o.h = i),
                  this.kr.push({ action: t, request: o, onComplete: r }),
                  this.Fr++;
                var a = this.kr.length - 1;
                this.Lr ? this.si(a) : this._e('Buffering put: ' + e);
              }),
              (e.prototype.si = function(t) {
                var e = this,
                  n = this.kr[t].action,
                  r = this.kr[t].request,
                  i = this.kr[t].onComplete;
                (this.kr[t].queued = this.Lr),
                  this.sendRequest(n, r, function(r) {
                    e._e(n + ' response', r),
                      delete e.kr[t],
                      e.Fr--,
                      0 === e.Fr && (e.kr = []),
                      i && i(r.s, r.d);
                  });
              }),
              (e.prototype.reportStats = function(t) {
                var e = this;
                if (this.Lr) {
                  var n = { c: t };
                  this._e('reportStats', n),
                    this.sendRequest('s', n, function(t) {
                      if ('ok' !== t.s) {
                        var n = t.d;
                        e._e('reportStats', 'Error sending stats: ' + n);
                      }
                    });
                }
              }),
              (e.prototype.ci = function(t) {
                if ('r' in t) {
                  this._e('from server: ' + Object(o.b)(t));
                  var e = t.r,
                    n = this.Ur[e];
                  n && (delete this.Ur[e], n(t.b));
                } else {
                  if ('error' in t)
                    throw 'A server-side error has occurred: ' + t.error;
                  'a' in t && this.ui(t.a, t.b);
                }
              }),
              (e.prototype.ui = function(t, e) {
                this._e('handleServerMessage', t, e),
                  'd' === t
                    ? this.de(e.p, e.d, !1, e.t)
                    : 'm' === t
                      ? this.de(e.p, e.d, !0, e.t)
                      : 'c' === t
                        ? this.hi(e.p, e.q)
                        : 'ac' === t
                          ? this.ii(e.s, e.d)
                          : 'sd' === t
                            ? this.li(e)
                            : Object(s.k)(
                                'Unrecognized action received from server: ' +
                                  Object(o.b)(t) +
                                  '\nAre you using the latest client?'
                              );
              }),
              (e.prototype.pi = function(t, e) {
                this._e('connection ready'),
                  (this.Lr = !0),
                  (this.Xr = new Date().getTime()),
                  this.di(t),
                  (this.lastSessionId = e),
                  this.zr && this.fi(),
                  this._i(),
                  (this.zr = !1),
                  this.Se(!0);
              }),
              (e.prototype.$r = function(t) {
                var e = this;
                Object(a.a)(
                  !this.Br,
                  "Scheduling a connect when we're already connected/ing?"
                ),
                  this.Qr && clearTimeout(this.Qr),
                  (this.Qr = setTimeout(function() {
                    (e.Qr = null), e.yi();
                  }, Math.floor(t)));
              }),
              (e.prototype.Jr = function(t) {
                t &&
                  !this.Ir &&
                  this.Mr === this.Wr &&
                  (this._e('Window became visible.  Reducing delay.'),
                  (this.Mr = w),
                  this.Br || this.$r(0)),
                  (this.Ir = t);
              }),
              (e.prototype.Zr = function(t) {
                t
                  ? (this._e('Browser went online.'),
                    (this.Mr = w),
                    this.Br || this.$r(0))
                  : (this._e('Browser went offline.  Killing connection.'),
                    this.Br && this.Br.close());
              }),
              (e.prototype.vi = function() {
                if (
                  (this._e('data client disconnected'),
                  (this.Lr = !1),
                  (this.Br = null),
                  this.gi(),
                  (this.Ur = {}),
                  this.mi())
                ) {
                  if (this.Ir) {
                    if (this.Xr) {
                      var t = new Date().getTime() - this.Xr;
                      t > 3e4 && (this.Mr = w), (this.Xr = null);
                    }
                  } else
                    this._e("Window isn't visible.  Delaying reconnect."),
                      (this.Mr = this.Wr),
                      (this.Gr = new Date().getTime());
                  var e = new Date().getTime() - this.Gr,
                    n = Math.max(0, this.Mr - e);
                  (n = Math.random() * n),
                    this._e('Trying to reconnect in ' + n + 'ms'),
                    this.$r(n),
                    (this.Mr = Math.min(this.Wr, 1.3 * this.Mr));
                }
                this.Se(!1);
              }),
              (e.prototype.yi = function() {
                if (this.mi()) {
                  this._e('Making a connection attempt'),
                    (this.Gr = new Date().getTime()),
                    (this.Xr = null);
                  var t = this.ci.bind(this),
                    n = this.pi.bind(this),
                    r = this.vi.bind(this),
                    i = this.id + ':' + e.bi++,
                    o = this,
                    c = this.lastSessionId,
                    u = !1,
                    h = null,
                    l = function() {
                      h ? h.close() : ((u = !0), r());
                    },
                    p = function(t) {
                      Object(a.a)(
                        h,
                        "sendRequest call when we're not connected not allowed."
                      ),
                        h.sendRequest(t);
                    };
                  this.Br = { close: l, sendRequest: p };
                  var d = this.Kr;
                  (this.Kr = !1),
                    this.fe
                      .getToken(d)
                      .then(function(e) {
                        u
                          ? Object(s.s)('getToken() completed but was canceled')
                          : (Object(s.s)(
                              'getToken() completed. Creating connection.'
                            ),
                            (o.Hr = e && e.accessToken),
                            (h = new m.a(
                              i,
                              o.pe,
                              t,
                              n,
                              r,
                              function(t) {
                                Object(s.B)(t + ' (' + o.pe + ')'),
                                  o.interrupt('server_kill');
                              },
                              c
                            )));
                      })
                      .then(null, function(t) {
                        o._e('Failed to get token: ' + t),
                          u || (b.a.NODE_ADMIN && Object(s.B)(t), l());
                      });
                }
              }),
              (e.prototype.interrupt = function(t) {
                Object(s.s)('Interrupting connection for reason: ' + t),
                  (this.xr[t] = !0),
                  this.Br
                    ? this.Br.close()
                    : (this.Qr && (clearTimeout(this.Qr), (this.Qr = null)),
                      this.Lr && this.vi());
              }),
              (e.prototype.resume = function(t) {
                Object(s.s)('Resuming connection for reason: ' + t),
                  delete this.xr[t],
                  Object(i.j)(this.xr) &&
                    ((this.Mr = w), this.Br || this.$r(0));
              }),
              (e.prototype.di = function(t) {
                var e = t - new Date().getTime();
                this.Te({ serverTimeOffset: e });
              }),
              (e.prototype.gi = function() {
                for (var t = 0; t < this.kr.length; t++) {
                  var e = this.kr[t];
                  e &&
                    'h' in e.request &&
                    e.queued &&
                    (e.onComplete && e.onComplete('disconnect'),
                    delete this.kr[t],
                    this.Fr--);
                }
                0 === this.Fr && (this.kr = []);
              }),
              (e.prototype.hi = function(t, e) {
                var n;
                n = e
                  ? e
                      .map(function(t) {
                        return Object(s.d)(t);
                      })
                      .join('$')
                  : 'default';
                var r = this.ni(t, n);
                r && r.onComplete && r.onComplete('permission_denied');
              }),
              (e.prototype.ni = function(t, e) {
                var n,
                  r = '' + new c.a(t);
                return (
                  void 0 !== this.ye[r]
                    ? ((n = this.ye[r][e]),
                      delete this.ye[r][e],
                      0 === Object(i.h)(this.ye[r]) && delete this.ye[r])
                    : (n = void 0),
                  n
                );
              }),
              (e.prototype.ii = function(t, e) {
                Object(s.s)('Auth token revoked: ' + t + '/' + e),
                  (this.Hr = null),
                  (this.Kr = !0),
                  this.Br.close(),
                  ('invalid_token' !== t && 'permission_denied' !== t) ||
                    (++this.Yr >= 3 &&
                      ((this.Mr = 3e4), this.fe.notifyForInvalidToken()));
              }),
              (e.prototype.li = function(t) {
                this.qr
                  ? this.qr(t)
                  : 'msg' in t &&
                    'undefined' != typeof console &&
                    console.log(
                      'FIREBASE: ' + t.msg.replace('\n', '\nFIREBASE: ')
                    );
              }),
              (e.prototype._i = function() {
                var t = this;
                this.tryAuth(),
                  Object(i.f)(this.ye, function(e, n) {
                    Object(i.f)(n, function(e, n) {
                      t.ti(n);
                    });
                  });
                for (var e = 0; e < this.kr.length; e++)
                  this.kr[e] && this.si(e);
                for (; this.Ar.length; ) {
                  var n = this.Ar.shift();
                  this.ai(n.action, n.pathString, n.data, n.onComplete);
                }
              }),
              (e.prototype.fi = function() {
                var t = {},
                  e = 'js';
                b.a.NODE_ADMIN
                  ? (e = 'admin_node')
                  : b.a.NODE_CLIENT && (e = 'node'),
                  (t[
                    'sdk.' + e + '.' + r.default.SDK_VERSION.replace(/\./g, '-')
                  ] = 1),
                  Object(p.a)()
                    ? (t['framework.cordova'] = 1)
                    : Object(p.c)() && (t['framework.reactnative'] = 1),
                  this.reportStats(t);
              }),
              (e.prototype.mi = function() {
                var t = f.getInstance().currentlyOnline();
                return Object(i.j)(this.xr) && t;
              }),
              (e.Dr = 0),
              (e.bi = 0),
              e
            );
          })(C.a);
      },
      function(t, e, n) {
        'use strict';
        var r = n(1),
          i = n(18),
          o = n(19),
          a = n(53),
          s = n(54),
          c = (function() {
            function t(t) {
              this.Ci(t);
            }
            return (
              Object.defineProperty(t, 'ALL_TRANSPORTS', {
                get: function() {
                  return [a.a, s.a];
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.Ci = function(e) {
                var n = s.a && s.a.isAvailable(),
                  i = n && !s.a.previouslyFailed();
                if (
                  (e.webSocketOnly &&
                    (n ||
                      Object(r.B)(
                        "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
                      ),
                    (i = !0)),
                  i)
                )
                  this.Ei = [s.a];
                else {
                  var o = (this.Ei = []);
                  Object(r.i)(t.ALL_TRANSPORTS, function(t, e) {
                    e && e.isAvailable() && o.push(e);
                  });
                }
              }),
              (t.prototype.initialTransport = function() {
                if (this.Ei.length > 0) return this.Ei[0];
                throw Error('No transports available');
              }),
              (t.prototype.upgradeTransport = function() {
                return this.Ei.length > 1 ? this.Ei[1] : null;
              }),
              t
            );
          })();
        n.d(e, 'a', function() {
          return u;
        });
        var u = (function() {
          function t(t, e, n, i, o, a, s) {
            (this.id = t),
              (this.pe = e),
              (this.Oi = n),
              (this.pi = i),
              (this.Ee = o),
              (this.wi = a),
              (this.lastSessionId = s),
              (this.connectionCount = 0),
              (this.pendingDataMessages = []),
              (this.Si = 0),
              (this._e = Object(r.t)('c:' + this.id + ':')),
              (this.Ti = new c(e)),
              this._e('Connection created'),
              this.ji();
          }
          return (
            (t.prototype.ji = function() {
              var t = this,
                e = this.Ti.initialTransport();
              (this.Ni = new e(this.Ii(), this.pe, void 0, this.lastSessionId)),
                (this.Pi = e.responsesRequiredToBeHealthy || 0);
              var n = this.Ri(this.Ni),
                i = this.Di(this.Ni);
              (this.xi = this.Ni),
                (this.ki = this.Ni),
                (this.Fi = null),
                (this.Ai = !1),
                setTimeout(function() {
                  t.Ni && t.Ni.open(n, i);
                }, Math.floor(0));
              var o = e.healthyTimeout || 0;
              o > 0 &&
                (this.Li = Object(r.x)(function() {
                  (t.Li = null),
                    t.Ai ||
                      (t.Ni && t.Ni.bytesReceived > 102400
                        ? (t._e(
                            'Connection exceeded healthy timeout but has received ' +
                              t.Ni.bytesReceived +
                              ' bytes.  Marking connection healthy.'
                          ),
                          (t.Ai = !0),
                          t.Ni.markConnectionHealthy())
                        : t.Ni && t.Ni.bytesSent > 10240
                          ? t._e(
                              'Connection exceeded healthy timeout but has sent ' +
                                t.Ni.bytesSent +
                                ' bytes.  Leaving connection alive.'
                            )
                          : (t._e(
                              'Closing unhealthy connection after timeout.'
                            ),
                            t.close()));
                }, Math.floor(o)));
            }),
            (t.prototype.Ii = function() {
              return 'c:' + this.id + ':' + this.connectionCount++;
            }),
            (t.prototype.Di = function(t) {
              var e = this;
              return function(n) {
                t === e.Ni
                  ? e.Mi(n)
                  : t === e.Fi
                    ? (e._e('Secondary connection lost.'), e.Wi())
                    : e._e('closing an old connection');
              };
            }),
            (t.prototype.Ri = function(t) {
              var e = this;
              return function(n) {
                2 != e.Si &&
                  (t === e.ki
                    ? e.qi(n)
                    : t === e.Fi
                      ? e.Qi(n)
                      : e._e('message on old connection'));
              };
            }),
            (t.prototype.sendRequest = function(t) {
              var e = { t: 'd', d: t };
              this.Ui(e);
            }),
            (t.prototype.tryCleanupConnection = function() {
              this.xi === this.Fi &&
                this.ki === this.Fi &&
                (this._e(
                  'cleaning up and promoting a connection: ' + this.Fi.connId
                ),
                (this.Ni = this.Fi),
                (this.Fi = null));
            }),
            (t.prototype.Vi = function(t) {
              if ('t' in t) {
                var e = t.t;
                'a' === e
                  ? this.Bi()
                  : 'r' === e
                    ? (this._e('Got a reset on secondary, closing it'),
                      this.Fi.close(),
                      (this.xi !== this.Fi && this.ki !== this.Fi) ||
                        this.close())
                    : 'o' === e &&
                      (this._e('got pong on secondary.'), this.Hi--, this.Bi());
              }
            }),
            (t.prototype.Qi = function(t) {
              var e = Object(r.w)('t', t),
                n = Object(r.w)('d', t);
              if ('c' == e) this.Vi(n);
              else {
                if ('d' != e) throw Error('Unknown protocol layer: ' + e);
                this.pendingDataMessages.push(n);
              }
            }),
            (t.prototype.Bi = function() {
              this.Hi <= 0
                ? (this._e('Secondary connection is healthy.'),
                  (this.Ai = !0),
                  this.Fi.markConnectionHealthy(),
                  this.Ki())
                : (this._e('sending ping on secondary.'),
                  this.Fi.send({ t: 'c', d: { t: 'p', d: {} } }));
            }),
            (t.prototype.Ki = function() {
              this.Fi.start(),
                this._e('sending client ack on secondary'),
                this.Fi.send({ t: 'c', d: { t: 'a', d: {} } }),
                this._e('Ending transmission on primary'),
                this.Ni.send({ t: 'c', d: { t: 'n', d: {} } }),
                (this.xi = this.Fi),
                this.tryCleanupConnection();
            }),
            (t.prototype.qi = function(t) {
              var e = Object(r.w)('t', t),
                n = Object(r.w)('d', t);
              'c' == e ? this.Yi(n) : 'd' == e && this.ci(n);
            }),
            (t.prototype.ci = function(t) {
              this.zi(), this.Oi(t);
            }),
            (t.prototype.zi = function() {
              this.Ai ||
                (--this.Pi <= 0 &&
                  (this._e('Primary connection is healthy.'),
                  (this.Ai = !0),
                  this.Ni.markConnectionHealthy()));
            }),
            (t.prototype.Yi = function(t) {
              var e = Object(r.w)('t', t);
              if ('d' in t) {
                var n = t.d;
                if ('h' === e) this.Gi(n);
                else if ('n' === e) {
                  this._e('recvd end transmission on primary'),
                    (this.ki = this.Fi);
                  for (var i = 0; i < this.pendingDataMessages.length; ++i)
                    this.ci(this.pendingDataMessages[i]);
                  (this.pendingDataMessages = []), this.tryCleanupConnection();
                } else
                  's' === e
                    ? this.Xi(n)
                    : 'r' === e
                      ? this.$i(n)
                      : 'e' === e
                        ? Object(r.k)('Server Error: ' + n)
                        : 'o' === e
                          ? (this._e('got pong on primary.'),
                            this.zi(),
                            this.Ji())
                          : Object(r.k)('Unknown control packet command: ' + e);
              }
            }),
            (t.prototype.Gi = function(t) {
              var e = t.ts,
                n = t.v,
                i = t.h;
              (this.sessionId = t.s),
                this.pe.updateHost(i),
                0 == this.Si &&
                  (this.Ni.start(),
                  this.Zi(this.Ni, e),
                  o.e !== n &&
                    Object(r.B)('Protocol version mismatch detected'),
                  this.to());
            }),
            (t.prototype.to = function() {
              var t = this.Ti.upgradeTransport();
              t && this.eo(t);
            }),
            (t.prototype.eo = function(t) {
              var e = this;
              (this.Fi = new t(this.Ii(), this.pe, this.sessionId)),
                (this.Hi = t.responsesRequiredToBeHealthy || 0);
              var n = this.Ri(this.Fi),
                i = this.Di(this.Fi);
              this.Fi.open(n, i),
                Object(r.x)(function() {
                  e.Fi && (e._e('Timed out trying to upgrade.'), e.Fi.close());
                }, Math.floor(6e4));
            }),
            (t.prototype.$i = function(t) {
              this._e('Reset packet received.  New host: ' + t),
                this.pe.updateHost(t),
                1 === this.Si ? this.close() : (this.no(), this.ji());
            }),
            (t.prototype.Zi = function(t, e) {
              var n = this;
              this._e('Realtime connection established.'),
                (this.Ni = t),
                (this.Si = 1),
                this.pi && (this.pi(e, this.sessionId), (this.pi = null)),
                0 === this.Pi
                  ? (this._e('Primary connection is healthy.'), (this.Ai = !0))
                  : Object(r.x)(function() {
                      n.Ji();
                    }, Math.floor(5e3));
            }),
            (t.prototype.Ji = function() {
              this.Ai ||
                1 !== this.Si ||
                (this._e('sending ping on primary.'),
                this.Ui({ t: 'c', d: { t: 'p', d: {} } }));
            }),
            (t.prototype.Wi = function() {
              var t = this.Fi;
              (this.Fi = null),
                (this.xi !== t && this.ki !== t) || this.close();
            }),
            (t.prototype.Mi = function(t) {
              (this.Ni = null),
                t || 0 !== this.Si
                  ? 1 === this.Si && this._e('Realtime connection lost.')
                  : (this._e('Realtime connection failed.'),
                    this.pe.isCacheableHost() &&
                      (i.a.remove('host:' + this.pe.host),
                      (this.pe.internalHost = this.pe.host))),
                this.close();
            }),
            (t.prototype.Xi = function(t) {
              this._e('Connection shutdown command received. Shutting down...'),
                this.wi && (this.wi(t), (this.wi = null)),
                (this.Ee = null),
                this.close();
            }),
            (t.prototype.Ui = function(t) {
              if (1 !== this.Si) throw 'Connection is not connected';
              this.xi.send(t);
            }),
            (t.prototype.close = function() {
              2 !== this.Si &&
                (this._e('Closing realtime connection.'),
                (this.Si = 2),
                this.no(),
                this.Ee && (this.Ee(), (this.Ee = null)));
            }),
            (t.prototype.no = function() {
              this._e('Shutting down all connections'),
                this.Ni && (this.Ni.close(), (this.Ni = null)),
                this.Fi && (this.Fi.close(), (this.Fi = null)),
                this.Li && (clearTimeout(this.Li), (this.Li = null));
            }),
            t
          );
        })();
      },
      function(t, e, n) {
        'use strict';
        var r = n(1),
          i = n(49),
          o = n(29),
          a = (function() {
            function t(t) {
              (this.Oi = t),
                (this.pendingResponses = []),
                (this.currentResponseNum = 0),
                (this.closeAfterResponse = -1),
                (this.onClose = null);
            }
            return (
              (t.prototype.closeAfter = function(t, e) {
                (this.closeAfterResponse = t),
                  (this.onClose = e),
                  this.closeAfterResponse < this.currentResponseNum &&
                    (this.onClose(), (this.onClose = null));
              }),
              (t.prototype.handleResponse = function(t, e) {
                var n = this;
                this.pendingResponses[t] = e;
                for (
                  var i = this;
                  this.pendingResponses[this.currentResponseNum] &&
                  'break' !==
                    (function() {
                      var t = i.pendingResponses[i.currentResponseNum];
                      delete i.pendingResponses[i.currentResponseNum];
                      for (var e = 0; e < t.length; ++e)
                        !(function(e) {
                          t[e] &&
                            Object(r.m)(function() {
                              n.Oi(t[e]);
                            });
                        })(e);
                      if (i.currentResponseNum === i.closeAfterResponse)
                        return (
                          i.onClose && (i.onClose(), (i.onClose = null)),
                          'break'
                        );
                      i.currentResponseNum++;
                    })();

                );
              }),
              t
            );
          })(),
          s = n(19),
          c = n(8),
          u = n(13);
        n.d(e, 'a', function() {
          return p;
        });
        var h = 'pLPCommand',
          l = 'pRTLPCB',
          p = (function() {
            function t(t, e, n, i) {
              (this.connId = t),
                (this.repoInfo = e),
                (this.transportSessionId = n),
                (this.lastSessionId = i),
                (this.bytesSent = 0),
                (this.bytesReceived = 0),
                (this.ro = !1),
                (this._e = Object(r.t)(t)),
                (this.we = o.a.getCollection(e)),
                (this.urlFn = function(t) {
                  return e.connectionURL(s.d, t);
                });
            }
            return (
              (t.prototype.open = function(t, e) {
                var n = this;
                (this.curSegmentNum = 0),
                  (this.Ee = e),
                  (this.myPacketOrderer = new a(t)),
                  (this.io = !1),
                  (this.oo = setTimeout(function() {
                    n._e('Timed out trying to connect.'), n.ao(), (n.oo = null);
                  }, Math.floor(3e4))),
                  Object(r.n)(function() {
                    if (!n.io) {
                      n.scriptTagHolder = new d(
                        function() {
                          for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                          var r = t[0],
                            i = t[1],
                            o = t[2];
                          if ((t[3], t[4], n.so(t), n.scriptTagHolder))
                            if (
                              (n.oo && (clearTimeout(n.oo), (n.oo = null)),
                              (n.ro = !0),
                              'start' == r)
                            )
                              (n.id = i), (n.password = o);
                            else {
                              if ('close' !== r)
                                throw Error(
                                  'Unrecognized command received: ' + r
                                );
                              i
                                ? ((n.scriptTagHolder.sendNewPolls = !1),
                                  n.myPacketOrderer.closeAfter(i, function() {
                                    n.ao();
                                  }))
                                : n.ao();
                            }
                        },
                        function() {
                          for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                          var r = t[0],
                            i = t[1];
                          n.so(t), n.myPacketOrderer.handleResponse(r, i);
                        },
                        function() {
                          n.ao();
                        },
                        n.urlFn
                      );
                      var t = {};
                      (t.start = 't'),
                        (t.ser = Math.floor(1e8 * Math.random())),
                        n.scriptTagHolder.uniqueCallbackIdentifier &&
                          (t.cb = n.scriptTagHolder.uniqueCallbackIdentifier),
                        (t[s.h] = s.e),
                        n.transportSessionId && (t[s.g] = n.transportSessionId),
                        n.lastSessionId && (t[s.c] = n.lastSessionId),
                        !Object(u.b)() &&
                          'undefined' != typeof location &&
                          location.href &&
                          -1 !== location.href.indexOf(s.a) &&
                          (t[s.f] = s.b);
                      var e = n.urlFn(t);
                      n._e('Connecting via long-poll to ' + e),
                        n.scriptTagHolder.addTag(e, function() {});
                    }
                  });
              }),
              (t.prototype.start = function() {
                this.scriptTagHolder.startLongPoll(this.id, this.password),
                  this.addDisconnectPingFrame(this.id, this.password);
              }),
              (t.forceAllow = function() {
                t.co = !0;
              }),
              (t.forceDisallow = function() {
                t.uo = !0;
              }),
              (t.isAvailable = function() {
                return (
                  t.co ||
                  (!t.uo &&
                    'undefined' != typeof document &&
                    null != document.createElement &&
                    !Object(r.p)() &&
                    !Object(r.r)() &&
                    !Object(u.b)())
                );
              }),
              (t.prototype.markConnectionHealthy = function() {}),
              (t.prototype.ho = function() {
                (this.io = !0),
                  this.scriptTagHolder &&
                    (this.scriptTagHolder.close(),
                    (this.scriptTagHolder = null)),
                  this.myDisconnFrame &&
                    (document.body.removeChild(this.myDisconnFrame),
                    (this.myDisconnFrame = null)),
                  this.oo && (clearTimeout(this.oo), (this.oo = null));
              }),
              (t.prototype.ao = function() {
                this.io ||
                  (this._e('Longpoll is closing itself'),
                  this.ho(),
                  this.Ee && (this.Ee(this.ro), (this.Ee = null)));
              }),
              (t.prototype.close = function() {
                this.io || (this._e('Longpoll is being closed.'), this.ho());
              }),
              (t.prototype.send = function(t) {
                var e = Object(c.b)(t);
                (this.bytesSent += e.length),
                  this.we.incrementCounter('bytes_sent', e.length);
                for (
                  var n = Object(r.f)(e), i = Object(r.z)(n, 1840), o = 0;
                  o < i.length;
                  o++
                )
                  this.scriptTagHolder.enqueueSegment(
                    this.curSegmentNum,
                    i.length,
                    i[o]
                  ),
                    this.curSegmentNum++;
              }),
              (t.prototype.addDisconnectPingFrame = function(t, e) {
                if (!Object(u.b)()) {
                  this.myDisconnFrame = document.createElement('iframe');
                  var n = {};
                  (n.dframe = 't'),
                    (n.id = t),
                    (n.pw = e),
                    (this.myDisconnFrame.src = this.urlFn(n)),
                    (this.myDisconnFrame.style.display = 'none'),
                    document.body.appendChild(this.myDisconnFrame);
                }
              }),
              (t.prototype.so = function(t) {
                var e = Object(c.b)(t).length;
                (this.bytesReceived += e),
                  this.we.incrementCounter('bytes_received', e);
              }),
              t
            );
          })(),
          d = (function() {
            function t(e, n, o, a) {
              if (
                ((this.onDisconnect = o),
                (this.urlFn = a),
                (this.outstandingRequests = new i.a()),
                (this.pendingSegs = []),
                (this.currentSerial = Math.floor(1e8 * Math.random())),
                (this.sendNewPolls = !0),
                Object(u.b)())
              )
                (this.commandCB = e), (this.onMessageCB = n);
              else {
                (this.uniqueCallbackIdentifier = Object(r.a)()),
                  (window[h + this.uniqueCallbackIdentifier] = e),
                  (window[l + this.uniqueCallbackIdentifier] = n),
                  (this.myIFrame = t.lo());
                var s = '';
                this.myIFrame.src &&
                  'javascript:' === this.myIFrame.src.substr(0, 11) &&
                  (s =
                    '<script>document.domain="' +
                    document.domain +
                    '";</script>');
                var c = '<html><body>' + s + '</body></html>';
                try {
                  this.myIFrame.doc.open(),
                    this.myIFrame.doc.write(c),
                    this.myIFrame.doc.close();
                } catch (t) {
                  Object(r.s)('frame writing exception'),
                    t.stack && Object(r.s)(t.stack),
                    Object(r.s)(t);
                }
              }
            }
            return (
              (t.lo = function() {
                var t = document.createElement('iframe');
                if (((t.style.display = 'none'), !document.body))
                  throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';
                document.body.appendChild(t);
                try {
                  t.contentWindow.document ||
                    Object(r.s)('No IE domain setting required');
                } catch (n) {
                  var e = document.domain;
                  t.src =
                    "javascript:void((function(){document.open();document.domain='" +
                    e +
                    "';document.close();})())";
                }
                return (
                  t.contentDocument
                    ? (t.doc = t.contentDocument)
                    : t.contentWindow
                      ? (t.doc = t.contentWindow.document)
                      : t.document && (t.doc = t.document),
                  t
                );
              }),
              (t.prototype.close = function() {
                var e = this;
                if (
                  ((this.alive = !1),
                  this.myIFrame &&
                    ((this.myIFrame.doc.body.innerHTML = ''),
                    setTimeout(function() {
                      null !== e.myIFrame &&
                        (document.body.removeChild(e.myIFrame),
                        (e.myIFrame = null));
                    }, Math.floor(0))),
                  Object(u.b)() && this.myID)
                ) {
                  var n = {};
                  (n.disconn = 't'), (n.id = this.myID), (n.pw = this.myPW);
                  var r = this.urlFn(n);
                  t.nodeRestRequest(r);
                }
                var i = this.onDisconnect;
                i && ((this.onDisconnect = null), i());
              }),
              (t.prototype.startLongPoll = function(t, e) {
                for (
                  this.myID = t, this.myPW = e, this.alive = !0;
                  this.po();

                );
              }),
              (t.prototype.po = function() {
                if (
                  this.alive &&
                  this.sendNewPolls &&
                  this.outstandingRequests.count() <
                    (this.pendingSegs.length > 0 ? 2 : 1)
                ) {
                  this.currentSerial++;
                  var t = {};
                  (t.id = this.myID),
                    (t.pw = this.myPW),
                    (t.ser = this.currentSerial);
                  for (
                    var e = this.urlFn(t), n = '', r = 0;
                    this.pendingSegs.length > 0 &&
                    this.pendingSegs[0].d.length + 30 + n.length <= 1870;

                  ) {
                    var i = this.pendingSegs.shift();
                    (n =
                      n +
                      '&seg' +
                      r +
                      '=' +
                      i.seg +
                      '&ts' +
                      r +
                      '=' +
                      i.ts +
                      '&d' +
                      r +
                      '=' +
                      i.d),
                      r++;
                  }
                  return (e += n), this.do(e, this.currentSerial), !0;
                }
                return !1;
              }),
              (t.prototype.enqueueSegment = function(t, e, n) {
                this.pendingSegs.push({ seg: t, ts: e, d: n }),
                  this.alive && this.po();
              }),
              (t.prototype.do = function(t, e) {
                var n = this;
                this.outstandingRequests.add(e, 1);
                var r = function() {
                    n.outstandingRequests.remove(e), n.po();
                  },
                  i = setTimeout(r, Math.floor(25e3)),
                  o = function() {
                    clearTimeout(i), r();
                  };
                this.addTag(t, o);
              }),
              (t.prototype.addTag = function(t, e) {
                var n = this;
                Object(u.b)()
                  ? this.doNodeLongPoll(t, e)
                  : setTimeout(function() {
                      try {
                        if (!n.sendNewPolls) return;
                        var i = n.myIFrame.doc.createElement('script');
                        (i.type = 'text/javascript'),
                          (i.async = !0),
                          (i.src = t),
                          (i.onload = i.onreadystatechange = function() {
                            var t = i.readyState;
                            (t && 'loaded' !== t && 'complete' !== t) ||
                              ((i.onload = i.onreadystatechange = null),
                              i.parentNode && i.parentNode.removeChild(i),
                              e());
                          }),
                          (i.onerror = function() {
                            Object(r.s)(
                              'Long-poll script failed to load: ' + t
                            ),
                              (n.sendNewPolls = !1),
                              n.close();
                          }),
                          n.myIFrame.doc.body.appendChild(i);
                      } catch (t) {}
                    }, Math.floor(1));
              }),
              t
            );
          })();
      },
      function(t, e, n) {
        'use strict';
        (function(t) {
          n.d(e, 'a', function() {
            return d;
          });
          var r = n(9),
            i = n(0),
            o = n(1),
            a = n(29),
            s = n(19),
            c = n(17),
            u = n(18),
            h = n(8),
            l = n(13),
            p = null;
          'undefined' != typeof MozWebSocket
            ? (p = MozWebSocket)
            : 'undefined' != typeof WebSocket && (p = WebSocket);
          var d = (function() {
            function e(t, n, r, i) {
              (this.connId = t),
                (this.keepaliveTimer = null),
                (this.frames = null),
                (this.totalFrames = 0),
                (this.bytesSent = 0),
                (this.bytesReceived = 0),
                (this._e = Object(o.t)(this.connId)),
                (this.we = a.a.getCollection(n)),
                (this.connURL = e.fo(n, r, i));
            }
            return (
              (e.fo = function(t, e, n) {
                var r = {};
                return (
                  (r[s.h] = s.e),
                  !Object(l.b)() &&
                    'undefined' != typeof location &&
                    location.href &&
                    -1 !== location.href.indexOf(s.a) &&
                    (r[s.f] = s.b),
                  e && (r[s.g] = e),
                  n && (r[s.c] = n),
                  t.connectionURL(s.i, r)
                );
              }),
              (e.prototype.open = function(e, n) {
                var i = this;
                (this.onDisconnect = n),
                  (this.onMessage = e),
                  this._e('Websocket connecting to ' + this.connURL),
                  (this.ro = !1),
                  u.a.set('previous_websocket_failure', !0);
                try {
                  if (Object(l.b)()) {
                    var o = c.a.NODE_ADMIN ? 'AdminNode' : 'Node',
                      a = {
                        headers: {
                          'User-Agent':
                            'Firebase/' +
                            s.e +
                            '/' +
                            r.default.SDK_VERSION +
                            '/' +
                            t.platform +
                            '/' +
                            o
                        }
                      },
                      h = t.env,
                      d =
                        0 == this.connURL.indexOf('wss://')
                          ? h.HTTPS_PROXY || h.https_proxy
                          : h.HTTP_PROXY || h.http_proxy;
                    d && (a.proxy = { origin: d }),
                      (this.mySock = new p(this.connURL, [], a));
                  } else this.mySock = new p(this.connURL);
                } catch (t) {
                  this._e('Error instantiating WebSocket.');
                  var f = t.message || t.data;
                  return f && this._e(f), void this.ao();
                }
                (this.mySock.onopen = function() {
                  i._e('Websocket connected.'), (i.ro = !0);
                }),
                  (this.mySock.onclose = function() {
                    i._e('Websocket connection was disconnected.'),
                      (i.mySock = null),
                      i.ao();
                  }),
                  (this.mySock.onmessage = function(t) {
                    i.handleIncomingFrame(t);
                  }),
                  (this.mySock.onerror = function(t) {
                    i._e('WebSocket error.  Closing connection.');
                    var e = t.message || t.data;
                    e && i._e(e), i.ao();
                  });
              }),
              (e.prototype.start = function() {}),
              (e.forceDisallow = function() {
                e.uo = !0;
              }),
              (e.isAvailable = function() {
                var t = !1;
                if ('undefined' != typeof navigator && navigator.userAgent) {
                  var n = /Android ([0-9]{0,}\.[0-9]{0,})/,
                    r = navigator.userAgent.match(n);
                  r && r.length > 1 && parseFloat(r[1]) < 4.4 && (t = !0);
                }
                return !t && null !== p && !e.uo;
              }),
              (e.previouslyFailed = function() {
                return (
                  u.a.isInMemoryStorage ||
                  !0 === u.a.get('previous_websocket_failure')
                );
              }),
              (e.prototype.markConnectionHealthy = function() {
                u.a.remove('previous_websocket_failure');
              }),
              (e.prototype._o = function(t) {
                if (
                  (this.frames.push(t), this.frames.length == this.totalFrames)
                ) {
                  var e = this.frames.join('');
                  this.frames = null;
                  var n = Object(h.a)(e);
                  this.onMessage(n);
                }
              }),
              (e.prototype.yo = function(t) {
                (this.totalFrames = t), (this.frames = []);
              }),
              (e.prototype.vo = function(t) {
                if (
                  (Object(i.a)(
                    null === this.frames,
                    'We already have a frame buffer'
                  ),
                  t.length <= 6)
                ) {
                  var e = +t;
                  if (!isNaN(e)) return this.yo(e), null;
                }
                return this.yo(1), t;
              }),
              (e.prototype.handleIncomingFrame = function(t) {
                if (null !== this.mySock) {
                  var e = t.data;
                  if (
                    ((this.bytesReceived += e.length),
                    this.we.incrementCounter('bytes_received', e.length),
                    this.resetKeepAlive(),
                    null !== this.frames)
                  )
                    this._o(e);
                  else {
                    var n = this.vo(e);
                    null !== n && this._o(n);
                  }
                }
              }),
              (e.prototype.send = function(t) {
                this.resetKeepAlive();
                var e = Object(h.b)(t);
                (this.bytesSent += e.length),
                  this.we.incrementCounter('bytes_sent', e.length);
                var n = Object(o.z)(e, 16384);
                n.length > 1 && this.go(n.length + '');
                for (var r = 0; r < n.length; r++) this.go(n[r]);
              }),
              (e.prototype.ho = function() {
                (this.io = !0),
                  this.keepaliveTimer &&
                    (clearInterval(this.keepaliveTimer),
                    (this.keepaliveTimer = null)),
                  this.mySock && (this.mySock.close(), (this.mySock = null));
              }),
              (e.prototype.ao = function() {
                this.io ||
                  (this._e('WebSocket is closing itself'),
                  this.ho(),
                  this.onDisconnect &&
                    (this.onDisconnect(this.ro), (this.onDisconnect = null)));
              }),
              (e.prototype.close = function() {
                this.io || (this._e('WebSocket is being closed'), this.ho());
              }),
              (e.prototype.resetKeepAlive = function() {
                var t = this;
                clearInterval(this.keepaliveTimer),
                  (this.keepaliveTimer = setInterval(function() {
                    t.mySock && t.go('0'), t.resetKeepAlive();
                  }, Math.floor(45e3)));
              }),
              (e.prototype.go = function(t) {
                try {
                  this.mySock.send(t);
                } catch (t) {
                  this._e(
                    'Exception thrown from WebSocket.send():',
                    t.message || t.data,
                    'Closing connection.'
                  ),
                    setTimeout(this.ao.bind(this), 0);
                }
              }),
              (e.responsesRequiredToBeHealthy = 2),
              (e.healthyTimeout = 3e4),
              e
            );
          })();
        }.call(e, n(34)));
      },
      function(t, e, n) {
        'use strict';
        n.d(e, 'a', function() {
          return r;
        });
        var r = (function() {
          function t() {}
          return (
            (t.prototype.put = function(t, e, n, r) {}),
            (t.prototype.merge = function(t, e, n, r) {}),
            (t.prototype.refreshAuthToken = function(t) {}),
            (t.prototype.onDisconnectPut = function(t, e, n) {}),
            (t.prototype.onDisconnectMerge = function(t, e, n) {}),
            (t.prototype.onDisconnectCancel = function(t, e) {}),
            (t.prototype.reportStats = function(t) {}),
            t
          );
        })();
      },
      ,
      ,
      ,
      ,
      ,
      ,
      function(t, e, n) {
        'use strict';
        Object.defineProperty(e, '__esModule', { value: !0 }),
          function(t) {
            function r(e) {
              var n = e.INTERNAL.registerService(
                'database',
                function(t, e, n) {
                  return u.a.getInstance().databaseFromApp(t, n);
                },
                {
                  Reference: s.a,
                  Query: a.a,
                  Database: o.a,
                  enableLogging: c.j,
                  INTERNAL: h,
                  ServerValue: o.a.ServerValue,
                  TEST_ACCESS: l
                },
                null,
                !0
              );
              Object(p.b)() && (t.exports = n);
            }
            e.registerDatabase = r;
            var i = n(9),
              o = n(36),
              a = n(39),
              s = n(26),
              c = n(1),
              u = n(30),
              h = n(64),
              l = n(65),
              p = n(13);
            r(i.default);
          }.call(e, n(63)(t));
      },
      function(t, e) {
        t.exports = function(t) {
          if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []),
              Object.defineProperty(e, 'loaded', {
                enumerable: !0,
                get: function() {
                  return e.l;
                }
              }),
              Object.defineProperty(e, 'id', {
                enumerable: !0,
                get: function() {
                  return e.i;
                }
              }),
              Object.defineProperty(e, 'exports', { enumerable: !0 }),
              (e.webpackPolyfill = 1);
          }
          return e;
        };
      },
      function(t, e, n) {
        'use strict';
        Object.defineProperty(e, '__esModule', { value: !0 }),
          n.d(e, 'forceLongPolling', function() {
            return o;
          }),
          n.d(e, 'forceWebSockets', function() {
            return a;
          }),
          n.d(e, 'isWebSocketsAvailable', function() {
            return s;
          }),
          n.d(e, 'setSecurityDebugCallback', function() {
            return c;
          }),
          n.d(e, 'stats', function() {
            return u;
          }),
          n.d(e, 'statsIncrementCounter', function() {
            return h;
          }),
          n.d(e, 'dataUpdateCount', function() {
            return l;
          }),
          n.d(e, 'interceptServerData', function() {
            return p;
          });
        var r = n(54),
          i = n(53),
          o = function() {
            r.a.forceDisallow(), i.a.forceAllow();
          },
          a = function() {
            i.a.forceDisallow();
          },
          s = function() {
            return r.a.isAvailable();
          },
          c = function(t, e) {
            t.repo.Oe.qr = e;
          },
          u = function(t, e) {
            t.repo.stats(e);
          },
          h = function(t, e) {
            t.repo.statsIncrementCounter(e);
          },
          l = function(t) {
            return t.repo.dataUpdateCount;
          },
          p = function(t, e) {
            return t.repo.ke(e);
          };
      },
      function(t, e, n) {
        'use strict';
        Object.defineProperty(e, '__esModule', { value: !0 }),
          n.d(e, 'DataConnection', function() {
            return s;
          }),
          n.d(e, 'RealTimeConnection', function() {
            return c;
          }),
          n.d(e, 'hijackHash', function() {
            return u;
          }),
          n.d(e, 'ConnectionTarget', function() {
            return h;
          }),
          n.d(e, 'queryIdentifier', function() {
            return l;
          }),
          n.d(e, 'listens', function() {
            return p;
          }),
          n.d(e, 'forceRestClient', function() {
            return d;
          });
        var r = n(38),
          i = n(51),
          o = n(30),
          a = n(52),
          s = i.a;
        (i.a.prototype.simpleListen = function(t, e) {
          this.sendRequest('q', { p: t }, e);
        }),
          (i.a.prototype.echo = function(t, e) {
            this.sendRequest('echo', { d: t }, e);
          });
        var c = a.a,
          u = function(t) {
            var e = i.a.prototype.put;
            return (
              (i.a.prototype.put = function(n, r, i, o) {
                void 0 !== o && (o = t()), e.call(this, n, r, i, o);
              }),
              function() {
                i.a.prototype.put = e;
              }
            );
          },
          h = r.a,
          l = function(t) {
            return t.queryIdentifier();
          },
          p = function(t) {
            return t.repo.Oe.ye;
          },
          d = function(t) {
            o.a.getInstance().forceRestClient(t);
          };
      }
    ],
    [62]
  );
} catch (t) {
  throw Error(
    'Cannot instantiate firebase-database.js - be sure to load firebase-app.js first.'
  );
}

try {
  webpackJsonpFirebase(
    [3],
    {
      61: function(e, t, r) {
        'use strict';
        function n(e) {
          var t = new Uint8Array(e);
          return window.btoa(String.fromCharCode.apply(null, t));
        }
        function o(e) {
          var t = function(e) {
              return self && 'ServiceWorkerGlobalScope' in self
                ? new R(e)
                : new O(e);
            },
            r = { Messaging: O };
          e.INTERNAL.registerService('messaging', t, r);
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i,
          s = r(24),
          a = {
            AVAILABLE_IN_WINDOW: 'only-available-in-window',
            AVAILABLE_IN_SW: 'only-available-in-sw',
            SHOULD_BE_INHERITED: 'should-be-overriden',
            BAD_SENDER_ID: 'bad-sender-id',
            INCORRECT_GCM_SENDER_ID: 'incorrect-gcm-sender-id',
            PERMISSION_DEFAULT: 'permission-default',
            PERMISSION_BLOCKED: 'permission-blocked',
            UNSUPPORTED_BROWSER: 'unsupported-browser',
            NOTIFICATIONS_BLOCKED: 'notifications-blocked',
            FAILED_DEFAULT_REGISTRATION: 'failed-serviceworker-registration',
            SW_REGISTRATION_EXPECTED: 'sw-registration-expected',
            GET_SUBSCRIPTION_FAILED: 'get-subscription-failed',
            INVALID_SAVED_TOKEN: 'invalid-saved-token',
            SW_REG_REDUNDANT: 'sw-reg-redundant',
            TOKEN_SUBSCRIBE_FAILED: 'token-subscribe-failed',
            TOKEN_SUBSCRIBE_NO_TOKEN: 'token-subscribe-no-token',
            TOKEN_SUBSCRIBE_NO_PUSH_SET: 'token-subscribe-no-push-set',
            USE_SW_BEFORE_GET_TOKEN: 'use-sw-before-get-token',
            INVALID_DELETE_TOKEN: 'invalid-delete-token',
            DELETE_TOKEN_NOT_FOUND: 'delete-token-not-found',
            DELETE_SCOPE_NOT_FOUND: 'delete-scope-not-found',
            BG_HANDLER_FUNCTION_EXPECTED: 'bg-handler-function-expected',
            NO_WINDOW_CLIENT_TO_MSG: 'no-window-client-to-msg',
            UNABLE_TO_RESUBSCRIBE: 'unable-to-resubscribe',
            NO_FCM_TOKEN_FOR_RESUBSCRIBE: 'no-fcm-token-for-resubscribe',
            FAILED_TO_DELETE_TOKEN: 'failed-to-delete-token',
            NO_SW_IN_REG: 'no-sw-in-reg',
            BAD_SCOPE: 'bad-scope',
            BAD_VAPID_KEY: 'bad-vapid-key',
            BAD_SUBSCRIPTION: 'bad-subscription',
            BAD_TOKEN: 'bad-token',
            BAD_PUSH_SET: 'bad-push-set',
            FAILED_DELETE_VAPID_KEY: 'failed-delete-vapid-key'
          },
          c = ((i = {}),
          (i[a.AVAILABLE_IN_WINDOW] =
            'This method is available in a Window context.'),
          (i[a.AVAILABLE_IN_SW] =
            'This method is available in a service worker context.'),
          (i['should-be-overriden'] =
            'This method should be overriden by extended classes.'),
          (i['bad-sender-id'] =
            "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp()."),
          (i['permission-default'] =
            'The required permissions were not granted and dismissed instead.'),
          (i['permission-blocked'] =
            'The required permissions were not granted and blocked instead.'),
          (i['unsupported-browser'] =
            "This browser doesn't support the API's required to use the firebase SDK."),
          (i['notifications-blocked'] = 'Notifications have been blocked.'),
          (i[a.FAILED_DEFAULT_REGISTRATION] =
            'We are unable to register the default service worker. {$browserErrorMessage}'),
          (i['sw-registration-expected'] =
            'A service worker registration was the expected input.'),
          (i['get-subscription-failed'] =
            'There was an error when trying to get any existing Push Subscriptions.'),
          (i['invalid-saved-token'] =
            'Unable to access details of the saved token.'),
          (i['sw-reg-redundant'] =
            'The service worker being used for push was made redundant.'),
          (i['token-subscribe-failed'] =
            'A problem occured while subscribing the user to FCM: {$message}'),
          (i['token-subscribe-no-token'] =
            'FCM returned no token when subscribing the user to push.'),
          (i['token-subscribe-no-push-set'] =
            'FCM returned an invalid response when getting an FCM token.'),
          (i['use-sw-before-get-token'] =
            'You must call useServiceWorker() before calling getToken() to ensure your service worker is used.'),
          (i['invalid-delete-token'] =
            'You must pass a valid token into deleteToken(), i.e. the token from getToken().'),
          (i['delete-token-not-found'] =
            'The deletion attempt for token could not be performed as the token was not found.'),
          (i['delete-scope-not-found'] =
            'The deletion attempt for service worker scope could not be performed as the scope was not found.'),
          (i['bg-handler-function-expected'] =
            'The input to setBackgroundMessageHandler() must be a function.'),
          (i['no-window-client-to-msg'] =
            'An attempt was made to message a non-existant window client.'),
          (i['unable-to-resubscribe'] =
            'There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}'),
          (i['no-fcm-token-for-resubscribe'] =
            'Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.'),
          (i['failed-to-delete-token'] =
            'Unable to delete the currently saved token.'),
          (i['no-sw-in-reg'] =
            'Even though the service worker registration was successful, there was a problem accessing the service worker itself.'),
          (i['incorrect-gcm-sender-id'] =
            "Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging."),
          (i['bad-scope'] =
            'The service worker scope must be a string with at least one character.'),
          (i['bad-vapid-key'] =
            'The public VAPID key must be a string with at least one character.'),
          (i['bad-subscription'] =
            'The subscription must be a valid PushSubscription.'),
          (i['bad-token'] =
            'The FCM Token used for storage / lookup was not a valid token string.'),
          (i['bad-push-set'] =
            'The FCM push set used for storage / lookup was not not a valid push set string.'),
          (i['failed-delete-vapid-key'] =
            'The VAPID key could not be deleted.'),
          i),
          u = { codes: a, map: c },
          _ = function(e) {
            return n(e)
              .replace(/=/g, '')
              .replace(/\+/g, '-')
              .replace(/\//g, '_');
          },
          f = [
            4,
            51,
            148,
            247,
            223,
            161,
            235,
            177,
            220,
            3,
            162,
            94,
            21,
            113,
            219,
            72,
            211,
            46,
            237,
            237,
            178,
            52,
            219,
            183,
            71,
            58,
            12,
            143,
            196,
            204,
            225,
            111,
            60,
            140,
            132,
            223,
            171,
            182,
            102,
            62,
            242,
            12,
            212,
            139,
            254,
            227,
            249,
            118,
            47,
            20,
            28,
            99,
            8,
            106,
            111,
            45,
            177,
            26,
            149,
            176,
            206,
            55,
            192,
            156,
            110
          ],
          d = { userVisibleOnly: !0, applicationServerKey: new Uint8Array(f) },
          h = {
            ENDPOINT: 'https://fcm.googleapis.com',
            APPLICATION_SERVER_KEY: f,
            SUBSCRIPTION_OPTIONS: d
          },
          p = 'fcm_token_object_Store',
          l = (function() {
            function e() {
              (this.e = new s.a('messaging', 'Messaging', u.map)),
                (this.t = null);
            }
            return (
              (e.prototype.r = function() {
                return this.t
                  ? this.t
                  : ((this.t = new Promise(function(e, t) {
                      var r = indexedDB.open('fcm_token_details_db', 1);
                      (r.onerror = function(e) {
                        t(e.target.error);
                      }),
                        (r.onsuccess = function(t) {
                          e(t.target.result);
                        }),
                        (r.onupgradeneeded = function(e) {
                          var t = e.target.result,
                            r = t.createObjectStore(p, { keyPath: 'swScope' });
                          r.createIndex('fcmSenderId', 'fcmSenderId', {
                            unique: !1
                          }),
                            r.createIndex('fcmToken', 'fcmToken', {
                              unique: !0
                            });
                        });
                    })),
                    this.t);
              }),
              (e.prototype.closeDatabase = function() {
                var e = this;
                return this.t
                  ? this.t.then(function(t) {
                      t.close(), (e.t = null);
                    })
                  : Promise.resolve();
              }),
              (e.prototype.getTokenDetailsFromToken = function(e) {
                return this.r().then(function(t) {
                  return new Promise(function(r, n) {
                    var o = t.transaction([p]),
                      i = o.objectStore(p),
                      s = i.index('fcmToken'),
                      a = s.get(e);
                    (a.onerror = function(e) {
                      n(e.target.error);
                    }),
                      (a.onsuccess = function(e) {
                        r(e.target.result);
                      });
                  });
                });
              }),
              (e.prototype.n = function(e) {
                return this.r().then(function(t) {
                  return new Promise(function(r, n) {
                    var o = t.transaction([p]),
                      i = o.objectStore(p),
                      s = i.get(e);
                    (s.onerror = function(e) {
                      n(e.target.error);
                    }),
                      (s.onsuccess = function(e) {
                        r(e.target.result);
                      });
                  });
                });
              }),
              (e.prototype.o = function(e) {
                return this.r().then(function(t) {
                  return new Promise(function(r, n) {
                    var o = t.transaction([p]),
                      i = o.objectStore(p),
                      s = [],
                      a = i.openCursor();
                    (a.onerror = function(e) {
                      n(e.target.error);
                    }),
                      (a.onsuccess = function(t) {
                        var n = t.target.result;
                        n
                          ? (n.value.fcmSenderId === e && s.push(n.value),
                            n.continue())
                          : r(s);
                      });
                  });
                });
              }),
              (e.prototype.subscribeToFCM = function(e, t, r) {
                var n = this,
                  o = _(t.getKey('p256dh')),
                  i = _(t.getKey('auth')),
                  s =
                    'authorized_entity=' +
                    e +
                    '&endpoint=' +
                    t.endpoint +
                    '&encryption_key=' +
                    o +
                    '&encryption_auth=' +
                    i;
                r && (s += '&pushSet=' + r);
                var a = new Headers();
                a.append('Content-Type', 'application/x-www-form-urlencoded');
                var c = { method: 'POST', headers: a, body: s };
                return fetch(h.ENDPOINT + '/fcm/connect/subscribe', c)
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function(e) {
                    var t = e;
                    if (t.error) {
                      var r = t.error.message;
                      throw n.e.create(u.codes.TOKEN_SUBSCRIBE_FAILED, {
                        message: r
                      });
                    }
                    if (!t.token)
                      throw n.e.create(u.codes.TOKEN_SUBSCRIBE_NO_TOKEN);
                    if (!t.pushSet)
                      throw n.e.create(u.codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);
                    return { token: t.token, pushSet: t.pushSet };
                  });
              }),
              (e.prototype.i = function(e, t) {
                return (
                  e.endpoint === t.endpoint &&
                  _(e.getKey('auth')) === t.auth &&
                  _(e.getKey('p256dh')) === t.p256dh
                );
              }),
              (e.prototype.s = function(e, t, r, n, o) {
                var i = {
                  swScope: t.scope,
                  endpoint: r.endpoint,
                  auth: _(r.getKey('auth')),
                  p256dh: _(r.getKey('p256dh')),
                  fcmToken: n,
                  fcmPushSet: o,
                  fcmSenderId: e
                };
                return this.r().then(function(e) {
                  return new Promise(function(t, r) {
                    var n = e.transaction([p], 'readwrite'),
                      o = n.objectStore(p),
                      s = o.put(i);
                    (s.onerror = function(e) {
                      r(e.target.error);
                    }),
                      (s.onsuccess = function(e) {
                        t();
                      });
                  });
                });
              }),
              (e.prototype.getSavedToken = function(e, t) {
                var r = this;
                return t instanceof ServiceWorkerRegistration
                  ? 'string' != typeof e || 0 === e.length
                    ? Promise.reject(this.e.create(u.codes.BAD_SENDER_ID))
                    : this.o(e)
                        .then(function(r) {
                          if (0 !== r.length) {
                            var n = r.findIndex(function(r) {
                              return (
                                t.scope === r.swScope && e === r.fcmSenderId
                              );
                            });
                            if (-1 !== n) return r[n];
                          }
                        })
                        .then(function(e) {
                          if (e)
                            return t.pushManager
                              .getSubscription()
                              .catch(function(e) {
                                throw r.e.create(
                                  u.codes.GET_SUBSCRIPTION_FAILED
                                );
                              })
                              .then(function(t) {
                                if (t && r.i(t, e)) return e.fcmToken;
                              });
                        })
                  : Promise.reject(
                      this.e.create(u.codes.SW_REGISTRATION_EXPECTED)
                    );
              }),
              (e.prototype.createToken = function(e, t) {
                var r = this;
                if ('string' != typeof e || 0 === e.length)
                  return Promise.reject(this.e.create(u.codes.BAD_SENDER_ID));
                if (!(t instanceof ServiceWorkerRegistration))
                  return Promise.reject(
                    this.e.create(u.codes.SW_REGISTRATION_EXPECTED)
                  );
                var n, o;
                return t.pushManager
                  .getSubscription()
                  .then(function(e) {
                    return e || t.pushManager.subscribe(h.SUBSCRIPTION_OPTIONS);
                  })
                  .then(function(t) {
                    return (n = t), r.subscribeToFCM(e, n);
                  })
                  .then(function(i) {
                    return (o = i), r.s(e, t, n, o.token, o.pushSet);
                  })
                  .then(function() {
                    return o.token;
                  });
              }),
              (e.prototype.deleteToken = function(e) {
                var t = this;
                return 'string' != typeof e || 0 === e.length
                  ? Promise.reject(this.e.create(u.codes.INVALID_DELETE_TOKEN))
                  : this.getTokenDetailsFromToken(e).then(function(e) {
                      if (!e) throw t.e.create(u.codes.DELETE_TOKEN_NOT_FOUND);
                      return t.r().then(function(r) {
                        return new Promise(function(n, o) {
                          var i = r.transaction([p], 'readwrite'),
                            s = i.objectStore(p),
                            a = s.delete(e.swScope);
                          (a.onerror = function(e) {
                            o(e.target.error);
                          }),
                            (a.onsuccess = function(r) {
                              if (0 === r.target.result)
                                return void o(
                                  t.e.create(u.codes.FAILED_TO_DELETE_TOKEN)
                                );
                              n(e);
                            });
                        });
                      });
                    });
              }),
              e
            );
          })(),
          g = l,
          E = 'messagingSenderId',
          S = (function() {
            function e(e) {
              var t = this;
              if (
                ((this.e = new s.a('messaging', 'Messaging', u.map)),
                !e.options[E] || 'string' != typeof e.options[E])
              )
                throw this.e.create(u.codes.BAD_SENDER_ID);
              (this.c = e.options[E]),
                (this.u = new g()),
                (this.app = e),
                (this.INTERNAL = {}),
                (this.INTERNAL.delete = function() {
                  return t.delete;
                });
            }
            return (
              (e.prototype.getToken = function() {
                var e = this,
                  t = this._();
                return 'granted' !== t
                  ? 'denied' === t
                    ? Promise.reject(
                        this.e.create(u.codes.NOTIFICATIONS_BLOCKED)
                      )
                    : Promise.resolve(null)
                  : this.f().then(function(t) {
                      return e.u.getSavedToken(e.c, t).then(function(r) {
                        return r || e.u.createToken(e.c, t);
                      });
                    });
              }),
              (e.prototype.deleteToken = function(e) {
                var t = this;
                return this.u.deleteToken(e).then(function() {
                  return t
                    .f()
                    .then(function(e) {
                      if (e) return e.pushManager.getSubscription();
                    })
                    .then(function(e) {
                      if (e) return e.unsubscribe();
                    });
                });
              }),
              (e.prototype.f = function() {
                throw this.e.create(u.codes.SHOULD_BE_INHERITED);
              }),
              (e.prototype.requestPermission = function() {
                throw this.e.create(u.codes.AVAILABLE_IN_WINDOW);
              }),
              (e.prototype.useServiceWorker = function(e) {
                throw this.e.create(u.codes.AVAILABLE_IN_WINDOW);
              }),
              (e.prototype.onMessage = function(e, t, r) {
                throw this.e.create(u.codes.AVAILABLE_IN_WINDOW);
              }),
              (e.prototype.onTokenRefresh = function(e, t, r) {
                throw this.e.create(u.codes.AVAILABLE_IN_WINDOW);
              }),
              (e.prototype.setBackgroundMessageHandler = function(e) {
                throw this.e.create(u.codes.AVAILABLE_IN_SW);
              }),
              (e.prototype.delete = function() {
                this.u.closeDatabase();
              }),
              (e.prototype._ = function() {
                return Notification.permission;
              }),
              (e.prototype.getTokenManager = function() {
                return this.u;
              }),
              e
            );
          })(),
          T = S,
          b = {
            TYPE_OF_MSG: 'firebase-messaging-msg-type',
            DATA: 'firebase-messaging-msg-data'
          },
          m = {
            PUSH_MSG_RECEIVED: 'push-msg-received',
            NOTIFICATION_CLICKED: 'notification-clicked'
          },
          v = function(e, t) {
            return (r = {}), (r[b.TYPE_OF_MSG] = e), (r[b.DATA] = t), r;
            var r;
          },
          I = { PARAMS: b, TYPES_OF_MSG: m, createNewMsg: v },
          y = {
            path: '/firebase-messaging-sw.js',
            scope: '/firebase-cloud-messaging-push-scope'
          },
          N = r(31),
          k =
            (this && this.__extends) ||
            (function() {
              var e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                };
              return function(t, r) {
                function n() {
                  this.constructor = t;
                }
                e(t, r),
                  (t.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })(),
          w = (function(e) {
            function t(t) {
              var r = e.call(this, t) || this;
              return (
                r.d,
                r.h,
                (r.p = null),
                (r.l = Object(N.a)(function(e) {
                  r.p = e;
                })),
                (r.g = null),
                (r.S = Object(N.a)(function(e) {
                  r.g = e;
                })),
                r.T(),
                r
              );
            }
            return (
              k(t, e),
              (t.prototype.getToken = function() {
                var t = this;
                return this.b()
                  ? this.m().then(function() {
                      return e.prototype.getToken.call(t);
                    })
                  : Promise.reject(this.e.create(u.codes.UNSUPPORTED_BROWSER));
              }),
              (t.prototype.m = function() {
                var e = this;
                if (this.h) return this.h;
                var t = document.querySelector('link[rel="manifest"]');
                return (
                  (this.h = t
                    ? fetch(t.href)
                        .then(function(e) {
                          return e.json();
                        })
                        .catch(function() {
                          return Promise.resolve();
                        })
                        .then(function(t) {
                          if (
                            t &&
                            t.gcm_sender_id &&
                            '103953800507' !== t.gcm_sender_id
                          )
                            throw e.e.create(u.codes.INCORRECT_GCM_SENDER_ID);
                        })
                    : Promise.resolve()),
                  this.h
                );
              }),
              (t.prototype.requestPermission = function() {
                var e = this;
                return 'granted' === Notification.permission
                  ? Promise.resolve()
                  : new Promise(function(t, r) {
                      var n = function(n) {
                          return 'granted' === n
                            ? t()
                            : r(
                                'denied' === n
                                  ? e.e.create(u.codes.PERMISSION_BLOCKED)
                                  : e.e.create(u.codes.PERMISSION_DEFAULT)
                              );
                        },
                        o = Notification.requestPermission(function(e) {
                          o || n(e);
                        });
                      o && o.then(n);
                    });
              }),
              (t.prototype.useServiceWorker = function(e) {
                if (!(e instanceof ServiceWorkerRegistration))
                  throw this.e.create(u.codes.SW_REGISTRATION_EXPECTED);
                if (void 0 !== this.d)
                  throw this.e.create(u.codes.USE_SW_BEFORE_GET_TOKEN);
                this.d = e;
              }),
              (t.prototype.onMessage = function(e, t, r) {
                return this.l(e, t, r);
              }),
              (t.prototype.onTokenRefresh = function(e, t, r) {
                return this.S(e, t, r);
              }),
              (t.prototype.v = function(e) {
                var t = this,
                  r = e.installing || e.waiting || e.active;
                return new Promise(function(n, o) {
                  if (!r) return void o(t.e.create(u.codes.NO_SW_IN_REG));
                  if ('activated' === r.state) return void n(e);
                  if ('redundant' === r.state)
                    return void o(t.e.create(u.codes.SW_REG_REDUNDANT));
                  var i = function i() {
                    if ('activated' === r.state) n(e);
                    else {
                      if ('redundant' !== r.state) return;
                      o(t.e.create(u.codes.SW_REG_REDUNDANT));
                    }
                    r.removeEventListener('statechange', i);
                  };
                  r.addEventListener('statechange', i);
                });
              }),
              (t.prototype.f = function() {
                var e = this;
                return this.d
                  ? this.v(this.d)
                  : ((this.d = null),
                    navigator.serviceWorker
                      .register(y.path, { scope: y.scope })
                      .catch(function(t) {
                        throw e.e.create(u.codes.FAILED_DEFAULT_REGISTRATION, {
                          browserErrorMessage: t.message
                        });
                      })
                      .then(function(t) {
                        return e.v(t).then(function() {
                          return (e.d = t), t.update(), t;
                        });
                      }));
              }),
              (t.prototype.T = function() {
                var e = this;
                'serviceWorker' in navigator &&
                  navigator.serviceWorker.addEventListener(
                    'message',
                    function(t) {
                      if (t.data && t.data[I.PARAMS.TYPE_OF_MSG]) {
                        var r = t.data;
                        switch (r[I.PARAMS.TYPE_OF_MSG]) {
                          case I.TYPES_OF_MSG.PUSH_MSG_RECEIVED:
                          case I.TYPES_OF_MSG.NOTIFICATION_CLICKED:
                            var n = r[I.PARAMS.DATA];
                            e.p.next(n);
                        }
                      }
                    },
                    !1
                  );
              }),
              (t.prototype.b = function() {
                return (
                  'serviceWorker' in navigator &&
                  'PushManager' in window &&
                  'Notification' in window &&
                  'fetch' in window &&
                  ServiceWorkerRegistration.prototype.hasOwnProperty(
                    'showNotification'
                  ) &&
                  PushSubscription.prototype.hasOwnProperty('getKey')
                );
              }),
              t
            );
          })(T),
          O = w,
          D =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          A =
            (this && this.__extends) ||
            (function() {
              var e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                };
              return function(t, r) {
                function n() {
                  this.constructor = t;
                }
                e(t, r),
                  (t.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })(),
          P = (function(e) {
            function t(t) {
              var r = e.call(this, t) || this;
              return (
                self.addEventListener(
                  'push',
                  function(e) {
                    return r.I(e);
                  },
                  !1
                ),
                self.addEventListener(
                  'pushsubscriptionchange',
                  function(e) {
                    return r.y(e);
                  },
                  !1
                ),
                self.addEventListener(
                  'notificationclick',
                  function(e) {
                    return r.N(e);
                  },
                  !1
                ),
                (r.k = null),
                r
              );
            }
            return (
              A(t, e),
              (t.prototype.I = function(e) {
                var t,
                  r = this;
                try {
                  t = e.data.json();
                } catch (e) {
                  return;
                }
                var n = this.w().then(function(e) {
                  if (e) {
                    if (t.notification || r.k) return r.O(t);
                  } else {
                    var n = r.D(t);
                    if (n) {
                      var o = n.title || '';
                      return self.registration.showNotification(o, n);
                    }
                    if (r.k) return r.k(t);
                  }
                });
                e.waitUntil(n);
              }),
              (t.prototype.y = function(e) {
                var t = this,
                  r = this.getToken().then(function(e) {
                    if (!e)
                      throw t.e.create(u.codes.NO_FCM_TOKEN_FOR_RESUBSCRIBE);
                    var r = null,
                      n = t.getTokenManager();
                    return n
                      .getTokenDetailsFromToken(e)
                      .then(function(e) {
                        if (!(r = e))
                          throw t.e.create(u.codes.INVALID_SAVED_TOKEN);
                        return self.registration.pushManager.subscribe(
                          h.SUBSCRIPTION_OPTIONS
                        );
                      })
                      .then(function(e) {
                        return n.subscribeToFCM(r.fcmSenderId, e, r.fcmPushSet);
                      })
                      .catch(function(e) {
                        return n.deleteToken(r.fcmToken).then(function() {
                          throw t.e.create(u.codes.UNABLE_TO_RESUBSCRIBE, {
                            message: e
                          });
                        });
                      });
                  });
                e.waitUntil(r);
              }),
              (t.prototype.N = function(e) {
                var t = this;
                if (
                  e.notification &&
                  e.notification.data &&
                  e.notification.data.FCM_MSG
                ) {
                  e.stopImmediatePropagation(), e.notification.close();
                  var r = e.notification.data.FCM_MSG,
                    n = r.notification.click_action;
                  if (n) {
                    var o = this.A(n)
                      .then(function(e) {
                        return e || self.clients.openWindow(n);
                      })
                      .then(function(e) {
                        if (e) {
                          r.notification, delete r.notification;
                          var n = I.createNewMsg(
                            I.TYPES_OF_MSG.NOTIFICATION_CLICKED,
                            r
                          );
                          return t.P(e, n);
                        }
                      });
                    e.waitUntil(o);
                  }
                }
              }),
              (t.prototype.D = function(e) {
                if (e && 'object' === D(e.notification)) {
                  var t = Object.assign({}, e.notification);
                  return (t.data = ((r = {}), (r.FCM_MSG = e), r)), t;
                  var r;
                }
              }),
              (t.prototype.setBackgroundMessageHandler = function(e) {
                if (e && 'function' != typeof e)
                  throw this.e.create(u.codes.BG_HANDLER_FUNCTION_EXPECTED);
                this.k = e;
              }),
              (t.prototype.A = function(e) {
                var t = new URL(e).href;
                return self.clients
                  .matchAll({ type: 'window', includeUncontrolled: !0 })
                  .then(function(e) {
                    for (var r = null, n = 0; n < e.length; n++)
                      if (new URL(e[n].url).href === t) {
                        r = e[n];
                        break;
                      }
                    if (r) return r.focus(), r;
                  });
              }),
              (t.prototype.P = function(e, t) {
                var r = this;
                return new Promise(function(n, o) {
                  if (!e) return o(r.e.create(u.codes.NO_WINDOW_CLIENT_TO_MSG));
                  e.postMessage(t), n();
                });
              }),
              (t.prototype.w = function() {
                return self.clients
                  .matchAll({ type: 'window', includeUncontrolled: !0 })
                  .then(function(e) {
                    return e.some(function(e) {
                      return 'visible' === e.visibilityState;
                    });
                  });
              }),
              (t.prototype.O = function(e) {
                var t = this;
                return self.clients
                  .matchAll({ type: 'window', includeUncontrolled: !0 })
                  .then(function(r) {
                    var n = I.createNewMsg(I.TYPES_OF_MSG.PUSH_MSG_RECEIVED, e);
                    return Promise.all(
                      r.map(function(e) {
                        return t.P(e, n);
                      })
                    );
                  });
              }),
              (t.prototype.f = function() {
                return Promise.resolve(self.registration);
              }),
              t
            );
          })(T),
          R = P,
          F = r(9);
        (t.registerMessaging = o), o(F.default);
      }
    },
    [61]
  );
} catch (e) {
  throw Error(
    'Cannot instantiate firebase-messaging.js - be sure to load firebase-app.js first.'
  );
}

try {
  webpackJsonpFirebase(
    [2],
    {
      60: function(t, e, n) {
        'use strict';
        function r(t) {
          return 'storage/' + t;
        }
        function o() {
          return new $t(
            te.UNKNOWN,
            'An unknown error occurred, please check the error payload for server response.'
          );
        }
        function i(t) {
          return new $t(
            te.OBJECT_NOT_FOUND,
            "Object '" + t + "' does not exist."
          );
        }
        function a(t) {
          return new $t(
            te.QUOTA_EXCEEDED,
            "Quota for bucket '" +
              t +
              "' exceeded, please view quota on https://firebase.google.com/pricing/."
          );
        }
        function u() {
          return new $t(
            te.UNAUTHENTICATED,
            'User is not authenticated, please authenticate using Firebase Authentication and try again.'
          );
        }
        function s(t) {
          return new $t(
            te.UNAUTHORIZED,
            "User does not have permission to access '" + t + "'."
          );
        }
        function c() {
          return new $t(
            te.RETRY_LIMIT_EXCEEDED,
            'Max retry time for operation exceeded, please try again.'
          );
        }
        function l() {
          return new $t(te.CANCELED, 'User canceled the upload/download.');
        }
        function p(t) {
          return new $t(te.INVALID_URL, "Invalid URL '" + t + "'.");
        }
        function h(t) {
          return new $t(
            te.INVALID_DEFAULT_BUCKET,
            "Invalid default bucket '" + t + "'."
          );
        }
        function f() {
          return new $t(
            te.CANNOT_SLICE_BLOB,
            'Cannot slice blob for upload. Please retry the upload.'
          );
        }
        function d() {
          return new $t(
            te.SERVER_FILE_WRONG_SIZE,
            'Server recorded incorrect upload file size, please retry the upload.'
          );
        }
        function _() {
          return new $t(
            te.NO_DOWNLOAD_URL,
            'The given file does not have any download URLs.'
          );
        }
        function v(t, e, n) {
          return new $t(
            te.INVALID_ARGUMENT,
            'Invalid argument in `' + e + '` at index ' + t + ': ' + n
          );
        }
        function b(t, e, n, r) {
          var o, i;
          return (
            t === e
              ? ((o = t), (i = 1 === t ? 'argument' : 'arguments'))
              : ((o = 'between ' + t + ' and ' + e), (i = 'arguments')),
            new $t(
              te.INVALID_ARGUMENT_COUNT,
              'Invalid argument count in `' +
                n +
                '`: Expected ' +
                o +
                ' ' +
                i +
                ', received ' +
                r +
                '.'
            )
          );
        }
        function m() {
          return new $t(te.APP_DELETED, 'The Firebase app was deleted.');
        }
        function y(t) {
          return new $t(
            te.INVALID_ROOT_OPERATION,
            "The operation '" +
              t +
              "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."
          );
        }
        function g(t, e) {
          return new $t(
            te.INVALID_FORMAT,
            "String does not match format '" + t + "': " + e
          );
        }
        function R(t) {
          throw new $t(te.INTERNAL_ERROR, 'Internal error: ' + t);
        }
        function E(t) {
          switch (t) {
            case ee.RAW:
            case ee.BASE64:
            case ee.BASE64URL:
            case ee.DATA_URL:
              return;
            default:
              throw 'Expected one of the event types: [' +
                ee.RAW +
                ', ' +
                ee.BASE64 +
                ', ' +
                ee.BASE64URL +
                ', ' +
                ee.DATA_URL +
                '].';
          }
        }
        function w(t, e) {
          switch (t) {
            case ee.RAW:
              return new ne(U(e));
            case ee.BASE64:
            case ee.BASE64URL:
              return new ne(A(t, e));
            case ee.DATA_URL:
              return new ne(N(e), O(e));
          }
          throw o();
        }
        function U(t) {
          for (var e = [], n = 0; n < t.length; n++) {
            var r = t.charCodeAt(n);
            if (r <= 127) e.push(r);
            else if (r <= 2047) e.push(192 | (r >> 6), 128 | (63 & r));
            else if (55296 == (64512 & r)) {
              var o =
                n < t.length - 1 && 56320 == (64512 & t.charCodeAt(n + 1));
              if (o) {
                var i = r,
                  a = t.charCodeAt(++n);
                (r = 65536 | ((1023 & i) << 10) | (1023 & a)),
                  e.push(
                    240 | (r >> 18),
                    128 | ((r >> 12) & 63),
                    128 | ((r >> 6) & 63),
                    128 | (63 & r)
                  );
              } else e.push(239, 191, 189);
            } else
              56320 == (64512 & r)
                ? e.push(239, 191, 189)
                : e.push(
                    224 | (r >> 12),
                    128 | ((r >> 6) & 63),
                    128 | (63 & r)
                  );
          }
          return new Uint8Array(e);
        }
        function T(t) {
          var e;
          try {
            e = decodeURIComponent(t);
          } catch (t) {
            throw g(ee.DATA_URL, 'Malformed data URL.');
          }
          return U(e);
        }
        function A(t, e) {
          switch (t) {
            case ee.BASE64:
              var n = -1 !== e.indexOf('-'),
                r = -1 !== e.indexOf('_');
              if (n || r) {
                var o = n ? '-' : '_';
                throw g(
                  t,
                  "Invalid character '" +
                    o +
                    "' found: is it base64url encoded?"
                );
              }
              break;
            case ee.BASE64URL:
              var i = -1 !== e.indexOf('+'),
                a = -1 !== e.indexOf('/');
              if (i || a) {
                var o = i ? '+' : '/';
                throw g(
                  t,
                  "Invalid character '" + o + "' found: is it base64 encoded?"
                );
              }
              e = e.replace(/-/g, '+').replace(/_/g, '/');
          }
          var u;
          try {
            u = atob(e);
          } catch (e) {
            throw g(t, 'Invalid character found');
          }
          for (var s = new Uint8Array(u.length), c = 0; c < u.length; c++)
            s[c] = u.charCodeAt(c);
          return s;
        }
        function N(t) {
          var e = new re(t);
          return e.base64 ? A(ee.BASE64, e.rest) : T(e.rest);
        }
        function O(t) {
          return new re(t).contentType;
        }
        function C(t, e) {
          return (
            !!(t.length >= e.length) && t.substring(t.length - e.length) === e
          );
        }
        function S(t) {
          switch (t) {
            case ie.RUNNING:
            case ie.PAUSING:
            case ie.CANCELING:
              return ae.RUNNING;
            case ie.PAUSED:
              return ae.PAUSED;
            case ie.SUCCESS:
              return ae.SUCCESS;
            case ie.CANCELED:
              return ae.CANCELED;
            case ie.ERROR:
            default:
              return ae.ERROR;
          }
        }
        function k(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        function I(t, e) {
          for (var n in t) k(t, n) && e(n, t[n]);
        }
        function L(t) {
          if (null == t) return {};
          var e = {};
          return (
            I(t, function(t, n) {
              e[t] = n;
            }),
            e
          );
        }
        function x(t) {
          return new ue.b(t);
        }
        function P(t) {
          return ue.b.resolve(t);
        }
        function D(t) {
          return ue.b.reject(t);
        }
        function M(t) {
          return null != t;
        }
        function W(t) {
          return void 0 !== t;
        }
        function B(t) {
          return 'function' == typeof t;
        }
        function G(t) {
          return 'object' === (void 0 === t ? 'undefined' : se(t));
        }
        function j(t) {
          return G(t) && null !== t;
        }
        function q(t) {
          return G(t) && !Array.isArray(t);
        }
        function F(t) {
          return 'string' == typeof t || t instanceof String;
        }
        function H(t) {
          return 'number' == typeof t || t instanceof Number;
        }
        function z(t) {
          return X() && t instanceof Blob;
        }
        function X() {
          return 'undefined' != typeof Blob;
        }
        function V(t) {
          var e;
          try {
            e = JSON.parse(t);
          } catch (t) {
            return null;
          }
          return q(e) ? e : null;
        }
        function K(t) {
          if (0 == t.length) return null;
          var e = t.lastIndexOf('/');
          return -1 === e ? '' : t.slice(0, e);
        }
        function Z(t, e) {
          var n = e
            .split('/')
            .filter(function(t) {
              return t.length > 0;
            })
            .join('/');
          return 0 === t.length ? n : t + '/' + n;
        }
        function J(t) {
          var e = t.lastIndexOf('/', t.length - 2);
          return -1 === e ? t : t.slice(e + 1);
        }
        function Q(t) {
          return Xt + Kt + t;
        }
        function Y(t) {
          return Vt + Kt + t;
        }
        function $(t) {
          return Xt + Zt + t;
        }
        function tt(t) {
          var e = encodeURIComponent,
            n = '?';
          return (
            I(t, function(t, r) {
              var o = e(t) + '=' + e(r);
              n = n + o + '&';
            }),
            (n = n.slice(0, -1))
          );
        }
        function et(t, e) {
          return e;
        }
        function nt(t) {
          return !F(t) || t.length < 2 ? t : ((t = t), J(t));
        }
        function rt() {
          function t(t, e) {
            return nt(e);
          }
          function e(t, e) {
            return M(e) ? +e : e;
          }
          function n(t, e) {
            if (!(F(e) && e.length > 0)) return [];
            var n = encodeURIComponent;
            return e.split(',').map(function(e) {
              var r = t.bucket,
                o = t.fullPath;
              return (
                Y('/b/' + n(r) + '/o/' + n(o)) + tt({ alt: 'media', token: e })
              );
            });
          }
          if (fe) return fe;
          var r = [];
          r.push(new he('bucket')),
            r.push(new he('generation')),
            r.push(new he('metageneration')),
            r.push(new he('name', 'fullPath', !0));
          var o = new he('name');
          (o.xform = t), r.push(o);
          var i = new he('size');
          return (
            (i.xform = e),
            r.push(i),
            r.push(new he('timeCreated')),
            r.push(new he('updated')),
            r.push(new he('md5Hash', null, !0)),
            r.push(new he('cacheControl', null, !0)),
            r.push(new he('contentDisposition', null, !0)),
            r.push(new he('contentEncoding', null, !0)),
            r.push(new he('contentLanguage', null, !0)),
            r.push(new he('contentType', null, !0)),
            r.push(new he('metadata', 'customMetadata', !0)),
            r.push(new he('downloadTokens', 'downloadURLs', !1, n)),
            (fe = r)
          );
        }
        function ot(t, e) {
          function n() {
            var n = t.bucket,
              r = t.fullPath,
              o = new pe(n, r);
            return e.makeStorageReference(o);
          }
          Object.defineProperty(t, 'ref', { get: n });
        }
        function it(t, e, n) {
          var r = {};
          r.type = 'file';
          for (var o = n.length, i = 0; i < o; i++) {
            var a = n[i];
            r[a.local] = a.xform(r, e[a.server]);
          }
          return ot(r, t), r;
        }
        function at(t, e, n) {
          var r = V(e);
          return null === r ? null : it(t, r, n);
        }
        function ut(t, e) {
          for (var n = {}, r = e.length, o = 0; o < r; o++) {
            var i = e[o];
            i.writable && (n[i.server] = t[i.local]);
          }
          return JSON.stringify(n);
        }
        function st(t) {
          if (!t || !G(t)) throw 'Expected Metadata object.';
          for (var e in t) {
            var n = t[e];
            if ('customMetadata' === e) {
              if (!G(n)) throw "Expected object for 'customMetadata' mapping.";
            } else if (j(n))
              throw "Mapping for '" + e + "' cannot be an object.";
          }
        }
        function ct(t, e, n) {
          for (var r = e.length, o = e.length, i = 0; i < e.length; i++)
            if (e[i].optional) {
              r = i;
              break;
            }
          if (!(r <= n.length && n.length <= o)) throw b(r, o, t, n.length);
          for (var i = 0; i < n.length; i++)
            try {
              e[i].validator(n[i]);
            } catch (e) {
              throw e instanceof Error ? v(i, t, e.message) : v(i, t, e);
            }
        }
        function lt(t, e) {
          return function(n) {
            t(n), e(n);
          };
        }
        function pt(t, e) {
          function n(t) {
            if (!F(t)) throw 'Expected string.';
          }
          var r;
          return (r = t ? lt(n, t) : n), new de(r, e);
        }
        function ht() {
          function t(t) {
            if (
              !(
                t instanceof Uint8Array ||
                t instanceof ArrayBuffer ||
                (X() && t instanceof Blob)
              )
            )
              throw 'Expected Blob or File.';
          }
          return new de(t);
        }
        function ft(t) {
          return new de(st, t);
        }
        function dt() {
          function t(t) {
            if (!(H(t) && t >= 0)) throw 'Expected a number 0 or greater.';
          }
          return new de(t);
        }
        function _t(t, e) {
          function n(e) {
            if (!(null === e || (M(e) && e instanceof Object)))
              throw 'Expected an Object.';
            void 0 !== t && null !== t && t(e);
          }
          return new de(n, e);
        }
        function vt(t) {
          function e(t) {
            if (null !== t && !B(t)) throw 'Expected a Function.';
          }
          return new de(e, t);
        }
        function bt() {
          return 'undefined' != typeof BlobBuilder
            ? BlobBuilder
            : 'undefined' != typeof WebKitBlobBuilder
              ? WebKitBlobBuilder
              : void 0;
        }
        function mt() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          var n = bt();
          if (void 0 !== n) {
            for (var r = new n(), o = 0; o < t.length; o++) r.append(t[o]);
            return r.getBlob();
          }
          if (X()) return new Blob(t);
          throw Error("This browser doesn't seem to support creating Blobs");
        }
        function yt(t, e, n) {
          return t.webkitSlice
            ? t.webkitSlice(e, n)
            : t.mozSlice
              ? t.mozSlice(e, n)
              : t.slice
                ? t.slice(e, n)
                : null;
        }
        function gt(t, e) {
          return -1 !== t.indexOf(e);
        }
        function Rt(t) {
          return Array.prototype.slice.call(t);
        }
        function Et(t, e) {
          var n = t.indexOf(e);
          -1 !== n && t.splice(n, 1);
        }
        function wt(t) {
          if (!t) throw o();
        }
        function Ut(t, e) {
          function n(n, r) {
            var o = at(t, r, e);
            return wt(null !== o), o;
          }
          return n;
        }
        function Tt(t) {
          function e(e, n) {
            var r;
            return (
              (r =
                401 === e.getStatus()
                  ? u()
                  : 402 === e.getStatus()
                    ? a(t.bucket)
                    : 403 === e.getStatus()
                      ? s(t.path)
                      : n),
              r.setServerResponseProp(n.serverResponseProp()),
              r
            );
          }
          return e;
        }
        function At(t) {
          function e(e, r) {
            var o = n(e, r);
            return (
              404 === e.getStatus() && (o = i(t.path)),
              o.setServerResponseProp(r.serverResponseProp()),
              o
            );
          }
          var n = Tt(t);
          return e;
        }
        function Nt(t, e, n) {
          var r = e.fullServerUrl(),
            o = Q(r),
            i = t.maxOperationRetryTime(),
            a = new ve(o, 'GET', Ut(t, n), i);
          return (a.errorHandler = At(e)), a;
        }
        function Ot(t, e, n, r) {
          var o = e.fullServerUrl(),
            i = Q(o),
            a = ut(n, r),
            u = { 'Content-Type': 'application/json; charset=utf-8' },
            s = t.maxOperationRetryTime(),
            c = new ve(i, 'PATCH', Ut(t, r), s);
          return (c.headers = u), (c.body = a), (c.errorHandler = At(e)), c;
        }
        function Ct(t, e) {
          function n(t, e) {}
          var r = e.fullServerUrl(),
            o = Q(r),
            i = t.maxOperationRetryTime(),
            a = new ve(o, 'DELETE', n, i);
          return (a.successCodes = [200, 204]), (a.errorHandler = At(e)), a;
        }
        function St(t, e) {
          return (
            (t && t.contentType) ||
            (e && e.type()) ||
            'application/octet-stream'
          );
        }
        function kt(t, e, n) {
          var r = L(n);
          return (
            (r.fullPath = t.path),
            (r.size = e.size()),
            r.contentType || (r.contentType = St(null, e)),
            r
          );
        }
        function It(t, e, n, r, o) {
          var i = e.bucketOnlyServerUrl(),
            a = { 'X-Goog-Upload-Protocol': 'multipart' },
            u = (function() {
              for (var t = '', e = 0; e < 2; e++)
                t += ('' + Math.random()).slice(2);
              return t;
            })();
          a['Content-Type'] = 'multipart/related; boundary=' + u;
          var s = kt(e, r, o),
            c = ut(s, n),
            l =
              '--' +
              u +
              '\r\nContent-Type: application/json; charset=utf-8\r\n\r\n' +
              c +
              '\r\n--' +
              u +
              '\r\nContent-Type: ' +
              s.contentType +
              '\r\n\r\n',
            p = '\r\n--' + u + '--',
            h = _e.getBlob(l, r, p);
          if (null === h) throw f();
          var d = { name: s.fullPath },
            _ = $(i),
            v = t.maxUploadRetryTime(),
            b = new ve(_, 'POST', Ut(t, n), v);
          return (
            (b.urlParams = d),
            (b.headers = a),
            (b.body = h.uploadData()),
            (b.errorHandler = Tt(e)),
            b
          );
        }
        function Lt(t, e) {
          var n;
          try {
            n = t.getResponseHeader('X-Goog-Upload-Status');
          } catch (t) {
            wt(!1);
          }
          return wt(gt(e || ['active'], n)), n;
        }
        function xt(t, e, n, r, o) {
          function i(t, e) {
            Lt(t);
            var n;
            try {
              n = t.getResponseHeader('X-Goog-Upload-URL');
            } catch (t) {
              wt(!1);
            }
            return wt(F(n)), n;
          }
          var a = e.bucketOnlyServerUrl(),
            u = kt(e, r, o),
            s = { name: u.fullPath },
            c = $(a),
            l = {
              'X-Goog-Upload-Protocol': 'resumable',
              'X-Goog-Upload-Command': 'start',
              'X-Goog-Upload-Header-Content-Length': r.size(),
              'X-Goog-Upload-Header-Content-Type': u.contentType,
              'Content-Type': 'application/json; charset=utf-8'
            },
            p = ut(u, n),
            h = t.maxUploadRetryTime(),
            f = new ve(c, 'POST', i, h);
          return (
            (f.urlParams = s),
            (f.headers = l),
            (f.body = p),
            (f.errorHandler = Tt(e)),
            f
          );
        }
        function Pt(t, e, n, r) {
          function o(t, e) {
            var n,
              o = Lt(t, ['active', 'final']);
            try {
              n = t.getResponseHeader('X-Goog-Upload-Size-Received');
            } catch (t) {
              wt(!1);
            }
            var i = parseInt(n, 10);
            return wt(!isNaN(i)), new be(i, r.size(), 'final' === o);
          }
          var i = { 'X-Goog-Upload-Command': 'query' },
            a = t.maxUploadRetryTime(),
            u = new ve(n, 'POST', o, a);
          return (u.headers = i), (u.errorHandler = Tt(e)), u;
        }
        function Dt(t, e, n, r, o, i, a, u) {
          function s(t, n) {
            var o,
              a = Lt(t, ['active', 'final']),
              u = c.current + p,
              s = r.size();
            return (
              (o = 'final' === a ? Ut(e, i)(t, n) : null),
              new be(u, s, 'final' === a, o)
            );
          }
          var c = new be(0, 0);
          if (
            (a
              ? ((c.current = a.current), (c.total = a.total))
              : ((c.current = 0), (c.total = r.size())),
            r.size() !== c.total)
          )
            throw d();
          var l = c.total - c.current,
            p = l;
          o > 0 && (p = Math.min(p, o));
          var h = c.current,
            _ = h + p,
            v = p === l ? 'upload, finalize' : 'upload',
            b = {
              'X-Goog-Upload-Command': v,
              'X-Goog-Upload-Offset': c.current
            },
            m = r.slice(h, _);
          if (null === m) throw f();
          var y = e.maxUploadRetryTime(),
            g = new ve(n, 'POST', s, y);
          return (
            (g.headers = b),
            (g.body = m.uploadData()),
            (g.progressCallback = u || null),
            (g.errorHandler = Tt(t)),
            g
          );
        }
        function Mt(t) {
          return function() {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            P(!0).then(function() {
              t.apply(null, e);
            });
          };
        }
        function Wt(t, e, n) {
          function r() {
            return 2 === p;
          }
          function o() {
            h || ((h = !0), e.apply(null, arguments));
          }
          function i(e) {
            c = setTimeout(function() {
              (c = null), t(a, r());
            }, e);
          }
          function a(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            if (!h) {
              if (t) return void o.apply(null, arguments);
              if (r() || l) return void o.apply(null, arguments);
              s < 64 && (s *= 2);
              var a;
              1 === p ? ((p = 2), (a = 0)) : (a = 1e3 * (s + Math.random())),
                i(a);
            }
          }
          function u(t) {
            f ||
              ((f = !0),
              h ||
                (null !== c
                  ? (t || (p = 2), clearTimeout(c), i(0))
                  : t || (p = 1)));
          }
          var s = 1,
            c = null,
            l = !1,
            p = 0,
            h = !1,
            f = !1;
          return (
            i(0),
            setTimeout(function() {
              (l = !0), u(!0);
            }, n),
            u
          );
        }
        function Bt(t) {
          t(!1);
        }
        function Gt(t, e) {
          null !== e && e.length > 0 && (t.Authorization = 'Firebase ' + e);
        }
        function jt(t) {
          var e = void 0 !== Te.default ? Te.default.SDK_VERSION : 'AppManager';
          t['X-Firebase-Storage-Version'] = 'webjs/' + e;
        }
        function qt(t, e, n) {
          var r = tt(t.urlParams),
            o = t.url + r,
            i = L(t.headers);
          return (
            Gt(i, e),
            jt(i),
            new Ae(
              o,
              t.method,
              i,
              t.body,
              t.successCodes,
              t.additionalRetryCodes,
              t.handler,
              t.errorHandler,
              t.timeout,
              t.progressCallback,
              n
            )
          );
        }
        function Ft(t, e, n) {
          return new Oe(t, new le(), n);
        }
        function Ht(t) {
          var e = {
            TaskState: ae,
            TaskEvent: oe,
            StringFormat: ee,
            Storage: Oe,
            Reference: Re
          };
          t.INTERNAL.registerService(Se, Ft, e, void 0, !0);
        }
        Object.defineProperty(e, '__esModule', { value: !0 });
        var zt,
          Xt = 'https://firebasestorage.googleapis.com',
          Vt = 'https://firebasestorage.googleapis.com',
          Kt = '/v0',
          Zt = '/v0',
          Jt = 12e4,
          Qt = 6e4,
          Yt = -9007199254740991,
          $t = (function() {
            function t(t, e) {
              (this.t = r(t)),
                (this.e = 'Firebase Storage: ' + e),
                (this.n = null),
                (this.r = 'FirebaseError');
            }
            return (
              (t.prototype.codeProp = function() {
                return this.code;
              }),
              (t.prototype.codeEquals = function(t) {
                return r(t) === this.codeProp();
              }),
              (t.prototype.serverResponseProp = function() {
                return this.n;
              }),
              (t.prototype.setServerResponseProp = function(t) {
                this.n = t;
              }),
              Object.defineProperty(t.prototype, 'name', {
                get: function() {
                  return this.r;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, 'code', {
                get: function() {
                  return this.t;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, 'message', {
                get: function() {
                  return this.e;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, 'serverResponse', {
                get: function() {
                  return this.n;
                },
                enumerable: !0,
                configurable: !0
              }),
              t
            );
          })(),
          te = {
            UNKNOWN: 'unknown',
            OBJECT_NOT_FOUND: 'object-not-found',
            BUCKET_NOT_FOUND: 'bucket-not-found',
            PROJECT_NOT_FOUND: 'project-not-found',
            QUOTA_EXCEEDED: 'quota-exceeded',
            UNAUTHENTICATED: 'unauthenticated',
            UNAUTHORIZED: 'unauthorized',
            RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
            INVALID_CHECKSUM: 'invalid-checksum',
            CANCELED: 'canceled',
            INVALID_EVENT_NAME: 'invalid-event-name',
            INVALID_URL: 'invalid-url',
            INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
            NO_DEFAULT_BUCKET: 'no-default-bucket',
            CANNOT_SLICE_BLOB: 'cannot-slice-blob',
            SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
            NO_DOWNLOAD_URL: 'no-download-url',
            INVALID_ARGUMENT: 'invalid-argument',
            INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
            APP_DELETED: 'app-deleted',
            INVALID_ROOT_OPERATION: 'invalid-root-operation',
            INVALID_FORMAT: 'invalid-format',
            INTERNAL_ERROR: 'internal-error'
          },
          ee = {
            RAW: 'raw',
            BASE64: 'base64',
            BASE64URL: 'base64url',
            DATA_URL: 'data_url'
          },
          ne = (function() {
            function t(t, e) {
              (this.data = t), (this.contentType = e || null);
            }
            return t;
          })(),
          re = (function() {
            function t(t) {
              (this.base64 = !1), (this.contentType = null);
              var e = t.match(/^data:([^,]+)?,/);
              if (null === e)
                throw g(
                  ee.DATA_URL,
                  "Must be formatted 'data:[<mediatype>][;base64],<data>"
                );
              var n = e[1] || null;
              null != n &&
                ((this.base64 = C(n, ';base64')),
                (this.contentType = this.base64
                  ? n.substring(0, n.length - 7)
                  : n)),
                (this.rest = t.substring(t.indexOf(',') + 1));
            }
            return t;
          })(),
          oe = { STATE_CHANGED: 'state_changed' },
          ie = {
            RUNNING: 'running',
            PAUSING: 'pausing',
            PAUSED: 'paused',
            SUCCESS: 'success',
            CANCELING: 'canceling',
            CANCELED: 'canceled',
            ERROR: 'error'
          },
          ae = {
            RUNNING: 'running',
            PAUSED: 'paused',
            SUCCESS: 'success',
            CANCELED: 'canceled',
            ERROR: 'error'
          },
          ue = n(3),
          se =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                };
        !(function(t) {
          (t[(t.NO_ERROR = 0)] = 'NO_ERROR'),
            (t[(t.NETWORK_ERROR = 1)] = 'NETWORK_ERROR'),
            (t[(t.ABORT = 2)] = 'ABORT');
        })(zt || (zt = {}));
        var ce = (function() {
            function t() {
              var t = this;
              (this.o = !1),
                (this.i = new XMLHttpRequest()),
                (this.a = zt.NO_ERROR),
                (this.u = x(function(e, n) {
                  t.i.addEventListener('abort', function(n) {
                    (t.a = zt.ABORT), e(t);
                  }),
                    t.i.addEventListener('error', function(n) {
                      (t.a = zt.NETWORK_ERROR), e(t);
                    }),
                    t.i.addEventListener('load', function(n) {
                      e(t);
                    });
                }));
            }
            return (
              (t.prototype.send = function(t, e, n, r) {
                var o = this;
                if (this.o) throw R('cannot .send() more than once');
                return (
                  (this.o = !0),
                  this.i.open(e, t, !0),
                  M(r) &&
                    I(r, function(t, e) {
                      o.i.setRequestHeader(t, '' + e);
                    }),
                  M(n) ? this.i.send(n) : this.i.send(),
                  this.u
                );
              }),
              (t.prototype.getErrorCode = function() {
                if (!this.o) throw R('cannot .getErrorCode() before sending');
                return this.a;
              }),
              (t.prototype.getStatus = function() {
                if (!this.o) throw R('cannot .getStatus() before sending');
                try {
                  return this.i.status;
                } catch (t) {
                  return -1;
                }
              }),
              (t.prototype.getResponseText = function() {
                if (!this.o)
                  throw R('cannot .getResponseText() before sending');
                return this.i.responseText;
              }),
              (t.prototype.abort = function() {
                this.i.abort();
              }),
              (t.prototype.getResponseHeader = function(t) {
                return this.i.getResponseHeader(t);
              }),
              (t.prototype.addUploadProgressListener = function(t) {
                M(this.i.upload) &&
                  this.i.upload.addEventListener('progress', t);
              }),
              (t.prototype.removeUploadProgressListener = function(t) {
                M(this.i.upload) &&
                  this.i.upload.removeEventListener('progress', t);
              }),
              t
            );
          })(),
          le = (function() {
            function t() {}
            return (
              (t.prototype.createXhrIo = function() {
                return new ce();
              }),
              t
            );
          })(),
          pe = (function() {
            function t(t, e) {
              (this.bucket = t), (this.s = e);
            }
            return (
              Object.defineProperty(t.prototype, 'path', {
                get: function() {
                  return this.s;
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.fullServerUrl = function() {
                var t = encodeURIComponent;
                return '/b/' + t(this.bucket) + '/o/' + t(this.path);
              }),
              (t.prototype.bucketOnlyServerUrl = function() {
                return '/b/' + encodeURIComponent(this.bucket) + '/o';
              }),
              (t.makeFromBucketSpec = function(e) {
                var n;
                try {
                  n = t.makeFromUrl(e);
                } catch (n) {
                  return new t(e, '');
                }
                if ('' === n.path) return n;
                throw h(e);
              }),
              (t.makeFromUrl = function(e) {
                function n(t) {
                  '/' === t.path.charAt(t.path.length - 1) &&
                    (t.s = t.s.slice(0, -1));
                }
                function r(t) {
                  t.s = decodeURIComponent(t.path);
                }
                for (
                  var o = null,
                    i = RegExp('^gs://([A-Za-z0-9.\\-]+)(/(.*))?$', 'i'),
                    a = { bucket: 1, path: 3 },
                    u = RegExp(
                      '^https?://firebasestorage\\.googleapis\\.com/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-]+)/o(/([^?#]*).*)?$',
                      'i'
                    ),
                    s = { bucket: 1, path: 3 },
                    c = [
                      { regex: i, indices: a, postModify: n },
                      { regex: u, indices: s, postModify: r }
                    ],
                    l = 0;
                  l < c.length;
                  l++
                ) {
                  var h = c[l],
                    f = h.regex.exec(e);
                  if (f) {
                    var d = f[h.indices.bucket],
                      _ = f[h.indices.path];
                    _ || (_ = ''), (o = new t(d, _)), h.postModify(o);
                    break;
                  }
                }
                if (null == o) throw p(e);
                return o;
              }),
              t
            );
          })(),
          he = (function() {
            function t(t, e, n, r) {
              (this.server = t),
                (this.local = e || t),
                (this.writable = !!n),
                (this.xform = r || et);
            }
            return t;
          })(),
          fe = null,
          de = (function() {
            function t(t, e) {
              var n = this;
              (this.validator = function(e) {
                (n.optional && !W(e)) || t(e);
              }),
                (this.optional = !!e);
            }
            return t;
          })(),
          _e = (function() {
            function t(t, e) {
              var n = 0,
                r = '';
              z(t)
                ? ((this.c = t), (n = t.size), (r = t.type))
                : t instanceof ArrayBuffer
                  ? (e
                      ? (this.c = new Uint8Array(t))
                      : ((this.c = new Uint8Array(t.byteLength)),
                        this.c.set(new Uint8Array(t))),
                    (n = this.c.length))
                  : t instanceof Uint8Array &&
                    (e
                      ? (this.c = t)
                      : ((this.c = new Uint8Array(t.length)), this.c.set(t)),
                    (n = t.length)),
                (this.l = n),
                (this.p = r);
            }
            return (
              (t.prototype.size = function() {
                return this.l;
              }),
              (t.prototype.type = function() {
                return this.p;
              }),
              (t.prototype.slice = function(e, n) {
                if (z(this.c)) {
                  var r = this.c,
                    o = yt(r, e, n);
                  return null === o ? null : new t(o);
                }
                return new t(new Uint8Array(this.c.buffer, e, n - e), !0);
              }),
              (t.getBlob = function() {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                if (X()) {
                  var r = e.map(function(e) {
                    return e instanceof t ? e.c : e;
                  });
                  return new t(mt.apply(null, r));
                }
                var o = e.map(function(t) {
                    return F(t) ? w(ee.RAW, t).data : t.c;
                  }),
                  i = 0;
                o.forEach(function(t) {
                  i += t.byteLength;
                });
                var a = new Uint8Array(i),
                  u = 0;
                return (
                  o.forEach(function(t) {
                    for (var e = 0; e < t.length; e++) a[u++] = t[e];
                  }),
                  new t(a, !0)
                );
              }),
              (t.prototype.uploadData = function() {
                return this.c;
              }),
              t
            );
          })(),
          ve = (function() {
            function t(t, e, n, r) {
              (this.url = t),
                (this.method = e),
                (this.handler = n),
                (this.timeout = r),
                (this.urlParams = {}),
                (this.headers = {}),
                (this.body = null),
                (this.errorHandler = null),
                (this.progressCallback = null),
                (this.successCodes = [200]),
                (this.additionalRetryCodes = []);
            }
            return t;
          })(),
          be = (function() {
            function t(t, e, n, r) {
              (this.current = t),
                (this.total = e),
                (this.finalized = !!n),
                (this.metadata = r || null);
            }
            return t;
          })(),
          me = (function() {
            function t(t, e, n) {
              if (B(t) || M(e) || M(n))
                (this.next = t),
                  (this.error = e || null),
                  (this.complete = n || null);
              else {
                var r = t;
                (this.next = r.next || null),
                  (this.error = r.error || null),
                  (this.complete = r.complete || null);
              }
            }
            return t;
          })(),
          ye = (function() {
            function t(t, e, n, r, o, i) {
              (this.bytesTransferred = t),
                (this.totalBytes = e),
                (this.state = n),
                (this.metadata = r),
                (this.task = o),
                (this.ref = i);
            }
            return (
              Object.defineProperty(t.prototype, 'downloadURL', {
                get: function() {
                  if (null !== this.metadata) {
                    var t = this.metadata.downloadURLs;
                    return null != t && null != t[0] ? t[0] : null;
                  }
                  return null;
                },
                enumerable: !0,
                configurable: !0
              }),
              t
            );
          })(),
          ge = (function() {
            function t(t, e, n, r, o, i) {
              void 0 === i && (i = null);
              var a = this;
              (this.h = 0),
                (this.f = !1),
                (this.d = !1),
                (this._ = []),
                (this.v = null),
                (this.m = null),
                (this.y = null),
                (this.g = 1),
                (this.R = null),
                (this.w = null),
                (this.U = t),
                (this.T = e),
                (this.A = n),
                (this.N = o),
                (this.O = i),
                (this.C = r),
                (this.S = this.k(this.N)),
                (this.I = ie.RUNNING),
                (this.L = function(t) {
                  (a.y = null),
                    (a.g = 1),
                    t.codeEquals(te.CANCELED)
                      ? ((a.f = !0), a.x())
                      : ((a.v = t), a.P(ie.ERROR));
                }),
                (this.D = function(t) {
                  (a.y = null),
                    t.codeEquals(te.CANCELED)
                      ? a.x()
                      : ((a.v = t), a.P(ie.ERROR));
                }),
                (this.M = x(function(t, e) {
                  (a.R = t), (a.w = e), a.W();
                })),
                this.M.then(null, function() {});
            }
            return (
              (t.prototype.B = function() {
                var t = this,
                  e = this.h;
                return function(n, r) {
                  t.G(e + n);
                };
              }),
              (t.prototype.k = function(t) {
                return t.size() > 262144;
              }),
              (t.prototype.W = function() {
                this.I === ie.RUNNING &&
                  null === this.y &&
                  (this.S
                    ? null === this.m
                      ? this.j()
                      : this.f
                        ? this.q()
                        : this.d
                          ? this.F()
                          : this.H()
                    : this.z());
              }),
              (t.prototype.X = function(t) {
                var e = this;
                this.T.getAuthToken().then(function(n) {
                  switch (e.I) {
                    case ie.RUNNING:
                      t(n);
                      break;
                    case ie.CANCELING:
                      e.P(ie.CANCELED);
                      break;
                    case ie.PAUSING:
                      e.P(ie.PAUSED);
                  }
                });
              }),
              (t.prototype.j = function() {
                var t = this;
                this.X(function(e) {
                  var n = xt(t.T, t.A, t.C, t.N, t.O),
                    r = t.T.makeRequest(n, e);
                  (t.y = r),
                    r.getPromise().then(function(e) {
                      (t.y = null), (t.m = e), (t.f = !1), t.x();
                    }, t.L);
                });
              }),
              (t.prototype.q = function() {
                var t = this,
                  e = this.m;
                this.X(function(n) {
                  var r = Pt(t.T, t.A, e, t.N),
                    o = t.T.makeRequest(r, n);
                  (t.y = o),
                    o.getPromise().then(function(e) {
                      (e = e),
                        (t.y = null),
                        t.G(e.current),
                        (t.f = !1),
                        e.finalized && (t.d = !0),
                        t.x();
                    }, t.L);
                });
              }),
              (t.prototype.H = function() {
                var t = this,
                  e = 262144 * this.g,
                  n = new be(this.h, this.N.size()),
                  r = this.m;
                this.X(function(o) {
                  var i;
                  try {
                    i = Dt(t.A, t.T, r, t.N, e, t.C, n, t.B());
                  } catch (e) {
                    return (t.v = e), void t.P(ie.ERROR);
                  }
                  var a = t.T.makeRequest(i, o);
                  (t.y = a),
                    a.getPromise().then(function(e) {
                      t.V(),
                        (t.y = null),
                        t.G(e.current),
                        e.finalized
                          ? ((t.O = e.metadata), t.P(ie.SUCCESS))
                          : t.x();
                    }, t.L);
                });
              }),
              (t.prototype.V = function() {
                262144 * this.g < 33554432 && (this.g *= 2);
              }),
              (t.prototype.F = function() {
                var t = this;
                this.X(function(e) {
                  var n = Nt(t.T, t.A, t.C),
                    r = t.T.makeRequest(n, e);
                  (t.y = r),
                    r.getPromise().then(function(e) {
                      (t.y = null), (t.O = e), t.P(ie.SUCCESS);
                    }, t.D);
                });
              }),
              (t.prototype.z = function() {
                var t = this;
                this.X(function(e) {
                  var n = It(t.T, t.A, t.C, t.N, t.O),
                    r = t.T.makeRequest(n, e);
                  (t.y = r),
                    r.getPromise().then(function(e) {
                      (t.y = null), (t.O = e), t.G(t.N.size()), t.P(ie.SUCCESS);
                    }, t.L);
                });
              }),
              (t.prototype.G = function(t) {
                var e = this.h;
                (this.h = t), this.h !== e && this.K();
              }),
              (t.prototype.P = function(t) {
                if (this.I !== t)
                  switch (t) {
                    case ie.CANCELING:
                    case ie.PAUSING:
                      (this.I = t), null !== this.y && this.y.cancel();
                      break;
                    case ie.RUNNING:
                      var e = this.I === ie.PAUSED;
                      (this.I = t), e && (this.K(), this.W());
                      break;
                    case ie.PAUSED:
                      (this.I = t), this.K();
                      break;
                    case ie.CANCELED:
                      (this.v = l()), (this.I = t), this.K();
                      break;
                    case ie.ERROR:
                    case ie.SUCCESS:
                      (this.I = t), this.K();
                  }
              }),
              (t.prototype.x = function() {
                switch (this.I) {
                  case ie.PAUSING:
                    this.P(ie.PAUSED);
                    break;
                  case ie.CANCELING:
                    this.P(ie.CANCELED);
                    break;
                  case ie.RUNNING:
                    this.W();
                }
              }),
              Object.defineProperty(t.prototype, 'snapshot', {
                get: function() {
                  var t = S(this.I);
                  return new ye(this.h, this.N.size(), t, this.O, this, this.U);
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.on = function(t, e, n, r) {
                function o(e) {
                  if (t !== oe.STATE_CHANGED)
                    throw 'Expected one of the event types: [' +
                      oe.STATE_CHANGED +
                      '].';
                }
                function i(t) {
                  try {
                    return void c(t);
                  } catch (t) {}
                  try {
                    if ((l(t), !(W(t.next) || W(t.error) || W(t.complete))))
                      throw '';
                    return;
                  } catch (t) {
                    throw s;
                  }
                }
                function a(t) {
                  function e(e, n, o) {
                    null !== t && ct('on', t, arguments);
                    var i = new me(e, n, r);
                    return (
                      p.Z(i),
                      function() {
                        p.J(i);
                      }
                    );
                  }
                  return e;
                }
                function u(t) {
                  if (null === t) throw s;
                  i(t);
                }
                void 0 === e && (e = void 0),
                  void 0 === n && (n = void 0),
                  void 0 === r && (r = void 0);
                var s =
                    'Expected a function or an Object with one of `next`, `error`, `complete` properties.',
                  c = vt(!0).validator,
                  l = _t(null, !0).validator;
                ct('on', [pt(o), _t(i, !0), vt(!0), vt(!0)], arguments);
                var p = this,
                  h = [_t(u), vt(!0), vt(!0)];
                return W(e) || W(n) || W(r) ? a(null)(e, n, r) : a(h);
              }),
              (t.prototype.then = function(t, e) {
                return this.M.then(t, e);
              }),
              (t.prototype.catch = function(t) {
                return this.then(null, t);
              }),
              (t.prototype.Z = function(t) {
                this._.push(t), this.Q(t);
              }),
              (t.prototype.J = function(t) {
                Et(this._, t);
              }),
              (t.prototype.K = function() {
                var t = this;
                this.Y(),
                  Rt(this._).forEach(function(e) {
                    t.Q(e);
                  });
              }),
              (t.prototype.Y = function() {
                if (null !== this.R) {
                  var t = !0;
                  switch (S(this.I)) {
                    case ae.SUCCESS:
                      Mt(this.R.bind(null, this.snapshot))();
                      break;
                    case ae.CANCELED:
                    case ae.ERROR:
                      Mt(this.w.bind(null, this.v))();
                      break;
                    default:
                      t = !1;
                  }
                  t && ((this.R = null), (this.w = null));
                }
              }),
              (t.prototype.Q = function(t) {
                switch (S(this.I)) {
                  case ae.RUNNING:
                  case ae.PAUSED:
                    null !== t.next && Mt(t.next.bind(t, this.snapshot))();
                    break;
                  case ae.SUCCESS:
                    null !== t.complete && Mt(t.complete.bind(t))();
                    break;
                  case ae.CANCELED:
                  case ae.ERROR:
                    null !== t.error && Mt(t.error.bind(t, this.v))();
                    break;
                  default:
                    null !== t.error && Mt(t.error.bind(t, this.v))();
                }
              }),
              (t.prototype.resume = function() {
                ct('resume', [], arguments);
                var t = this.I === ie.PAUSED || this.I === ie.PAUSING;
                return t && this.P(ie.RUNNING), t;
              }),
              (t.prototype.pause = function() {
                ct('pause', [], arguments);
                var t = this.I === ie.RUNNING;
                return t && this.P(ie.PAUSING), t;
              }),
              (t.prototype.cancel = function() {
                ct('cancel', [], arguments);
                var t = this.I === ie.RUNNING || this.I === ie.PAUSING;
                return t && this.P(ie.CANCELING), t;
              }),
              t
            );
          })(),
          Re = (function() {
            function t(t, e) {
              (this.authWrapper = t),
                (this.location = e instanceof pe ? e : pe.makeFromUrl(e));
            }
            return (
              (t.prototype.toString = function() {
                return (
                  ct('toString', [], arguments),
                  'gs://' + this.location.bucket + '/' + this.location.path
                );
              }),
              (t.prototype.newRef = function(e, n) {
                return new t(e, n);
              }),
              (t.prototype.mappings = function() {
                return rt();
              }),
              (t.prototype.child = function(t) {
                ct('child', [pt()], arguments);
                var e = Z(this.location.path, t),
                  n = new pe(this.location.bucket, e);
                return this.newRef(this.authWrapper, n);
              }),
              Object.defineProperty(t.prototype, 'parent', {
                get: function() {
                  var t = K(this.location.path);
                  if (null === t) return null;
                  var e = new pe(this.location.bucket, t);
                  return this.newRef(this.authWrapper, e);
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, 'root', {
                get: function() {
                  var t = new pe(this.location.bucket, '');
                  return this.newRef(this.authWrapper, t);
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, 'bucket', {
                get: function() {
                  return this.location.bucket;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, 'fullPath', {
                get: function() {
                  return this.location.path;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, 'name', {
                get: function() {
                  return J(this.location.path);
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, 'storage', {
                get: function() {
                  return this.authWrapper.service();
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.put = function(t, e) {
                return (
                  void 0 === e && (e = null),
                  ct('put', [ht(), ft(!0)], arguments),
                  this.$('put'),
                  new ge(
                    this,
                    this.authWrapper,
                    this.location,
                    this.mappings(),
                    new _e(t),
                    e
                  )
                );
              }),
              (t.prototype.putString = function(t, e, n) {
                void 0 === e && (e = ee.RAW),
                  ct('putString', [pt(), pt(E, !0), ft(!0)], arguments),
                  this.$('putString');
                var r = w(e, t),
                  o = L(n);
                return (
                  !M(o.contentType) &&
                    M(r.contentType) &&
                    (o.contentType = r.contentType),
                  new ge(
                    this,
                    this.authWrapper,
                    this.location,
                    this.mappings(),
                    new _e(r.data, !0),
                    o
                  )
                );
              }),
              (t.prototype.delete = function() {
                ct('delete', [], arguments), this.$('delete');
                var t = this;
                return this.authWrapper.getAuthToken().then(function(e) {
                  var n = Ct(t.authWrapper, t.location);
                  return t.authWrapper.makeRequest(n, e).getPromise();
                });
              }),
              (t.prototype.getMetadata = function() {
                ct('getMetadata', [], arguments), this.$('getMetadata');
                var t = this;
                return this.authWrapper.getAuthToken().then(function(e) {
                  var n = Nt(t.authWrapper, t.location, t.mappings());
                  return t.authWrapper.makeRequest(n, e).getPromise();
                });
              }),
              (t.prototype.updateMetadata = function(t) {
                ct('updateMetadata', [ft()], arguments),
                  this.$('updateMetadata');
                var e = this;
                return this.authWrapper.getAuthToken().then(function(n) {
                  var r = Ot(e.authWrapper, e.location, t, e.mappings());
                  return e.authWrapper.makeRequest(r, n).getPromise();
                });
              }),
              (t.prototype.getDownloadURL = function() {
                return (
                  ct('getDownloadURL', [], arguments),
                  this.$('getDownloadURL'),
                  this.getMetadata().then(function(t) {
                    var e = t.downloadURLs[0];
                    if (M(e)) return e;
                    throw _();
                  })
                );
              }),
              (t.prototype.$ = function(t) {
                if ('' === this.location.path) throw y(t);
              }),
              t
            );
          })(),
          Ee = (function() {
            function t(t) {
              this.M = D(t);
            }
            return (
              (t.prototype.getPromise = function() {
                return this.M;
              }),
              (t.prototype.cancel = function(t) {
                void 0 === t && (t = !1);
              }),
              t
            );
          })(),
          we = (function() {
            function t() {
              (this.tt = {}), (this.et = Yt);
            }
            return (
              (t.prototype.addRequest = function(t) {
                function e() {
                  delete r.tt[n];
                }
                var n = this.et;
                this.et++, (this.tt[n] = t);
                var r = this;
                t.getPromise().then(e, e);
              }),
              (t.prototype.clear = function() {
                I(this.tt, function(t, e) {
                  e && e.cancel(!0);
                }),
                  (this.tt = {});
              }),
              t
            );
          })(),
          Ue = (function() {
            function t(e, n, r, o, i) {
              if (
                ((this.nt = null),
                (this.rt = !1),
                (this.ot = e),
                null !== this.ot)
              ) {
                var a = this.ot.options;
                M(a) && (this.nt = t.it(a));
              }
              (this.ut = n),
                (this.st = r),
                (this.ct = i),
                (this.lt = o),
                (this.pt = Jt),
                (this.ht = Qt),
                (this.ft = new we());
            }
            return (
              (t.it = function(t) {
                var e = t.storageBucket || null;
                return null == e ? null : pe.makeFromBucketSpec(e).bucket;
              }),
              (t.prototype.getAuthToken = function() {
                return null !== this.ot &&
                  M(this.ot.INTERNAL) &&
                  M(this.ot.INTERNAL.getToken)
                  ? this.ot.INTERNAL.getToken().then(
                      function(t) {
                        return null !== t ? t.accessToken : null;
                      },
                      function(t) {
                        return null;
                      }
                    )
                  : P(null);
              }),
              (t.prototype.bucket = function() {
                if (this.rt) throw m();
                return this.nt;
              }),
              (t.prototype.service = function() {
                return this.lt;
              }),
              (t.prototype.makeStorageReference = function(t) {
                return this.ut(this, t);
              }),
              (t.prototype.makeRequest = function(t, e) {
                if (this.rt) return new Ee(m());
                var n = this.st(t, e, this.ct);
                return this.ft.addRequest(n), n;
              }),
              (t.prototype.deleteApp = function() {
                (this.rt = !0), (this.ot = null), this.ft.clear();
              }),
              (t.prototype.maxUploadRetryTime = function() {
                return this.ht;
              }),
              (t.prototype.setMaxUploadRetryTime = function(t) {
                this.ht = t;
              }),
              (t.prototype.maxOperationRetryTime = function() {
                return this.pt;
              }),
              (t.prototype.setMaxOperationRetryTime = function(t) {
                this.pt = t;
              }),
              t
            );
          })(),
          Te = n(9),
          Ae = (function() {
            function t(t, e, n, r, o, i, a, u, s, c, l) {
              (this.dt = null),
                (this._t = null),
                (this.R = null),
                (this.w = null),
                (this.vt = !1),
                (this.bt = !1),
                (this.mt = t),
                (this.yt = e),
                (this.gt = n),
                (this.Rt = r),
                (this.Et = o.slice()),
                (this.wt = i.slice()),
                (this.Ut = a),
                (this.Tt = u),
                (this.At = c),
                (this.Nt = s),
                (this.ct = l);
              var p = this;
              this.M = x(function(t, e) {
                (p.R = t), (p.w = e), p.W();
              });
            }
            return (
              (t.prototype.W = function() {
                function t(t, e) {
                  function r(t) {
                    var e = t.loaded,
                      r = t.lengthComputable ? t.total : -1;
                    null !== n.At && n.At(e, r);
                  }
                  if (e) return void t(!1, new Ne(!1, null, !0));
                  var o = n.ct.createXhrIo();
                  (n.dt = o),
                    null !== n.At && o.addUploadProgressListener(r),
                    o.send(n.mt, n.yt, n.Rt, n.gt).then(function(e) {
                      null !== n.At && e.removeUploadProgressListener(r),
                        (n.dt = null),
                        (e = e);
                      var o = e.getErrorCode() === zt.NO_ERROR,
                        i = e.getStatus();
                      if (!o || n.Ot(i)) {
                        var a = e.getErrorCode() === zt.ABORT;
                        return void t(!1, new Ne(!1, null, a));
                      }
                      var u = gt(n.Et, i);
                      t(!0, new Ne(u, e));
                    });
                }
                function e(t, e) {
                  var r = n.R,
                    i = n.w,
                    a = e.xhr;
                  if (e.wasSuccessCode)
                    try {
                      var u = n.Ut(a, a.getResponseText());
                      W(u) ? r(u) : r();
                    } catch (t) {
                      i(t);
                    }
                  else if (null !== a) {
                    var s = o();
                    s.setServerResponseProp(a.getResponseText()),
                      i(n.Tt ? n.Tt(a, s) : s);
                  } else if (e.canceled) {
                    var s = n.bt ? m() : l();
                    i(s);
                  } else {
                    var s = c();
                    i(s);
                  }
                }
                var n = this;
                this.vt
                  ? e(!1, new Ne(!1, null, !0))
                  : (this._t = Wt(t, e, this.Nt));
              }),
              (t.prototype.getPromise = function() {
                return this.M;
              }),
              (t.prototype.cancel = function(t) {
                (this.vt = !0),
                  (this.bt = t || !1),
                  null !== this._t && Bt(this._t),
                  null !== this.dt && this.dt.abort();
              }),
              (t.prototype.Ot = function(t) {
                var e = t >= 500 && t < 600,
                  n = [408, 429],
                  r = gt(n, t),
                  o = gt(this.wt, t);
                return e || r || o;
              }),
              t
            );
          })(),
          Ne = (function() {
            function t(t, e, n) {
              (this.wasSuccessCode = t), (this.xhr = e), (this.canceled = !!n);
            }
            return t;
          })(),
          Oe = (function() {
            function t(t, e, n) {
              function r(t, e) {
                return new Re(t, e);
              }
              if (
                ((this.nt = null),
                (this.T = new Ue(t, r, qt, this, e)),
                (this.ot = t),
                null != n)
              )
                this.nt = pe.makeFromBucketSpec(n);
              else {
                var o = this.T.bucket();
                null != o && (this.nt = new pe(o, ''));
              }
              this.Ct = new Ce(this);
            }
            return (
              (t.prototype.ref = function(t) {
                function e(t) {
                  if (/^[A-Za-z]+:\/\//.test(t))
                    throw 'Expected child path but got a URL, use refFromURL instead.';
                }
                if ((ct('ref', [pt(e, !0)], arguments), null == this.nt))
                  throw Error('No Storage Bucket defined in Firebase Options.');
                var n = new Re(this.T, this.nt);
                return null != t ? n.child(t) : n;
              }),
              (t.prototype.refFromURL = function(t) {
                function e(t) {
                  if (!/^[A-Za-z]+:\/\//.test(t))
                    throw 'Expected full URL but got a child path, use ref instead.';
                  try {
                    pe.makeFromUrl(t);
                  } catch (t) {
                    throw 'Expected valid full URL but got an invalid one.';
                  }
                }
                return (
                  ct('refFromURL', [pt(e, !1)], arguments), new Re(this.T, t)
                );
              }),
              Object.defineProperty(t.prototype, 'maxUploadRetryTime', {
                get: function() {
                  return this.T.maxUploadRetryTime();
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.setMaxUploadRetryTime = function(t) {
                ct('setMaxUploadRetryTime', [dt()], arguments),
                  this.T.setMaxUploadRetryTime(t);
              }),
              Object.defineProperty(t.prototype, 'maxOperationRetryTime', {
                get: function() {
                  return this.T.maxOperationRetryTime();
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.setMaxOperationRetryTime = function(t) {
                ct('setMaxOperationRetryTime', [dt()], arguments),
                  this.T.setMaxOperationRetryTime(t);
              }),
              Object.defineProperty(t.prototype, 'app', {
                get: function() {
                  return this.ot;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, 'INTERNAL', {
                get: function() {
                  return this.Ct;
                },
                enumerable: !0,
                configurable: !0
              }),
              t
            );
          })(),
          Ce = (function() {
            function t(t) {
              this.lt = t;
            }
            return (
              (t.prototype.delete = function() {
                return this.lt.T.deleteApp(), P(void 0);
              }),
              t
            );
          })();
        e.registerStorage = Ht;
        var Se = 'storage';
        Ht(Te.default);
      }
    },
    [60]
  );
} catch (t) {
  throw Error(
    'Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first.'
  );
}

//# sourceMappingURL=firebase.js.map
