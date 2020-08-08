#!/bin/bash

instance_public_ip=$PROD_EC2
db_endpoint= $PROD_DBHOST
DbUser= $PROD_DBUSER
DbPassword= $PROD_DBPASS


echo 'all:'
echo '  hosts:'
echo "      $instance_public_ip"
echo "  children:"
echo "      webservers:"
echo "          hosts:"
echo "              $instance_public_ip"
echo "      databases:"
echo "          hosts:"
echo "              $db_endpoint"
echo "          vars:"
echo "              login_user: $DbUser"
echo "              login_password: $DbPassword"


