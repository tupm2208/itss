(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{bDgN:function(t,o,e){"use strict";e.d(o,"a",function(){return i});var i=function(){function t(t){this._id=t._id,this.code=t.code,this.bookingFrom=t.bookingFrom?new Date(t.bookingFrom):null,this.bookingTo=t.bookingTo?new Date(t.bookingTo):null,this.customerEmail=t.customerEmail,this.customerName=t.customerName,this.roomNo=t.roomNo,this.checkin=t.checkin?new Date(t.checkin):null,this.checkout=t.checkout?new Date(t.checkout):null,this.status=t.status,this.total=t.total}return t.prototype.toApiObject=function(){return Object.assign({},this,{bookingFrom:this.getApiDate(this.bookingFrom),bookingTo:this.getApiDate(this.bookingTo)})},t.prototype.getApiDate=function(t){return t.toLocaleDateString().replace("/","-").replace("/","-")},t.prototype.getBookingFrom=function(){return this.getFormattedDate(this.bookingFrom)},t.prototype.getBookingTo=function(){return this.getFormattedDate(this.bookingTo)},t.prototype.getFormattedDate=function(t){return t.getDate()+"-"+t.getMonth()+"-"+t.getFullYear()},t}()}}]);