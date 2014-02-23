// This is a JavaScript file
function TestController($scope){
    $scope.items = [
        {
            text: 'First App Development by Prasanna'
        }
    ];
    
    $scope.addToList = function(newItem){
        $scope.items.push({
            text: newItem
        });
        
        $scope.newItem = '';
    }
    
    $scope.removeList = function(index){
        $scope.items.splice(index, 1);
    }
}