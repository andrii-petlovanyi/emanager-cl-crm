# emanager-cl-crm


***Hey hey hey!!!***

Let me introduce you to my little pet project written on the MERN stack.

The idea of this project was born at my previous job when the number of newbie sellers was growing rapidly, and it was difficult to quickly train everyone, and most importantly for them, to remember all the useful information themselves, from just one webinar. It was then that the idea arose to create a small Telegram bot assistant, which could quickly and concisely provide all the characteristics according to the desired model. So I developed the first [small Telegram Bot](https://github.com/andrii-petlovanyi/emanager-bot "Repository with EManagerBot").

Once the bot started working with the database, the next task was to develop a platform that would help manage the information the bot outputs, process offers from sellers, and much more.

Therefore, first of all, I developed a small RESTFull API, which is based on **Node.js/Express/Mongoose**. You can read more about the API itself at the [link](https://github.com/andrii-petlovanyi/emanager-server-crm "Repository with EManager RESTFull API").

... and after that, I developed the site for bot management in tandem with the following libraries - ***React.js, ChakraUI, RTK Query, and ReactHookForm***. The functionality of these libraries will be enough for the future expansion of this small CRM.

Now I will tell a little more about the capabilities of the portal:

This is Login Page
![image](https://user-images.githubusercontent.com/33178699/216046733-777e5d23-7756-43ec-b47a-17b89481f72e.png)

The login form uses field validation. If you enter data in the wrong format, you will receive an error:
![image](https://user-images.githubusercontent.com/33178699/216047854-76de5d1e-8cb9-4e62-82db-2497a91949c3.png)

This is the main information panel after successful authorization. It displays the latest offers, posts with information for the Telegram bot about models, sidebar with user information block and navigation block.
![image](https://user-images.githubusercontent.com/33178699/216049031-b86d10c0-a980-4dcf-982d-057bfbb824ef.png)

If new offers have been added while you've been gone, this will also be indicated by the notification icon at the top.
![image](https://user-images.githubusercontent.com/33178699/216049948-38106978-8499-499e-8da6-6e33d0f58929.png)

In the user block, you can see a greeting with your initials, as well as note to remind you of everything you have planned.

![image](https://user-images.githubusercontent.com/33178699/216051771-4cb20ea2-543b-47f0-a7e0-fa36e2661fc2.png)

To change a reminder, just click on the icon, after which the editing form will appear.

![image](https://user-images.githubusercontent.com/33178699/216053616-277434a3-cf88-4504-88df-3f77d4fdbbf1.png)

You can also change your email address and password using the settings icon in the upper right corner.

![image](https://user-images.githubusercontent.com/33178699/216054321-0b990f0b-740c-4db0-87d1-0c20fc29f0c6.png)
![image](https://user-images.githubusercontent.com/33178699/216054491-204ed55d-aa14-4f6a-9408-e547a1785ea3.png)

On the All Posts page, you can view a list of all posts in database.
![image](https://user-images.githubusercontent.com/33178699/216057642-4ec78fae-fb94-42b2-84b0-5219df83fc9f.png)

Pay attention to additional features, namely search by model, the limit number of posts per page, and pagination at the bottom of this page.

![image](https://user-images.githubusercontent.com/33178699/216058084-1513ef72-f205-4015-9e83-fc022a88d37a.png)
![image](https://user-images.githubusercontent.com/33178699/216058150-8e4a9020-f8dc-4c94-bbb6-b43ddbe07112.png)

A similar interface is also available on the Offers and Archive Posts pages. Regarding the Archive Posts page, this allows you to delete certain posts from the bot database, but not from the project database. That way, you can always get them back.


Now let's look at the postcard. In the lower right corner - a photo of the model, which the bot will show to the user with a block of text. In the lower right corner - the date of creation and last modification of the post, in the middle of the card - icons with links to resources and the main block of information, and in the upper right corner - an icon of parameters.

![image](https://user-images.githubusercontent.com/33178699/216061462-fafbbc79-4c8c-4f11-b8f7-acc6c98f2428.png)
![image](https://user-images.githubusercontent.com/33178699/216061583-c053b950-3493-4a89-b55f-8e0fd1bc7cb9.png)
![image](https://user-images.githubusercontent.com/33178699/216063240-d8277aae-d953-4235-ad93-bbd12a255ca8.png)
![image](https://user-images.githubusercontent.com/33178699/216063455-da4fe317-32de-44c0-9353-4bf82a61cd65.png)

The offers cards has a similar structure. Only for them, there are no options for editing and saving to the archive, because after processing the proposal, it must be deleted, since it is no longer needed.

... and this is only a small part of what has already been implemented and will be supplemented in the future.

If you want to test this portal, you can use the following test credentials:

```diff
+ email: p_a_m@i.ua
+ password: 123321
```


Thanks for your interest)




