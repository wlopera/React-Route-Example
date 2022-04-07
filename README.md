# React-Route-Example
Ejercicio de Rote con React. Curso Maximiliam.

## Código
![Captura1](https://user-images.githubusercontent.com/7141537/161640913-8f910ab5-0112-428d-a8aa-cc25d907b3fc.PNG)

## Salida - Citas
![Captura1](https://user-images.githubusercontent.com/7141537/161827872-97e390d2-d134-4690-bd7d-7b230409df41.PNG)

## Salida - Detalle de una cita
![Captura2](https://user-images.githubusercontent.com/7141537/161827879-ecab7c4c-2b81-414d-b747-623526106271.PNG)

## Salida - Cita no existe
![Captura3](https://user-images.githubusercontent.com/7141537/161827863-d439db1a-bf9a-4f76-9ee3-fa65b6e13882.PNG)

## Salida - Página no existe
![Captura4](https://user-images.githubusercontent.com/7141537/161827868-8510ba9a-8d4e-4f64-8520-cc915680c46a.PNG)

## Salida - Agregar nueva cita
![Captura5](https://user-images.githubusercontent.com/7141537/161827870-77e55534-a9ca-46c1-a8c0-2d6917bfb573.PNG)

## Uso de Navegación programaticamente  
![Captura3](https://user-images.githubusercontent.com/7141537/161858952-b4f6913b-e97d-4281-812a-1007dfe90d8d.PNG)
![Captura2](https://user-images.githubusercontent.com/7141537/161858645-70fb2592-f1b4-4d75-ac9c-42bc19b276f9.PNG)

## Salida Navegación programaticamente  - Prompt (react-route-dom) de control de salida de vistas
![Captura1](https://user-images.githubusercontent.com/7141537/161858339-b882372f-b804-480d-8967-e4031da6197e.PNG)

## Codigo de useHistory , useLocation y route anidados
![Captura1](https://user-images.githubusercontent.com/7141537/162022700-b75780bc-c3af-4ce7-ab92-cea187745135.PNG)
![Captura2](https://user-images.githubusercontent.com/7141537/162022705-e8308bdc-d6a4-4028-bc12-ecd1a9d70e20.PNG)

## Salida de useHistory , useLocation y route anidados
![Captura3](https://user-images.githubusercontent.com/7141537/162022707-ac7d027c-95a0-4055-9cef-547533d930d5.PNG)
![Captura4](https://user-images.githubusercontent.com/7141537/162022686-333b8754-7624-4f74-99b4-3f40c949a961.PNG)
![Captura5](https://user-images.githubusercontent.com/7141537/162022697-458d734d-c954-415e-99d6-3bea192e3fc2.PNG)

## Salida Proceso completo
![Captura1](https://user-images.githubusercontent.com/7141537/162053548-92737d99-0598-4e45-bc75-7a588d3c44eb.PNG)
![Captura2](https://user-images.githubusercontent.com/7141537/162053549-da8193f0-4111-4439-9a10-d6e88b6b785c.PNG)
![Captura3](https://user-images.githubusercontent.com/7141537/162053551-a7ace23b-d192-4947-bd14-67568d3a4d26.PNG)
![Captura4](https://user-images.githubusercontent.com/7141537/162053539-dd74cf7d-3b98-4549-8495-8bac77883f73.PNG)
![Captura5](https://user-images.githubusercontent.com/7141537/162053541-ee5776da-235f-4dd1-b2b0-221c4d29b584.PNG)
![Captura6](https://user-images.githubusercontent.com/7141537/162053543-623e9feb-c792-469d-9f6d-60b0d85faaca.PNG)
![Captura7PNG](https://user-images.githubusercontent.com/7141537/162053544-f4168ed6-fc10-40c3-b1fb-d51c7f942d58.PNG)

# Deploy a Producción - Firebase(Hosting)

-------------------------------------------------------------------------------------------------------------------
												Configurar Firebase Hosting:
-------------------------------------------------------------------------------------------------------------------
Referencia: https://github.com/academind/react-complete-guide-code/tree/21-deploying-react-apps
-------------------------------------------------------------------------------------------------------------------
	Instala Firebase CLI
	Necesitas Firebase CLI (una herramienta de línea de comandos) para alojar tu sitio con Firebase Hosting.
	Ejecuta el siguiente comando de npm para instalar la CLI o actualizar a su versión más reciente.
	
	> npm install -g firebase-tools

  ---------------------------------------------------------------------------------------------------------------
	Inicializa el proyecto
	Abre una ventana de la terminal y navega a un directorio raíz para tu app web (si no tienes uno, deberás crearlo).

	Acceder a Google
	> firebase login
	
	
	Inicia el proyecto
	Ejecuta el siguiente comando en el directorio raíz de tu app:
	> firebase init

  ---------------------------------------------------------------------------------------------------------------
  Secuencia de pasos y respuestas:
		  
		  ? Are you ready to proceed? Yes
		? Which Firebase features do you want to set up for this directory? 
		Press Space to select features, then Enter to confirm your choices. 
			Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

		=== Project Setup

		First, let's associate this project directory with a Firebase project.
		You can create multiple project aliases by running firebase use --add,
		but for now we'll just set up a default project.

		? Please select an option: Use an existing project
		? Select a default Firebase project for this directory: react-http-9dad6 (react-http)
			i  Using project react-http-9dad6 (react-http)

		=== Hosting Setup

		Your public directory is the folder (relative to your project directory) that        
		will contain Hosting assets to be uploaded with firebase deploy. If you
		have a build process for your assets, use your build's output directory.

		? What do you want to use as your public directory? build
		? Configure as a single-page app (rewrite all urls to /index.html)? Yes
		? Set up automatic builds and deploys with GitHub? No
		? File build/index.html already exists. Overwrite? No
  ---------------------------------------------------------------------------------------------------------------	
	> firebase deploy  
  ---------------------------------------------------------------------------------------------------------------	
		=== Deploying to 'react-http-9dad6'...

		i  deploying hosting
		i  hosting[react-http-9dad6]: beginning deploy...
		i  hosting[react-http-9dad6]: found 26 files in build
		+  hosting[react-http-9dad6]: file upload complete 
		i  hosting[react-http-9dad6]: finalizing version...
		+  hosting[react-http-9dad6]: version finalized
		i  hosting[react-http-9dad6]: releasing new version...
		+  hosting[react-http-9dad6]: release complete

		+  Deploy complete!

		Project Console: https://console.firebase.google.com/project/react-http-9dad6/overview
		Hosting URL: https://react-http-9dad6.web.app
  ---------------------------------------------------------------------------------------------------------------	  
	Notas:
	 PEMITIR ELIMINAR APLICATIVO DEL HOSTING REMOTE
		> firebase hosting:disable
		
    Desde aplicativo Firebase se puede eliminar 
	   https://console.firebase.google.com/project/react-http-9dad6/hosting/sites?hl=es-419
	   
	  Desde aplicativo Firebase se puede agregar un dominio personalizado
	   https://console.firebase.google.com/project/react-http-9dad6/hosting/sites?hl=es-419
-------------------------------------------------------------------------------------------------------------------


