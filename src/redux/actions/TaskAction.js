import axios from 'axios';

export const TaskAction = (taskName) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
                method: 'POST',
                data: taskName
            });

            console.log('result', result.data);
        } catch (error) {
            console.log('errors', error.response?.data);
        }
    }
}