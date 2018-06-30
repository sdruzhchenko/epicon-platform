'use strict';

const { partial, memoize, ...lo } = require('lodash');
const { moduleScaner, moduleParser, core } = require( 'epicon-core' );
const scanerConf = require( './config/scaner' );
const xxx = 'xxx';

const express = require('express');

//сочитай обработчики и модификаторы. в данном случае мы сочитаем стандартный сканер со стандартным конфигом.
const modulesGetter = memoize(
	lo.flow([
		partial( moduleScaner.scan, scanerConf ),
		partial( moduleParser.parse ),
	]), null
);

var x = modulesGetter( __dirname );




const app = express();

app.get( '*', function (req, res) {




});

app.listen(3000, function () {console.log('Epicon Platform run on port 3000');});
