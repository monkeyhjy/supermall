import axios from 'axios'

//这里创建了axios实例，因为可能一个文件中会引用不同的服务器地址，这时用全局两baseURL不太合适
//创建实例后，每个实例有自己的baseURL，互不干扰
export function request(config) {
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',
    //baseURL: 'http://adi-v3.dev',
		timeout: 5000,
	})

	axios.interceptors.request.use(config => {
		console.log(config)
		//一定要加return，不然相当于拦截了但是没有返回，会报错
		return config
	}, err => {
		console.log(err)
	})
	//第二种，响应拦截
	axios.interceptors.request.use(res => {
		console.log(res)
		//一般返回的都是res的data
		return res.data
	}, err => {
		console.log(err)
	})

	//instance实际上就是promise对象，因此可以这样写
	return instance(config)
}
