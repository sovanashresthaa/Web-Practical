from django.shortcuts import render, redirect, get_object_or_404
from .models import Contact
from .forms import ContactForm

# READ
def contact_list(request):
    contacts = Contact.objects.all()
    return render(request, 'contacts/list.html', {'contacts': contacts})

# CREATE
def contact_create(request):
    form = ContactForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('contact_list')
    return render(request, 'contacts/form.html', {'form': form})

# UPDATE
def contact_update(request, id):
    contact = get_object_or_404(Contact, id=id)
    form = ContactForm(request.POST or None, instance=contact)
    if form.is_valid():
        form.save()
        return redirect('contact_list')
    return render(request, 'contacts/form.html', {'form': form})

# DELETE
def contact_delete(request, id):
    contact = get_object_or_404(Contact, id=id)
    contact.delete()
    return redirect('contact_list')

# Create your views here.
