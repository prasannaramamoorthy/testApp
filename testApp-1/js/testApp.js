// This is a JavaScript file
function TestController($scope){
    $scope.items = [
        {
            text: 'First App for PrimaryInfo by Prasanna'
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