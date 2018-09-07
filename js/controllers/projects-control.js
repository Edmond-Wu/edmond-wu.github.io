angular.module('myApp').controller('projectsCtrl', function($scope) {
  $scope.webProjs = [
    {
      title: '<div class="card center blue"><a href="https://github.com/wyang6788/redditer" target="_blank" class="waves-effect align-top"><b>Redditer</b></a></div>',
      description: 'Ruby-On-Rails chat messaging application that aims to bring together people who subscribe to various Reddit subreddits! <a href="http://imgur.com/a/KjLsx" target="_blank" class="waves-effect align-top"><b>Imgur link</b></a> is provided as an example.'
    },
    {
      title: '<div class="card center blue"><a href="https://github.com/Edmond-Wu/socket-chat" target="_blank" class="waves-effect align-top"><b>Socket Chat</b></a></div>',
      description: 'Another chat application, built using <a href="https://socket.io/" target="_blank" class="waves-effect align-top"><b>socket.io</b></a>! Users can log in, view other logged-on users, and change their message colors. Front-end designed with angularJS and Materialize CSS.'
    },
    {
      title: '<div class="card center blue"><a href="https://rutgerstc.github.io" target="_blank" class="waves-effect align-top"><b>Rutgers Tzu-Ching</b></a></div>',
      description: 'Website for the Rutgers chapter of the Tzu-Chi Collegiate Association. Single-page application designed with angularJS.'
    },
    {
      title: '<div class="card center blue"><a href="http://devpost.com/software/insightweet" target="_blank" class="waves-effect align-top"><b>Insightweets</b></a></div>',
      description: 'HackNY 2015 group web hack using IBM\'s Bluemix algorithm to find out what people are like based on their tweets (won best IBM hack at HackNY Spring 2015!)'
    }
  ];
  $scope.otherProjs = [
    {
      title: '<div class="card center red"><a href="../assets/unity/td.html" target="_blank" class="waves-effect align-top"><b>Tower Defense</b></a></div>',
      description: 'A basic tower defense game with a geometric/cube theme with some dank memes. Made using Unity 5 with C#; requires <a href="http://unity3d.com/webplayer/" target="_blank" class="waves-effect align-top">the Unity3D plug-in</a> to work.'
    },
    {
      title: '<div class="card center red"><a href="../assets/unity/interstellar_shooter.html" target="_blank" class="waves-effect align-top"><b>Interstellar Shooter</b></a></div>',
      description: 'Game resembling a classic space-shooter arcade. Made using Unity 5 with C#; also needs the <a href="http://unity3d.com/webplayer/" target="_blank" class="waves-effect align-top">Unity3D plugin</a>.'
    },
    {
      title: '<div class="card center red"><a href="https://github.com/Edmond-Wu/PhotoAlbum" target="_blank" class="waves-effect align-top"><b>Photo Album</b></a></div>',
      description: 'JavaFX CRUD application resembling a photo album. Users can add/edit/delete albums and photos, as well as view/like other users\' photos.'
    },
    {
      title: '<div class="card center red"><a href="https://github.com/Edmond-Wu/Chess" target="_blank" class="waves-effect align-top"><b>Chess</b></a></div>',
      description: 'Java project that simulates a complete 2-player chess game with all competitive rules in terminal.'
    },
    {
      title: '<div class="card center red"><a href="https://github.com/Edmond-Wu/Android-Books" target="_blank" class="waves-effect align-top"><b>Android Books</b></a></div>',
      description: 'Android book database application that allows for users to subscribe to books to receive new chapter updates.'
    }
  ];
});
