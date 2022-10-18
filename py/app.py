import re


def maxres(res, id):
    standard = 'sd'
    med = 'mq'
    high = 'hq'
    max = 'maxres'
    match res:
        case 'standard':
            print(f"https://img.youtube.com/vi/{id}/{standard}default.jpg")
        case 'medium':
            print(f"https://img.youtube.com/vi/{id}/{med}default.jpg")
        case 'high':
            print(f"https://img.youtube.com/vi/{id}/{high}default.jpg")
        case 'max':
            print(f"https://img.youtube.com/vi/{id}/{max}default.jpg")


def youtube_thumbnail_url():
    # prompt user for url
    video_url = input('Enter a YouTube video url: ')
    # define regex
    regex = '((?<=.be\/)|(?<=watch\?v=))[0-9A-Za-z-_]*'
    # assign search result to found variable
    try:
        # search url for id
        found = re.search(regex, video_url)
        # assign id to new var
        video_id = found.group(0)
    except:
        print('Invalid URL')
    # prompt for desired resolution
    resolution = input(
        'Which resolution do you want? [standard, medium, high, or max] ')
    # run url generating function
    maxres(resolution, video_id)


youtube_thumbnail_url()
