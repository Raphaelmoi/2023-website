<script>
const site = require('/site')

export default {
	methods: {
		// /!\ FONCTIONNEMENT DE LA METHODE :
		// La variable data doit être sous la forme : { description : 'variableDesc', img:"/monimage.jpg", keywords : 'keywords',  title ="titre", path:'url' }
		// /!\ Les variables describeDefault, imgDefault et keywordsDefault sont à changer pour chaque projet. Elles permettent de définir des valeurs par défaut dans le cas où les informations comprises dans l'objet data seraient vides
		// this.setSEO({ description : 'variableDesc', img:"/monimage.jpg", keywords : 'keywords',  title ="titre", path:'url' })
		setSEO(data) {
			const description = data.description || site.description;
			const image = data.img || site.social_img;
			const keywords = data.keywords || site.keywords;
			const title = data.title || site.name;
			const path = data.path || site.url;

			var metaData = { 
				title: title,
					link: [
					{
						hid: "canonical",
						rel: "canonical",
						href: data.path || null,
					},
				],
				meta: [
					{
						hid: "twitter:title",
						name: "twitter:title",
						property: "twitter:title",
						content: title,
					},
					{
						hid: "og:title",
						name: "og:title",
						property: "og:title",
						content: title,
					},
					{
						hid: "keywords",
						name: "keywords",
						name: "keywords",
						content: keywords,
					},
					{
						hid: "description",
						name: "description",
						property: "description",
						content: description,
					},
					{
						hid: "og:description",
						name: "og:description",
						property: "og:description",
						content: description,
					},
					{
						hid: "twitter:description",
						name: "twitter:description",
						property: "twitter:description",
						content: description,
					},

					{
						hid: "og:image",
						name: "og:image",
						property: "og:image",
						content: image,
					},
					{
						hid: "twitter:image",
						name: "twitter:image",
						property: "twitter:image",
						content: image,
					},
					{
						hid: "twitter:image:src",
						name: "twitter:image:src",
						property: "twitter:image:src",
						content: image,
					},
					// LIEN
					{
						hid: "og:url",
						name: "og:url",
						property: "og:url",
						content: path,
					},
					{
						hid: "twitter:url",
						name: "twitter:url",
						property: "twitter:url",
						content: path,
					},
				],
			};
			return metaData;
		},
	},
	// }
};
</script>
