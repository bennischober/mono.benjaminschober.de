import os
import gc
import argparse
import shutil


def main():
    '''
    This function handles the command line arguments and calls the appropriate
    functions to generate the code.
    
    This is usually used to create a new project / a new job or education entry.
    '''
    parser = argparse.ArgumentParser()
    parser.add_argument("path", help="Path to generate the file(s)", type=str)
    # add parser argument for names str array
    parser.add_argument(
        "names", help="Names of the files to be generated", type=str, nargs='+')

    args = parser.parse_args()
    generate_files(args)

    print("Successfully generated the files!")


def generate_files(args):
    '''
    This function generates the code for the files.
    '''
    error = None

    for name in args.names:
        try:
            shutil.copyfile("template.json", os.path.join(
                args.path, name + ".json"))
        except Exception as e:
            error = e

    if error:
        raise error

    gc.collect()


if __name__ == "__main__":
    main()
