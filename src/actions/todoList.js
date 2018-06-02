const Types = {
  CREATE_TASK: 'CREATE_TASK'
}

export default Types

export const createTask = payload => ({ type: Types.CREATE_TASK, payload })
