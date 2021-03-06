/*
 * Copyright 2013-2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Definition of the main app module.
 *
 * @author Ilayaperumal Gopinathan
 * @author Alex Boyko
 */
define([
  'angular',
  'flo',
  './app/app',
  './analytics/app',
  './job/app',
  './task/app',
  './stream/app',
  './runtime/app',
  './auth/app',
  './feature/app',
], function (angular) {
  'use strict';

  console.log('Loading Spring Cloud Data Flow UI');

  return  angular.module('dataflowMain', [
    'dataflowConf',
    'dataflowApps',
    'dataflowAnalytics',
    'dataflowJobs',
    'dataflowTasks',
    'dataflowStreams',
    'dataflowRuntime',
    'dataflowAuth',
    'dataflowFeature',
    'spring.flo'
  ]);
});
