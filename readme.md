Steps to reproduce the bug:

* Download all the files
* run npm i
* make the src/assets/images/readOnlyImage.jpg file read-only
* run npm run start
* cancel 
* run npm run start again

Now you see the build error:

Build Error
EPERM: operation not permitted, copyfile 'C:\st-1-17-2-copyBug\src\assets\images\readOnlyImage.jpg' -> 'C:\st-1-17-2-copyBug\www\assets\images\readOnlyImage.jpg'
