/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 2 , Number 6 */

var relationship1 = {
    name = 'SooYoung',
    friends : ['Faker', 'Cuzz', 'Teddy'],
    logFriends : function()
    {
        var that = this; // relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function(friend)
        {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();

const relationship2 = {
    name = 'SooYoung',
    friends : ['Faker', 'Cuzz', 'Teddy'],
    logFriends()
    {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();
