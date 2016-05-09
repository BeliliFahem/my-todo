/**
 * Created by belilif on 08/05/16.
 */

'use strict';

app.directive('decorateTodoList', function () {
    return {
        template:'{{tl.id}} | {{tl.name}}'
    }
});