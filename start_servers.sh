# start_servers.sh
#!/bin/bash
source env/bin/activate  # Activar entorno virtual
python manage.py makemigrations 
python manage.py migrate 
python manage.py runserver &


npm install
npm run dev &
wait

