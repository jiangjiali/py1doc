// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
  {content: 'Corgi Engine v1.0', start: '2014-12-10',  className: 'timeline-corgi'},
  {content: 'Corgi Engine v1.1', start: '2015-01-10', className: 'timeline-corgi'},
  {content: 'Corgi Engine v1.2', start: '2015-01-20', className: 'timeline-corgi'},
  {content: 'Corgi Engine v1.3', start: '2015-02-10', className: 'timeline-corgi'},

  {content: 'TopDown Engine v1.0', start: '2018-09-10', className: 'timeline-topdown'},
  {content: 'TopDown Engine v1.0.1', start: '2018-10-10', className: 'timeline-topdown'},
  {content: 'TopDown Engine v1.02', start: '2018-10-20', className: 'timeline-topdown'},
  {content: 'TopDown Engine v1.1', start: '2018-11-10', className: 'timeline-topdown'},

  {content: 'Infinite Runner Engine v1.0', start: '2015-12-10', className: 'timeline-infinite'},
  {content: 'Infinite Runner Engine v1.0.1', start: '2016-01-20', className: 'timeline-infinite'},
  {content: 'Infinite Runner Engine v1.1', start: '2016-03-10', className: 'timeline-infinite'},

  {content: 'Highroad Engine v1.0', start: '2017-01-10', className: 'timeline-highroad'},
  {content: 'Highroad Engine v1.1', start: '2017-10-20', className: 'timeline-highroad'},
  {content: 'Highroad Engine v1.2', start: '2018-11-10', className: 'timeline-highroad'},

  {content: 'Nice Vibrations v1.0', start: '2018-01-10', className: 'timeline-nicevibrations'},
  {content: 'Nice Vibrations v1.1', start: '2018-02-20', className: 'timeline-nicevibrations'},
  {content: 'Nice Vibrations v1.2', start: '2018-03-10', className: 'timeline-nicevibrations'},
  {content: 'Nice Vibrations v1.3', start: '2018-08-10', className: 'timeline-nicevibrations'},

  {content: 'Nice Touch v1.0', start: '2016-06-10', className: 'timeline-nicetouch'},
  {content: 'Nice Touch v1.1', start: '2016-09-20', className: 'timeline-nicetouch'},
  {content: 'Nice Touch v1.2', start: '2016-10-10', className: 'timeline-nicetouch'},

  {content: 'MMFeedbacks v1.0', start: '2019-10-05', className: 'timeline-mmfeedbacks'},
  {content: 'MMFeedbacks v1.1', start: '2019-11-05', className: 'timeline-mmfeedbacks'},
  {content: 'MMFeedbacks v1.2', start: '2020-01-01', className: 'timeline-mmfeedbacks'},

  {content: 'Feel v2.0', start: '2021-04-15', className: 'timeline-feel'},
  {content: 'Feel v2.1', start: '2021-04-20', className: 'timeline-feel'},
  {content: 'Feel v2.2', start: '2021-05-31', className: 'timeline-feel'},
  {content: 'Feel v2.3', start: '2021-06-08', className: 'timeline-feel'},

  {content: 'Inventory Engine v1.0', start: '2017-07-10', className: 'timeline-inventory'},
  {content: 'Inventory Engine v1.1', start: '2018-12-10', className: 'timeline-inventory'},
  {content: 'Inventory Engine v1.2', start: '2019-01-20', className: 'timeline-inventory'},
  {content: 'Inventory Engine v1.3', start: '2019-04-20', className: 'timeline-inventory'}
]);
// Configuration for the Timeline
var options = {
  width: '100%',
  height: '400px',
  showCurrentTime: true,
  zoomable: false
};
// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');
// Create a Timeline
var timeline = new vis.Timeline(container, items, options);
