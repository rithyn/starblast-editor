import * as THREE from 'three';
import WebSocket from 'ws';
import $ from 'jquery';
console.log('Module 1: three.js OBJLoader')
let THREE = THREE || {};
console.log(THREE.OBJLoader)  
(function(s, t, a, r, b, l, i, o) {
    THREE.OBJLoader = function() {
        function t() {
            var t = {
                objects: [],
                object: {},
                vertices: [],
                normals: [],
                l1I11: [],
                materialLibraries: [],
                startObject: function(t, e) {
                    var i, s;
                    if (this.object && !1 === this.object.fromDeclaration)
                        return this.object.name = t,
                        void (this.object.fromDeclaration = !1 !== e);
                    i = this.object && "function" == typeof this.object.currentMaterial ? this.object.currentMaterial() : void 0,
                    this.object && "function" == typeof this.object._finalize && this.object._finalize(!0),
                    this.object = {
                        name: t || "",
                        fromDeclaration: !1 !== e,
                        geometry: {
                            vertices: [],
                            normals: [],
                            l1I11: []
                        },
                        materials: [],
                        smooth: !0,
                        startMaterial: function(t, e) {
                            var i, s = this._finalize(!1);
                            return s && (s.inherited || s.groupCount <= 0) && this.materials.splice(s.index, 1),
                            i = {
                                index: this.materials.length,
                                name: t || "",
                                mtllib: Array.isArray(e) && e.length > 0 ? e[e.length - 1] : "",
                                smooth: void 0 !== s ? s.smooth : this.smooth,
                                groupStart: void 0 !== s ? s.groupEnd : 0,
                                groupEnd: -1,
                                groupCount: -1,
                                inherited: !1,
                                clone: function(t) {
                                    var e = {
                                        index: "number" == typeof t ? t : this.index,
                                        name: this.name,
                                        mtllib: this.mtllib,
                                        smooth: this.smooth,
                                        groupStart: 0,
                                        groupEnd: -1,
                                        groupCount: -1,
                                        inherited: !1
                                    };
                                    return e.clone = this.clone.bind(e),
                                    e
                                }
                            },
                            this.materials.push(i),
                            i
                        },
                        currentMaterial: function() {
                            if (this.materials.length > 0)
                                return this.materials[this.materials.length - 1]
                        },
                        _finalize: function(t) {
                            var e, i = this.currentMaterial();
                            if (i && -1 === i.groupEnd && (i.groupEnd = this.geometry.vertices.length / 3,
                            i.groupCount = i.groupEnd - i.groupStart,
                            i.inherited = !1),
                            t && this.materials.length > 1)
                                for (e = this.materials.length - 1; e >= 0; e--)
                                    this.materials[e].groupCount <= 0 && this.materials.splice(e, 1);
                            return t && 0 === this.materials.length && this.materials.push({
                                name: "",
                                smooth: this.smooth
                            }),
                            i
                        }
                    },
                    i && i.name && "function" == typeof i.clone && (s = i.clone(0),
                    s.inherited = !0,
                    this.object.materials.push(s)),
                    this.objects.push(this.object)
                },
                finalize: function() {
                    this.object && "function" == typeof this.object._finalize && this.object._finalize(!0)
                },
                parseVertexIndex: function(t, e) {
                    var i = parseInt(t, 10);
                    return 3 * (i >= 0 ? i - 1 : i + e / 3)
                },
                parseNormalIndex: function(t, e) {
                    var i = parseInt(t, 10);
                    return 3 * (i >= 0 ? i - 1 : i + e / 3)
                },
                parseUVIndex: function(t, e) {
                    var i = parseInt(t, 10);
                    return 2 * (i >= 0 ? i - 1 : i + e / 2)
                },
                addVertex: function(t, e, i) {
                    var s = this.vertices
                      , n = this.object.geometry.vertices;
                    n.push(s[t + 0], s[t + 1], s[t + 2]),
                    n.push(s[e + 0], s[e + 1], s[e + 2]),
                    n.push(s[i + 0], s[i + 1], s[i + 2])
                },
                addVertexLine: function(t) {
                    var e = this.vertices;
                    this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2])
                },
                addNormal: function(t, e, i) {
                    var s = this.normals
                      , n = this.object.geometry.normals;
                    n.push(s[t + 0], s[t + 1], s[t + 2]),
                    n.push(s[e + 0], s[e + 1], s[e + 2]),
                    n.push(s[i + 0], s[i + 1], s[i + 2])
                },
                addUV: function(t, e, i) {
                    var s = this.l1I11
                      , n = this.object.geometry.l1I11;
                    n.push(s[t + 0], s[t + 1]),
                    n.push(s[e + 0], s[e + 1]),
                    n.push(s[i + 0], s[i + 1])
                },
                addUVLine: function(t) {
                    var e = this.l1I11;
                    this.object.geometry.l1I11.push(e[t + 0], e[t + 1])
                },
                addFace: function(t, e, i, s, n, r, o, a, l) {
                    var h, d, u = this.vertices.length, c = this.parseVertexIndex(t, u), p = this.parseVertexIndex(e, u), m = this.parseVertexIndex(i, u);
                    this.addVertex(c, p, m),
                    void 0 !== s && (h = this.l1I11.length,
                    c = this.parseUVIndex(s, h),
                    p = this.parseUVIndex(n, h),
                    m = this.parseUVIndex(r, h),
                    this.addUV(c, p, m)),
                    void 0 !== o && (d = this.normals.length,
                    c = this.parseNormalIndex(o, d),
                    p = o === a ? c : this.parseNormalIndex(a, d),
                    m = o === l ? c : this.parseNormalIndex(l, d),
                    this.addNormal(c, p, m))
                },
                addLineGeometry: function(t, e) {
                    var i, s, n, r, o;
                    for (this.object.geometry.type = "Line",
                    i = this.vertices.length,
                    s = this.l1I11.length,
                    n = 0,
                    r = t.length; n < r; n++)
                        this.addVertexLine(this.parseVertexIndex(t[n], i));
                    for (o = 0,
                    r = e.length; o < r; o++)
                        this.addUVLine(this.parseUVIndex(e[o], s))
                }
            };
            return t.startObject("", !1),
            t
        }
        function e(t) {
            this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager,
            this.materials = null
        }
        var i = /^[og]\s*(.+)?/
          , s = /^mtllib /
          , n = /^usemtl /;
        return e.prototype = {
            constructor: e,
            load: function(t, e, i, s) {
                var n = this
                  , r = new THREE.FileLoader(n.manager);
                r.setPath(this.path),
                r.load(t, function(t) {
                    e(n.parse(t))
                }, i, s)
            },
            setPath: function(t) {
                this.path = t
            },
            setMaterials: function(t) {
                return this.materials = t,
                this
            },
            parse: function(e) {
                var r, o, a, l, h, d, u, c, p, m, f, g, y, v, _, b, x, I, O, w, M, S, E, k, j, C, T, A, z, L, R, H, q, U, D, F, V, B, N, J = new t;
                for (-1 !== e.indexOf("\r\n") && (e = e.replace(/\r\n/g, "\n")),
                -1 !== e.indexOf("\\\n") && (e = e.replace(/\\\n/g, "")),
                r = e.split("\n"),
                o = "",
                a = "",
                0,
                l = [],
                h = "function" == typeof "".trimLeft,
                d = 0,
                u = r.length; d < u; d++)
                    if (o = r[d],
                    o = h ? o.trimLeft() : o.trim(),
                    0 !== o.length && "#" !== (a = o.charAt(0)))
                        if ("v" === a)
                            switch (c = o.split(/\s+/),
                            c[0]) {
                            case "v":
                                J.vertices.push(parseFloat(c[1]), parseFloat(c[2]), parseFloat(c[3]));
                                break;
                            case "vn":
                                J.normals.push(parseFloat(c[1]), parseFloat(c[2]), parseFloat(c[3]));
                                break;
                            case "vt":
                                J.l1I11.push(parseFloat(c[1]), parseFloat(c[2]))
                            }
                        else if ("f" === a) {
                            for (p = o.substr(1).trim(),
                            m = p.split(/\s+/),
                            f = [],
                            g = 0,
                            y = m.length; g < y; g++)
                                v = m[g],
                                v.length > 0 && (_ = v.split("/"),
                                f.push(_));
                            for (b = f[0],
                            g = 1,
                            y = f.length - 1; g < y; g++)
                                x = f[g],
                                I = f[g + 1],
                                J.addFace(b[0], x[0], I[0], b[1], x[1], I[1], b[2], x[2], I[2])
                        } else if ("l" === a) {
                            if (O = o.substring(1).trim().split(" "),
                            w = [],
                            M = [],
                            -1 === o.indexOf("/"))
                                w = O;
                            else
                                for (S = 0,
                                E = O.length; S < E; S++)
                                    k = O[S].split("/"),
                                    "" !== k[0] && w.push(k[0]),
                                    "" !== k[1] && M.push(k[1]);
                            J.addLineGeometry(w, M)
                        } else if (null !== (l = i.exec(o)))
                            j = (" " + l[0].substr(1).trim()).substr(1),
                            J.startObject(j);
                        else if (n.test(o))
                            J.object.startMaterial(o.substring(7).trim(), J.materialLibraries);
                        else if (s.test(o))
                            J.materialLibraries.push(o.substring(7).trim());
                        else {
                            if ("s" !== a) {
                                if ("\0" === o)
                                    continue;
                                throw Error("Unexpected line: '" + o + "'")
                            }
                            l = o.split(" "),
                            l.length > 1 ? (C = l[1].trim().toLowerCase(),
                            J.object.smooth = "0" !== C && "off" !== C) : J.object.smooth = !0,
                            (T = J.object.currentMaterial()) && (T.smooth = J.object.smooth)
                        }
                for (J.finalize(),
                A = new THREE.Group,
                A.materialLibraries = [].concat(J.materialLibraries),
                d = 0,
                u = J.objects.length; d < u; d++)
                    if (z = J.objects[d],
                    L = z.geometry,
                    R = z.materials,
                    H = "Line" === L.type,
                    0 !== L.vertices.length) {
                        for (q = new THREE.BufferGeometry,
                        q.addAttribute("position", new THREE.BufferAttribute(new Float32Array(L.vertices),3)),
                        L.normals.length > 0 ? q.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(L.normals),3)) : q.computeVertexNormals(),
                        L.l1I11.length > 0 && q.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(L.l1I11),2)),
                        U = [],
                        D = 0,
                        F = R.length; D < F; D++)
                            V = R[D],
                            T = void 0,
                            null !== this.materials && (T = this.materials.create(V.name),
                            !H || !T || T instanceof THREE.LineBasicMaterial || (B = new THREE.LineBasicMaterial,
                            B.copy(T),
                            T = B)),
                            T || (T = H ? new THREE.LineBasicMaterial : new THREE.MeshPhongMaterial,
                            T.name = V.name),
                            T.flatShading = !V.smooth,
                            U.push(T);
                        if (U.length > 1) {
                            for (D = 0,
                            F = R.length; D < F; D++)
                                V = R[D],
                                q.addGroup(V.groupStart, V.groupCount, D);
                            N = H ? new THREE.LineSegments(q,U) : new THREE.Mesh(q,U)
                        } else
                            N = H ? new THREE.LineSegments(q,U[0]) : new THREE.Mesh(q,U[0]);
                        N.name = z.name,
                        A.add(N)
                    }
                return A
            }
        },
        e
    }(),
    this.ModObjectType = function() {
        function t(t) {
            var e, i, s;
            this.spec = t,
            this.id = this.spec.id,
            s = new THREE.LoadingManager,
            i = new THREE.OBJLoader(s),
            e = this.spec.obj,
            i.load(e, function(t) {
                return function(e) {
                    return t.object = e,
                    t.checkLoaded()
                }
            }(this)),
            this.spec.emissive && (this.emissive_img = new Image,
            this.emissive_img.crossOrigin = "Anonymous",
            this.emissive_img.src = this.spec.emissive,
            this.emissive_img.onload = function(t) {
                return function() {
                    return t.emissive = new THREE.Texture(t.emissive_img),
                    t.emissive.needsUpdate = !0,
                    t.checkLoaded()
                }
            }(this)),
            this.spec.diffuse && (this.diffuse_img = new Image,
            this.diffuse_img.crossOrigin = "Anonymous",
            this.diffuse_img.src = this.spec.diffuse,
            this.diffuse_img.onload = function(t) {
                return function() {
                    return t.diffuse = new THREE.Texture(t.diffuse_img),
                    t.diffuse.needsUpdate = !0,
                    t.checkLoaded()
                }
            }(this)),
            this.spec.specular && (this.specular_img = new Image,
            this.specular_img.crossOrigin = "Anonymous",
            this.specular_img.src = this.spec.specular,
            this.specular_img.onload = function(t) {
                return function() {
                    return t.specular = new THREE.Texture(t.specular_img),
                    t.specular.needsUpdate = !0,
                    t.checkLoaded()
                }
            }(this)),
            this.spec.I1OO1 && (this.bump_img = new Image,
            this.bump_img.crossOrigin = "Anonymous",
            this.bump_img.src = this.spec.I1OO1,
            this.bump_img.onload = function(t) {
                return function() {
                    return t.I1OO1 = new THREE.Texture(t.bump_img),
                    t.I1OO1.needsUpdate = !0,
                    t.checkLoaded()
                }
            }(this)),
            this.queue = []
        }
        return t.prototype.checkLoaded = function() {
            if (null != this.object && !(null != this.spec.emissive && null == this.emissive || null != this.spec.diffuse && null == this.diffuse || null != this.spec.specular && null == this.specular || null != this.spec.I1OO1 && null == this.I1OO1))
                for (this.updateMaterial(),
                this.Il0Ol = this.object.children[0]; this.queue.length > 0; )
                    this.IlOO1(this.queue.splice(0, 1)[0])
        }
        ,
        t.prototype.IlOO1 = function(t) {
            return null == this.Il0Ol ? this.queue.push(t) : t(new THREE.Mesh(this.Il0Ol.geometry,this.material))
        }
        ,
        t.IIllI = function(t, e) {
            var i, s, n, r, o, a, l, h, d, u, c, p, m, f, g, y, v, _, b, x;
            for (null == e && (e = 50),
            g = function(t, i, s) {
                var n, r;
                return e = s.length,
                n = Math.atan2(i, -t),
                n = Math.round((n + 2 * Math.PI) / (2 * Math.PI) * e) % e,
                r = Math.sqrt(t * t + i * i),
                s[n] = Math.max(s[n], r)
            }
            ,
            s = new THREE.Geometry,
            s.fromBufferGeometry(t),
            t = s,
            f = [],
            r = a = 0,
            c = e - 1; 0 <= c ? a <= c : a >= c; r = 0 <= c ? ++a : --a)
                f[r] = 0;
            for (p = t.faces,
            l = 0,
            d = p.length; l < d; l++)
                for (n = p[l],
                y = t.vertices[n.a],
                v = t.vertices[n.b],
                _ = t.vertices[n.c],
                r = h = 0; h <= 99; r = h += 1)
                    i = r / 100,
                    b = y.x * i + v.x * (1 - i),
                    x = y.y * i + v.y * (1 - i),
                    g(b, x, f),
                    b = _.x * i + v.x * (1 - i),
                    x = _.y * i + v.y * (1 - i),
                    g(b, x, f),
                    b = _.x * i + y.x * (1 - i),
                    x = _.y * i + y.y * (1 - i),
                    g(b, x, f);
            for (o = u = 0,
            m = f.length - 1; 0 <= m ? u <= m : u >= m; o = 0 <= m ? ++u : --u)
                f[o] = parseFloat(f[o].toFixed(3));
            return f
        }
        ,
        t.prototype.updateMaterial = function() {
            return null != this.emissive && null == this.diffuse && null == this.specular && null == this.I1OO1 ? (this.emissiveColor = null != this.emissive || null != this.spec.emissiveColor ? null != this.spec.emissiveColor ? this.spec.emissiveColor : 16777215 : 0,
            this.material = new THREE.MeshBasicMaterial({
                color: this.emissiveColor,
                map: this.emissive,
                side: THREE.DoubleSide,
                transparent: null == this.spec.transparent || this.spec.transparent
            })) : null == this.specular && null == this.I1OO1 && null == this.spec.specularColor ? (this.diffuseColor = null != this.diffuse || null != this.spec.diffuseColor ? null != this.spec.diffuseColor ? this.spec.diffuseColor : 16777215 : 0,
            this.emissiveColor = null != this.emissive || null != this.spec.emissiveColor ? null != this.spec.emissiveColor ? this.spec.emissiveColor : 16777215 : 0,
            this.material = new THREE.MeshLambertMaterial({
                color: this.diffuseColor,
                map: this.diffuse,
                emissive: this.emissiveColor,
                emissiveMap: this.emissive,
                side: THREE.DoubleSide,
                transparent: null == this.spec.transparent || this.spec.transparent
            })) : (this.diffuseColor = null != this.diffuse || null != this.spec.diffuseColor ? null != this.spec.diffuseColor ? this.spec.diffuseColor : 16777215 : 0,
            this.emissiveColor = null != this.emissive || null != this.spec.emissiveColor ? null != this.spec.emissiveColor ? this.spec.emissiveColor : 16777215 : 0,
            this.specularColor = null != this.specular || null != this.spec.specularColor ? null != this.spec.specularColor ? this.spec.specularColor : 16777215 : 0,
            this.material = new THREE.MeshPhongMaterial({
                color: this.diffuseColor,
                map: this.diffuse,
                emissiveMap: this.emissive || null,
                specularMap: this.specular || null,
                bumpMap: this.I1OO1,
                bumpScale: this.spec.bumpScale ? this.spec.bumpScale : .1,
                shininess: null != this.spec.shininess ? this.spec.shininess : 30,
                specular: this.specularColor,
                emissive: this.emissiveColor,
                side: THREE.DoubleSide,
                transparent: null == this.spec.transparent || this.spec.transparent
            }))
        }
        ,
        t
    }(),
    this.WSS = function() {
        function t() {}
        return t.create = function(t) {
            var e, i, s;
            return s = t.split(":"),
            e = s[0].replace(/\./g, "-") + ".starblast.io",
            i = s[1],
            new WebSocket("wss://" + e + ":" + i)
        }
        ,
        t
    }(),
    this.PrivateServerFinder = function() {
        function t(t, e, i, s) {
            var n;
            if (this.game = t,
            this.region = e,
            this.lI0lI = i,
            this.modding = null != s && s,
            null != localStorage.getItem("force_server"))
                return this.lI0lI(localStorage.getItem("force_server"), "Forced", !0);
            n = new XMLHttpRequest,
            n.open("GET", "https://starblast.io/simstatus.json", !0),
            n.onreadystatechange = function(t) {
                return function() {
                    var e, i, s, r, o, a, l;
                    if (4 === n.readyState && 200 === n.status) {
                        for (l = JSON.parse(n.responseText),
                        t.regions = {},
                        i = 0,
                        s = l.length; i < s; i++)
                            o = l[i],
                            o.modding && !t.modding || t.modding && !o.modding || (r = t.regions[o.location],
                            null == r && (r = new PrivateServerRegion(o.location),
                            t.regions[o.location] = r),
                            r.add(o));
                        t.regions[t.region] && (a = t.regions[t.region].servers,
                        a.sort(function(t, e) {
                            return t.usage.cpu - e.usage.cpu
                        }),
                        e = a[0],
                        t.lI0lI(e.address))
                    }
                }
            }(this),
            n.send(null)
        }
        return t
    }(),
    this.PrivateServerRegion = function() {
        function t(t) {
            this.name = t,
            this.servers = []
        }
        return t.prototype.add = function(t) {
            return this.servers.push(t)
        }
        ,
        t
    }(),
    this.List = function() {
        function t() {
            this.llOll = [],
            this.references = {}
        }
        return t.prototype.add = function(t) {
            var e, i;
            return null != this.references[t.id] && (i = this.references[t.id],
            e = this.llOll.indexOf(i),
            e >= 0 && this.llOll.splice(e, 1),
            delete this.references[t.id]),
            this.references[t.id] = t,
            this.llOll.push(t)
        }
        ,
        t.prototype.remove = function(t) {
            var e;
            return e = this.llOll.indexOf(t),
            e >= 0 && this.llOll.splice(e, 1),
            delete this.references[t.id]
        }
        ,
        t.prototype.removeId = function(t) {
            var e;
            if (null != (e = this.references[t]))
                return this.remove(e)
        }
        ,
        t.prototype.get = function(t) {
            return this.references[t]
        }
        ,
        t
    }(),
    this.Asteroid = function() {
        function t(t, e) {
            this.game = t,
            null == e && (e = {}),
            this.size = null != e.size ? e.size : 30,
            this.id = -1,
            this.x = null != e.x ? e.x : 0,
            this.y = null != e.y ? e.y : 0,
            this.vx = null != e.vx ? e.vx : 0,
            this.vy = null != e.vy ? e.vy : 0,
            this.last_updated = this.game.step,
            this.custom = {}
        }
        return t.prototype.l0OlO = function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.vx = t.sx,
            this.vy = t.sy,
            this.size = t.size,
            this.last_updated = this.game.step
        }
        ,
        t.prototype.step = function() {
            return this.x += this.vx,
            this.y += this.vy
        }
        ,
        t.prototype.toString = function() {
            return "Asteroid:" + JSON.stringify({
                size: this.size,
                x: this.x,
                y: this.y,
                vx: this.vx,
                vy: this.vy
            })
        }
        ,
        t.prototype.set = function(t) {
            return t.id = this.id,
            this.game.modding.I1l01.setAsteroid(t)
        }
        ,
        t
    }(),
    this.Alien = function() {
        function t(t, e) {
            this.game = t,
            null == e && (e = {}),
            this.code = null != e.code ? e.code : 10,
            this.level = null != e.level ? e.level : 0,
            this.id = -1,
            this.x = null != e.x ? e.x : 0,
            this.y = null != e.y ? e.y : 0,
            this.vx = null != e.vx ? e.vx : 0,
            this.vy = null != e.vy ? e.vy : 0,
            this.crystal_drop = e.crystal_drop,
            this.weapon_drop = e.weapon_drop,
            this.points = e.points,
            this.last_updated = this.game.step,
            this.custom = {}
        }
        return t.prototype.l0OlO = function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.vx = t.sx,
            this.vy = t.sy,
            this.last_updated = this.game.step
        }
        ,
        t.prototype.step = function() {
            return this.x += this.vx,
            this.y += this.vy
        }
        ,
        t.prototype.toString = function() {
            return "Alien:" + JSON.stringify({
                code: this.code,
                level: this.level,
                x: this.x,
                y: this.y,
                vx: this.vx,
                vy: this.vy
            })
        }
        ,
        t.prototype.set = function(t) {
            return t.id = this.id,
            this.game.modding.I1l01.setAlien(t)
        }
        ,
        t
    }(),
    this.Collectible = function() {
        function t(t, e) {
            this.game = t,
            null == e && (e = {}),
            this.code = null != e.code ? e.code : 10,
            this.x = null != e.x ? e.x : 0,
            this.y = null != e.y ? e.y : 0,
            this.last_updated = this.game.step,
            this.custom = {}
        }
        return t.prototype.l0OlO = function(t) {
            return this.last_updated = this.game.step
        }
        ,
        t.prototype.toString = function() {
            return "Collectible:" + JSON.stringify({
                code: this.code,
                x: this.x,
                y: this.y
            })
        }
        ,
        t
    }(),
    this.l11l0 = function() {
        function t(t) {
            this.game = t,
            this.last_updated = this.game.step,
            this.id = -1,
            this.custom = {}
        }
        return t.prototype.l0OlO = function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.name = t.player_name,
            this.vx = t.sx,
            this.vy = t.sy,
            this.r = t.r,
            this.idle = t.idle,
            this.alive = t.alive,
            this.type = t.type,
            this.stats = this.convertStats(t.stats),
            this.team = t.team,
            this.score = t.score,
            this.shield = t.shield,
            this.generator = t.generator,
            this.crystals = t.crystals,
            this.healing = t.healing,
            this.last_updated = this.game.step
        }
        ,
        t.prototype.convertStats = function(t) {
            var e, i;
            if (null == t)
                return 0;
            for (i = 0,
            e = 0; e <= 7; e += 1)
                i = 10 * i + (15 & t),
                t >>= 4;
            return i
        }
        ,
        t.prototype.toString = function() {
            return "l11l0:" + JSON.stringify({
                x: this.x,
                y: this.y,
                vx: this.vx,
                vy: this.vy,
                r: this.r,
                alive: this.alive
            })
        }
        ,
        t.prototype.step = function() {
            return this.x += this.vx,
            this.y += this.vy
        }
        ,
        t.prototype.set = function(t) {
            return t.id = this.id,
            this.game.modding.I1l01.setShip(t)
        }
        ,
        t.prototype.showInstructor = function() {
            return this.game.modding.I1l01.sendClientMessage(this.id, {
                name: "show_instructor"
            })
        }
        ,
        t.prototype.hideInstructor = function() {
            return this.game.modding.I1l01.sendClientMessage(this.id, {
                name: "hide_instructor"
            })
        }
        ,
        t.prototype.instructorSays = function(t, e) {
            return null == e && (e = null),
            this.game.modding.I1l01.sendClientMessage(this.id, {
                name: "instructor_says",
                text: t,
                character: e
            })
        }
        ,
        t.prototype.setUIComponent = function(t) {
            return this.game.modding.I1l01.sendClientMessage(this.id, {
                name: "set_ui_component",
                component: t
            })
        }
        ,
        t.prototype.intermission = function(t) {
            return this.game.modding.I1l01.sendClientMessage(this.id, {
                name: "intermission",
                data: t
            })
        }
        ,
        t.prototype.gameover = function(t) {
            return t.gameover = !0,
            this.game.modding.I1l01.sendClientMessage(this.id, {
                name: "intermission",
                data: t
            })
        }
        ,
        t.prototype.emptyWeapons = function() {
            return this.game.modding.I1l01.emptyWeapons(this.id)
        }
        ,
        t
    }(),
    this.ModObject = function() {
        function t(t) {
            this.object = t
        }
        return t.prototype.set = function(t) {}
        ,
        t.prototype.toData = function() {
            return this.object
        }
        ,
        t
    }(),
    this.lIl1I = function() {
        function t(t) {
            this.modding = t,
            this.ships = [],
            this.asteroids = [],
            this.aliens = [],
            this.collectibles = [],
            this.objects = [],
            this.objects_by_id = {},
            this.step = 0,
            this.is_open = !0,
            this.custom = {},
            this.shaping_list = {},
            this.initialized = !1
        }
        return t.prototype.tick = function(t) {
            var e, i, s, n, r, o, a, l, h, d, u, c, p, m, f, g, y, v, _, b, x, I, O, w;
            if (!this.initialized)
                for (this.initialized = !0,
                v = this.objects,
                n = 0,
                a = v.length; n < a; n++)
                    m = v[n],
                    null != m.object.type.physics && this.modding.I1l01.setServerObject(m);
            for (this.step = t.step,
            _ = this.ships,
            r = 0,
            l = _.length; r < l; r++)
                O = _[r],
                O.step();
            for (b = this.asteroids,
            o = 0,
            h = b.length; o < h; o++)
                e = b[o],
                e.step(),
                this.step > e.last_updated + 120 && (e.killed = !0);
            for (x = this.aliens,
            c = 0,
            d = x.length; c < d; c++)
                e = x[c],
                e.step(),
                this.step > e.last_updated + 120 && (e.killed = !0);
            for (I = this.collectibles,
            p = 0,
            u = I.length; p < u; p++)
                i = I[p],
                this.step > i.last_updated + 660 && (i.killed = !0);
            for (s = f = this.asteroids.length - 1; f >= 0; s = f += -1)
                this.asteroids[s].killed && this.asteroids.splice(s, 1);
            for (s = g = this.aliens.length - 1; g >= 0; s = g += -1)
                this.aliens[s].killed && this.aliens.splice(s, 1);
            for (s = y = this.collectibles.length - 1; y >= 0; s = y += -1)
                this.collectibles[s].killed && this.collectibles.splice(s, 1);
            for (s = w = this.ships.length - 1; w >= 0; s = w += -1)
                this.ships[s].I0lI0 && this.ships.splice(s, 1)
        }
        ,
        t.prototype.addAsteroid = function(t) {
            return null == t && (t = new Asteroid(this)),
            t instanceof Asteroid || (t = new Asteroid(this,t)),
            t.id = -1,
            this.asteroids.push(t),
            this.modding.I1l01.addAsteroid(t),
            t
        }
        ,
        t.prototype.addAlien = function(t) {
            return null == t && (t = new Alien(this)),
            t instanceof Alien || (t = new Alien(this,t)),
            t.id = -1,
            this.aliens.push(t),
            this.modding.I1l01.addAlien(t),
            t
        }
        ,
        t.prototype.addCollectible = function(t) {
            var e;
            return e = new Collectible(this,t),
            e.id = -1,
            this.collectibles.push(e),
            this.modding.I1l01.addCollectible(e),
            e
        }
        ,
        t.prototype.asteroidCreated = function(t, e) {
            var i, s, n, r;
            for (r = this.asteroids,
            s = 0,
            n = r.length; s < n; s++)
                i = r[s],
                i.request_id === t && (i.id = e)
        }
        ,
        t.prototype.alienCreated = function(t, e) {
            var i, s, n, r;
            for (r = this.aliens,
            s = 0,
            n = r.length; s < n; s++)
                i = r[s],
                i.request_id === t && (i.id = e)
        }
        ,
        t.prototype.collectibleCreated = function(t, e) {
            var i, s, n, r;
            for (r = this.collectibles,
            s = 0,
            n = r.length; s < n; s++)
                i = r[s],
                i.request_id === t && (i.id = e)
        }
        ,
        t.prototype.asteroidUpdate = function(t) {
            var e, i, s, n;
            for (n = this.asteroids,
            i = 0,
            s = n.length; i < s; i++)
                if (e = n[i],
                e.id === t.id)
                    return e.l0OlO(t);
            e = new Asteroid(this),
            this.asteroids.push(e),
            e.id = t.id,
            e.l0OlO(t)
        }
        ,
        t.prototype.alienUpdate = function(t) {
            var e, i, s, n;
            for (n = this.aliens,
            i = 0,
            s = n.length; i < s; i++)
                if (e = n[i],
                e.id === t.id)
                    return e.l0OlO(t);
            e = new Alien(this),
            this.aliens.push(e),
            e.id = t.id,
            e.l0OlO(t)
        }
        ,
        t.prototype.findShip = function(t) {
            var e, i, s, n;
            for (s = this.ships,
            e = 0,
            i = s.length; e < i; e++)
                if (n = s[e],
                n.id === t)
                    return n;
            return null
        }
        ,
        t.prototype.findAsteroid = function(t) {
            var e, i, s, n;
            for (n = this.asteroids,
            i = 0,
            s = n.length; i < s; i++)
                if (e = n[i],
                e.id === t)
                    return e;
            return null
        }
        ,
        t.prototype.findAlien = function(t) {
            var e, i, s, n;
            for (n = this.aliens,
            i = 0,
            s = n.length; i < s; i++)
                if (e = n[i],
                e.id === t)
                    return e;
            return null
        }
        ,
        t.prototype.findCollectible = function(t) {
            var e, i, s, n;
            for (n = this.collectibles,
            i = 0,
            s = n.length; i < s; i++)
                if (e = n[i],
                e.id === t)
                    return e;
            return null
        }
        ,
        t.prototype.shipUpdate = function(t) {
            var e, i, s, n, r, o, a, l;
            for (o = this.ships,
            e = 0,
            s = o.length; e < s; e++)
                if (l = o[e],
                l.id === t.id)
                    return l.l0OlO(t);
            for (l = new l11l0(this),
            l.id = t.id,
            this.ships.push(l),
            l.l0OlO(t),
            a = this.objects,
            i = 0,
            n = a.length; i < n; i++)
                r = a[i],
                this.modding.I1l01.setObject(r, l)
        }
        ,
        t.prototype.setObject = function(t) {
            var e, i, s, n, r, o;
            for (null != this.objects_by_id[t.id] ? (this.objects_by_id[t.id].set(t),
            t = this.objects_by_id[t.id]) : (null == t.type.physics || null != t.type.physics.shape || this.shaping_list[t.type.id] || (n = JSON.parse(JSON.stringify(t)),
            this.shaping_list[n.type.id] = t,
            s = new ModObjectType(n.type),
            s.IlOO1(function(t) {
                return function(e) {
                    var i;
                    return i = ModObjectType.IIllI(e.geometry),
                    echo(n.type.id + ".physics.shape = " + JSON.stringify(i)),
                    t.modding.I1l01.send({
                        name: "object_shape",
                        data: {
                            id: n.type.id,
                            shape: i
                        }
                    })
                }
            }(this))),
            t = new ModObject(t),
            this.objects.push(t),
            this.objects_by_id[t.id] = t),
            null != t.object.type.physics && null != this.modding.I1l01 && this.modding.I1l01.setServerObject(t),
            r = this.ships,
            e = 0,
            i = r.length; e < i; e++)
                o = r[e],
                this.modding.I1l01.setObject(t, o)
        }
        ,
        t.prototype.removeObject = function(t) {
            var e, i, s, n, r, o;
            for (null != t ? null != (n = this.objects_by_id[t]) && (e = this.objects.indexOf(n),
            e >= 0 && this.objects.splice(e, 1),
            delete this.objects_by_id[t]) : (this.objects_by_id = {},
            this.objects = []),
            r = this.ships,
            i = 0,
            s = r.length; i < s; i++)
                o = r[i],
                this.modding.I1l01.removeObject(t, o);
            return this.modding.I1l01.removeServerObject(t)
        }
        ,
        t.prototype.setCustomMap = function(t) {
            return this.modding.I1l01.setCustomMap(t)
        }
        ,
        t.prototype.setOpen = function(t) {
            return this.is_open = t,
            this.modding.I1l01.send({
                name: "set_open",
                value: t
            })
        }
        ,
        t.prototype.setUIComponent = function(t) {
            return this.modding.I1l01.sendClientMessage(null, {
                name: "set_ui_component",
                component: t
            })
        }
        ,
        t
    }(),
    this.I0lI1 = function() {
        function t(t, e, i, s) {
            this.modding = t,
            this.address = e,
            this.context = i,
            this.token = s,
            this.socket = WSS.create(this.address),
            this.socket.onmessage = function(t) {
                return function(e) {
                    if ("string" != typeof (e = e.data))
                        return t.O1OII(e);
                    if ("pong" === e)
                        return t.pong();
                    if (e = JSON.parse(e),
                    e.name)
                        switch (e.name) {
                        case "mod_started":
                            return t.modStarted(e.data);
                        case "tick":
                            return t.modding.tick(e.data);
                        case "entered":
                            return t.entered(e.data);
                        case "player_name":
                            return t.IO0lO(e);
                        case "ecp_verified":
                            return t.ECPVerified(e);
                        case "modemsg":
                            return t.modeMsg(e);
                        case "error":
                            return t.error(e);
                        case "ship_update":
                            return t.shipUpdate(e);
                        case "ship_disconnected":
                            return t.shipDisconnected(e);
                        case "asteroid_created":
                            return t.asteroidCreated(e);
                        case "alien_created":
                            return t.alienCreated(e);
                        case "collectible_created":
                            return t.collectibleCreated(e);
                        case "asteroid_update":
                            return t.asteroidUpdate(e);
                        case "alien_update":
                            return t.alienUpdate(e);
                        case "event":
                            return t.eventReceived(e)
                        }
                }
            }(this),
            this.socket.onclose = function(t) {
                return function() {
                    return t.I0lI0()
                }
            }(this),
            this.socket.onopen = function(t) {
                return function() {
                    return t.socket.send(JSON.stringify({
                        name: "run_mod",
                        data: {
                            token: t.token,
                            options: t.context.options
                        }
                    }))
                }
            }(this),
            this.request_id = 0,
            this.log_sent = 0
        }
        return t.prototype.modStarted = function(t) {
            return this.modding.game.options = t.options,
            this.modding.modStarted(t.id + "@" + this.address)
        }
        ,
        t.prototype.stop = function() {
            return this.send({
                name: "stop"
            })
        }
        ,
        t.prototype.I0lI0 = function() {
            return this.modding.stopped()
        }
        ,
        t.prototype.error = function(t) {
            return this.modding.terminal.error(t.text)
        }
        ,
        t.prototype.addAsteroid = function(t) {
            return t.request_id = this.request_id++,
            this.send({
                name: "add_asteroid",
                data: {
                    size: t.size,
                    x: t.x,
                    y: t.y,
                    sx: t.vx,
                    sy: t.vy,
                    request_id: t.request_id
                }
            })
        }
        ,
        t.prototype.addAlien = function(t) {
            return t.request_id = this.request_id++,
            this.send({
                name: "add_alien",
                data: {
                    code: t.code,
                    level: t.level,
                    x: t.x,
                    y: t.y,
                    sx: t.vx,
                    sy: t.vy,
                    request_id: t.request_id,
                    crystal_drop: t.crystal_drop,
                    weapon_drop: t.weapon_drop,
                    points: t.points
                }
            })
        }
        ,
        t.prototype.addCollectible = function(t) {
            return t.request_id = this.request_id++,
            this.send({
                name: "add_collectible",
                data: {
                    code: t.code,
                    x: t.x,
                    y: t.y,
                    request_id: t.request_id
                }
            })
        }
        ,
        t.prototype.asteroidCreated = function(t) {
            return this.modding.game.asteroidCreated(t.request_id, t.id)
        }
        ,
        t.prototype.alienCreated = function(t) {
            return this.modding.game.alienCreated(t.request_id, t.id)
        }
        ,
        t.prototype.collectibleCreated = function(t) {
            return this.modding.game.collectibleCreated(t.request_id, t.id)
        }
        ,
        t.prototype.asteroidUpdate = function(t) {
            return this.modding.game.asteroidUpdate(t)
        }
        ,
        t.prototype.alienUpdate = function(t) {
            return this.modding.game.alienUpdate(t)
        }
        ,
        t.prototype.shipUpdate = function(t) {
            return this.modding.game.shipUpdate(t)
        }
        ,
        t.prototype.shipDisconnected = function(t) {
            var e;
            if (null != (e = this.modding.game.findShip(t.id)))
                return e.I0lI0 = !0
        }
        ,
        t.prototype.setShip = function(t) {
            return this.send({
                name: "set_ship",
                data: t
            })
        }
        ,
        t.prototype.emptyWeapons = function(t) {
            return this.send({
                name: "empty_weapons",
                ship: t
            })
        }
        ,
        t.prototype.setAlien = function(t) {
            return this.send({
                name: "set_alien",
                data: t
            })
        }
        ,
        t.prototype.setAsteroid = function(t) {
            return this.send({
                name: "set_asteroid",
                data: t
            })
        }
        ,
        t.prototype.sendClientMessage = function(t, e) {
            return this.send({
                name: "client_message",
                data: {
                    id: t,
                    data: e
                }
            })
        }
        ,
        t.prototype.send = function(t) {
            var e;
            return e = JSON.stringify(t),
            this.socket.send(e),
            this.log_sent += e.length
        }
        ,
        t.prototype.setObject = function(t, e) {
            return this.sendClientMessage(e.id, {
                name: "set_object",
                object: t.toData()
            })
        }
        ,
        t.prototype.setServerObject = function(t) {
            return this.send({
                name: "set_server_object",
                data: t.toData()
            })
        }
        ,
        t.prototype.removeObject = function(t, e) {
            return this.sendClientMessage(e.id, {
                name: "remove_object",
                id: t
            })
        }
        ,
        t.prototype.removeServerObject = function(t) {
            return this.send({
                name: "remove_server_object",
                id: t
            })
        }
        ,
        t.prototype.setCustomMap = function(t) {
            return this.send({
                name: "set_custom_map",
                data: t
            })
        }
        ,
        t.prototype.eventReceived = function(t) {
            var e, i, s, n, r;
            if (null != t.data) {
                null != t.data.ship && (r = this.modding.game.findShip(t.data.ship),
                t.data.ship = r),
                null != t.data.killer && (n = this.modding.game.findShip(t.data.killer),
                t.data.killer = n),
                null != t.data.alien && (e = this.modding.game.findAlien(t.data.alien),
                t.data.alien = e),
                null != t.data.asteroid && (i = this.modding.game.findAsteroid(t.data.asteroid),
                t.data.asteroid = i),
                null != t.data.collectible && (s = this.modding.game.findCollectible(t.data.collectible),
                t.data.collectible = s);
                try {
                    null != this.modding.context.event && this.modding.context.event(t.data, this.modding.game)
                } catch (t) {
                    t
                }
                switch (t.data.name) {
                case "asteroid_destroyed":
                    if (null != i)
                        return i.killed = !0;
                    break;
                case "alien_destroyed":
                    if (null != e)
                        return e.killed = !0;
                    break;
                case "collectible_picked":
                    if (null != s)
                        return s.killed = !0
                }
            }
        }
        ,
        t
    }(),
    this.TokenClient = function() {
        function t(t, e) {
            this.address = t,
            this.lI0lI = e,
            this.socket = WSS.create(this.address),
            this.socket.onmessage = function(t) {
                return function(e) {
                    if ("string" == typeof (e = e.data) && (e = JSON.parse(e),
                    e.name))
                        switch (e.name) {
                        case "token":
                            return t.lI0lI(e.data.token)
                        }
                }
            }(this),
            this.socket.onopen = function(t) {
                return function() {
                    return t.socket.send(JSON.stringify({
                        name: "modding_token",
                        data: {
                            ecp_key: (new IOllO).key
                        }
                    }))
                }
            }(this)
        }
        return t
    }();
    var lll0I, modding, bind = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    this.Modding = function() {
        function Modding() {
            this.loadMod = bind(this.loadMod, this),
            this.loadShip = bind(this.loadShip, this);
            var t;
            this.levels = [],
            require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.21.2/min/vs' }});
            require(['vs/editor/editor.main'], function() {
                this.editor = monaco.editor.create(document.getElementById('editor'), {
                    value: localStorage.getItem("modding_code") || 'this.options = {\n  // see documentation for options reference\n  root_mode: "survival",\n  map_size: 30\n};\n\nthis.tick = function(game) {\n  // do mod stuff here ; see documentation\n}',
                    language: 'javascript',
                    theme: 'vs-dark',
                    automaticLayout: true,
                    tabSize: 2,
                    insertSpaces: true
                });

                this.update_time = 0;
                setInterval(function(t) {
                    return function() {
                        return t.check();
                    }
                }(this), 1000);

                this.editor.getModel().onDidChangeContent(function() {
                    return t.editorContentsChanged();
                });

            });
            $("#terminal").terminal(function(t) {
                return function(e, i) {
                    var s, n;
                    t.terminal = i;
                    try {
                        if (null != e.trim().split(" ")[0] && e.trim().split(" ")[0].length > 0 && null != t.commands[e.trim().split(" ")[0]])
                            return void t.commands[e.trim().split(" ")[0]](e);
                        n = window.eval(e),
                        null != n && t.terminal.echo(new String(n))
                    } catch (e) {
                        s = e,
                        t.terminal.error(new String(s))
                    }
                }
            }(this), {
                greetings: 'Starblast Modding Console - Alpha 6\nType "help" for help',
                name: "starblast_modding",
                prompt: "> "    
            }),
            this.terminal = $("#terminal").terminal(),
            document.getElementById("savemod").addEventListener("click", function(t) {
                return function(e) {
                    var i;
                    return e.preventDefault(),
                    i = new Blob([t.editor.getValue()],{
                        type: "text/plain"
                    }),
                    saveAs(i, "starblast-mod_" + Date.now() + ".txt")
                }
            }(this)),
            document.getElementById("loadmod").addEventListener("change", this.loadMod, !1),
            document.getElementById("runmod").addEventListener("click", function(t) {
                return function(e) {
                    return t.terminal.exec("start", !1)
                }
            }(this)),
            this.commands = {
                start: function(t) {
                    return function() {
                        return t.run()
                    }
                }(this),
                stop: function(t) {
                    return function() {
                        return t.stop()
                    }
                }(this),
                test: function(t) {
                    return function() {
                        return t.test()
                    }
                }(this),
                help: function(t) {
                    return function() {
                        return t.help()
                    }
                }(this),
                region: function(t) {
                    return function(e) {
                        return t.setRegion(e.split(" ")[1])
                    }
                }(this)
            },
            this.setRegion(localStorage.getItem("modding_region") || localStorage.getItem("last_best_region") || "Europe"),
            window.addEventListener("message", function(t) {
                return function(e) {
                    var i;
                    if (null != e.data)
                        switch (i = JSON.parse(e.data),
                        i.name) {
                        case "token":
                            return t.tokenReceived(i.value)
                        }
                }
            }(this)),
            this.tick_time = 0,
            this.tick_count = 0,
            this.max_tick_time = 0
        }
        return Modding.prototype.closeModal = function(t) {
            return t && t.preventDefault(),
            document.querySelector(".overlay").style.display = "none",
            document.querySelector(".overlay>div").style.display = "none"
        }
        ,
        Modding.prototype.showDisclaimer = function(t) {
            var e, i, s, n;
            return t && t.preventDefault(),
            s = document.querySelector(".overlay"),
            i = document.querySelector("#disclaimer"),
            n = s.querySelector(".title"),
            e = s.querySelector(".content"),
            s.style.display = "block",
            i.style.display = "block",
            e.style.height = i.offsetHeight - n.offsetHeight + "px",
            window.addEventListener("resize", function() {
                return e.style.height = i.offsetHeight - n.offsetHeight + "px"
            })
        }
        ,
        Modding.prototype.acceptedDisclaimer = function(t) {
            var e, i;
            return t.preventDefault(),
            localStorage.setItem("moddingDisclaimer", "yes"),
            i = document.querySelector(".overlay"),
            e = document.querySelector("#disclaimer"),
            i.style.display = "none",
            e.style.display = "none"
        }
        ,
        Modding.prototype.loadShip = function(t) {
            var e, i;
            return i = t.target.files[0],
            i.type.match("plain|javascript") ? (e = new FileReader,
            e.addEventListener("load", function(t) {
                return function(e) {
                    var i;
                    return i = e.target,
                    t.editor.setValue(i.result)
                }
            }(this)),
            e.readAsText(i)) : alert("Wrong file type")
        }
        ,
        Modding.prototype.setRegion = function(t) {
            return "Europe" === t || "Asia" === t || "America" === t ? (localStorage.setItem("modding_region", t),
            this.region = t,
            this.terminal.echo("Region set to " + t)) : this.terminal.error("Unknown region: " + t)
        }
        ,
        Modding.prototype.mouseDown = function(t) {
            return this.dragging = !0,
            this.IOlI0 = t.clientX,
            this.O10ll = t.clientY,
            this.rotate_start_x = this.rotate_x,
            this.rotate_start_y = this.rotate_y
        }
        ,
        Modding.prototype.mouseMove = function(t) {
            if (this.dragging)
                return this.rotate_x = this.rotate_start_x + .01 * (t.clientX - this.IOlI0),
                this.rotate_y = this.rotate_start_y + .01 * (t.clientY - this.O10ll)
        }
        ,
        Modding.prototype.mouseUp = function(t) {
            return this.dragging = !1
        }
        ,
        Modding.prototype.mouseWheel = function(t) {
            var e;
            return e = t.wheelDelta || -t.detail,
            e < 0 ? this.zoom *= .99 : e > 0 ? this.zoom /= .99 : void 0
        }
        ,
        Modding.prototype.editorContentsChanged = function() {
            var t;
            if (t = this.editor.getValue(),
            localStorage.setItem("modding_code", t),
            null != this.context)
                return this.update_time = Date.now()
        }
        ,
        Modding.prototype.check = function() {
            if (this.update_time > 0 && null != this.context && Date.now() > this.update_time + 3e3)
                return this.update_time = 0,
                this.compile()
        }
        ,
        Modding.prototype.compile = function() {
            var err, lI01I, src;
            src = this.editor.getValue(),
            this.context = {},
            src = "(function(game) { " + src + " })";
            try {
                return lI01I = eval(src),
                lI01I.call(this.context, this.game)
            } catch (t) {
                err = t,
                this.terminal.error(err)
            }
        }
        ,
        Modding.prototype.run = function() {
            var t;
            return null != this.context ? void this.terminal.echo("Mod already running, use stop first") : (this.game = new lIl1I(this),
            t = Date.now(),
            this.compile(),
            this.terminal.echo("Code initialization took " + (Date.now() - t) + "ms"),
            null == this.context.options && (this.context.options = {}),
            new PrivateServerFinder(this,this.region,function(t) {
                return function(e) {
                    return t.address = e,
                    window.parent.postMessage(JSON.stringify({
                        name: "get_token",
                        address: t.address
                    }), "*")
                }
            }(this),!0))
        }
        ,
        Modding.prototype.tokenReceived = function(t) {
            return this.I1l01 = new I0lI1(this,this.address,this.context,t),
            window.game = this.game,
            window.echo = function(t) {
                return function(e) {
                    return t.terminal.echo(new String(e))
                }
            }(this)
        }
        ,
        Modding.prototype.stop = function() {
            return null != this.I1l01 ? this.I1l01.stop() : this.context = null
        }
        ,
        Modding.prototype.help = function() {
            return this.terminal.echo("start                     launch modded game"),
            this.terminal.echo("stop                      kill modded game"),
            this.terminal.echo("region <region>           change server region."),
            this.terminal.echo("  ex: region Europe"),
            this.terminal.echo("anything JavaScript       execute JavaScript code"),
            this.terminal.echo("  ex: game.addAlien()"),
            this.terminal.echo("help                      display this help")
        }
        ,
        Modding.prototype.log = function(t) {
            return document.getElementById("insiderunpanel").innerHTML += t + "<br />"
        }
        ,
        Modding.prototype.modStarted = function(t) {
            return this.address = t,
            this.terminal.echo("Mod started"),
            this.terminal.echo("https://starblast.io#" + this.address),
            this.terminal.echo("Use 'test' to open game frame for testing"),
            this.field_view = new FieldView(this.game)
        }
        ,
        Modding.prototype.test = function() {
            var t;
            return null != this.context && null != this.address ? (delete document.getElementById("editor").style.bottom,
            document.getElementById("editor").style.height = "50%",
            document.getElementById("gameframe").style.height = "50%",
            t = document.createElement("iframe"),
            t.src = "https://starblast.io#" + this.address,
            t.width = "100%",
            t.height = "100%",
            t.style.border = "none",
            gameframe.appendChild(t),
            this.editor.resize()) : this.terminal.error("Mod isn't started. Use 'start' first")
        }
        ,
        Modding.prototype.stopped = function() {
            return this.terminal.echo("Mod stopped"),
            this.context = null,
            null != this.field_view && (this.field_view.killed = !0),
            this.field_view = null,
            document.getElementById("editor").style.height = "100%",
            document.getElementById("editor").style.bottom = "0px",
            document.getElementById("gameframe").style.height = "0%",
            document.getElementById("gameframe").innerHTML = "",
            this.editor.resize()
        }
        ,
        Modding.prototype.tick = function(t) {
            var e;
            if (this.game.tick(t),
            e = Date.now(),
            null != this.context.tick && this.context.tick(this.game),
            e = Date.now() - e,
            this.max_tick_time = Math.max(this.max_tick_time, e),
            this.tick_time += e,
            this.tick_count += 1,
            this.tick_count >= 600)
                return this.terminal.echo("Tick CPU time: average " + Math.round(this.tick_time / this.tick_count) + " ms ; max " + Math.round(this.max_tick_time) + " ms"),
                this.terminal.echo("Data sent: " + Math.round(this.I1l01.log_sent / this.tick_count * 60) + " bytes per second"),
                this.tick_count = 0,
                this.tick_time = 0,
                this.max_tick_time = 0,
                this.I1l01.log_sent = 0
        }
        ,
        Modding.prototype.loadMod = function(t) {
            var e, i;
            return e = t.target.files[0],
            e.type.match("plain|javascript") ? (i = new FileReader,
            i.addEventListener("load", function(t) {
                return function(e) {
                    var i;
                    return i = e.target,
                    t.editor.setValue(i.result)
                }
            }(this)),
            i.readAsText(e)) : alert("Wrong file type")
        }
        ,
        Modding
    }(),
    modding = new this.Modding,
    lll0I = window.eio,
    window.eio = {
        Socket: function() {}
    },
    this.FieldView = function() {
        function t(t) {
            this.game = t,
            this.size = Math.floor(window.innerHeight / 2) - 55,
            this.canvas = document.getElementById("fieldview"),
            this.canvas.width = this.canvas.height = this.size,
            requestAnimationFrame(function(t) {
                return function() {
                    return t.l0OlO()
                }
            }(this))
        }
        return t.prototype.l0OlO = function() {
            var t, e, i, s, n, r, o, a, l, h, d, u, c, p, m, f;
            if (this.killed)
                return void (this.canvas.width = this.canvas.height = 0);
            for (requestAnimationFrame(function(t) {
                return function() {
                    return t.l0OlO()
                }
            }(this)),
            this.size = Math.floor(window.innerHeight / 2) - 55,
            this.canvas.width !== this.size && (this.canvas.width = this.canvas.height = this.size),
            e = this.canvas.getContext("2d"),
            e.fillStyle = "#000",
            e.fillRect(0, 0, this.size, this.size),
            e.strokeStyle = "rgba(255,255,255,.1)",
            e.beginPath(),
            s = n = 0; n <= 10; s = n += 1)
                e.moveTo(s * this.size / 10, 0),
                e.lineTo(s * this.size / 10, this.size),
                e.moveTo(0, s * this.size / 10),
                e.lineTo(this.size, s * this.size / 10);
            for (e.stroke(),
            i = 10 * this.game.options.map_size,
            f = 100 / i,
            e.font = Math.round(this.size / 20) + "pt SBGlyphs",
            e.textAlign = "center",
            e.textBaseline = "middle",
            e.fillStyle = "#888",
            u = this.game.asteroids,
            r = 0,
            a = u.length; r < a; r++)
                t = u[r],
                e.save(),
                e.translate((t.x + i / 2) / i * this.size, (-t.y + i / 2) / i * this.size),
                e.scale(t.size / 20 * f, t.size / 20 * f),
                e.fillText("/", 0, 0),
                e.restore();
            for (e.fillStyle = "#F61",
            c = this.game.aliens,
            o = 0,
            l = c.length; o < l; o++)
                t = c[o],
                e.save(),
                e.translate((t.x + i / 2) / i * this.size, (-t.y + i / 2) / i * this.size),
                e.scale(1.5 * f, 1.5 * f),
                e.fillText("0", 0, 0),
                e.restore();
            for (e.fillStyle = "#FFF",
            p = this.game.ships,
            d = 0,
            h = p.length; d < h; d++)
                m = p[d],
                m.alive && (e.save(),
                e.translate((m.x + i / 2) / i * this.size, (-m.y + i / 2) / i * this.size),
                e.rotate(-m.r + Math.PI / 2),
                e.scale(1.5 * f, 1.5 * f),
                e.fillText("a", 0, 0),
                e.restore())
        }
        ,
        t
    }();
}
)();
