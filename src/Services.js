
export const Service = (baseUrl, Axios, token) => {
	const instance = Axios.create({
		baseURL: baseUrl,
	});

	const getApiUrl = (controller,action) => {
		return `${controller}/${action}`;
	}
	

	const searchAllItems = (controller,action,GRAPHQL_API, searchData) => {
		let url = `?client_id=${GRAPHQL_API}`;

		
		return instance.get(`${getApiUrl(controller,action)}${url}` );
	}

	// all other api service functions can be created here which is then accessible to other routes and components 


	return {
		searchAllItems
		}

}

