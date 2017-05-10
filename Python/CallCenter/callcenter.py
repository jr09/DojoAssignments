import datetime

global_id = 1

class Call(object):
    def __init__(self, name, number, reason):
        self.name = name
        self.number = number
        self.reason = reason
        self.time = datetime.datetime.now()
        global global_id
        self.caller_id = global_id
        global_id += 1
    def display(self):
        print('\nCaller Name: {}').format(self.name)
        print('Caller Id: {}').format(self.caller_id)
        print('Caller Number: {}').format(self.number)
        print('Caller Time: {}').format(self.time)
        print('Caller Reason: {}').format(self.reason)
        return self

class CallCenter(object):
    def __init__(self):
        self.call_list = []
        self.call_list_time = []
        self.call_list_length = 0

    def addCall(self, args1):
        self.call_list.append(args1)
        self.call_list_length += 1
        return self

    def removeCall(self):
        self.call_list.pop(0)
        self.call_list_length -= 1
        return self

    def infoCall(self):
        print '\nCall Centre Queue length: {}'.format(self.call_list_length)
        for idx in self.call_list:
            print '\nCall Name: {}'.format(idx.name)
            print 'Call Number: {}'.format(idx.number)
        return self

    def removeByNumber(self, call_number):
        for idx in self.call_list:
            if idx.number == call_number:
                self.call_list.remove(idx)
                self.call_list_length -= 1
        return self

    def listByTime(self):
        self.call_list_time = sorted(self.call_list, key=lambda call: call.time)
        for idx in self.call_list_time:
            print '\nCall Name: {}'.format(idx.name)
            print 'Call Number: {}'.format(idx.number)
        return self

center1 = CallCenter()
call1 = Call('jivesh', '3233736999', 'tshirt return')
call2 = Call('mohit', '9833009260', 'chaddi return')
center1.addCall(call1).addCall(call2).infoCall()
print 'Validating sorted list'
center1.listByTime()
# center1.addCall(call1).addCall(call2).infoCall().removeByNumber('9833009260').infoCall()
