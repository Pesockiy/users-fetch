export const addUser = async (tokenApi, usersApi, formData) => {
    try {
        const getToken = await fetch(tokenApi);
        const { token } = await getToken.json();

        const addUserResponse = await fetch(usersApi, {
            headers: { token },
            method: "POST",
            body: formData,
        });
        const { message } = await addUserResponse.json();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
};