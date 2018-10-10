angular.module('app', []) // '[]' passes additional funcitonality to the app
    .controller('mainCtrl', mainCtrl) //defines controller and the name of the function
    .directive('avatar', avatarDirective);

function mainCtrl($scope) {

    $scope.users = [];

    $scope.addNew = function(user) {
        $scope.users.push({
            name: user.name,
            avatarUrl: user.url,
            email: user.email
        }); /* [1] */

        user.name = ''; /* [2] */
        user.url = '';
        user.email = '';
    };
}

function avatarDirective() {
    return {
        scope: {
            user: '=' /* [1] */
        },
        restrict: 'E',
        /* [2] */
        replace: 'true',
        template: (
            '<div class="Avatar" id = "userbox">' +
            '<img ng-src="{{user.avatarUrl}}" />' +
            '<h4>{{user.name}}</h4>' +
            '<h5>{{user.email}}</h5>' +
            '</div>'
        ),
        /* [3] */
        link: link
    };

    function link(scope) { /* [4] */
        if (!scope.user.avatarUrl) {
            scope.user.avatarUrl = 'https://www.drupal.org/files/issues/default-avatar.png';
        }
    }

}
