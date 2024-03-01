goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30936 = arguments.length;
switch (G__30936) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30945 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30945 = (function (f,blockable,meta30946){
this.f = f;
this.blockable = blockable;
this.meta30946 = meta30946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30947,meta30946__$1){
var self__ = this;
var _30947__$1 = this;
return (new cljs.core.async.t_cljs$core$async30945(self__.f,self__.blockable,meta30946__$1));
}));

(cljs.core.async.t_cljs$core$async30945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30947){
var self__ = this;
var _30947__$1 = this;
return self__.meta30946;
}));

(cljs.core.async.t_cljs$core$async30945.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30945.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30945.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30945.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30946","meta30946",-1636511273,null)], null);
}));

(cljs.core.async.t_cljs$core$async30945.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30945");

(cljs.core.async.t_cljs$core$async30945.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30945");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30945.
 */
cljs.core.async.__GT_t_cljs$core$async30945 = (function cljs$core$async$__GT_t_cljs$core$async30945(f__$1,blockable__$1,meta30946){
return (new cljs.core.async.t_cljs$core$async30945(f__$1,blockable__$1,meta30946));
});

}

return (new cljs.core.async.t_cljs$core$async30945(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30972 = arguments.length;
switch (G__30972) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30998 = arguments.length;
switch (G__30998) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31006 = arguments.length;
switch (G__31006) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34068 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34068) : fn1.call(null,val_34068));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34068) : fn1.call(null,val_34068));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31050 = arguments.length;
switch (G__31050) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___34072 = n;
var x_34073 = (0);
while(true){
if((x_34073 < n__5636__auto___34072)){
(a[x_34073] = x_34073);

var G__34074 = (x_34073 + (1));
x_34073 = G__34074;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31061 = (function (flag,meta31062){
this.flag = flag;
this.meta31062 = meta31062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31063,meta31062__$1){
var self__ = this;
var _31063__$1 = this;
return (new cljs.core.async.t_cljs$core$async31061(self__.flag,meta31062__$1));
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31063){
var self__ = this;
var _31063__$1 = this;
return self__.meta31062;
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31062","meta31062",-792931562,null)], null);
}));

(cljs.core.async.t_cljs$core$async31061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31061");

(cljs.core.async.t_cljs$core$async31061.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31061.
 */
cljs.core.async.__GT_t_cljs$core$async31061 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31061(flag__$1,meta31062){
return (new cljs.core.async.t_cljs$core$async31061(flag__$1,meta31062));
});

}

return (new cljs.core.async.t_cljs$core$async31061(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31081 = (function (flag,cb,meta31082){
this.flag = flag;
this.cb = cb;
this.meta31082 = meta31082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31083,meta31082__$1){
var self__ = this;
var _31083__$1 = this;
return (new cljs.core.async.t_cljs$core$async31081(self__.flag,self__.cb,meta31082__$1));
}));

(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31083){
var self__ = this;
var _31083__$1 = this;
return self__.meta31082;
}));

(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31082","meta31082",1379241033,null)], null);
}));

(cljs.core.async.t_cljs$core$async31081.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31081");

(cljs.core.async.t_cljs$core$async31081.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31081");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31081.
 */
cljs.core.async.__GT_t_cljs$core$async31081 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31081(flag__$1,cb__$1,meta31082){
return (new cljs.core.async.t_cljs$core$async31081(flag__$1,cb__$1,meta31082));
});

}

return (new cljs.core.async.t_cljs$core$async31081(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31093_SHARP_){
var G__31097 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31093_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31097) : fret.call(null,G__31097));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31094_SHARP_){
var G__31098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31094_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31098) : fret.call(null,G__31098));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34075 = (i + (1));
i = G__34075;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34076 = arguments.length;
var i__5770__auto___34077 = (0);
while(true){
if((i__5770__auto___34077 < len__5769__auto___34076)){
args__5775__auto__.push((arguments[i__5770__auto___34077]));

var G__34078 = (i__5770__auto___34077 + (1));
i__5770__auto___34077 = G__34078;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31105){
var map__31106 = p__31105;
var map__31106__$1 = cljs.core.__destructure_map(map__31106);
var opts = map__31106__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31103){
var G__31104 = cljs.core.first(seq31103);
var seq31103__$1 = cljs.core.next(seq31103);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31104,seq31103__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31115 = arguments.length;
switch (G__31115) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30828__auto___34080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_31163){
var state_val_31164 = (state_31163[(1)]);
if((state_val_31164 === (7))){
var inst_31159 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
var statearr_31172_34082 = state_31163__$1;
(statearr_31172_34082[(2)] = inst_31159);

(statearr_31172_34082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (1))){
var state_31163__$1 = state_31163;
var statearr_31173_34083 = state_31163__$1;
(statearr_31173_34083[(2)] = null);

(statearr_31173_34083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (4))){
var inst_31138 = (state_31163[(7)]);
var inst_31138__$1 = (state_31163[(2)]);
var inst_31139 = (inst_31138__$1 == null);
var state_31163__$1 = (function (){var statearr_31179 = state_31163;
(statearr_31179[(7)] = inst_31138__$1);

return statearr_31179;
})();
if(cljs.core.truth_(inst_31139)){
var statearr_31180_34084 = state_31163__$1;
(statearr_31180_34084[(1)] = (5));

} else {
var statearr_31182_34085 = state_31163__$1;
(statearr_31182_34085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (13))){
var state_31163__$1 = state_31163;
var statearr_31183_34086 = state_31163__$1;
(statearr_31183_34086[(2)] = null);

(statearr_31183_34086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (6))){
var inst_31138 = (state_31163[(7)]);
var state_31163__$1 = state_31163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31163__$1,(11),to,inst_31138);
} else {
if((state_val_31164 === (3))){
var inst_31161 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31163__$1,inst_31161);
} else {
if((state_val_31164 === (12))){
var state_31163__$1 = state_31163;
var statearr_31184_34087 = state_31163__$1;
(statearr_31184_34087[(2)] = null);

(statearr_31184_34087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (2))){
var state_31163__$1 = state_31163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31163__$1,(4),from);
} else {
if((state_val_31164 === (11))){
var inst_31152 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
if(cljs.core.truth_(inst_31152)){
var statearr_31185_34088 = state_31163__$1;
(statearr_31185_34088[(1)] = (12));

} else {
var statearr_31186_34089 = state_31163__$1;
(statearr_31186_34089[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (9))){
var state_31163__$1 = state_31163;
var statearr_31187_34090 = state_31163__$1;
(statearr_31187_34090[(2)] = null);

(statearr_31187_34090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (5))){
var state_31163__$1 = state_31163;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31188_34091 = state_31163__$1;
(statearr_31188_34091[(1)] = (8));

} else {
var statearr_31189_34092 = state_31163__$1;
(statearr_31189_34092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (14))){
var inst_31157 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
var statearr_31190_34093 = state_31163__$1;
(statearr_31190_34093[(2)] = inst_31157);

(statearr_31190_34093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (10))){
var inst_31149 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
var statearr_31195_34094 = state_31163__$1;
(statearr_31195_34094[(2)] = inst_31149);

(statearr_31195_34094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (8))){
var inst_31142 = cljs.core.async.close_BANG_(to);
var state_31163__$1 = state_31163;
var statearr_31196_34095 = state_31163__$1;
(statearr_31196_34095[(2)] = inst_31142);

(statearr_31196_34095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30612__auto__ = null;
var cljs$core$async$state_machine__30612__auto____0 = (function (){
var statearr_31198 = [null,null,null,null,null,null,null,null];
(statearr_31198[(0)] = cljs$core$async$state_machine__30612__auto__);

(statearr_31198[(1)] = (1));

return statearr_31198;
});
var cljs$core$async$state_machine__30612__auto____1 = (function (state_31163){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_31163);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e31199){var ex__30615__auto__ = e31199;
var statearr_31200_34096 = state_31163;
(statearr_31200_34096[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_31163[(4)]))){
var statearr_31201_34097 = state_31163;
(statearr_31201_34097[(1)] = cljs.core.first((state_31163[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34098 = state_31163;
state_31163 = G__34098;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$state_machine__30612__auto__ = function(state_31163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30612__auto____1.call(this,state_31163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30612__auto____0;
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30612__auto____1;
return cljs$core$async$state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_31210 = f__30829__auto__();
(statearr_31210[(6)] = c__30828__auto___34080);

return statearr_31210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__31218){
var vec__31219 = p__31218;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31219,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31219,(1),null);
var job = vec__31219;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30828__auto___34099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_31228){
var state_val_31229 = (state_31228[(1)]);
if((state_val_31229 === (1))){
var state_31228__$1 = state_31228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31228__$1,(2),res,v);
} else {
if((state_val_31229 === (2))){
var inst_31225 = (state_31228[(2)]);
var inst_31226 = cljs.core.async.close_BANG_(res);
var state_31228__$1 = (function (){var statearr_31234 = state_31228;
(statearr_31234[(7)] = inst_31225);

return statearr_31234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31228__$1,inst_31226);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0 = (function (){
var statearr_31235 = [null,null,null,null,null,null,null,null];
(statearr_31235[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__);

(statearr_31235[(1)] = (1));

return statearr_31235;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1 = (function (state_31228){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_31228);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e31236){var ex__30615__auto__ = e31236;
var statearr_31237_34101 = state_31228;
(statearr_31237_34101[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_31228[(4)]))){
var statearr_31238_34102 = state_31228;
(statearr_31238_34102[(1)] = cljs.core.first((state_31228[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34103 = state_31228;
state_31228 = G__34103;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__ = function(state_31228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1.call(this,state_31228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_31247 = f__30829__auto__();
(statearr_31247[(6)] = c__30828__auto___34099);

return statearr_31247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31253){
var vec__31254 = p__31253;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31254,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31254,(1),null);
var job = vec__31254;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___34104 = n;
var __34105 = (0);
while(true){
if((__34105 < n__5636__auto___34104)){
var G__31257_34106 = type;
var G__31257_34107__$1 = (((G__31257_34106 instanceof cljs.core.Keyword))?G__31257_34106.fqn:null);
switch (G__31257_34107__$1) {
case "compute":
var c__30828__auto___34110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34105,c__30828__auto___34110,G__31257_34106,G__31257_34107__$1,n__5636__auto___34104,jobs,results,process__$1,async){
return (function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = ((function (__34105,c__30828__auto___34110,G__31257_34106,G__31257_34107__$1,n__5636__auto___34104,jobs,results,process__$1,async){
return (function (state_31276){
var state_val_31277 = (state_31276[(1)]);
if((state_val_31277 === (1))){
var state_31276__$1 = state_31276;
var statearr_31290_34111 = state_31276__$1;
(statearr_31290_34111[(2)] = null);

(statearr_31290_34111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (2))){
var state_31276__$1 = state_31276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31276__$1,(4),jobs);
} else {
if((state_val_31277 === (3))){
var inst_31273 = (state_31276[(2)]);
var state_31276__$1 = state_31276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31276__$1,inst_31273);
} else {
if((state_val_31277 === (4))){
var inst_31265 = (state_31276[(2)]);
var inst_31266 = process__$1(inst_31265);
var state_31276__$1 = state_31276;
if(cljs.core.truth_(inst_31266)){
var statearr_31296_34113 = state_31276__$1;
(statearr_31296_34113[(1)] = (5));

} else {
var statearr_31300_34114 = state_31276__$1;
(statearr_31300_34114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (5))){
var state_31276__$1 = state_31276;
var statearr_31301_34115 = state_31276__$1;
(statearr_31301_34115[(2)] = null);

(statearr_31301_34115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (6))){
var state_31276__$1 = state_31276;
var statearr_31302_34116 = state_31276__$1;
(statearr_31302_34116[(2)] = null);

(statearr_31302_34116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (7))){
var inst_31271 = (state_31276[(2)]);
var state_31276__$1 = state_31276;
var statearr_31305_34117 = state_31276__$1;
(statearr_31305_34117[(2)] = inst_31271);

(statearr_31305_34117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34105,c__30828__auto___34110,G__31257_34106,G__31257_34107__$1,n__5636__auto___34104,jobs,results,process__$1,async))
;
return ((function (__34105,switch__30611__auto__,c__30828__auto___34110,G__31257_34106,G__31257_34107__$1,n__5636__auto___34104,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0 = (function (){
var statearr_31306 = [null,null,null,null,null,null,null];
(statearr_31306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__);

(statearr_31306[(1)] = (1));

return statearr_31306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1 = (function (state_31276){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_31276);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e31310){var ex__30615__auto__ = e31310;
var statearr_31311_34118 = state_31276;
(statearr_31311_34118[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_31276[(4)]))){
var statearr_31314_34119 = state_31276;
(statearr_31314_34119[(1)] = cljs.core.first((state_31276[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34120 = state_31276;
state_31276 = G__34120;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__ = function(state_31276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1.call(this,state_31276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__;
})()
;})(__34105,switch__30611__auto__,c__30828__auto___34110,G__31257_34106,G__31257_34107__$1,n__5636__auto___34104,jobs,results,process__$1,async))
})();
var state__30830__auto__ = (function (){var statearr_31320 = f__30829__auto__();
(statearr_31320[(6)] = c__30828__auto___34110);

return statearr_31320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
});})(__34105,c__30828__auto___34110,G__31257_34106,G__31257_34107__$1,n__5636__auto___34104,jobs,results,process__$1,async))
);


break;
case "async":
var c__30828__auto___34122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34105,c__30828__auto___34122,G__31257_34106,G__31257_34107__$1,n__5636__auto___34104,jobs,results,process__$1,async){
return (function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = ((function (__34105,c__30828__auto___34122,G__31257_34106,G__31257_34107__$1,n__5636__auto___34104,jobs,results,process__$1,async){
return (function (state_31333){
var state_val_31334 = (state_31333[(1)]);
if((state_val_31334 === (1))){
var state_31333__$1 = state_31333;
var statearr_31337_34123 = state_31333__$1;
(statearr_31337_34123[(2)] = null);

(statearr_31337_34123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (2))){
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31333__$1,(4),jobs);
} else {
if((state_val_31334 === (3))){
var inst_31331 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31333__$1,inst_31331);
} else {
if((state_val_31334 === (4))){
var inst_31323 = (state_31333[(2)]);
var inst_31324 = async(inst_31323);
var state_31333__$1 = state_31333;
if(cljs.core.truth_(inst_31324)){
var statearr_31347_34125 = state_31333__$1;
(statearr_31347_34125[(1)] = (5));

} else {
var statearr_31348_34126 = state_31333__$1;
(statearr_31348_34126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (5))){
var state_31333__$1 = state_31333;
var statearr_31349_34127 = state_31333__$1;
(statearr_31349_34127[(2)] = null);

(statearr_31349_34127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (6))){
var state_31333__$1 = state_31333;
var statearr_31354_34128 = state_31333__$1;
(statearr_31354_34128[(2)] = null);

(statearr_31354_34128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (7))){
var inst_31329 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31355_34129 = state_31333__$1;
(statearr_31355_34129[(2)] = inst_31329);

(statearr_31355_34129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34105,c__30828__auto___34122,G__31257_34106,G__31257_34107__$1,n__5636__auto___34104,jobs,results,process__$1,async))
;
return ((function (__34105,switch__30611__auto__,c__30828__auto___34122,G__31257_34106,G__31257_34107__$1,n__5636__auto___34104,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0 = (function (){
var statearr_31358 = [null,null,null,null,null,null,null];
(statearr_31358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__);

(statearr_31358[(1)] = (1));

return statearr_31358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1 = (function (state_31333){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_31333);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e31361){var ex__30615__auto__ = e31361;
var statearr_31362_34130 = state_31333;
(statearr_31362_34130[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_31333[(4)]))){
var statearr_31368_34131 = state_31333;
(statearr_31368_34131[(1)] = cljs.core.first((state_31333[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34132 = state_31333;
state_31333 = G__34132;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__ = function(state_31333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1.call(this,state_31333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__;
})()
;})(__34105,switch__30611__auto__,c__30828__auto___34122,G__31257_34106,G__31257_34107__$1,n__5636__auto___34104,jobs,results,process__$1,async))
})();
var state__30830__auto__ = (function (){var statearr_31370 = f__30829__auto__();
(statearr_31370[(6)] = c__30828__auto___34122);

return statearr_31370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
});})(__34105,c__30828__auto___34122,G__31257_34106,G__31257_34107__$1,n__5636__auto___34104,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31257_34107__$1)].join('')));

}

var G__34133 = (__34105 + (1));
__34105 = G__34133;
continue;
} else {
}
break;
}

var c__30828__auto___34134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_31398){
var state_val_31399 = (state_31398[(1)]);
if((state_val_31399 === (7))){
var inst_31394 = (state_31398[(2)]);
var state_31398__$1 = state_31398;
var statearr_31405_34135 = state_31398__$1;
(statearr_31405_34135[(2)] = inst_31394);

(statearr_31405_34135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (1))){
var state_31398__$1 = state_31398;
var statearr_31406_34136 = state_31398__$1;
(statearr_31406_34136[(2)] = null);

(statearr_31406_34136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (4))){
var inst_31379 = (state_31398[(7)]);
var inst_31379__$1 = (state_31398[(2)]);
var inst_31380 = (inst_31379__$1 == null);
var state_31398__$1 = (function (){var statearr_31407 = state_31398;
(statearr_31407[(7)] = inst_31379__$1);

return statearr_31407;
})();
if(cljs.core.truth_(inst_31380)){
var statearr_31408_34137 = state_31398__$1;
(statearr_31408_34137[(1)] = (5));

} else {
var statearr_31409_34138 = state_31398__$1;
(statearr_31409_34138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (6))){
var inst_31384 = (state_31398[(8)]);
var inst_31379 = (state_31398[(7)]);
var inst_31384__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31385 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31386 = [inst_31379,inst_31384__$1];
var inst_31387 = (new cljs.core.PersistentVector(null,2,(5),inst_31385,inst_31386,null));
var state_31398__$1 = (function (){var statearr_31411 = state_31398;
(statearr_31411[(8)] = inst_31384__$1);

return statearr_31411;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31398__$1,(8),jobs,inst_31387);
} else {
if((state_val_31399 === (3))){
var inst_31396 = (state_31398[(2)]);
var state_31398__$1 = state_31398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31398__$1,inst_31396);
} else {
if((state_val_31399 === (2))){
var state_31398__$1 = state_31398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31398__$1,(4),from);
} else {
if((state_val_31399 === (9))){
var inst_31391 = (state_31398[(2)]);
var state_31398__$1 = (function (){var statearr_31417 = state_31398;
(statearr_31417[(9)] = inst_31391);

return statearr_31417;
})();
var statearr_31418_34139 = state_31398__$1;
(statearr_31418_34139[(2)] = null);

(statearr_31418_34139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (5))){
var inst_31382 = cljs.core.async.close_BANG_(jobs);
var state_31398__$1 = state_31398;
var statearr_31421_34140 = state_31398__$1;
(statearr_31421_34140[(2)] = inst_31382);

(statearr_31421_34140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31399 === (8))){
var inst_31384 = (state_31398[(8)]);
var inst_31389 = (state_31398[(2)]);
var state_31398__$1 = (function (){var statearr_31426 = state_31398;
(statearr_31426[(10)] = inst_31389);

return statearr_31426;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31398__$1,(9),results,inst_31384);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0 = (function (){
var statearr_31427 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31427[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__);

(statearr_31427[(1)] = (1));

return statearr_31427;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1 = (function (state_31398){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_31398);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e31428){var ex__30615__auto__ = e31428;
var statearr_31429_34141 = state_31398;
(statearr_31429_34141[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_31398[(4)]))){
var statearr_31430_34143 = state_31398;
(statearr_31430_34143[(1)] = cljs.core.first((state_31398[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34144 = state_31398;
state_31398 = G__34144;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__ = function(state_31398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1.call(this,state_31398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_31431 = f__30829__auto__();
(statearr_31431[(6)] = c__30828__auto___34134);

return statearr_31431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));


var c__30828__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_31482){
var state_val_31483 = (state_31482[(1)]);
if((state_val_31483 === (7))){
var inst_31474 = (state_31482[(2)]);
var state_31482__$1 = state_31482;
var statearr_31484_34146 = state_31482__$1;
(statearr_31484_34146[(2)] = inst_31474);

(statearr_31484_34146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (20))){
var state_31482__$1 = state_31482;
var statearr_31485_34147 = state_31482__$1;
(statearr_31485_34147[(2)] = null);

(statearr_31485_34147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (1))){
var state_31482__$1 = state_31482;
var statearr_31490_34148 = state_31482__$1;
(statearr_31490_34148[(2)] = null);

(statearr_31490_34148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (4))){
var inst_31434 = (state_31482[(7)]);
var inst_31434__$1 = (state_31482[(2)]);
var inst_31435 = (inst_31434__$1 == null);
var state_31482__$1 = (function (){var statearr_31491 = state_31482;
(statearr_31491[(7)] = inst_31434__$1);

return statearr_31491;
})();
if(cljs.core.truth_(inst_31435)){
var statearr_31492_34149 = state_31482__$1;
(statearr_31492_34149[(1)] = (5));

} else {
var statearr_31493_34150 = state_31482__$1;
(statearr_31493_34150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (15))){
var inst_31452 = (state_31482[(8)]);
var state_31482__$1 = state_31482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31482__$1,(18),to,inst_31452);
} else {
if((state_val_31483 === (21))){
var inst_31469 = (state_31482[(2)]);
var state_31482__$1 = state_31482;
var statearr_31494_34151 = state_31482__$1;
(statearr_31494_34151[(2)] = inst_31469);

(statearr_31494_34151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (13))){
var inst_31471 = (state_31482[(2)]);
var state_31482__$1 = (function (){var statearr_31497 = state_31482;
(statearr_31497[(9)] = inst_31471);

return statearr_31497;
})();
var statearr_31498_34152 = state_31482__$1;
(statearr_31498_34152[(2)] = null);

(statearr_31498_34152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (6))){
var inst_31434 = (state_31482[(7)]);
var state_31482__$1 = state_31482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31482__$1,(11),inst_31434);
} else {
if((state_val_31483 === (17))){
var inst_31464 = (state_31482[(2)]);
var state_31482__$1 = state_31482;
if(cljs.core.truth_(inst_31464)){
var statearr_31499_34153 = state_31482__$1;
(statearr_31499_34153[(1)] = (19));

} else {
var statearr_31500_34154 = state_31482__$1;
(statearr_31500_34154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (3))){
var inst_31476 = (state_31482[(2)]);
var state_31482__$1 = state_31482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31482__$1,inst_31476);
} else {
if((state_val_31483 === (12))){
var inst_31444 = (state_31482[(10)]);
var state_31482__$1 = state_31482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31482__$1,(14),inst_31444);
} else {
if((state_val_31483 === (2))){
var state_31482__$1 = state_31482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31482__$1,(4),results);
} else {
if((state_val_31483 === (19))){
var state_31482__$1 = state_31482;
var statearr_31501_34156 = state_31482__$1;
(statearr_31501_34156[(2)] = null);

(statearr_31501_34156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (11))){
var inst_31444 = (state_31482[(2)]);
var state_31482__$1 = (function (){var statearr_31506 = state_31482;
(statearr_31506[(10)] = inst_31444);

return statearr_31506;
})();
var statearr_31507_34158 = state_31482__$1;
(statearr_31507_34158[(2)] = null);

(statearr_31507_34158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (9))){
var state_31482__$1 = state_31482;
var statearr_31508_34159 = state_31482__$1;
(statearr_31508_34159[(2)] = null);

(statearr_31508_34159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (5))){
var state_31482__$1 = state_31482;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31510_34160 = state_31482__$1;
(statearr_31510_34160[(1)] = (8));

} else {
var statearr_31515_34161 = state_31482__$1;
(statearr_31515_34161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (14))){
var inst_31458 = (state_31482[(11)]);
var inst_31452 = (state_31482[(8)]);
var inst_31452__$1 = (state_31482[(2)]);
var inst_31457 = (inst_31452__$1 == null);
var inst_31458__$1 = cljs.core.not(inst_31457);
var state_31482__$1 = (function (){var statearr_31516 = state_31482;
(statearr_31516[(11)] = inst_31458__$1);

(statearr_31516[(8)] = inst_31452__$1);

return statearr_31516;
})();
if(inst_31458__$1){
var statearr_31517_34164 = state_31482__$1;
(statearr_31517_34164[(1)] = (15));

} else {
var statearr_31518_34165 = state_31482__$1;
(statearr_31518_34165[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (16))){
var inst_31458 = (state_31482[(11)]);
var state_31482__$1 = state_31482;
var statearr_31519_34166 = state_31482__$1;
(statearr_31519_34166[(2)] = inst_31458);

(statearr_31519_34166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (10))){
var inst_31441 = (state_31482[(2)]);
var state_31482__$1 = state_31482;
var statearr_31520_34169 = state_31482__$1;
(statearr_31520_34169[(2)] = inst_31441);

(statearr_31520_34169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (18))){
var inst_31461 = (state_31482[(2)]);
var state_31482__$1 = state_31482;
var statearr_31521_34170 = state_31482__$1;
(statearr_31521_34170[(2)] = inst_31461);

(statearr_31521_34170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (8))){
var inst_31438 = cljs.core.async.close_BANG_(to);
var state_31482__$1 = state_31482;
var statearr_31523_34173 = state_31482__$1;
(statearr_31523_34173[(2)] = inst_31438);

(statearr_31523_34173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0 = (function (){
var statearr_31533 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31533[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__);

(statearr_31533[(1)] = (1));

return statearr_31533;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1 = (function (state_31482){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_31482);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e31543){var ex__30615__auto__ = e31543;
var statearr_31544_34174 = state_31482;
(statearr_31544_34174[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_31482[(4)]))){
var statearr_31547_34175 = state_31482;
(statearr_31547_34175[(1)] = cljs.core.first((state_31482[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34176 = state_31482;
state_31482 = G__34176;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__ = function(state_31482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1.call(this,state_31482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_31554 = f__30829__auto__();
(statearr_31554[(6)] = c__30828__auto__);

return statearr_31554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));

return c__30828__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31561 = arguments.length;
switch (G__31561) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31567 = arguments.length;
switch (G__31567) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31574 = arguments.length;
switch (G__31574) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30828__auto___34182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_31605){
var state_val_31606 = (state_31605[(1)]);
if((state_val_31606 === (7))){
var inst_31601 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31607_34183 = state_31605__$1;
(statearr_31607_34183[(2)] = inst_31601);

(statearr_31607_34183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (1))){
var state_31605__$1 = state_31605;
var statearr_31608_34184 = state_31605__$1;
(statearr_31608_34184[(2)] = null);

(statearr_31608_34184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (4))){
var inst_31582 = (state_31605[(7)]);
var inst_31582__$1 = (state_31605[(2)]);
var inst_31583 = (inst_31582__$1 == null);
var state_31605__$1 = (function (){var statearr_31609 = state_31605;
(statearr_31609[(7)] = inst_31582__$1);

return statearr_31609;
})();
if(cljs.core.truth_(inst_31583)){
var statearr_31611_34185 = state_31605__$1;
(statearr_31611_34185[(1)] = (5));

} else {
var statearr_31612_34186 = state_31605__$1;
(statearr_31612_34186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (13))){
var state_31605__$1 = state_31605;
var statearr_31613_34187 = state_31605__$1;
(statearr_31613_34187[(2)] = null);

(statearr_31613_34187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (6))){
var inst_31582 = (state_31605[(7)]);
var inst_31588 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31582) : p.call(null,inst_31582));
var state_31605__$1 = state_31605;
if(cljs.core.truth_(inst_31588)){
var statearr_31617_34188 = state_31605__$1;
(statearr_31617_34188[(1)] = (9));

} else {
var statearr_31618_34189 = state_31605__$1;
(statearr_31618_34189[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (3))){
var inst_31603 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31605__$1,inst_31603);
} else {
if((state_val_31606 === (12))){
var state_31605__$1 = state_31605;
var statearr_31619_34190 = state_31605__$1;
(statearr_31619_34190[(2)] = null);

(statearr_31619_34190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (2))){
var state_31605__$1 = state_31605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31605__$1,(4),ch);
} else {
if((state_val_31606 === (11))){
var inst_31582 = (state_31605[(7)]);
var inst_31592 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31605__$1,(8),inst_31592,inst_31582);
} else {
if((state_val_31606 === (9))){
var state_31605__$1 = state_31605;
var statearr_31620_34192 = state_31605__$1;
(statearr_31620_34192[(2)] = tc);

(statearr_31620_34192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (5))){
var inst_31585 = cljs.core.async.close_BANG_(tc);
var inst_31586 = cljs.core.async.close_BANG_(fc);
var state_31605__$1 = (function (){var statearr_31621 = state_31605;
(statearr_31621[(8)] = inst_31585);

return statearr_31621;
})();
var statearr_31622_34193 = state_31605__$1;
(statearr_31622_34193[(2)] = inst_31586);

(statearr_31622_34193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (14))){
var inst_31599 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31624_34194 = state_31605__$1;
(statearr_31624_34194[(2)] = inst_31599);

(statearr_31624_34194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (10))){
var state_31605__$1 = state_31605;
var statearr_31625_34195 = state_31605__$1;
(statearr_31625_34195[(2)] = fc);

(statearr_31625_34195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (8))){
var inst_31594 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
if(cljs.core.truth_(inst_31594)){
var statearr_31626_34196 = state_31605__$1;
(statearr_31626_34196[(1)] = (12));

} else {
var statearr_31627_34197 = state_31605__$1;
(statearr_31627_34197[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30612__auto__ = null;
var cljs$core$async$state_machine__30612__auto____0 = (function (){
var statearr_31629 = [null,null,null,null,null,null,null,null,null];
(statearr_31629[(0)] = cljs$core$async$state_machine__30612__auto__);

(statearr_31629[(1)] = (1));

return statearr_31629;
});
var cljs$core$async$state_machine__30612__auto____1 = (function (state_31605){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_31605);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e31630){var ex__30615__auto__ = e31630;
var statearr_31632_34198 = state_31605;
(statearr_31632_34198[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_31605[(4)]))){
var statearr_31633_34199 = state_31605;
(statearr_31633_34199[(1)] = cljs.core.first((state_31605[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34200 = state_31605;
state_31605 = G__34200;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$state_machine__30612__auto__ = function(state_31605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30612__auto____1.call(this,state_31605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30612__auto____0;
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30612__auto____1;
return cljs$core$async$state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_31635 = f__30829__auto__();
(statearr_31635[(6)] = c__30828__auto___34182);

return statearr_31635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30828__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_31673){
var state_val_31674 = (state_31673[(1)]);
if((state_val_31674 === (7))){
var inst_31669 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31675_34201 = state_31673__$1;
(statearr_31675_34201[(2)] = inst_31669);

(statearr_31675_34201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (1))){
var inst_31643 = init;
var inst_31646 = inst_31643;
var state_31673__$1 = (function (){var statearr_31683 = state_31673;
(statearr_31683[(7)] = inst_31646);

return statearr_31683;
})();
var statearr_31684_34206 = state_31673__$1;
(statearr_31684_34206[(2)] = null);

(statearr_31684_34206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (4))){
var inst_31653 = (state_31673[(8)]);
var inst_31653__$1 = (state_31673[(2)]);
var inst_31654 = (inst_31653__$1 == null);
var state_31673__$1 = (function (){var statearr_31690 = state_31673;
(statearr_31690[(8)] = inst_31653__$1);

return statearr_31690;
})();
if(cljs.core.truth_(inst_31654)){
var statearr_31691_34207 = state_31673__$1;
(statearr_31691_34207[(1)] = (5));

} else {
var statearr_31692_34208 = state_31673__$1;
(statearr_31692_34208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (6))){
var inst_31657 = (state_31673[(9)]);
var inst_31646 = (state_31673[(7)]);
var inst_31653 = (state_31673[(8)]);
var inst_31657__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31646,inst_31653) : f.call(null,inst_31646,inst_31653));
var inst_31658 = cljs.core.reduced_QMARK_(inst_31657__$1);
var state_31673__$1 = (function (){var statearr_31693 = state_31673;
(statearr_31693[(9)] = inst_31657__$1);

return statearr_31693;
})();
if(inst_31658){
var statearr_31697_34209 = state_31673__$1;
(statearr_31697_34209[(1)] = (8));

} else {
var statearr_31698_34210 = state_31673__$1;
(statearr_31698_34210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (3))){
var inst_31671 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31673__$1,inst_31671);
} else {
if((state_val_31674 === (2))){
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31673__$1,(4),ch);
} else {
if((state_val_31674 === (9))){
var inst_31657 = (state_31673[(9)]);
var inst_31646 = inst_31657;
var state_31673__$1 = (function (){var statearr_31704 = state_31673;
(statearr_31704[(7)] = inst_31646);

return statearr_31704;
})();
var statearr_31705_34211 = state_31673__$1;
(statearr_31705_34211[(2)] = null);

(statearr_31705_34211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (5))){
var inst_31646 = (state_31673[(7)]);
var state_31673__$1 = state_31673;
var statearr_31706_34212 = state_31673__$1;
(statearr_31706_34212[(2)] = inst_31646);

(statearr_31706_34212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (10))){
var inst_31667 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31707_34213 = state_31673__$1;
(statearr_31707_34213[(2)] = inst_31667);

(statearr_31707_34213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (8))){
var inst_31657 = (state_31673[(9)]);
var inst_31663 = cljs.core.deref(inst_31657);
var state_31673__$1 = state_31673;
var statearr_31708_34214 = state_31673__$1;
(statearr_31708_34214[(2)] = inst_31663);

(statearr_31708_34214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30612__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30612__auto____0 = (function (){
var statearr_31709 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31709[(0)] = cljs$core$async$reduce_$_state_machine__30612__auto__);

(statearr_31709[(1)] = (1));

return statearr_31709;
});
var cljs$core$async$reduce_$_state_machine__30612__auto____1 = (function (state_31673){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_31673);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e31711){var ex__30615__auto__ = e31711;
var statearr_31712_34215 = state_31673;
(statearr_31712_34215[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_31673[(4)]))){
var statearr_31717_34216 = state_31673;
(statearr_31717_34216[(1)] = cljs.core.first((state_31673[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34217 = state_31673;
state_31673 = G__34217;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30612__auto__ = function(state_31673){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30612__auto____1.call(this,state_31673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30612__auto____0;
cljs$core$async$reduce_$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30612__auto____1;
return cljs$core$async$reduce_$_state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_31718 = f__30829__auto__();
(statearr_31718[(6)] = c__30828__auto__);

return statearr_31718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));

return c__30828__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30828__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_31730){
var state_val_31731 = (state_31730[(1)]);
if((state_val_31731 === (1))){
var inst_31725 = cljs.core.async.reduce(f__$1,init,ch);
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31730__$1,(2),inst_31725);
} else {
if((state_val_31731 === (2))){
var inst_31727 = (state_31730[(2)]);
var inst_31728 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31727) : f__$1.call(null,inst_31727));
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31730__$1,inst_31728);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30612__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30612__auto____0 = (function (){
var statearr_31732 = [null,null,null,null,null,null,null];
(statearr_31732[(0)] = cljs$core$async$transduce_$_state_machine__30612__auto__);

(statearr_31732[(1)] = (1));

return statearr_31732;
});
var cljs$core$async$transduce_$_state_machine__30612__auto____1 = (function (state_31730){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_31730);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e31737){var ex__30615__auto__ = e31737;
var statearr_31738_34218 = state_31730;
(statearr_31738_34218[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_31730[(4)]))){
var statearr_31739_34219 = state_31730;
(statearr_31739_34219[(1)] = cljs.core.first((state_31730[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34220 = state_31730;
state_31730 = G__34220;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30612__auto__ = function(state_31730){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30612__auto____1.call(this,state_31730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30612__auto____0;
cljs$core$async$transduce_$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30612__auto____1;
return cljs$core$async$transduce_$_state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_31740 = f__30829__auto__();
(statearr_31740[(6)] = c__30828__auto__);

return statearr_31740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));

return c__30828__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31754 = arguments.length;
switch (G__31754) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30828__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_31782){
var state_val_31783 = (state_31782[(1)]);
if((state_val_31783 === (7))){
var inst_31764 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31790_34223 = state_31782__$1;
(statearr_31790_34223[(2)] = inst_31764);

(statearr_31790_34223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (1))){
var inst_31755 = cljs.core.seq(coll);
var inst_31756 = inst_31755;
var state_31782__$1 = (function (){var statearr_31791 = state_31782;
(statearr_31791[(7)] = inst_31756);

return statearr_31791;
})();
var statearr_31792_34224 = state_31782__$1;
(statearr_31792_34224[(2)] = null);

(statearr_31792_34224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (4))){
var inst_31756 = (state_31782[(7)]);
var inst_31762 = cljs.core.first(inst_31756);
var state_31782__$1 = state_31782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31782__$1,(7),ch,inst_31762);
} else {
if((state_val_31783 === (13))){
var inst_31776 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31801_34226 = state_31782__$1;
(statearr_31801_34226[(2)] = inst_31776);

(statearr_31801_34226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (6))){
var inst_31767 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
if(cljs.core.truth_(inst_31767)){
var statearr_31803_34227 = state_31782__$1;
(statearr_31803_34227[(1)] = (8));

} else {
var statearr_31804_34228 = state_31782__$1;
(statearr_31804_34228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (3))){
var inst_31780 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31782__$1,inst_31780);
} else {
if((state_val_31783 === (12))){
var state_31782__$1 = state_31782;
var statearr_31806_34229 = state_31782__$1;
(statearr_31806_34229[(2)] = null);

(statearr_31806_34229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (2))){
var inst_31756 = (state_31782[(7)]);
var state_31782__$1 = state_31782;
if(cljs.core.truth_(inst_31756)){
var statearr_31807_34230 = state_31782__$1;
(statearr_31807_34230[(1)] = (4));

} else {
var statearr_31808_34231 = state_31782__$1;
(statearr_31808_34231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (11))){
var inst_31773 = cljs.core.async.close_BANG_(ch);
var state_31782__$1 = state_31782;
var statearr_31809_34232 = state_31782__$1;
(statearr_31809_34232[(2)] = inst_31773);

(statearr_31809_34232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (9))){
var state_31782__$1 = state_31782;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31810_34233 = state_31782__$1;
(statearr_31810_34233[(1)] = (11));

} else {
var statearr_31811_34234 = state_31782__$1;
(statearr_31811_34234[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (5))){
var inst_31756 = (state_31782[(7)]);
var state_31782__$1 = state_31782;
var statearr_31812_34235 = state_31782__$1;
(statearr_31812_34235[(2)] = inst_31756);

(statearr_31812_34235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (10))){
var inst_31778 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31813_34236 = state_31782__$1;
(statearr_31813_34236[(2)] = inst_31778);

(statearr_31813_34236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (8))){
var inst_31756 = (state_31782[(7)]);
var inst_31769 = cljs.core.next(inst_31756);
var inst_31756__$1 = inst_31769;
var state_31782__$1 = (function (){var statearr_31815 = state_31782;
(statearr_31815[(7)] = inst_31756__$1);

return statearr_31815;
})();
var statearr_31816_34237 = state_31782__$1;
(statearr_31816_34237[(2)] = null);

(statearr_31816_34237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30612__auto__ = null;
var cljs$core$async$state_machine__30612__auto____0 = (function (){
var statearr_31817 = [null,null,null,null,null,null,null,null];
(statearr_31817[(0)] = cljs$core$async$state_machine__30612__auto__);

(statearr_31817[(1)] = (1));

return statearr_31817;
});
var cljs$core$async$state_machine__30612__auto____1 = (function (state_31782){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_31782);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e31820){var ex__30615__auto__ = e31820;
var statearr_31821_34238 = state_31782;
(statearr_31821_34238[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_31782[(4)]))){
var statearr_31822_34239 = state_31782;
(statearr_31822_34239[(1)] = cljs.core.first((state_31782[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34240 = state_31782;
state_31782 = G__34240;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$state_machine__30612__auto__ = function(state_31782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30612__auto____1.call(this,state_31782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30612__auto____0;
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30612__auto____1;
return cljs$core$async$state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_31823 = f__30829__auto__();
(statearr_31823[(6)] = c__30828__auto__);

return statearr_31823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));

return c__30828__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31825 = arguments.length;
switch (G__31825) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34243 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34243(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34245 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34245(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34246 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34246(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34247 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34247(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31855 = (function (ch,cs,meta31856){
this.ch = ch;
this.cs = cs;
this.meta31856 = meta31856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31857,meta31856__$1){
var self__ = this;
var _31857__$1 = this;
return (new cljs.core.async.t_cljs$core$async31855(self__.ch,self__.cs,meta31856__$1));
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31857){
var self__ = this;
var _31857__$1 = this;
return self__.meta31856;
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31856","meta31856",511832241,null)], null);
}));

(cljs.core.async.t_cljs$core$async31855.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31855");

(cljs.core.async.t_cljs$core$async31855.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31855");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31855.
 */
cljs.core.async.__GT_t_cljs$core$async31855 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31855(ch__$1,cs__$1,meta31856){
return (new cljs.core.async.t_cljs$core$async31855(ch__$1,cs__$1,meta31856));
});

}

return (new cljs.core.async.t_cljs$core$async31855(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30828__auto___34248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_32070){
var state_val_32071 = (state_32070[(1)]);
if((state_val_32071 === (7))){
var inst_32066 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
var statearr_32073_34255 = state_32070__$1;
(statearr_32073_34255[(2)] = inst_32066);

(statearr_32073_34255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (20))){
var inst_31954 = (state_32070[(7)]);
var inst_31968 = cljs.core.first(inst_31954);
var inst_31969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31968,(0),null);
var inst_31970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31968,(1),null);
var state_32070__$1 = (function (){var statearr_32074 = state_32070;
(statearr_32074[(8)] = inst_31969);

return statearr_32074;
})();
if(cljs.core.truth_(inst_31970)){
var statearr_32075_34262 = state_32070__$1;
(statearr_32075_34262[(1)] = (22));

} else {
var statearr_32076_34264 = state_32070__$1;
(statearr_32076_34264[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (27))){
var inst_32018 = (state_32070[(9)]);
var inst_32011 = (state_32070[(10)]);
var inst_32013 = (state_32070[(11)]);
var inst_31911 = (state_32070[(12)]);
var inst_32018__$1 = cljs.core._nth(inst_32011,inst_32013);
var inst_32019 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32018__$1,inst_31911,done);
var state_32070__$1 = (function (){var statearr_32078 = state_32070;
(statearr_32078[(9)] = inst_32018__$1);

return statearr_32078;
})();
if(cljs.core.truth_(inst_32019)){
var statearr_32079_34273 = state_32070__$1;
(statearr_32079_34273[(1)] = (30));

} else {
var statearr_32080_34274 = state_32070__$1;
(statearr_32080_34274[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (1))){
var state_32070__$1 = state_32070;
var statearr_32081_34277 = state_32070__$1;
(statearr_32081_34277[(2)] = null);

(statearr_32081_34277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (24))){
var inst_31954 = (state_32070[(7)]);
var inst_31978 = (state_32070[(2)]);
var inst_31979 = cljs.core.next(inst_31954);
var inst_31924 = inst_31979;
var inst_31925 = null;
var inst_31926 = (0);
var inst_31927 = (0);
var state_32070__$1 = (function (){var statearr_32083 = state_32070;
(statearr_32083[(13)] = inst_31927);

(statearr_32083[(14)] = inst_31926);

(statearr_32083[(15)] = inst_31978);

(statearr_32083[(16)] = inst_31924);

(statearr_32083[(17)] = inst_31925);

return statearr_32083;
})();
var statearr_32084_34289 = state_32070__$1;
(statearr_32084_34289[(2)] = null);

(statearr_32084_34289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (39))){
var state_32070__$1 = state_32070;
var statearr_32089_34296 = state_32070__$1;
(statearr_32089_34296[(2)] = null);

(statearr_32089_34296[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (4))){
var inst_31911 = (state_32070[(12)]);
var inst_31911__$1 = (state_32070[(2)]);
var inst_31912 = (inst_31911__$1 == null);
var state_32070__$1 = (function (){var statearr_32091 = state_32070;
(statearr_32091[(12)] = inst_31911__$1);

return statearr_32091;
})();
if(cljs.core.truth_(inst_31912)){
var statearr_32093_34302 = state_32070__$1;
(statearr_32093_34302[(1)] = (5));

} else {
var statearr_32096_34306 = state_32070__$1;
(statearr_32096_34306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (15))){
var inst_31927 = (state_32070[(13)]);
var inst_31926 = (state_32070[(14)]);
var inst_31924 = (state_32070[(16)]);
var inst_31925 = (state_32070[(17)]);
var inst_31943 = (state_32070[(2)]);
var inst_31947 = (inst_31927 + (1));
var tmp32085 = inst_31926;
var tmp32086 = inst_31924;
var tmp32087 = inst_31925;
var inst_31924__$1 = tmp32086;
var inst_31925__$1 = tmp32087;
var inst_31926__$1 = tmp32085;
var inst_31927__$1 = inst_31947;
var state_32070__$1 = (function (){var statearr_32111 = state_32070;
(statearr_32111[(13)] = inst_31927__$1);

(statearr_32111[(14)] = inst_31926__$1);

(statearr_32111[(18)] = inst_31943);

(statearr_32111[(16)] = inst_31924__$1);

(statearr_32111[(17)] = inst_31925__$1);

return statearr_32111;
})();
var statearr_32114_34322 = state_32070__$1;
(statearr_32114_34322[(2)] = null);

(statearr_32114_34322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (21))){
var inst_31983 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
var statearr_32118_34328 = state_32070__$1;
(statearr_32118_34328[(2)] = inst_31983);

(statearr_32118_34328[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (31))){
var inst_32018 = (state_32070[(9)]);
var inst_32022 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32018);
var state_32070__$1 = state_32070;
var statearr_32119_34338 = state_32070__$1;
(statearr_32119_34338[(2)] = inst_32022);

(statearr_32119_34338[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (32))){
var inst_32011 = (state_32070[(10)]);
var inst_32012 = (state_32070[(19)]);
var inst_32013 = (state_32070[(11)]);
var inst_32010 = (state_32070[(20)]);
var inst_32024 = (state_32070[(2)]);
var inst_32025 = (inst_32013 + (1));
var tmp32115 = inst_32011;
var tmp32116 = inst_32012;
var tmp32117 = inst_32010;
var inst_32010__$1 = tmp32117;
var inst_32011__$1 = tmp32115;
var inst_32012__$1 = tmp32116;
var inst_32013__$1 = inst_32025;
var state_32070__$1 = (function (){var statearr_32120 = state_32070;
(statearr_32120[(21)] = inst_32024);

(statearr_32120[(10)] = inst_32011__$1);

(statearr_32120[(19)] = inst_32012__$1);

(statearr_32120[(11)] = inst_32013__$1);

(statearr_32120[(20)] = inst_32010__$1);

return statearr_32120;
})();
var statearr_32123_34349 = state_32070__$1;
(statearr_32123_34349[(2)] = null);

(statearr_32123_34349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (40))){
var inst_32039 = (state_32070[(22)]);
var inst_32043 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32039);
var state_32070__$1 = state_32070;
var statearr_32125_34352 = state_32070__$1;
(statearr_32125_34352[(2)] = inst_32043);

(statearr_32125_34352[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (33))){
var inst_32028 = (state_32070[(23)]);
var inst_32032 = cljs.core.chunked_seq_QMARK_(inst_32028);
var state_32070__$1 = state_32070;
if(inst_32032){
var statearr_32126_34361 = state_32070__$1;
(statearr_32126_34361[(1)] = (36));

} else {
var statearr_32127_34362 = state_32070__$1;
(statearr_32127_34362[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (13))){
var inst_31937 = (state_32070[(24)]);
var inst_31940 = cljs.core.async.close_BANG_(inst_31937);
var state_32070__$1 = state_32070;
var statearr_32128_34366 = state_32070__$1;
(statearr_32128_34366[(2)] = inst_31940);

(statearr_32128_34366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (22))){
var inst_31969 = (state_32070[(8)]);
var inst_31975 = cljs.core.async.close_BANG_(inst_31969);
var state_32070__$1 = state_32070;
var statearr_32129_34369 = state_32070__$1;
(statearr_32129_34369[(2)] = inst_31975);

(statearr_32129_34369[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (36))){
var inst_32028 = (state_32070[(23)]);
var inst_32034 = cljs.core.chunk_first(inst_32028);
var inst_32035 = cljs.core.chunk_rest(inst_32028);
var inst_32036 = cljs.core.count(inst_32034);
var inst_32010 = inst_32035;
var inst_32011 = inst_32034;
var inst_32012 = inst_32036;
var inst_32013 = (0);
var state_32070__$1 = (function (){var statearr_32131 = state_32070;
(statearr_32131[(10)] = inst_32011);

(statearr_32131[(19)] = inst_32012);

(statearr_32131[(11)] = inst_32013);

(statearr_32131[(20)] = inst_32010);

return statearr_32131;
})();
var statearr_32134_34374 = state_32070__$1;
(statearr_32134_34374[(2)] = null);

(statearr_32134_34374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (41))){
var inst_32028 = (state_32070[(23)]);
var inst_32045 = (state_32070[(2)]);
var inst_32046 = cljs.core.next(inst_32028);
var inst_32010 = inst_32046;
var inst_32011 = null;
var inst_32012 = (0);
var inst_32013 = (0);
var state_32070__$1 = (function (){var statearr_32136 = state_32070;
(statearr_32136[(10)] = inst_32011);

(statearr_32136[(19)] = inst_32012);

(statearr_32136[(11)] = inst_32013);

(statearr_32136[(20)] = inst_32010);

(statearr_32136[(25)] = inst_32045);

return statearr_32136;
})();
var statearr_32137_34378 = state_32070__$1;
(statearr_32137_34378[(2)] = null);

(statearr_32137_34378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (43))){
var state_32070__$1 = state_32070;
var statearr_32138_34379 = state_32070__$1;
(statearr_32138_34379[(2)] = null);

(statearr_32138_34379[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (29))){
var inst_32054 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
var statearr_32140_34381 = state_32070__$1;
(statearr_32140_34381[(2)] = inst_32054);

(statearr_32140_34381[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (44))){
var inst_32063 = (state_32070[(2)]);
var state_32070__$1 = (function (){var statearr_32141 = state_32070;
(statearr_32141[(26)] = inst_32063);

return statearr_32141;
})();
var statearr_32143_34382 = state_32070__$1;
(statearr_32143_34382[(2)] = null);

(statearr_32143_34382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (6))){
var inst_31997 = (state_32070[(27)]);
var inst_31996 = cljs.core.deref(cs);
var inst_31997__$1 = cljs.core.keys(inst_31996);
var inst_31999 = cljs.core.count(inst_31997__$1);
var inst_32000 = cljs.core.reset_BANG_(dctr,inst_31999);
var inst_32009 = cljs.core.seq(inst_31997__$1);
var inst_32010 = inst_32009;
var inst_32011 = null;
var inst_32012 = (0);
var inst_32013 = (0);
var state_32070__$1 = (function (){var statearr_32150 = state_32070;
(statearr_32150[(27)] = inst_31997__$1);

(statearr_32150[(28)] = inst_32000);

(statearr_32150[(10)] = inst_32011);

(statearr_32150[(19)] = inst_32012);

(statearr_32150[(11)] = inst_32013);

(statearr_32150[(20)] = inst_32010);

return statearr_32150;
})();
var statearr_32155_34399 = state_32070__$1;
(statearr_32155_34399[(2)] = null);

(statearr_32155_34399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (28))){
var inst_32028 = (state_32070[(23)]);
var inst_32010 = (state_32070[(20)]);
var inst_32028__$1 = cljs.core.seq(inst_32010);
var state_32070__$1 = (function (){var statearr_32157 = state_32070;
(statearr_32157[(23)] = inst_32028__$1);

return statearr_32157;
})();
if(inst_32028__$1){
var statearr_32160_34402 = state_32070__$1;
(statearr_32160_34402[(1)] = (33));

} else {
var statearr_32163_34405 = state_32070__$1;
(statearr_32163_34405[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (25))){
var inst_32012 = (state_32070[(19)]);
var inst_32013 = (state_32070[(11)]);
var inst_32015 = (inst_32013 < inst_32012);
var inst_32016 = inst_32015;
var state_32070__$1 = state_32070;
if(cljs.core.truth_(inst_32016)){
var statearr_32168_34412 = state_32070__$1;
(statearr_32168_34412[(1)] = (27));

} else {
var statearr_32170_34417 = state_32070__$1;
(statearr_32170_34417[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (34))){
var state_32070__$1 = state_32070;
var statearr_32171_34425 = state_32070__$1;
(statearr_32171_34425[(2)] = null);

(statearr_32171_34425[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (17))){
var state_32070__$1 = state_32070;
var statearr_32182_34451 = state_32070__$1;
(statearr_32182_34451[(2)] = null);

(statearr_32182_34451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (3))){
var inst_32068 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32070__$1,inst_32068);
} else {
if((state_val_32071 === (12))){
var inst_31988 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
var statearr_32186_34458 = state_32070__$1;
(statearr_32186_34458[(2)] = inst_31988);

(statearr_32186_34458[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (2))){
var state_32070__$1 = state_32070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32070__$1,(4),ch);
} else {
if((state_val_32071 === (23))){
var state_32070__$1 = state_32070;
var statearr_32193_34460 = state_32070__$1;
(statearr_32193_34460[(2)] = null);

(statearr_32193_34460[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (35))){
var inst_32052 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
var statearr_32195_34461 = state_32070__$1;
(statearr_32195_34461[(2)] = inst_32052);

(statearr_32195_34461[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (19))){
var inst_31954 = (state_32070[(7)]);
var inst_31958 = cljs.core.chunk_first(inst_31954);
var inst_31959 = cljs.core.chunk_rest(inst_31954);
var inst_31960 = cljs.core.count(inst_31958);
var inst_31924 = inst_31959;
var inst_31925 = inst_31958;
var inst_31926 = inst_31960;
var inst_31927 = (0);
var state_32070__$1 = (function (){var statearr_32196 = state_32070;
(statearr_32196[(13)] = inst_31927);

(statearr_32196[(14)] = inst_31926);

(statearr_32196[(16)] = inst_31924);

(statearr_32196[(17)] = inst_31925);

return statearr_32196;
})();
var statearr_32199_34465 = state_32070__$1;
(statearr_32199_34465[(2)] = null);

(statearr_32199_34465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (11))){
var inst_31954 = (state_32070[(7)]);
var inst_31924 = (state_32070[(16)]);
var inst_31954__$1 = cljs.core.seq(inst_31924);
var state_32070__$1 = (function (){var statearr_32218 = state_32070;
(statearr_32218[(7)] = inst_31954__$1);

return statearr_32218;
})();
if(inst_31954__$1){
var statearr_32221_34467 = state_32070__$1;
(statearr_32221_34467[(1)] = (16));

} else {
var statearr_32222_34468 = state_32070__$1;
(statearr_32222_34468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (9))){
var inst_31990 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
var statearr_32227_34470 = state_32070__$1;
(statearr_32227_34470[(2)] = inst_31990);

(statearr_32227_34470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (5))){
var inst_31918 = cljs.core.deref(cs);
var inst_31919 = cljs.core.seq(inst_31918);
var inst_31924 = inst_31919;
var inst_31925 = null;
var inst_31926 = (0);
var inst_31927 = (0);
var state_32070__$1 = (function (){var statearr_32239 = state_32070;
(statearr_32239[(13)] = inst_31927);

(statearr_32239[(14)] = inst_31926);

(statearr_32239[(16)] = inst_31924);

(statearr_32239[(17)] = inst_31925);

return statearr_32239;
})();
var statearr_32240_34474 = state_32070__$1;
(statearr_32240_34474[(2)] = null);

(statearr_32240_34474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (14))){
var state_32070__$1 = state_32070;
var statearr_32245_34475 = state_32070__$1;
(statearr_32245_34475[(2)] = null);

(statearr_32245_34475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (45))){
var inst_32060 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
var statearr_32249_34480 = state_32070__$1;
(statearr_32249_34480[(2)] = inst_32060);

(statearr_32249_34480[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (26))){
var inst_31997 = (state_32070[(27)]);
var inst_32056 = (state_32070[(2)]);
var inst_32057 = cljs.core.seq(inst_31997);
var state_32070__$1 = (function (){var statearr_32256 = state_32070;
(statearr_32256[(29)] = inst_32056);

return statearr_32256;
})();
if(inst_32057){
var statearr_32259_34481 = state_32070__$1;
(statearr_32259_34481[(1)] = (42));

} else {
var statearr_32260_34482 = state_32070__$1;
(statearr_32260_34482[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (16))){
var inst_31954 = (state_32070[(7)]);
var inst_31956 = cljs.core.chunked_seq_QMARK_(inst_31954);
var state_32070__$1 = state_32070;
if(inst_31956){
var statearr_32261_34484 = state_32070__$1;
(statearr_32261_34484[(1)] = (19));

} else {
var statearr_32262_34485 = state_32070__$1;
(statearr_32262_34485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (38))){
var inst_32049 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
var statearr_32263_34486 = state_32070__$1;
(statearr_32263_34486[(2)] = inst_32049);

(statearr_32263_34486[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (30))){
var state_32070__$1 = state_32070;
var statearr_32264_34487 = state_32070__$1;
(statearr_32264_34487[(2)] = null);

(statearr_32264_34487[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (10))){
var inst_31927 = (state_32070[(13)]);
var inst_31925 = (state_32070[(17)]);
var inst_31936 = cljs.core._nth(inst_31925,inst_31927);
var inst_31937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31936,(0),null);
var inst_31938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31936,(1),null);
var state_32070__$1 = (function (){var statearr_32265 = state_32070;
(statearr_32265[(24)] = inst_31937);

return statearr_32265;
})();
if(cljs.core.truth_(inst_31938)){
var statearr_32266_34491 = state_32070__$1;
(statearr_32266_34491[(1)] = (13));

} else {
var statearr_32267_34492 = state_32070__$1;
(statearr_32267_34492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (18))){
var inst_31986 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
var statearr_32268_34494 = state_32070__$1;
(statearr_32268_34494[(2)] = inst_31986);

(statearr_32268_34494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (42))){
var state_32070__$1 = state_32070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32070__$1,(45),dchan);
} else {
if((state_val_32071 === (37))){
var inst_32039 = (state_32070[(22)]);
var inst_32028 = (state_32070[(23)]);
var inst_31911 = (state_32070[(12)]);
var inst_32039__$1 = cljs.core.first(inst_32028);
var inst_32040 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32039__$1,inst_31911,done);
var state_32070__$1 = (function (){var statearr_32269 = state_32070;
(statearr_32269[(22)] = inst_32039__$1);

return statearr_32269;
})();
if(cljs.core.truth_(inst_32040)){
var statearr_32270_34498 = state_32070__$1;
(statearr_32270_34498[(1)] = (39));

} else {
var statearr_32272_34499 = state_32070__$1;
(statearr_32272_34499[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (8))){
var inst_31927 = (state_32070[(13)]);
var inst_31926 = (state_32070[(14)]);
var inst_31929 = (inst_31927 < inst_31926);
var inst_31930 = inst_31929;
var state_32070__$1 = state_32070;
if(cljs.core.truth_(inst_31930)){
var statearr_32273_34500 = state_32070__$1;
(statearr_32273_34500[(1)] = (10));

} else {
var statearr_32274_34501 = state_32070__$1;
(statearr_32274_34501[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30612__auto__ = null;
var cljs$core$async$mult_$_state_machine__30612__auto____0 = (function (){
var statearr_32275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32275[(0)] = cljs$core$async$mult_$_state_machine__30612__auto__);

(statearr_32275[(1)] = (1));

return statearr_32275;
});
var cljs$core$async$mult_$_state_machine__30612__auto____1 = (function (state_32070){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_32070);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e32277){var ex__30615__auto__ = e32277;
var statearr_32278_34512 = state_32070;
(statearr_32278_34512[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_32070[(4)]))){
var statearr_32280_34515 = state_32070;
(statearr_32280_34515[(1)] = cljs.core.first((state_32070[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34516 = state_32070;
state_32070 = G__34516;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30612__auto__ = function(state_32070){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30612__auto____1.call(this,state_32070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30612__auto____0;
cljs$core$async$mult_$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30612__auto____1;
return cljs$core$async$mult_$_state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_32282 = f__30829__auto__();
(statearr_32282[(6)] = c__30828__auto___34248);

return statearr_32282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32284 = arguments.length;
switch (G__32284) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34520 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34520(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34524 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34524(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34528 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34528(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34530 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34530(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34535 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34535(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34536 = arguments.length;
var i__5770__auto___34537 = (0);
while(true){
if((i__5770__auto___34537 < len__5769__auto___34536)){
args__5775__auto__.push((arguments[i__5770__auto___34537]));

var G__34538 = (i__5770__auto___34537 + (1));
i__5770__auto___34537 = G__34538;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32336){
var map__32337 = p__32336;
var map__32337__$1 = cljs.core.__destructure_map(map__32337);
var opts = map__32337__$1;
var statearr_32338_34540 = state;
(statearr_32338_34540[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32339_34542 = state;
(statearr_32339_34542[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_32341_34543 = state;
(statearr_32341_34543[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32332){
var G__32333 = cljs.core.first(seq32332);
var seq32332__$1 = cljs.core.next(seq32332);
var G__32334 = cljs.core.first(seq32332__$1);
var seq32332__$2 = cljs.core.next(seq32332__$1);
var G__32335 = cljs.core.first(seq32332__$2);
var seq32332__$3 = cljs.core.next(seq32332__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32333,G__32334,G__32335,seq32332__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32347 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32348){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32348 = meta32348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32349,meta32348__$1){
var self__ = this;
var _32349__$1 = this;
return (new cljs.core.async.t_cljs$core$async32347(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32348__$1));
}));

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32349){
var self__ = this;
var _32349__$1 = this;
return self__.meta32348;
}));

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32347.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32348","meta32348",-1281457794,null)], null);
}));

(cljs.core.async.t_cljs$core$async32347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32347");

(cljs.core.async.t_cljs$core$async32347.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32347.
 */
cljs.core.async.__GT_t_cljs$core$async32347 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32347(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32348){
return (new cljs.core.async.t_cljs$core$async32347(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32348));
});

}

return (new cljs.core.async.t_cljs$core$async32347(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30828__auto___34564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_32523){
var state_val_32524 = (state_32523[(1)]);
if((state_val_32524 === (7))){
var inst_32472 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
if(cljs.core.truth_(inst_32472)){
var statearr_32536_34565 = state_32523__$1;
(statearr_32536_34565[(1)] = (8));

} else {
var statearr_32537_34566 = state_32523__$1;
(statearr_32537_34566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (20))){
var inst_32463 = (state_32523[(7)]);
var state_32523__$1 = state_32523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32523__$1,(23),out,inst_32463);
} else {
if((state_val_32524 === (1))){
var inst_32441 = calc_state();
var inst_32443 = cljs.core.__destructure_map(inst_32441);
var inst_32446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32443,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32443,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32443,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32451 = inst_32441;
var state_32523__$1 = (function (){var statearr_32538 = state_32523;
(statearr_32538[(8)] = inst_32446);

(statearr_32538[(9)] = inst_32447);

(statearr_32538[(10)] = inst_32451);

(statearr_32538[(11)] = inst_32450);

return statearr_32538;
})();
var statearr_32539_34569 = state_32523__$1;
(statearr_32539_34569[(2)] = null);

(statearr_32539_34569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (24))){
var inst_32454 = (state_32523[(12)]);
var inst_32451 = inst_32454;
var state_32523__$1 = (function (){var statearr_32541 = state_32523;
(statearr_32541[(10)] = inst_32451);

return statearr_32541;
})();
var statearr_32542_34570 = state_32523__$1;
(statearr_32542_34570[(2)] = null);

(statearr_32542_34570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (4))){
var inst_32467 = (state_32523[(13)]);
var inst_32463 = (state_32523[(7)]);
var inst_32462 = (state_32523[(2)]);
var inst_32463__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32462,(0),null);
var inst_32464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32462,(1),null);
var inst_32467__$1 = (inst_32463__$1 == null);
var state_32523__$1 = (function (){var statearr_32544 = state_32523;
(statearr_32544[(14)] = inst_32464);

(statearr_32544[(13)] = inst_32467__$1);

(statearr_32544[(7)] = inst_32463__$1);

return statearr_32544;
})();
if(cljs.core.truth_(inst_32467__$1)){
var statearr_32545_34574 = state_32523__$1;
(statearr_32545_34574[(1)] = (5));

} else {
var statearr_32547_34575 = state_32523__$1;
(statearr_32547_34575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (15))){
var inst_32455 = (state_32523[(15)]);
var inst_32491 = (state_32523[(16)]);
var inst_32491__$1 = cljs.core.empty_QMARK_(inst_32455);
var state_32523__$1 = (function (){var statearr_32548 = state_32523;
(statearr_32548[(16)] = inst_32491__$1);

return statearr_32548;
})();
if(inst_32491__$1){
var statearr_32549_34576 = state_32523__$1;
(statearr_32549_34576[(1)] = (17));

} else {
var statearr_32550_34577 = state_32523__$1;
(statearr_32550_34577[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (21))){
var inst_32454 = (state_32523[(12)]);
var inst_32451 = inst_32454;
var state_32523__$1 = (function (){var statearr_32551 = state_32523;
(statearr_32551[(10)] = inst_32451);

return statearr_32551;
})();
var statearr_32554_34578 = state_32523__$1;
(statearr_32554_34578[(2)] = null);

(statearr_32554_34578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (13))){
var inst_32479 = (state_32523[(2)]);
var inst_32480 = calc_state();
var inst_32451 = inst_32480;
var state_32523__$1 = (function (){var statearr_32555 = state_32523;
(statearr_32555[(17)] = inst_32479);

(statearr_32555[(10)] = inst_32451);

return statearr_32555;
})();
var statearr_32558_34582 = state_32523__$1;
(statearr_32558_34582[(2)] = null);

(statearr_32558_34582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (22))){
var inst_32512 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32561_34584 = state_32523__$1;
(statearr_32561_34584[(2)] = inst_32512);

(statearr_32561_34584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (6))){
var inst_32464 = (state_32523[(14)]);
var inst_32470 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32464,change);
var state_32523__$1 = state_32523;
var statearr_32565_34585 = state_32523__$1;
(statearr_32565_34585[(2)] = inst_32470);

(statearr_32565_34585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (25))){
var state_32523__$1 = state_32523;
var statearr_32567_34586 = state_32523__$1;
(statearr_32567_34586[(2)] = null);

(statearr_32567_34586[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (17))){
var inst_32464 = (state_32523[(14)]);
var inst_32456 = (state_32523[(18)]);
var inst_32493 = (inst_32456.cljs$core$IFn$_invoke$arity$1 ? inst_32456.cljs$core$IFn$_invoke$arity$1(inst_32464) : inst_32456.call(null,inst_32464));
var inst_32494 = cljs.core.not(inst_32493);
var state_32523__$1 = state_32523;
var statearr_32571_34591 = state_32523__$1;
(statearr_32571_34591[(2)] = inst_32494);

(statearr_32571_34591[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (3))){
var inst_32516 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32523__$1,inst_32516);
} else {
if((state_val_32524 === (12))){
var state_32523__$1 = state_32523;
var statearr_32572_34600 = state_32523__$1;
(statearr_32572_34600[(2)] = null);

(statearr_32572_34600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (2))){
var inst_32454 = (state_32523[(12)]);
var inst_32451 = (state_32523[(10)]);
var inst_32454__$1 = cljs.core.__destructure_map(inst_32451);
var inst_32455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32454__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32454__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32454__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32523__$1 = (function (){var statearr_32573 = state_32523;
(statearr_32573[(12)] = inst_32454__$1);

(statearr_32573[(15)] = inst_32455);

(statearr_32573[(18)] = inst_32456);

return statearr_32573;
})();
return cljs.core.async.ioc_alts_BANG_(state_32523__$1,(4),inst_32457);
} else {
if((state_val_32524 === (23))){
var inst_32503 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
if(cljs.core.truth_(inst_32503)){
var statearr_32574_34605 = state_32523__$1;
(statearr_32574_34605[(1)] = (24));

} else {
var statearr_32575_34606 = state_32523__$1;
(statearr_32575_34606[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (19))){
var inst_32497 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32576_34608 = state_32523__$1;
(statearr_32576_34608[(2)] = inst_32497);

(statearr_32576_34608[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (11))){
var inst_32464 = (state_32523[(14)]);
var inst_32476 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32464);
var state_32523__$1 = state_32523;
var statearr_32577_34609 = state_32523__$1;
(statearr_32577_34609[(2)] = inst_32476);

(statearr_32577_34609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (9))){
var inst_32483 = (state_32523[(19)]);
var inst_32464 = (state_32523[(14)]);
var inst_32455 = (state_32523[(15)]);
var inst_32483__$1 = (inst_32455.cljs$core$IFn$_invoke$arity$1 ? inst_32455.cljs$core$IFn$_invoke$arity$1(inst_32464) : inst_32455.call(null,inst_32464));
var state_32523__$1 = (function (){var statearr_32578 = state_32523;
(statearr_32578[(19)] = inst_32483__$1);

return statearr_32578;
})();
if(cljs.core.truth_(inst_32483__$1)){
var statearr_32579_34610 = state_32523__$1;
(statearr_32579_34610[(1)] = (14));

} else {
var statearr_32581_34611 = state_32523__$1;
(statearr_32581_34611[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (5))){
var inst_32467 = (state_32523[(13)]);
var state_32523__$1 = state_32523;
var statearr_32582_34613 = state_32523__$1;
(statearr_32582_34613[(2)] = inst_32467);

(statearr_32582_34613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (14))){
var inst_32483 = (state_32523[(19)]);
var state_32523__$1 = state_32523;
var statearr_32583_34614 = state_32523__$1;
(statearr_32583_34614[(2)] = inst_32483);

(statearr_32583_34614[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (26))){
var inst_32508 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32584_34615 = state_32523__$1;
(statearr_32584_34615[(2)] = inst_32508);

(statearr_32584_34615[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (16))){
var inst_32499 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
if(cljs.core.truth_(inst_32499)){
var statearr_32586_34616 = state_32523__$1;
(statearr_32586_34616[(1)] = (20));

} else {
var statearr_32587_34617 = state_32523__$1;
(statearr_32587_34617[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (10))){
var inst_32514 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32588_34618 = state_32523__$1;
(statearr_32588_34618[(2)] = inst_32514);

(statearr_32588_34618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (18))){
var inst_32491 = (state_32523[(16)]);
var state_32523__$1 = state_32523;
var statearr_32592_34619 = state_32523__$1;
(statearr_32592_34619[(2)] = inst_32491);

(statearr_32592_34619[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (8))){
var inst_32463 = (state_32523[(7)]);
var inst_32474 = (inst_32463 == null);
var state_32523__$1 = state_32523;
if(cljs.core.truth_(inst_32474)){
var statearr_32596_34620 = state_32523__$1;
(statearr_32596_34620[(1)] = (11));

} else {
var statearr_32597_34621 = state_32523__$1;
(statearr_32597_34621[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30612__auto__ = null;
var cljs$core$async$mix_$_state_machine__30612__auto____0 = (function (){
var statearr_32598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32598[(0)] = cljs$core$async$mix_$_state_machine__30612__auto__);

(statearr_32598[(1)] = (1));

return statearr_32598;
});
var cljs$core$async$mix_$_state_machine__30612__auto____1 = (function (state_32523){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_32523);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e32600){var ex__30615__auto__ = e32600;
var statearr_32601_34629 = state_32523;
(statearr_32601_34629[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_32523[(4)]))){
var statearr_32602_34630 = state_32523;
(statearr_32602_34630[(1)] = cljs.core.first((state_32523[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34631 = state_32523;
state_32523 = G__34631;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30612__auto__ = function(state_32523){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30612__auto____1.call(this,state_32523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30612__auto____0;
cljs$core$async$mix_$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30612__auto____1;
return cljs$core$async$mix_$_state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_32603 = f__30829__auto__();
(statearr_32603[(6)] = c__30828__auto___34564);

return statearr_32603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34632 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34632(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34635 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34635(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34646 = (function() {
var G__34647 = null;
var G__34647__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34647__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34647 = function(p,v){
switch(arguments.length){
case 1:
return G__34647__1.call(this,p);
case 2:
return G__34647__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34647.cljs$core$IFn$_invoke$arity$1 = G__34647__1;
G__34647.cljs$core$IFn$_invoke$arity$2 = G__34647__2;
return G__34647;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32607 = arguments.length;
switch (G__32607) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34646(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34646(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32611 = arguments.length;
switch (G__32611) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32609_SHARP_){
if(cljs.core.truth_((p1__32609_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32609_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32609_SHARP_.call(null,topic)))){
return p1__32609_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32609_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32625 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32626){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32626 = meta32626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32627,meta32626__$1){
var self__ = this;
var _32627__$1 = this;
return (new cljs.core.async.t_cljs$core$async32625(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32626__$1));
}));

(cljs.core.async.t_cljs$core$async32625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32627){
var self__ = this;
var _32627__$1 = this;
return self__.meta32626;
}));

(cljs.core.async.t_cljs$core$async32625.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32625.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32625.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32625.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32625.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32625.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32626","meta32626",1249022677,null)], null);
}));

(cljs.core.async.t_cljs$core$async32625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32625");

(cljs.core.async.t_cljs$core$async32625.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32625.
 */
cljs.core.async.__GT_t_cljs$core$async32625 = (function cljs$core$async$__GT_t_cljs$core$async32625(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32626){
return (new cljs.core.async.t_cljs$core$async32625(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32626));
});

}

return (new cljs.core.async.t_cljs$core$async32625(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30828__auto___34672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_32715){
var state_val_32716 = (state_32715[(1)]);
if((state_val_32716 === (7))){
var inst_32711 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32718_34673 = state_32715__$1;
(statearr_32718_34673[(2)] = inst_32711);

(statearr_32718_34673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (20))){
var state_32715__$1 = state_32715;
var statearr_32719_34674 = state_32715__$1;
(statearr_32719_34674[(2)] = null);

(statearr_32719_34674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (1))){
var state_32715__$1 = state_32715;
var statearr_32720_34675 = state_32715__$1;
(statearr_32720_34675[(2)] = null);

(statearr_32720_34675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (24))){
var inst_32693 = (state_32715[(7)]);
var inst_32703 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32693);
var state_32715__$1 = state_32715;
var statearr_32722_34680 = state_32715__$1;
(statearr_32722_34680[(2)] = inst_32703);

(statearr_32722_34680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (4))){
var inst_32638 = (state_32715[(8)]);
var inst_32638__$1 = (state_32715[(2)]);
var inst_32639 = (inst_32638__$1 == null);
var state_32715__$1 = (function (){var statearr_32724 = state_32715;
(statearr_32724[(8)] = inst_32638__$1);

return statearr_32724;
})();
if(cljs.core.truth_(inst_32639)){
var statearr_32725_34681 = state_32715__$1;
(statearr_32725_34681[(1)] = (5));

} else {
var statearr_32726_34682 = state_32715__$1;
(statearr_32726_34682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (15))){
var inst_32687 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32727_34683 = state_32715__$1;
(statearr_32727_34683[(2)] = inst_32687);

(statearr_32727_34683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (21))){
var inst_32708 = (state_32715[(2)]);
var state_32715__$1 = (function (){var statearr_32728 = state_32715;
(statearr_32728[(9)] = inst_32708);

return statearr_32728;
})();
var statearr_32729_34687 = state_32715__$1;
(statearr_32729_34687[(2)] = null);

(statearr_32729_34687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (13))){
var inst_32666 = (state_32715[(10)]);
var inst_32670 = cljs.core.chunked_seq_QMARK_(inst_32666);
var state_32715__$1 = state_32715;
if(inst_32670){
var statearr_32730_34688 = state_32715__$1;
(statearr_32730_34688[(1)] = (16));

} else {
var statearr_32731_34689 = state_32715__$1;
(statearr_32731_34689[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (22))){
var inst_32700 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
if(cljs.core.truth_(inst_32700)){
var statearr_32732_34690 = state_32715__$1;
(statearr_32732_34690[(1)] = (23));

} else {
var statearr_32733_34691 = state_32715__$1;
(statearr_32733_34691[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (6))){
var inst_32693 = (state_32715[(7)]);
var inst_32638 = (state_32715[(8)]);
var inst_32695 = (state_32715[(11)]);
var inst_32693__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32638) : topic_fn.call(null,inst_32638));
var inst_32694 = cljs.core.deref(mults);
var inst_32695__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32694,inst_32693__$1);
var state_32715__$1 = (function (){var statearr_32734 = state_32715;
(statearr_32734[(7)] = inst_32693__$1);

(statearr_32734[(11)] = inst_32695__$1);

return statearr_32734;
})();
if(cljs.core.truth_(inst_32695__$1)){
var statearr_32735_34697 = state_32715__$1;
(statearr_32735_34697[(1)] = (19));

} else {
var statearr_32736_34698 = state_32715__$1;
(statearr_32736_34698[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (25))){
var inst_32705 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32737_34699 = state_32715__$1;
(statearr_32737_34699[(2)] = inst_32705);

(statearr_32737_34699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (17))){
var inst_32666 = (state_32715[(10)]);
var inst_32677 = cljs.core.first(inst_32666);
var inst_32679 = cljs.core.async.muxch_STAR_(inst_32677);
var inst_32680 = cljs.core.async.close_BANG_(inst_32679);
var inst_32681 = cljs.core.next(inst_32666);
var inst_32648 = inst_32681;
var inst_32649 = null;
var inst_32650 = (0);
var inst_32651 = (0);
var state_32715__$1 = (function (){var statearr_32740 = state_32715;
(statearr_32740[(12)] = inst_32680);

(statearr_32740[(13)] = inst_32649);

(statearr_32740[(14)] = inst_32650);

(statearr_32740[(15)] = inst_32648);

(statearr_32740[(16)] = inst_32651);

return statearr_32740;
})();
var statearr_32741_34700 = state_32715__$1;
(statearr_32741_34700[(2)] = null);

(statearr_32741_34700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (3))){
var inst_32713 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32715__$1,inst_32713);
} else {
if((state_val_32716 === (12))){
var inst_32689 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32742_34701 = state_32715__$1;
(statearr_32742_34701[(2)] = inst_32689);

(statearr_32742_34701[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (2))){
var state_32715__$1 = state_32715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32715__$1,(4),ch);
} else {
if((state_val_32716 === (23))){
var state_32715__$1 = state_32715;
var statearr_32743_34702 = state_32715__$1;
(statearr_32743_34702[(2)] = null);

(statearr_32743_34702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (19))){
var inst_32638 = (state_32715[(8)]);
var inst_32695 = (state_32715[(11)]);
var inst_32698 = cljs.core.async.muxch_STAR_(inst_32695);
var state_32715__$1 = state_32715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32715__$1,(22),inst_32698,inst_32638);
} else {
if((state_val_32716 === (11))){
var inst_32666 = (state_32715[(10)]);
var inst_32648 = (state_32715[(15)]);
var inst_32666__$1 = cljs.core.seq(inst_32648);
var state_32715__$1 = (function (){var statearr_32744 = state_32715;
(statearr_32744[(10)] = inst_32666__$1);

return statearr_32744;
})();
if(inst_32666__$1){
var statearr_32746_34703 = state_32715__$1;
(statearr_32746_34703[(1)] = (13));

} else {
var statearr_32747_34704 = state_32715__$1;
(statearr_32747_34704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (9))){
var inst_32691 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32748_34705 = state_32715__$1;
(statearr_32748_34705[(2)] = inst_32691);

(statearr_32748_34705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (5))){
var inst_32645 = cljs.core.deref(mults);
var inst_32646 = cljs.core.vals(inst_32645);
var inst_32647 = cljs.core.seq(inst_32646);
var inst_32648 = inst_32647;
var inst_32649 = null;
var inst_32650 = (0);
var inst_32651 = (0);
var state_32715__$1 = (function (){var statearr_32751 = state_32715;
(statearr_32751[(13)] = inst_32649);

(statearr_32751[(14)] = inst_32650);

(statearr_32751[(15)] = inst_32648);

(statearr_32751[(16)] = inst_32651);

return statearr_32751;
})();
var statearr_32753_34706 = state_32715__$1;
(statearr_32753_34706[(2)] = null);

(statearr_32753_34706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (14))){
var state_32715__$1 = state_32715;
var statearr_32758_34710 = state_32715__$1;
(statearr_32758_34710[(2)] = null);

(statearr_32758_34710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (16))){
var inst_32666 = (state_32715[(10)]);
var inst_32672 = cljs.core.chunk_first(inst_32666);
var inst_32673 = cljs.core.chunk_rest(inst_32666);
var inst_32674 = cljs.core.count(inst_32672);
var inst_32648 = inst_32673;
var inst_32649 = inst_32672;
var inst_32650 = inst_32674;
var inst_32651 = (0);
var state_32715__$1 = (function (){var statearr_32761 = state_32715;
(statearr_32761[(13)] = inst_32649);

(statearr_32761[(14)] = inst_32650);

(statearr_32761[(15)] = inst_32648);

(statearr_32761[(16)] = inst_32651);

return statearr_32761;
})();
var statearr_32763_34712 = state_32715__$1;
(statearr_32763_34712[(2)] = null);

(statearr_32763_34712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (10))){
var inst_32649 = (state_32715[(13)]);
var inst_32650 = (state_32715[(14)]);
var inst_32648 = (state_32715[(15)]);
var inst_32651 = (state_32715[(16)]);
var inst_32656 = cljs.core._nth(inst_32649,inst_32651);
var inst_32657 = cljs.core.async.muxch_STAR_(inst_32656);
var inst_32658 = cljs.core.async.close_BANG_(inst_32657);
var inst_32659 = (inst_32651 + (1));
var tmp32755 = inst_32649;
var tmp32756 = inst_32650;
var tmp32757 = inst_32648;
var inst_32648__$1 = tmp32757;
var inst_32649__$1 = tmp32755;
var inst_32650__$1 = tmp32756;
var inst_32651__$1 = inst_32659;
var state_32715__$1 = (function (){var statearr_32771 = state_32715;
(statearr_32771[(13)] = inst_32649__$1);

(statearr_32771[(17)] = inst_32658);

(statearr_32771[(14)] = inst_32650__$1);

(statearr_32771[(15)] = inst_32648__$1);

(statearr_32771[(16)] = inst_32651__$1);

return statearr_32771;
})();
var statearr_32772_34713 = state_32715__$1;
(statearr_32772_34713[(2)] = null);

(statearr_32772_34713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (18))){
var inst_32684 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32774_34717 = state_32715__$1;
(statearr_32774_34717[(2)] = inst_32684);

(statearr_32774_34717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (8))){
var inst_32650 = (state_32715[(14)]);
var inst_32651 = (state_32715[(16)]);
var inst_32653 = (inst_32651 < inst_32650);
var inst_32654 = inst_32653;
var state_32715__$1 = state_32715;
if(cljs.core.truth_(inst_32654)){
var statearr_32778_34719 = state_32715__$1;
(statearr_32778_34719[(1)] = (10));

} else {
var statearr_32780_34720 = state_32715__$1;
(statearr_32780_34720[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30612__auto__ = null;
var cljs$core$async$state_machine__30612__auto____0 = (function (){
var statearr_32783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32783[(0)] = cljs$core$async$state_machine__30612__auto__);

(statearr_32783[(1)] = (1));

return statearr_32783;
});
var cljs$core$async$state_machine__30612__auto____1 = (function (state_32715){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_32715);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e32785){var ex__30615__auto__ = e32785;
var statearr_32786_34721 = state_32715;
(statearr_32786_34721[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_32715[(4)]))){
var statearr_32788_34722 = state_32715;
(statearr_32788_34722[(1)] = cljs.core.first((state_32715[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34723 = state_32715;
state_32715 = G__34723;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$state_machine__30612__auto__ = function(state_32715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30612__auto____1.call(this,state_32715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30612__auto____0;
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30612__auto____1;
return cljs$core$async$state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_32791 = f__30829__auto__();
(statearr_32791[(6)] = c__30828__auto___34672);

return statearr_32791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32801 = arguments.length;
switch (G__32801) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32819 = arguments.length;
switch (G__32819) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32822 = arguments.length;
switch (G__32822) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__30828__auto___34736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_32887){
var state_val_32888 = (state_32887[(1)]);
if((state_val_32888 === (7))){
var state_32887__$1 = state_32887;
var statearr_32891_34737 = state_32887__$1;
(statearr_32891_34737[(2)] = null);

(statearr_32891_34737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (1))){
var state_32887__$1 = state_32887;
var statearr_32895_34738 = state_32887__$1;
(statearr_32895_34738[(2)] = null);

(statearr_32895_34738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (4))){
var inst_32832 = (state_32887[(7)]);
var inst_32833 = (state_32887[(8)]);
var inst_32835 = (inst_32833 < inst_32832);
var state_32887__$1 = state_32887;
if(cljs.core.truth_(inst_32835)){
var statearr_32901_34739 = state_32887__$1;
(statearr_32901_34739[(1)] = (6));

} else {
var statearr_32904_34740 = state_32887__$1;
(statearr_32904_34740[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (15))){
var inst_32867 = (state_32887[(9)]);
var inst_32872 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32867);
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32887__$1,(17),out,inst_32872);
} else {
if((state_val_32888 === (13))){
var inst_32867 = (state_32887[(9)]);
var inst_32867__$1 = (state_32887[(2)]);
var inst_32868 = cljs.core.some(cljs.core.nil_QMARK_,inst_32867__$1);
var state_32887__$1 = (function (){var statearr_32909 = state_32887;
(statearr_32909[(9)] = inst_32867__$1);

return statearr_32909;
})();
if(cljs.core.truth_(inst_32868)){
var statearr_32913_34741 = state_32887__$1;
(statearr_32913_34741[(1)] = (14));

} else {
var statearr_32914_34742 = state_32887__$1;
(statearr_32914_34742[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (6))){
var state_32887__$1 = state_32887;
var statearr_32915_34743 = state_32887__$1;
(statearr_32915_34743[(2)] = null);

(statearr_32915_34743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (17))){
var inst_32874 = (state_32887[(2)]);
var state_32887__$1 = (function (){var statearr_32939 = state_32887;
(statearr_32939[(10)] = inst_32874);

return statearr_32939;
})();
var statearr_32940_34744 = state_32887__$1;
(statearr_32940_34744[(2)] = null);

(statearr_32940_34744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (3))){
var inst_32879 = (state_32887[(2)]);
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32887__$1,inst_32879);
} else {
if((state_val_32888 === (12))){
var _ = (function (){var statearr_32946 = state_32887;
(statearr_32946[(4)] = cljs.core.rest((state_32887[(4)])));

return statearr_32946;
})();
var state_32887__$1 = state_32887;
var ex32934 = (state_32887__$1[(2)]);
var statearr_32952_34745 = state_32887__$1;
(statearr_32952_34745[(5)] = ex32934);


if((ex32934 instanceof Object)){
var statearr_32957_34752 = state_32887__$1;
(statearr_32957_34752[(1)] = (11));

(statearr_32957_34752[(5)] = null);

} else {
throw ex32934;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (2))){
var inst_32831 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32832 = cnt;
var inst_32833 = (0);
var state_32887__$1 = (function (){var statearr_32987 = state_32887;
(statearr_32987[(11)] = inst_32831);

(statearr_32987[(7)] = inst_32832);

(statearr_32987[(8)] = inst_32833);

return statearr_32987;
})();
var statearr_32990_34753 = state_32887__$1;
(statearr_32990_34753[(2)] = null);

(statearr_32990_34753[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (11))){
var inst_32846 = (state_32887[(2)]);
var inst_32847 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32887__$1 = (function (){var statearr_32993 = state_32887;
(statearr_32993[(12)] = inst_32846);

return statearr_32993;
})();
var statearr_32997_34754 = state_32887__$1;
(statearr_32997_34754[(2)] = inst_32847);

(statearr_32997_34754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (9))){
var inst_32833 = (state_32887[(8)]);
var _ = (function (){var statearr_33000 = state_32887;
(statearr_33000[(4)] = cljs.core.cons((12),(state_32887[(4)])));

return statearr_33000;
})();
var inst_32853 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32833) : chs__$1.call(null,inst_32833));
var inst_32854 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32833) : done.call(null,inst_32833));
var inst_32855 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32853,inst_32854);
var ___$1 = (function (){var statearr_33002 = state_32887;
(statearr_33002[(4)] = cljs.core.rest((state_32887[(4)])));

return statearr_33002;
})();
var state_32887__$1 = state_32887;
var statearr_33004_34759 = state_32887__$1;
(statearr_33004_34759[(2)] = inst_32855);

(statearr_33004_34759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (5))){
var inst_32865 = (state_32887[(2)]);
var state_32887__$1 = (function (){var statearr_33005 = state_32887;
(statearr_33005[(13)] = inst_32865);

return statearr_33005;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32887__$1,(13),dchan);
} else {
if((state_val_32888 === (14))){
var inst_32870 = cljs.core.async.close_BANG_(out);
var state_32887__$1 = state_32887;
var statearr_33022_34760 = state_32887__$1;
(statearr_33022_34760[(2)] = inst_32870);

(statearr_33022_34760[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (16))){
var inst_32877 = (state_32887[(2)]);
var state_32887__$1 = state_32887;
var statearr_33040_34761 = state_32887__$1;
(statearr_33040_34761[(2)] = inst_32877);

(statearr_33040_34761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (10))){
var inst_32833 = (state_32887[(8)]);
var inst_32858 = (state_32887[(2)]);
var inst_32859 = (inst_32833 + (1));
var inst_32833__$1 = inst_32859;
var state_32887__$1 = (function (){var statearr_33042 = state_32887;
(statearr_33042[(8)] = inst_32833__$1);

(statearr_33042[(14)] = inst_32858);

return statearr_33042;
})();
var statearr_33043_34762 = state_32887__$1;
(statearr_33043_34762[(2)] = null);

(statearr_33043_34762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (8))){
var inst_32863 = (state_32887[(2)]);
var state_32887__$1 = state_32887;
var statearr_33044_34763 = state_32887__$1;
(statearr_33044_34763[(2)] = inst_32863);

(statearr_33044_34763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30612__auto__ = null;
var cljs$core$async$state_machine__30612__auto____0 = (function (){
var statearr_33048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33048[(0)] = cljs$core$async$state_machine__30612__auto__);

(statearr_33048[(1)] = (1));

return statearr_33048;
});
var cljs$core$async$state_machine__30612__auto____1 = (function (state_32887){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_32887);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e33049){var ex__30615__auto__ = e33049;
var statearr_33050_34764 = state_32887;
(statearr_33050_34764[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_32887[(4)]))){
var statearr_33051_34765 = state_32887;
(statearr_33051_34765[(1)] = cljs.core.first((state_32887[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34766 = state_32887;
state_32887 = G__34766;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$state_machine__30612__auto__ = function(state_32887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30612__auto____1.call(this,state_32887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30612__auto____0;
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30612__auto____1;
return cljs$core$async$state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_33053 = f__30829__auto__();
(statearr_33053[(6)] = c__30828__auto___34736);

return statearr_33053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33061 = arguments.length;
switch (G__33061) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30828__auto___34772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_33095){
var state_val_33096 = (state_33095[(1)]);
if((state_val_33096 === (7))){
var inst_33074 = (state_33095[(7)]);
var inst_33075 = (state_33095[(8)]);
var inst_33074__$1 = (state_33095[(2)]);
var inst_33075__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33074__$1,(0),null);
var inst_33076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33074__$1,(1),null);
var inst_33077 = (inst_33075__$1 == null);
var state_33095__$1 = (function (){var statearr_33097 = state_33095;
(statearr_33097[(7)] = inst_33074__$1);

(statearr_33097[(9)] = inst_33076);

(statearr_33097[(8)] = inst_33075__$1);

return statearr_33097;
})();
if(cljs.core.truth_(inst_33077)){
var statearr_33098_34773 = state_33095__$1;
(statearr_33098_34773[(1)] = (8));

} else {
var statearr_33099_34774 = state_33095__$1;
(statearr_33099_34774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (1))){
var inst_33064 = cljs.core.vec(chs);
var inst_33065 = inst_33064;
var state_33095__$1 = (function (){var statearr_33105 = state_33095;
(statearr_33105[(10)] = inst_33065);

return statearr_33105;
})();
var statearr_33106_34775 = state_33095__$1;
(statearr_33106_34775[(2)] = null);

(statearr_33106_34775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (4))){
var inst_33065 = (state_33095[(10)]);
var state_33095__$1 = state_33095;
return cljs.core.async.ioc_alts_BANG_(state_33095__$1,(7),inst_33065);
} else {
if((state_val_33096 === (6))){
var inst_33091 = (state_33095[(2)]);
var state_33095__$1 = state_33095;
var statearr_33107_34776 = state_33095__$1;
(statearr_33107_34776[(2)] = inst_33091);

(statearr_33107_34776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (3))){
var inst_33093 = (state_33095[(2)]);
var state_33095__$1 = state_33095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33095__$1,inst_33093);
} else {
if((state_val_33096 === (2))){
var inst_33065 = (state_33095[(10)]);
var inst_33067 = cljs.core.count(inst_33065);
var inst_33068 = (inst_33067 > (0));
var state_33095__$1 = state_33095;
if(cljs.core.truth_(inst_33068)){
var statearr_33113_34777 = state_33095__$1;
(statearr_33113_34777[(1)] = (4));

} else {
var statearr_33114_34778 = state_33095__$1;
(statearr_33114_34778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (11))){
var inst_33065 = (state_33095[(10)]);
var inst_33084 = (state_33095[(2)]);
var tmp33108 = inst_33065;
var inst_33065__$1 = tmp33108;
var state_33095__$1 = (function (){var statearr_33115 = state_33095;
(statearr_33115[(10)] = inst_33065__$1);

(statearr_33115[(11)] = inst_33084);

return statearr_33115;
})();
var statearr_33116_34779 = state_33095__$1;
(statearr_33116_34779[(2)] = null);

(statearr_33116_34779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (9))){
var inst_33075 = (state_33095[(8)]);
var state_33095__$1 = state_33095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33095__$1,(11),out,inst_33075);
} else {
if((state_val_33096 === (5))){
var inst_33089 = cljs.core.async.close_BANG_(out);
var state_33095__$1 = state_33095;
var statearr_33117_34781 = state_33095__$1;
(statearr_33117_34781[(2)] = inst_33089);

(statearr_33117_34781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (10))){
var inst_33087 = (state_33095[(2)]);
var state_33095__$1 = state_33095;
var statearr_33118_34782 = state_33095__$1;
(statearr_33118_34782[(2)] = inst_33087);

(statearr_33118_34782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (8))){
var inst_33065 = (state_33095[(10)]);
var inst_33074 = (state_33095[(7)]);
var inst_33076 = (state_33095[(9)]);
var inst_33075 = (state_33095[(8)]);
var inst_33079 = (function (){var cs = inst_33065;
var vec__33070 = inst_33074;
var v = inst_33075;
var c = inst_33076;
return (function (p1__33057_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33057_SHARP_);
});
})();
var inst_33080 = cljs.core.filterv(inst_33079,inst_33065);
var inst_33065__$1 = inst_33080;
var state_33095__$1 = (function (){var statearr_33124 = state_33095;
(statearr_33124[(10)] = inst_33065__$1);

return statearr_33124;
})();
var statearr_33125_34783 = state_33095__$1;
(statearr_33125_34783[(2)] = null);

(statearr_33125_34783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30612__auto__ = null;
var cljs$core$async$state_machine__30612__auto____0 = (function (){
var statearr_33126 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33126[(0)] = cljs$core$async$state_machine__30612__auto__);

(statearr_33126[(1)] = (1));

return statearr_33126;
});
var cljs$core$async$state_machine__30612__auto____1 = (function (state_33095){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_33095);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e33131){var ex__30615__auto__ = e33131;
var statearr_33132_34784 = state_33095;
(statearr_33132_34784[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_33095[(4)]))){
var statearr_33137_34785 = state_33095;
(statearr_33137_34785[(1)] = cljs.core.first((state_33095[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34786 = state_33095;
state_33095 = G__34786;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$state_machine__30612__auto__ = function(state_33095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30612__auto____1.call(this,state_33095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30612__auto____0;
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30612__auto____1;
return cljs$core$async$state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_33160 = f__30829__auto__();
(statearr_33160[(6)] = c__30828__auto___34772);

return statearr_33160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33163 = arguments.length;
switch (G__33163) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30828__auto___34799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_33193){
var state_val_33194 = (state_33193[(1)]);
if((state_val_33194 === (7))){
var inst_33175 = (state_33193[(7)]);
var inst_33175__$1 = (state_33193[(2)]);
var inst_33176 = (inst_33175__$1 == null);
var inst_33177 = cljs.core.not(inst_33176);
var state_33193__$1 = (function (){var statearr_33203 = state_33193;
(statearr_33203[(7)] = inst_33175__$1);

return statearr_33203;
})();
if(inst_33177){
var statearr_33204_34806 = state_33193__$1;
(statearr_33204_34806[(1)] = (8));

} else {
var statearr_33209_34807 = state_33193__$1;
(statearr_33209_34807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (1))){
var inst_33169 = (0);
var state_33193__$1 = (function (){var statearr_33210 = state_33193;
(statearr_33210[(8)] = inst_33169);

return statearr_33210;
})();
var statearr_33211_34808 = state_33193__$1;
(statearr_33211_34808[(2)] = null);

(statearr_33211_34808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (4))){
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33193__$1,(7),ch);
} else {
if((state_val_33194 === (6))){
var inst_33188 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
var statearr_33212_34809 = state_33193__$1;
(statearr_33212_34809[(2)] = inst_33188);

(statearr_33212_34809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (3))){
var inst_33190 = (state_33193[(2)]);
var inst_33191 = cljs.core.async.close_BANG_(out);
var state_33193__$1 = (function (){var statearr_33221 = state_33193;
(statearr_33221[(9)] = inst_33190);

return statearr_33221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33193__$1,inst_33191);
} else {
if((state_val_33194 === (2))){
var inst_33169 = (state_33193[(8)]);
var inst_33171 = (inst_33169 < n);
var state_33193__$1 = state_33193;
if(cljs.core.truth_(inst_33171)){
var statearr_33222_34810 = state_33193__$1;
(statearr_33222_34810[(1)] = (4));

} else {
var statearr_33223_34811 = state_33193__$1;
(statearr_33223_34811[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (11))){
var inst_33169 = (state_33193[(8)]);
var inst_33180 = (state_33193[(2)]);
var inst_33181 = (inst_33169 + (1));
var inst_33169__$1 = inst_33181;
var state_33193__$1 = (function (){var statearr_33224 = state_33193;
(statearr_33224[(8)] = inst_33169__$1);

(statearr_33224[(10)] = inst_33180);

return statearr_33224;
})();
var statearr_33228_34812 = state_33193__$1;
(statearr_33228_34812[(2)] = null);

(statearr_33228_34812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (9))){
var state_33193__$1 = state_33193;
var statearr_33229_34813 = state_33193__$1;
(statearr_33229_34813[(2)] = null);

(statearr_33229_34813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (5))){
var state_33193__$1 = state_33193;
var statearr_33230_34815 = state_33193__$1;
(statearr_33230_34815[(2)] = null);

(statearr_33230_34815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (10))){
var inst_33185 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
var statearr_33231_34816 = state_33193__$1;
(statearr_33231_34816[(2)] = inst_33185);

(statearr_33231_34816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (8))){
var inst_33175 = (state_33193[(7)]);
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33193__$1,(11),out,inst_33175);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30612__auto__ = null;
var cljs$core$async$state_machine__30612__auto____0 = (function (){
var statearr_33234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33234[(0)] = cljs$core$async$state_machine__30612__auto__);

(statearr_33234[(1)] = (1));

return statearr_33234;
});
var cljs$core$async$state_machine__30612__auto____1 = (function (state_33193){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_33193);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e33235){var ex__30615__auto__ = e33235;
var statearr_33236_34820 = state_33193;
(statearr_33236_34820[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_33193[(4)]))){
var statearr_33237_34822 = state_33193;
(statearr_33237_34822[(1)] = cljs.core.first((state_33193[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34823 = state_33193;
state_33193 = G__34823;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$state_machine__30612__auto__ = function(state_33193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30612__auto____1.call(this,state_33193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30612__auto____0;
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30612__auto____1;
return cljs$core$async$state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_33254 = f__30829__auto__();
(statearr_33254[(6)] = c__30828__auto___34799);

return statearr_33254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33264 = (function (f,ch,meta33265){
this.f = f;
this.ch = ch;
this.meta33265 = meta33265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33266,meta33265__$1){
var self__ = this;
var _33266__$1 = this;
return (new cljs.core.async.t_cljs$core$async33264(self__.f,self__.ch,meta33265__$1));
}));

(cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33266){
var self__ = this;
var _33266__$1 = this;
return self__.meta33265;
}));

(cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33312 = (function (f,ch,meta33265,_,fn1,meta33313){
this.f = f;
this.ch = ch;
this.meta33265 = meta33265;
this._ = _;
this.fn1 = fn1;
this.meta33313 = meta33313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33314,meta33313__$1){
var self__ = this;
var _33314__$1 = this;
return (new cljs.core.async.t_cljs$core$async33312(self__.f,self__.ch,self__.meta33265,self__._,self__.fn1,meta33313__$1));
}));

(cljs.core.async.t_cljs$core$async33312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33314){
var self__ = this;
var _33314__$1 = this;
return self__.meta33313;
}));

(cljs.core.async.t_cljs$core$async33312.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33260_SHARP_){
var G__33322 = (((p1__33260_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33260_SHARP_) : self__.f.call(null,p1__33260_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33322) : f1.call(null,G__33322));
});
}));

(cljs.core.async.t_cljs$core$async33312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33265","meta33265",228657199,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33264","cljs.core.async/t_cljs$core$async33264",1465303922,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33313","meta33313",-45000776,null)], null);
}));

(cljs.core.async.t_cljs$core$async33312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33312");

(cljs.core.async.t_cljs$core$async33312.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33312.
 */
cljs.core.async.__GT_t_cljs$core$async33312 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33312(f__$1,ch__$1,meta33265__$1,___$2,fn1__$1,meta33313){
return (new cljs.core.async.t_cljs$core$async33312(f__$1,ch__$1,meta33265__$1,___$2,fn1__$1,meta33313));
});

}

return (new cljs.core.async.t_cljs$core$async33312(self__.f,self__.ch,self__.meta33265,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33386 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33386) : self__.f.call(null,G__33386));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33265","meta33265",228657199,null)], null);
}));

(cljs.core.async.t_cljs$core$async33264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33264");

(cljs.core.async.t_cljs$core$async33264.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33264.
 */
cljs.core.async.__GT_t_cljs$core$async33264 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33264(f__$1,ch__$1,meta33265){
return (new cljs.core.async.t_cljs$core$async33264(f__$1,ch__$1,meta33265));
});

}

return (new cljs.core.async.t_cljs$core$async33264(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33411 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33411 = (function (f,ch,meta33412){
this.f = f;
this.ch = ch;
this.meta33412 = meta33412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33413,meta33412__$1){
var self__ = this;
var _33413__$1 = this;
return (new cljs.core.async.t_cljs$core$async33411(self__.f,self__.ch,meta33412__$1));
}));

(cljs.core.async.t_cljs$core$async33411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33413){
var self__ = this;
var _33413__$1 = this;
return self__.meta33412;
}));

(cljs.core.async.t_cljs$core$async33411.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33411.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33411.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33411.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33411.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33411.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33412","meta33412",1999008451,null)], null);
}));

(cljs.core.async.t_cljs$core$async33411.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33411");

(cljs.core.async.t_cljs$core$async33411.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33411");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33411.
 */
cljs.core.async.__GT_t_cljs$core$async33411 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33411(f__$1,ch__$1,meta33412){
return (new cljs.core.async.t_cljs$core$async33411(f__$1,ch__$1,meta33412));
});

}

return (new cljs.core.async.t_cljs$core$async33411(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33419 = (function (p,ch,meta33420){
this.p = p;
this.ch = ch;
this.meta33420 = meta33420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33421,meta33420__$1){
var self__ = this;
var _33421__$1 = this;
return (new cljs.core.async.t_cljs$core$async33419(self__.p,self__.ch,meta33420__$1));
}));

(cljs.core.async.t_cljs$core$async33419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33421){
var self__ = this;
var _33421__$1 = this;
return self__.meta33420;
}));

(cljs.core.async.t_cljs$core$async33419.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33419.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33419.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33419.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33420","meta33420",1226799493,null)], null);
}));

(cljs.core.async.t_cljs$core$async33419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33419");

(cljs.core.async.t_cljs$core$async33419.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33419.
 */
cljs.core.async.__GT_t_cljs$core$async33419 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33419(p__$1,ch__$1,meta33420){
return (new cljs.core.async.t_cljs$core$async33419(p__$1,ch__$1,meta33420));
});

}

return (new cljs.core.async.t_cljs$core$async33419(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33428 = arguments.length;
switch (G__33428) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30828__auto___34845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_33451){
var state_val_33452 = (state_33451[(1)]);
if((state_val_33452 === (7))){
var inst_33447 = (state_33451[(2)]);
var state_33451__$1 = state_33451;
var statearr_33454_34847 = state_33451__$1;
(statearr_33454_34847[(2)] = inst_33447);

(statearr_33454_34847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (1))){
var state_33451__$1 = state_33451;
var statearr_33455_34848 = state_33451__$1;
(statearr_33455_34848[(2)] = null);

(statearr_33455_34848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (4))){
var inst_33431 = (state_33451[(7)]);
var inst_33431__$1 = (state_33451[(2)]);
var inst_33433 = (inst_33431__$1 == null);
var state_33451__$1 = (function (){var statearr_33456 = state_33451;
(statearr_33456[(7)] = inst_33431__$1);

return statearr_33456;
})();
if(cljs.core.truth_(inst_33433)){
var statearr_33457_34853 = state_33451__$1;
(statearr_33457_34853[(1)] = (5));

} else {
var statearr_33458_34854 = state_33451__$1;
(statearr_33458_34854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (6))){
var inst_33431 = (state_33451[(7)]);
var inst_33438 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33431) : p.call(null,inst_33431));
var state_33451__$1 = state_33451;
if(cljs.core.truth_(inst_33438)){
var statearr_33461_34855 = state_33451__$1;
(statearr_33461_34855[(1)] = (8));

} else {
var statearr_33462_34856 = state_33451__$1;
(statearr_33462_34856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (3))){
var inst_33449 = (state_33451[(2)]);
var state_33451__$1 = state_33451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33451__$1,inst_33449);
} else {
if((state_val_33452 === (2))){
var state_33451__$1 = state_33451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33451__$1,(4),ch);
} else {
if((state_val_33452 === (11))){
var inst_33441 = (state_33451[(2)]);
var state_33451__$1 = state_33451;
var statearr_33464_34857 = state_33451__$1;
(statearr_33464_34857[(2)] = inst_33441);

(statearr_33464_34857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (9))){
var state_33451__$1 = state_33451;
var statearr_33465_34858 = state_33451__$1;
(statearr_33465_34858[(2)] = null);

(statearr_33465_34858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (5))){
var inst_33436 = cljs.core.async.close_BANG_(out);
var state_33451__$1 = state_33451;
var statearr_33466_34859 = state_33451__$1;
(statearr_33466_34859[(2)] = inst_33436);

(statearr_33466_34859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (10))){
var inst_33444 = (state_33451[(2)]);
var state_33451__$1 = (function (){var statearr_33467 = state_33451;
(statearr_33467[(8)] = inst_33444);

return statearr_33467;
})();
var statearr_33468_34860 = state_33451__$1;
(statearr_33468_34860[(2)] = null);

(statearr_33468_34860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (8))){
var inst_33431 = (state_33451[(7)]);
var state_33451__$1 = state_33451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33451__$1,(11),out,inst_33431);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30612__auto__ = null;
var cljs$core$async$state_machine__30612__auto____0 = (function (){
var statearr_33469 = [null,null,null,null,null,null,null,null,null];
(statearr_33469[(0)] = cljs$core$async$state_machine__30612__auto__);

(statearr_33469[(1)] = (1));

return statearr_33469;
});
var cljs$core$async$state_machine__30612__auto____1 = (function (state_33451){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_33451);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e33470){var ex__30615__auto__ = e33470;
var statearr_33471_34861 = state_33451;
(statearr_33471_34861[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_33451[(4)]))){
var statearr_33475_34862 = state_33451;
(statearr_33475_34862[(1)] = cljs.core.first((state_33451[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34863 = state_33451;
state_33451 = G__34863;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$state_machine__30612__auto__ = function(state_33451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30612__auto____1.call(this,state_33451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30612__auto____0;
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30612__auto____1;
return cljs$core$async$state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_33476 = f__30829__auto__();
(statearr_33476[(6)] = c__30828__auto___34845);

return statearr_33476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33478 = arguments.length;
switch (G__33478) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30828__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_33576){
var state_val_33577 = (state_33576[(1)]);
if((state_val_33577 === (7))){
var inst_33572 = (state_33576[(2)]);
var state_33576__$1 = state_33576;
var statearr_33582_34865 = state_33576__$1;
(statearr_33582_34865[(2)] = inst_33572);

(statearr_33582_34865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (20))){
var inst_33540 = (state_33576[(7)]);
var inst_33551 = (state_33576[(2)]);
var inst_33552 = cljs.core.next(inst_33540);
var inst_33516 = inst_33552;
var inst_33517 = null;
var inst_33518 = (0);
var inst_33519 = (0);
var state_33576__$1 = (function (){var statearr_33587 = state_33576;
(statearr_33587[(8)] = inst_33551);

(statearr_33587[(9)] = inst_33518);

(statearr_33587[(10)] = inst_33519);

(statearr_33587[(11)] = inst_33517);

(statearr_33587[(12)] = inst_33516);

return statearr_33587;
})();
var statearr_33588_34866 = state_33576__$1;
(statearr_33588_34866[(2)] = null);

(statearr_33588_34866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (1))){
var state_33576__$1 = state_33576;
var statearr_33590_34867 = state_33576__$1;
(statearr_33590_34867[(2)] = null);

(statearr_33590_34867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (4))){
var inst_33504 = (state_33576[(13)]);
var inst_33504__$1 = (state_33576[(2)]);
var inst_33505 = (inst_33504__$1 == null);
var state_33576__$1 = (function (){var statearr_33593 = state_33576;
(statearr_33593[(13)] = inst_33504__$1);

return statearr_33593;
})();
if(cljs.core.truth_(inst_33505)){
var statearr_33594_34868 = state_33576__$1;
(statearr_33594_34868[(1)] = (5));

} else {
var statearr_33595_34869 = state_33576__$1;
(statearr_33595_34869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (15))){
var state_33576__$1 = state_33576;
var statearr_33600_34870 = state_33576__$1;
(statearr_33600_34870[(2)] = null);

(statearr_33600_34870[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (21))){
var state_33576__$1 = state_33576;
var statearr_33601_34872 = state_33576__$1;
(statearr_33601_34872[(2)] = null);

(statearr_33601_34872[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (13))){
var inst_33518 = (state_33576[(9)]);
var inst_33519 = (state_33576[(10)]);
var inst_33517 = (state_33576[(11)]);
var inst_33516 = (state_33576[(12)]);
var inst_33532 = (state_33576[(2)]);
var inst_33533 = (inst_33519 + (1));
var tmp33596 = inst_33518;
var tmp33597 = inst_33517;
var tmp33598 = inst_33516;
var inst_33516__$1 = tmp33598;
var inst_33517__$1 = tmp33597;
var inst_33518__$1 = tmp33596;
var inst_33519__$1 = inst_33533;
var state_33576__$1 = (function (){var statearr_33602 = state_33576;
(statearr_33602[(9)] = inst_33518__$1);

(statearr_33602[(10)] = inst_33519__$1);

(statearr_33602[(11)] = inst_33517__$1);

(statearr_33602[(14)] = inst_33532);

(statearr_33602[(12)] = inst_33516__$1);

return statearr_33602;
})();
var statearr_33604_34873 = state_33576__$1;
(statearr_33604_34873[(2)] = null);

(statearr_33604_34873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (22))){
var state_33576__$1 = state_33576;
var statearr_33609_34877 = state_33576__$1;
(statearr_33609_34877[(2)] = null);

(statearr_33609_34877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (6))){
var inst_33504 = (state_33576[(13)]);
var inst_33514 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33504) : f.call(null,inst_33504));
var inst_33515 = cljs.core.seq(inst_33514);
var inst_33516 = inst_33515;
var inst_33517 = null;
var inst_33518 = (0);
var inst_33519 = (0);
var state_33576__$1 = (function (){var statearr_33626 = state_33576;
(statearr_33626[(9)] = inst_33518);

(statearr_33626[(10)] = inst_33519);

(statearr_33626[(11)] = inst_33517);

(statearr_33626[(12)] = inst_33516);

return statearr_33626;
})();
var statearr_33634_34878 = state_33576__$1;
(statearr_33634_34878[(2)] = null);

(statearr_33634_34878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (17))){
var inst_33540 = (state_33576[(7)]);
var inst_33544 = cljs.core.chunk_first(inst_33540);
var inst_33545 = cljs.core.chunk_rest(inst_33540);
var inst_33546 = cljs.core.count(inst_33544);
var inst_33516 = inst_33545;
var inst_33517 = inst_33544;
var inst_33518 = inst_33546;
var inst_33519 = (0);
var state_33576__$1 = (function (){var statearr_33644 = state_33576;
(statearr_33644[(9)] = inst_33518);

(statearr_33644[(10)] = inst_33519);

(statearr_33644[(11)] = inst_33517);

(statearr_33644[(12)] = inst_33516);

return statearr_33644;
})();
var statearr_33646_34879 = state_33576__$1;
(statearr_33646_34879[(2)] = null);

(statearr_33646_34879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (3))){
var inst_33574 = (state_33576[(2)]);
var state_33576__$1 = state_33576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33576__$1,inst_33574);
} else {
if((state_val_33577 === (12))){
var inst_33560 = (state_33576[(2)]);
var state_33576__$1 = state_33576;
var statearr_33653_34880 = state_33576__$1;
(statearr_33653_34880[(2)] = inst_33560);

(statearr_33653_34880[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (2))){
var state_33576__$1 = state_33576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33576__$1,(4),in$);
} else {
if((state_val_33577 === (23))){
var inst_33570 = (state_33576[(2)]);
var state_33576__$1 = state_33576;
var statearr_33655_34881 = state_33576__$1;
(statearr_33655_34881[(2)] = inst_33570);

(statearr_33655_34881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (19))){
var inst_33555 = (state_33576[(2)]);
var state_33576__$1 = state_33576;
var statearr_33656_34882 = state_33576__$1;
(statearr_33656_34882[(2)] = inst_33555);

(statearr_33656_34882[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (11))){
var inst_33540 = (state_33576[(7)]);
var inst_33516 = (state_33576[(12)]);
var inst_33540__$1 = cljs.core.seq(inst_33516);
var state_33576__$1 = (function (){var statearr_33663 = state_33576;
(statearr_33663[(7)] = inst_33540__$1);

return statearr_33663;
})();
if(inst_33540__$1){
var statearr_33665_34886 = state_33576__$1;
(statearr_33665_34886[(1)] = (14));

} else {
var statearr_33666_34887 = state_33576__$1;
(statearr_33666_34887[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (9))){
var inst_33562 = (state_33576[(2)]);
var inst_33565 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33576__$1 = (function (){var statearr_33670 = state_33576;
(statearr_33670[(15)] = inst_33562);

return statearr_33670;
})();
if(cljs.core.truth_(inst_33565)){
var statearr_33672_34888 = state_33576__$1;
(statearr_33672_34888[(1)] = (21));

} else {
var statearr_33689_34889 = state_33576__$1;
(statearr_33689_34889[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (5))){
var inst_33508 = cljs.core.async.close_BANG_(out);
var state_33576__$1 = state_33576;
var statearr_33696_34890 = state_33576__$1;
(statearr_33696_34890[(2)] = inst_33508);

(statearr_33696_34890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (14))){
var inst_33540 = (state_33576[(7)]);
var inst_33542 = cljs.core.chunked_seq_QMARK_(inst_33540);
var state_33576__$1 = state_33576;
if(inst_33542){
var statearr_33715_34892 = state_33576__$1;
(statearr_33715_34892[(1)] = (17));

} else {
var statearr_33722_34893 = state_33576__$1;
(statearr_33722_34893[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (16))){
var inst_33558 = (state_33576[(2)]);
var state_33576__$1 = state_33576;
var statearr_33729_34895 = state_33576__$1;
(statearr_33729_34895[(2)] = inst_33558);

(statearr_33729_34895[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (10))){
var inst_33519 = (state_33576[(10)]);
var inst_33517 = (state_33576[(11)]);
var inst_33528 = cljs.core._nth(inst_33517,inst_33519);
var state_33576__$1 = state_33576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33576__$1,(13),out,inst_33528);
} else {
if((state_val_33577 === (18))){
var inst_33540 = (state_33576[(7)]);
var inst_33549 = cljs.core.first(inst_33540);
var state_33576__$1 = state_33576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33576__$1,(20),out,inst_33549);
} else {
if((state_val_33577 === (8))){
var inst_33518 = (state_33576[(9)]);
var inst_33519 = (state_33576[(10)]);
var inst_33525 = (inst_33519 < inst_33518);
var inst_33526 = inst_33525;
var state_33576__$1 = state_33576;
if(cljs.core.truth_(inst_33526)){
var statearr_33746_34896 = state_33576__$1;
(statearr_33746_34896[(1)] = (10));

} else {
var statearr_33747_34897 = state_33576__$1;
(statearr_33747_34897[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30612__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30612__auto____0 = (function (){
var statearr_33754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33754[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30612__auto__);

(statearr_33754[(1)] = (1));

return statearr_33754;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30612__auto____1 = (function (state_33576){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_33576);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e33759){var ex__30615__auto__ = e33759;
var statearr_33760_34907 = state_33576;
(statearr_33760_34907[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_33576[(4)]))){
var statearr_33762_34909 = state_33576;
(statearr_33762_34909[(1)] = cljs.core.first((state_33576[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34910 = state_33576;
state_33576 = G__34910;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30612__auto__ = function(state_33576){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30612__auto____1.call(this,state_33576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30612__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30612__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_33771 = f__30829__auto__();
(statearr_33771[(6)] = c__30828__auto__);

return statearr_33771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));

return c__30828__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33776 = arguments.length;
switch (G__33776) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33790 = arguments.length;
switch (G__33790) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33792 = arguments.length;
switch (G__33792) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30828__auto___34918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_33817){
var state_val_33818 = (state_33817[(1)]);
if((state_val_33818 === (7))){
var inst_33812 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
var statearr_33821_34919 = state_33817__$1;
(statearr_33821_34919[(2)] = inst_33812);

(statearr_33821_34919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (1))){
var inst_33794 = null;
var state_33817__$1 = (function (){var statearr_33822 = state_33817;
(statearr_33822[(7)] = inst_33794);

return statearr_33822;
})();
var statearr_33827_34920 = state_33817__$1;
(statearr_33827_34920[(2)] = null);

(statearr_33827_34920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (4))){
var inst_33797 = (state_33817[(8)]);
var inst_33797__$1 = (state_33817[(2)]);
var inst_33798 = (inst_33797__$1 == null);
var inst_33799 = cljs.core.not(inst_33798);
var state_33817__$1 = (function (){var statearr_33836 = state_33817;
(statearr_33836[(8)] = inst_33797__$1);

return statearr_33836;
})();
if(inst_33799){
var statearr_33837_34921 = state_33817__$1;
(statearr_33837_34921[(1)] = (5));

} else {
var statearr_33838_34922 = state_33817__$1;
(statearr_33838_34922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (6))){
var state_33817__$1 = state_33817;
var statearr_33839_34923 = state_33817__$1;
(statearr_33839_34923[(2)] = null);

(statearr_33839_34923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (3))){
var inst_33814 = (state_33817[(2)]);
var inst_33815 = cljs.core.async.close_BANG_(out);
var state_33817__$1 = (function (){var statearr_33840 = state_33817;
(statearr_33840[(9)] = inst_33814);

return statearr_33840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33817__$1,inst_33815);
} else {
if((state_val_33818 === (2))){
var state_33817__$1 = state_33817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33817__$1,(4),ch);
} else {
if((state_val_33818 === (11))){
var inst_33797 = (state_33817[(8)]);
var inst_33806 = (state_33817[(2)]);
var inst_33794 = inst_33797;
var state_33817__$1 = (function (){var statearr_33841 = state_33817;
(statearr_33841[(10)] = inst_33806);

(statearr_33841[(7)] = inst_33794);

return statearr_33841;
})();
var statearr_33842_34924 = state_33817__$1;
(statearr_33842_34924[(2)] = null);

(statearr_33842_34924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (9))){
var inst_33797 = (state_33817[(8)]);
var state_33817__$1 = state_33817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33817__$1,(11),out,inst_33797);
} else {
if((state_val_33818 === (5))){
var inst_33797 = (state_33817[(8)]);
var inst_33794 = (state_33817[(7)]);
var inst_33801 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33797,inst_33794);
var state_33817__$1 = state_33817;
if(inst_33801){
var statearr_33844_34925 = state_33817__$1;
(statearr_33844_34925[(1)] = (8));

} else {
var statearr_33846_34926 = state_33817__$1;
(statearr_33846_34926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (10))){
var inst_33809 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
var statearr_33847_34927 = state_33817__$1;
(statearr_33847_34927[(2)] = inst_33809);

(statearr_33847_34927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (8))){
var inst_33794 = (state_33817[(7)]);
var tmp33843 = inst_33794;
var inst_33794__$1 = tmp33843;
var state_33817__$1 = (function (){var statearr_33848 = state_33817;
(statearr_33848[(7)] = inst_33794__$1);

return statearr_33848;
})();
var statearr_33849_34928 = state_33817__$1;
(statearr_33849_34928[(2)] = null);

(statearr_33849_34928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30612__auto__ = null;
var cljs$core$async$state_machine__30612__auto____0 = (function (){
var statearr_33850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33850[(0)] = cljs$core$async$state_machine__30612__auto__);

(statearr_33850[(1)] = (1));

return statearr_33850;
});
var cljs$core$async$state_machine__30612__auto____1 = (function (state_33817){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_33817);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e33851){var ex__30615__auto__ = e33851;
var statearr_33852_34948 = state_33817;
(statearr_33852_34948[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_33817[(4)]))){
var statearr_33853_34949 = state_33817;
(statearr_33853_34949[(1)] = cljs.core.first((state_33817[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34951 = state_33817;
state_33817 = G__34951;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$state_machine__30612__auto__ = function(state_33817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30612__auto____1.call(this,state_33817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30612__auto____0;
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30612__auto____1;
return cljs$core$async$state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_33854 = f__30829__auto__();
(statearr_33854[(6)] = c__30828__auto___34918);

return statearr_33854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33856 = arguments.length;
switch (G__33856) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30828__auto___34953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_33897){
var state_val_33898 = (state_33897[(1)]);
if((state_val_33898 === (7))){
var inst_33892 = (state_33897[(2)]);
var state_33897__$1 = state_33897;
var statearr_33914_34954 = state_33897__$1;
(statearr_33914_34954[(2)] = inst_33892);

(statearr_33914_34954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (1))){
var inst_33857 = (new Array(n));
var inst_33858 = inst_33857;
var inst_33859 = (0);
var state_33897__$1 = (function (){var statearr_33924 = state_33897;
(statearr_33924[(7)] = inst_33859);

(statearr_33924[(8)] = inst_33858);

return statearr_33924;
})();
var statearr_33925_34955 = state_33897__$1;
(statearr_33925_34955[(2)] = null);

(statearr_33925_34955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (4))){
var inst_33862 = (state_33897[(9)]);
var inst_33862__$1 = (state_33897[(2)]);
var inst_33864 = (inst_33862__$1 == null);
var inst_33865 = cljs.core.not(inst_33864);
var state_33897__$1 = (function (){var statearr_33926 = state_33897;
(statearr_33926[(9)] = inst_33862__$1);

return statearr_33926;
})();
if(inst_33865){
var statearr_33927_34956 = state_33897__$1;
(statearr_33927_34956[(1)] = (5));

} else {
var statearr_33928_34957 = state_33897__$1;
(statearr_33928_34957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (15))){
var inst_33886 = (state_33897[(2)]);
var state_33897__$1 = state_33897;
var statearr_33929_34958 = state_33897__$1;
(statearr_33929_34958[(2)] = inst_33886);

(statearr_33929_34958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (13))){
var state_33897__$1 = state_33897;
var statearr_33930_34959 = state_33897__$1;
(statearr_33930_34959[(2)] = null);

(statearr_33930_34959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (6))){
var inst_33859 = (state_33897[(7)]);
var inst_33881 = (inst_33859 > (0));
var state_33897__$1 = state_33897;
if(cljs.core.truth_(inst_33881)){
var statearr_33931_34960 = state_33897__$1;
(statearr_33931_34960[(1)] = (12));

} else {
var statearr_33932_34961 = state_33897__$1;
(statearr_33932_34961[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (3))){
var inst_33894 = (state_33897[(2)]);
var state_33897__$1 = state_33897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33897__$1,inst_33894);
} else {
if((state_val_33898 === (12))){
var inst_33858 = (state_33897[(8)]);
var inst_33884 = cljs.core.vec(inst_33858);
var state_33897__$1 = state_33897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33897__$1,(15),out,inst_33884);
} else {
if((state_val_33898 === (2))){
var state_33897__$1 = state_33897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33897__$1,(4),ch);
} else {
if((state_val_33898 === (11))){
var inst_33875 = (state_33897[(2)]);
var inst_33876 = (new Array(n));
var inst_33858 = inst_33876;
var inst_33859 = (0);
var state_33897__$1 = (function (){var statearr_33936 = state_33897;
(statearr_33936[(7)] = inst_33859);

(statearr_33936[(8)] = inst_33858);

(statearr_33936[(10)] = inst_33875);

return statearr_33936;
})();
var statearr_33937_34962 = state_33897__$1;
(statearr_33937_34962[(2)] = null);

(statearr_33937_34962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (9))){
var inst_33858 = (state_33897[(8)]);
var inst_33873 = cljs.core.vec(inst_33858);
var state_33897__$1 = state_33897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33897__$1,(11),out,inst_33873);
} else {
if((state_val_33898 === (5))){
var inst_33859 = (state_33897[(7)]);
var inst_33858 = (state_33897[(8)]);
var inst_33862 = (state_33897[(9)]);
var inst_33868 = (state_33897[(11)]);
var inst_33867 = (inst_33858[inst_33859] = inst_33862);
var inst_33868__$1 = (inst_33859 + (1));
var inst_33869 = (inst_33868__$1 < n);
var state_33897__$1 = (function (){var statearr_33940 = state_33897;
(statearr_33940[(11)] = inst_33868__$1);

(statearr_33940[(12)] = inst_33867);

return statearr_33940;
})();
if(cljs.core.truth_(inst_33869)){
var statearr_33941_34963 = state_33897__$1;
(statearr_33941_34963[(1)] = (8));

} else {
var statearr_33942_34964 = state_33897__$1;
(statearr_33942_34964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (14))){
var inst_33889 = (state_33897[(2)]);
var inst_33890 = cljs.core.async.close_BANG_(out);
var state_33897__$1 = (function (){var statearr_33944 = state_33897;
(statearr_33944[(13)] = inst_33889);

return statearr_33944;
})();
var statearr_33945_34965 = state_33897__$1;
(statearr_33945_34965[(2)] = inst_33890);

(statearr_33945_34965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (10))){
var inst_33879 = (state_33897[(2)]);
var state_33897__$1 = state_33897;
var statearr_33946_34966 = state_33897__$1;
(statearr_33946_34966[(2)] = inst_33879);

(statearr_33946_34966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33898 === (8))){
var inst_33858 = (state_33897[(8)]);
var inst_33868 = (state_33897[(11)]);
var tmp33943 = inst_33858;
var inst_33858__$1 = tmp33943;
var inst_33859 = inst_33868;
var state_33897__$1 = (function (){var statearr_33947 = state_33897;
(statearr_33947[(7)] = inst_33859);

(statearr_33947[(8)] = inst_33858__$1);

return statearr_33947;
})();
var statearr_33948_34967 = state_33897__$1;
(statearr_33948_34967[(2)] = null);

(statearr_33948_34967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30612__auto__ = null;
var cljs$core$async$state_machine__30612__auto____0 = (function (){
var statearr_33949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33949[(0)] = cljs$core$async$state_machine__30612__auto__);

(statearr_33949[(1)] = (1));

return statearr_33949;
});
var cljs$core$async$state_machine__30612__auto____1 = (function (state_33897){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_33897);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e33950){var ex__30615__auto__ = e33950;
var statearr_33951_34968 = state_33897;
(statearr_33951_34968[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_33897[(4)]))){
var statearr_33952_34969 = state_33897;
(statearr_33952_34969[(1)] = cljs.core.first((state_33897[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34970 = state_33897;
state_33897 = G__34970;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$state_machine__30612__auto__ = function(state_33897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30612__auto____1.call(this,state_33897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30612__auto____0;
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30612__auto____1;
return cljs$core$async$state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_33954 = f__30829__auto__();
(statearr_33954[(6)] = c__30828__auto___34953);

return statearr_33954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33956 = arguments.length;
switch (G__33956) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30828__auto___34974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30829__auto__ = (function (){var switch__30611__auto__ = (function (state_34004){
var state_val_34005 = (state_34004[(1)]);
if((state_val_34005 === (7))){
var inst_34000 = (state_34004[(2)]);
var state_34004__$1 = state_34004;
var statearr_34006_34975 = state_34004__$1;
(statearr_34006_34975[(2)] = inst_34000);

(statearr_34006_34975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (1))){
var inst_33959 = [];
var inst_33960 = inst_33959;
var inst_33961 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34004__$1 = (function (){var statearr_34007 = state_34004;
(statearr_34007[(7)] = inst_33960);

(statearr_34007[(8)] = inst_33961);

return statearr_34007;
})();
var statearr_34008_34976 = state_34004__$1;
(statearr_34008_34976[(2)] = null);

(statearr_34008_34976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (4))){
var inst_33964 = (state_34004[(9)]);
var inst_33964__$1 = (state_34004[(2)]);
var inst_33965 = (inst_33964__$1 == null);
var inst_33966 = cljs.core.not(inst_33965);
var state_34004__$1 = (function (){var statearr_34010 = state_34004;
(statearr_34010[(9)] = inst_33964__$1);

return statearr_34010;
})();
if(inst_33966){
var statearr_34011_34977 = state_34004__$1;
(statearr_34011_34977[(1)] = (5));

} else {
var statearr_34012_34978 = state_34004__$1;
(statearr_34012_34978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (15))){
var inst_33960 = (state_34004[(7)]);
var inst_33992 = cljs.core.vec(inst_33960);
var state_34004__$1 = state_34004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34004__$1,(18),out,inst_33992);
} else {
if((state_val_34005 === (13))){
var inst_33986 = (state_34004[(2)]);
var state_34004__$1 = state_34004;
var statearr_34013_34979 = state_34004__$1;
(statearr_34013_34979[(2)] = inst_33986);

(statearr_34013_34979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (6))){
var inst_33960 = (state_34004[(7)]);
var inst_33988 = inst_33960.length;
var inst_33989 = (inst_33988 > (0));
var state_34004__$1 = state_34004;
if(cljs.core.truth_(inst_33989)){
var statearr_34014_34980 = state_34004__$1;
(statearr_34014_34980[(1)] = (15));

} else {
var statearr_34015_34981 = state_34004__$1;
(statearr_34015_34981[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (17))){
var inst_33997 = (state_34004[(2)]);
var inst_33998 = cljs.core.async.close_BANG_(out);
var state_34004__$1 = (function (){var statearr_34016 = state_34004;
(statearr_34016[(10)] = inst_33997);

return statearr_34016;
})();
var statearr_34017_34982 = state_34004__$1;
(statearr_34017_34982[(2)] = inst_33998);

(statearr_34017_34982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (3))){
var inst_34002 = (state_34004[(2)]);
var state_34004__$1 = state_34004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34004__$1,inst_34002);
} else {
if((state_val_34005 === (12))){
var inst_33960 = (state_34004[(7)]);
var inst_33979 = cljs.core.vec(inst_33960);
var state_34004__$1 = state_34004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34004__$1,(14),out,inst_33979);
} else {
if((state_val_34005 === (2))){
var state_34004__$1 = state_34004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34004__$1,(4),ch);
} else {
if((state_val_34005 === (11))){
var inst_33960 = (state_34004[(7)]);
var inst_33964 = (state_34004[(9)]);
var inst_33968 = (state_34004[(11)]);
var inst_33976 = inst_33960.push(inst_33964);
var tmp34018 = inst_33960;
var inst_33960__$1 = tmp34018;
var inst_33961 = inst_33968;
var state_34004__$1 = (function (){var statearr_34020 = state_34004;
(statearr_34020[(7)] = inst_33960__$1);

(statearr_34020[(8)] = inst_33961);

(statearr_34020[(12)] = inst_33976);

return statearr_34020;
})();
var statearr_34021_34983 = state_34004__$1;
(statearr_34021_34983[(2)] = null);

(statearr_34021_34983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (9))){
var inst_33961 = (state_34004[(8)]);
var inst_33972 = cljs.core.keyword_identical_QMARK_(inst_33961,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34004__$1 = state_34004;
var statearr_34022_34984 = state_34004__$1;
(statearr_34022_34984[(2)] = inst_33972);

(statearr_34022_34984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (5))){
var inst_33961 = (state_34004[(8)]);
var inst_33964 = (state_34004[(9)]);
var inst_33969 = (state_34004[(13)]);
var inst_33968 = (state_34004[(11)]);
var inst_33968__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33964) : f.call(null,inst_33964));
var inst_33969__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33968__$1,inst_33961);
var state_34004__$1 = (function (){var statearr_34023 = state_34004;
(statearr_34023[(13)] = inst_33969__$1);

(statearr_34023[(11)] = inst_33968__$1);

return statearr_34023;
})();
if(inst_33969__$1){
var statearr_34024_34985 = state_34004__$1;
(statearr_34024_34985[(1)] = (8));

} else {
var statearr_34025_34986 = state_34004__$1;
(statearr_34025_34986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (14))){
var inst_33964 = (state_34004[(9)]);
var inst_33968 = (state_34004[(11)]);
var inst_33981 = (state_34004[(2)]);
var inst_33982 = [];
var inst_33983 = inst_33982.push(inst_33964);
var inst_33960 = inst_33982;
var inst_33961 = inst_33968;
var state_34004__$1 = (function (){var statearr_34027 = state_34004;
(statearr_34027[(14)] = inst_33981);

(statearr_34027[(7)] = inst_33960);

(statearr_34027[(8)] = inst_33961);

(statearr_34027[(15)] = inst_33983);

return statearr_34027;
})();
var statearr_34028_34987 = state_34004__$1;
(statearr_34028_34987[(2)] = null);

(statearr_34028_34987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (16))){
var state_34004__$1 = state_34004;
var statearr_34029_34988 = state_34004__$1;
(statearr_34029_34988[(2)] = null);

(statearr_34029_34988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (10))){
var inst_33974 = (state_34004[(2)]);
var state_34004__$1 = state_34004;
if(cljs.core.truth_(inst_33974)){
var statearr_34030_34989 = state_34004__$1;
(statearr_34030_34989[(1)] = (11));

} else {
var statearr_34031_34990 = state_34004__$1;
(statearr_34031_34990[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (18))){
var inst_33994 = (state_34004[(2)]);
var state_34004__$1 = state_34004;
var statearr_34032_34991 = state_34004__$1;
(statearr_34032_34991[(2)] = inst_33994);

(statearr_34032_34991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (8))){
var inst_33969 = (state_34004[(13)]);
var state_34004__$1 = state_34004;
var statearr_34033_34992 = state_34004__$1;
(statearr_34033_34992[(2)] = inst_33969);

(statearr_34033_34992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30612__auto__ = null;
var cljs$core$async$state_machine__30612__auto____0 = (function (){
var statearr_34035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34035[(0)] = cljs$core$async$state_machine__30612__auto__);

(statearr_34035[(1)] = (1));

return statearr_34035;
});
var cljs$core$async$state_machine__30612__auto____1 = (function (state_34004){
while(true){
var ret_value__30613__auto__ = (function (){try{while(true){
var result__30614__auto__ = switch__30611__auto__(state_34004);
if(cljs.core.keyword_identical_QMARK_(result__30614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30614__auto__;
}
break;
}
}catch (e34036){var ex__30615__auto__ = e34036;
var statearr_34037_34993 = state_34004;
(statearr_34037_34993[(2)] = ex__30615__auto__);


if(cljs.core.seq((state_34004[(4)]))){
var statearr_34038_34994 = state_34004;
(statearr_34038_34994[(1)] = cljs.core.first((state_34004[(4)])));

} else {
throw ex__30615__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34995 = state_34004;
state_34004 = G__34995;
continue;
} else {
return ret_value__30613__auto__;
}
break;
}
});
cljs$core$async$state_machine__30612__auto__ = function(state_34004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30612__auto____1.call(this,state_34004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30612__auto____0;
cljs$core$async$state_machine__30612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30612__auto____1;
return cljs$core$async$state_machine__30612__auto__;
})()
})();
var state__30830__auto__ = (function (){var statearr_34039 = f__30829__auto__();
(statearr_34039[(6)] = c__30828__auto___34974);

return statearr_34039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30830__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
