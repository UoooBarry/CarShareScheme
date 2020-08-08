#!/bin/bash
set +ex

#generate inventory
echo "Generating inventory file"
sh inventory.sh > inventory.yml
cat inventory.yml

ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i inventory.yml -e 'record_host_keys=True' -u ec2-user playbook.yml