angular.module('app').controller('nmMainCtrl', function($scope){
    $scope.ads = [
        {src: 'images/ss.png'},
        {src: 'images/adidasad.png'},
        {src: 'images/samsung.png'}
    ];
    $scope.latestProducts = [
        { title: '1 Iphone 5 Black 16GB Sealpack Factory Unlocked', Price: 69000, Currency: 'N',Condition: 'Brand New',PriceNegotiable: 'No', MarketPrice: 69000,Contact:'980 9897 9889',src: 'images/products/4.jpg' },

        { title: '2 Iphone 5 Black 16GB Sealpack Factory Unlocked', Price: 69000, Currency: 'N',Condition: 'Brand New',PriceNegotiable: 'No', MarketPrice: 69000,Contact:'980 9897 9889',src: 'images/products/5.jpg' },

        { title: '3 Iphone 5 Black 16GB Sealpack Factory Unlocked', Price: 69000, Currency: 'N',Condition: 'Brand New',PriceNegotiable: 'No', MarketPrice: 69000,Contact:'980 9897 9889',src: 'images/products/6.jpg' },

        { title: '4 Iphone 5 Black 16GB Sealpack Factory Unlocked', Price: 69000, Currency: 'N',Condition: 'Brand New',PriceNegotiable: 'No', MarketPrice: 69000,Contact:'980 9897 9889' ,src: 'images/products/7.jpg'},

        { title: '5 Iphone 5 Black 16GB Sealpack Factory Unlocked', Price: 69000, Currency: 'N',Condition: 'Brand New',PriceNegotiable: 'No', MarketPrice: 69000,Contact:'980 9897 9889',src: 'images/products/4.jpg' },

        { title: '6 Iphone 5 Black 16GB Sealpack Factory Unlocked', Price: 69000, Currency: 'N',Condition: 'Brand New',PriceNegotiable: 'No', MarketPrice: 69000,Contact:'980 9897 9889' ,src: 'images/products/5.jpg'},

        { title: '7 Iphone 5 Black 16GB Sealpack Factory Unlocked', Price: 69000, Currency: 'N',Condition: 'Brand New',PriceNegotiable: 'No', MarketPrice: 69000,Contact:'980 9897 9889',src: 'images/products/6.jpg' },

        { title: '8 Iphone 5 Black 16GB Sealpack Factory Unlocked', Price: 69000, Currency: 'N',Condition: 'Brand New',PriceNegotiable: 'No', MarketPrice: 69000,Contact:'980 9897 9889',src: 'images/products/6.jpg' }

    ];
    $scope.classifiedList = [
        {src:'images/products/8.png',title: 'Iphone 5 Black 16GB Sealpack Factory Unlocked',Price: 29.00,Seller: 'John Saran',PostedOn: ' November 1, 2015', Currency: 'N'},
        {src:'images/products/9.png',title: 'Iphone 5 Black 16GB Sealpack Factory Unlocked',Price: 29.00,Seller: 'John Saran',PostedOn: ' November 1, 2015',Currency: 'N'},
        {src:'images/products/10.png',title: 'Iphone 5 Black 16GB Sealpack Factory Unlocked',Price: 29.00,Seller: 'John Saran',PostedOn: ' November 1, 2015',Currency: 'N'},
        {src:'images/products/7.jpg',title: 'Iphone 5 Black 16GB Sealpack Factory Unlocked',Price: 29.00,Seller: 'John Saran',PostedOn: ' November 1, 2015',Currency: 'N'},
        {src:'images/products/5.jpg',title: 'Iphone 5 Black 16GB Sealpack Factory Unlocked',Price: 29.00,Seller: 'John Saran',PostedOn: ' November 1, 2015',Currency: 'N'}
    ];
});