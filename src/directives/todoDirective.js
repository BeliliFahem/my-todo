/**
 * Created by belilif on 08/05/16.
 */
'use strict';

app.directive('decorateTodo', function () {
    return {
        // template
        template:'{{t.id}} | {{t.title}} | {{t.lastModifDate}}'
    }
});
