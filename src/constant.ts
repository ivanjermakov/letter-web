export const TOKEN_HEADER_NAME: string = 'Auth-Token'

// TODO: move
export const generateHttpOptionsWithTokenHeader: (token: string) => { headers: { [p: string]: string } } = (token: string) => (
	{
		headers: {
			[TOKEN_HEADER_NAME]:
			token
		}
	}
)
