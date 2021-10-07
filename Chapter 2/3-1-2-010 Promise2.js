/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 2 , Number 10 */

function findAndSaveUser(Users)
{
    Users.findOne({}, (err, user) => { // 첫 번째 콜백
        if(err)
        {
            return console.error(err);
        }
        user.name = 'SooYoung';
        user.save((err) => { // 두 번째 콜백
            if(err)
            {
                return console.error(err);
            }
            Users.findOne({gender : 'm'}, (err, user) => { // 세 번째 콜백
                // 생략
            });
        });
    });
}

function findAndSaveUser(Users)
{
    Users.findOne({})
        .then((user) => {
            user.name = 'SooYoung';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({gender : 'm'});
        })
        .then((user) => {
            // 생략
        })
        .catch(err => {
            console.error(err);
        });
}
