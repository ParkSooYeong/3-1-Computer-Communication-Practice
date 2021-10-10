/* SKU CoE ITE - ParkSooYoung */
/* Grade 3 , Semester 1 , Chapter 2 , Number 12 */

async function findAndSaveUser(Users)
{
    try
    {
        let user = await Users.findOne({});
        user.name = 'SooYoung';
        user = await user.save();
        user = await Users.findOne({gender : 'm'});
        // 생략
    }
    catch(error)
    {
        console.error(error);
    }
}

const findAndSaveUser = async(Users) => {
    try
    {
        let user = await Users.findOne({});
        user.name = 'SooYoung';
        user = await user.save();
        user = await Users.findOne({gender : 'm'});
        // 생략
    }
    catch(error)
    {
        console.error(error);
    }
};
