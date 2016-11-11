function listaComprasController($scope){
	$scope.itens =[
	{produto: 'Leite', quantidade:3, comprado: false},
	{produto: 'Pão', quantidade:10, comprado:false}
	];


	$scope.adicionaItem = function(){

		$scope.itens.push({
			produto: $scope.item.produto,
			quantidade: $scope.item.quantidade,
			comprado: false
		});
		$scope.item.produto = $scope.item.quantidade = '';
		
	};
}