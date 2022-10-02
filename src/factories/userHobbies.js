const userHobbies = {};

userHobbies.buildResponseForUserHobbies = (userHobbies) => {
    try {
        let response = [];
        userHobbies.forEach(userHobby => {
            response.push({
                hobbyId: userHobby._id,
                hobbieName: userHobby.name,
                passionLevel: userHobby.passionLevel,
                year: userHobby.year
            });
        });

        return response;
    } catch (error) {
        throw error;
    }
}

export default userHobbies;