'use strict';

app.factory('Post', function($resource) {
  return $resource('https://fiery-fire-5606.firebaseio.com/posts/:id.json');
});
